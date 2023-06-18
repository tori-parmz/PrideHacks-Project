import { Card } from "react-bootstrap"

function ChannelInfoCard(props) {
    const { name, onlineMembers } = props;
    return (
        <Card style={{ width: '15rem' }} id="channel-info-card">
      <Card.Body>
        <Card.Text>
         {name}<br></br>
         {onlineMembers} members online

        </Card.Text>
      </Card.Body>
    </Card>

    );
}

export default ChannelInfoCard;