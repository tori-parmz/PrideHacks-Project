import * as React from 'react';
import MessagesIcon from './MessagesIcon';
import EventsIcon from './EventsIcon';
import CommunityIcon from './CommunityIcon';
import Box from '@mui/material/Box';
import AddCommunityButton from './AddCommunityButton';


function LeftHandNav() {
    return (
        <Box
        className='left-hand-nav'
        >
    <ul className='left-nav-list'>
        <li><MessagesIcon /></li>
        <li><EventsIcon /></li>
        <li><CommunityIcon communityImage={'./pride_celebration.jpg'} /></li>
        <li><AddCommunityButton /></li>
    </ul>
    </Box>

    );
}

export default LeftHandNav;