import ChannelMenu from '../ChannelMenu/ChannelMenu';
import ChannelChat from '../ChannelChat/ChannelChat';

function Channel() {
    return (
      <>
      <ChannelMenu />
      <div className='container-fluid' id='channel-container'>
        <div className='row'>
          <div className='col-2'>
          
          </div>
          <div className='col-8'>
            <div className='container'>
            <ChannelChat />

            </div>
          

          </div>
          <div className='col-2'>

          </div>
        </div>
      </div>
      
      
      </>
    );
  }
  
  export default Channel;