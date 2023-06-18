import { Card } from "react-bootstrap"

function ChannelInfoCard() {
    return (
        <Card style={{ width: '15rem' }} id="channel-info-card">
      <Card.Body>
        <Card.Text>
         Community Name<br></br>
         X members online

        </Card.Text>
      </Card.Body>
    </Card>

    );
}

export default ChannelInfoCard;