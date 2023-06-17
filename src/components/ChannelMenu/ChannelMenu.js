import ChannelNav from './ChannelNav';
import * as React from 'react';
import CommunityArt from './CommunityArt';


function ChannelMenu() {
    return (
    <div className='channel-menu'>
        <CommunityArt communityImage={'./pride_celebration.jpg'} />
        <ChannelNav />
    </div>

    );
}

export default ChannelMenu;