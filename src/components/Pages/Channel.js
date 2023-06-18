import ChannelMenu from '../ChannelMenu/ChannelMenu';
import ChannelChat from '../ChannelChat/ChannelChat';

function Channel(props) {
  const { name, onlineMembers, image } = props;
    return (
      <>
      <ChannelMenu />
      
            <div className='chat-space'>
            <ChannelChat name={name} image={image} onlineMembers={onlineMembers} />
            </div>
      
      
      </>
    );
  }
  
  export default Channel;