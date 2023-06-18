import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LoginCard() {
  const navigation = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigation('/home');
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "30%",
        marginTop: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "25px",
      }}
    >
      <Card style={{ padding: "90px" }} className="landing-page-cards">
        <Button variant="primary" size="lg" block onClick={navigateToHome}>
          Log in with Google
        </Button>
        <br />
        <Button variant="primary" size="lg" block onClick={navigateToHome}>
          Log in with Discord
        </Button>
      </Card>
    </div>
  );
}

export default LoginCard;
