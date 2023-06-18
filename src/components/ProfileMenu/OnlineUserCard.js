import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProfilePhoto from '../../assets/profile-photo.png';

export default function OnlineUserCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }} id="online-user-card">
        <img
        src={ProfilePhoto}
        id='online-user-avatar'
      />
      {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant="subtitle1" color="text.secondary" component="div">
            First
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            @Username
          </Typography>
        </CardContent>
      {/* </Box> */}
    </Card>
  );
}