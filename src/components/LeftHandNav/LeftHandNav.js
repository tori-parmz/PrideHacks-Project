import * as React from 'react';
import MessagesIcon from './MessagesIcon';
import EventsIcon from './EventsIcon';
import CommunityIcon from './CommunityIcon';


function LeftHandNav() {
    return (
    <div className='left-hand-nav'>
    <ul className='left-nav-list'>
        <li><MessagesIcon /></li>
        <li><EventsIcon /></li>
        <li><CommunityIcon communityImage={'./pride_celebration.jpg'} /></li>
    </ul>
    
    </div>

    );
}

export default LeftHandNav;