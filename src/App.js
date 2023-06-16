import React, { useEffect, useState } from 'react';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import padSequences from './helper/paddedSeq';
import Emoji from 'a11y-react-emoji';
import {
  TextField,
  Grid,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const url = {
    model: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json',
    metadata: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json',
  };

  const OOV_INDEX = 2;

  const [metadata, setMetadata] = useState(null);
  const [model, setModel] = useState(null);
  const [testText, setTestText] = useState("");
  const [testScore, setTestScore] = useState("");

  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadMetadata(url) {
    try {
      const metadataJson = await fetch(url.metadata);
      const metadata = await metadataJson.json();
      setMetadata(metadata);
    } catch (err) {
      console.log(err);
    }
  }

  const getSentimentScore = (text) => {
    const inputText = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    const sequence = inputText.map((word) => {
      let wordIndex = metadata.word_index[word] + metadata.index_from;
      if (wordIndex > metadata.vocabulary_size) {
        wordIndex = OOV_INDEX;
      }

      return wordIndex;

    });

    const paddedSequence = padSequences([sequence], metadata.max_len);
    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();
    return score;
  }
    

  useEffect(() => {
    tf.ready().then(() => {
      loadModel(url);
      loadMetadata(url);
    });
  }, []);

  const whenTyping = (e) => {
    const text = e.target.value;
    setTestText(text);
    const score = getSentimentScore(text);
    setTestScore(score);
  }

  let emojiSymbol = "😐"; // Default emoji: Neutral
  if (testScore > 0.6) {
    emojiSymbol = "😀"; // Happy emoji
  } else if (testScore < 0.4 && testScore !== "") {
    emojiSymbol = "😠"; // Angry emoji
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Live Sentiment Analyzer
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{ height: "90vh", padding: 250 }}>
        <Grid item lg={6} xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <TextField
            id="standard-read-only-input"
            label="Type a sentence here"
            onChange={whenTyping}
            defaultValue=""
            fullWidth
            value={testText}
            variant="outlined"
          />
          <br />
          <br />
        </Grid>
        <Grid item lg={6} xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <br />
          <Typography style={{ fontSize: '45px' }}>
            <Emoji symbol={emojiSymbol} label="Emoji" />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
