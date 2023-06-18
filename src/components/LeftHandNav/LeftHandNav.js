import * as React from 'react';
import MessagesIcon from './MessagesIcon';
import EventsIcon from './EventsIcon';
import CommunityIcon from './CommunityIcon';
import Box from '@mui/material/Box';
import AddCommunityButton from './AddCommunityButton';
import PridePhoto from '../../assets/pride_celebration.jpg'


function LeftHandNav() {
    return (
        <Box
        className='left-hand-nav'
        >
    <ul className='nav-lists'>
        <li><MessagesIcon /></li>
        <br></br>
        <li><EventsIcon /></li>
        <br></br>
        <li><CommunityIcon communityImage={PridePhoto} /></li>
        <br></br>
        <li><AddCommunityButton /></li>
    </ul>
    </Box>

    );
}

export default LeftHandNav;