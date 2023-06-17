import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LoginCard() {
  const handleGoogleLogin = () => {
    // Perform Google authentication logic
    // Replace the placeholders with your actual Google OAuth ID and authentication logic
    const googleOAuthId = "YOUR_GOOGLE_OAUTH_ID";
    authenticateWithGoogle(googleOAuthId);
  };

  const handleDiscordLogin = () => {
    // Perform Discord authentication logic
    // Replace the placeholders with your actual Discord OAuth ID and authentication logic
    const discordOAuthId = "YOUR_DISCORD_OAUTH_ID";
    authenticateWithDiscord(discordOAuthId);
  };

  const authenticateWithGoogle = (googleOAuthId) => {
    // Perform Google authentication logic here
    // Retrieve the user's ID from the local system
    const userId = getLocalUserId();

    // Redirect the user to the Google login page with the appropriate parameters
    // Replace the placeholders with the actual Google authentication URL and parameters
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleOAuthId}&redirect_uri=${window.location.origin}/google-callback&scope=email&state=${userId}&response_type=code`;
    window.location.href = googleAuthUrl;
  };

  const authenticateWithDiscord = (discordOAuthId) => {
    // Perform Discord authentication logic here
    // Retrieve the user's ID from the local system
    const userId = getLocalUserId();

    // Redirect the user to the Discord login page with the appropriate parameters
    // Replace the placeholders with the actual Discord authentication URL and parameters
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${discordOAuthId}&redirect_uri=${window.location.origin}/discord-callback&scope=email&state=${userId}&response_type=code`;
    window.location.href = discordAuthUrl;
  };

  const getLocalUserId = () => {
    // Implement logic to retrieve the user's ID from the local system
    // This could involve using local storage, cookies, or any other method you prefer
    // Replace the placeholder implementation with your actual logic
    const userId = "123456";
    return userId;
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
        <Button variant="primary" size="lg" block onClick={handleGoogleLogin}>
          Log in with Google
        </Button>
        <br />
        <Button variant="primary" size="lg" block onClick={handleDiscordLogin}>
          Log in with Discord
        </Button>
      </Card>
    </div>
  );
}

export default LoginCard;
