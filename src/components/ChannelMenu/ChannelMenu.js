import ChannelNav from './ChannelNav';
import * as React from 'react';
import CommunityArt from './CommunityArt';
import { Button } from 'react-bootstrap';
import ChannelInfoCard from './ChannelInfoCard';
import PridePhoto from '../../assets/pride_celebration.jpg';


function ChannelMenu() {
    return (
    <div className='channel-menu'>
        <div className='container'>
        <CommunityArt communityImage={PridePhoto} />
        <ChannelInfoCard />
        </div>
        <ChannelNav />
        <Button id='channel-nav-buttons'>Newsfeed</Button>
        <Button id='channel-nav-buttons'>Resources</Button>
        <Button id='channel-nav-buttons'>Blog</Button>
    </div>

    );
}

export default ChannelMenu;