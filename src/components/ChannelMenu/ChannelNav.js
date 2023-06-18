import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ChannelNav() {
  return (
    <div>
      <Accordion id="channel-nav">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='nav-lists' id='accordion-text'>
        <li><p>#Channel-one</p></li>
        <li><p>#Channel-two</p></li>
        <li><p>#Channel-three</p></li>
         </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion id="channel-nav">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className=' nav-lists' id='accordion-text'>
        <li><p>#Channel-one</p></li>
        <li><p>#Channel-two</p></li>
        <li><p>#Channel-three</p></li>
         </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion id="channel-nav">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='nav-lists' id='accordion-text'>
        <li><p>#Channel-one</p></li>
        <li><p>#Channel-two</p></li>
        <li><p>#Channel-three</p></li>
         </ul>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
