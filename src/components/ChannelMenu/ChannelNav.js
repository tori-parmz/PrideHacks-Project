import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ChannelNav(props) {
    const { community } = props;
    const { topics } = community;
  return (
    <div>
        {topics.map((topic, index) => {
          return (
            <Accordion key={index} id="channel-nav"
            topic={topic}
                {...topic}
            >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              
            >
              <Typography>{topic.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ul className='nav-lists' id='accordion-text'>
            {topic.channels.map((channel, index) => {
                return (
                    <li key={index}><p>{channel}</p></li>
                )
            })}
             </ul>
            </AccordionDetails>
          </Accordion>
          );
        })}
      
    </div>
  );
}
