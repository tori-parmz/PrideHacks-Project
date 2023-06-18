import ChannelMenu from '../ChannelMenu/ChannelMenu';
import ChannelChat from '../ChannelChat/ChannelChat';

function Channel() {
    return (
      <>
      <ChannelMenu />
      
            <div className='chat-space'>
            <ChannelChat />
            </div>
      
      
      </>
    );
  }
  
  export default Channel;