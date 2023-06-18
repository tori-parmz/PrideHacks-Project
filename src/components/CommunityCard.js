import Figure from "react-bootstrap/Figure";
import { Col } from "react-bootstrap";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CommunityCard(props) {
  let { community } = props;
  const { name, image, totalMembers, description } = community;
  return (
    <Col>
      <Figure style={{ textAlign: "center" }}>
        <Figure.Image
          height={"200px"}
          width={"200px"}
          src={image}
          style={{ borderRadius: "5px" }}
        />
        <Figure.Caption style={{ fontSize: "1 rem" }}>
          {name}
          <br />
          Members: {totalMembers}
          <Accordion sx={{width:'20rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Figure.Caption>
      </Figure>
    </Col>
  );
}
