import Nav from 'react-bootstrap/Nav';
import * as React from 'react';
import ProfilePhoto from '../../assets/profile-photo.png';
import ProfileAvatar from './ProfileAvatar';
import ProfileButtons from './ProfileButtons';
import Divider from '@mui/material/Divider';
import OnlineUsers from './OnlineUsers';


function ProfileMenu() {
    return (
    <div className='profile-menu'>
      <div className='container'>

      <ProfileAvatar profileAvatar={ProfilePhoto} />
      </div>
      <div>
        <p className='h5'>First</p><br></br>
        <p className='lead'>@Username</p>
      </div>
      <Divider variant="middle" />
      <div>
        <ProfileButtons />
      </div>
      <Divider variant="middle" />
      <p id='online-users-text'>Online Users — #</p>
      <Divider variant="middle" />

    <OnlineUsers />
    </div>

    );
}

export default ProfileMenu;