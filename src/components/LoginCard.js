// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// // Firebase configuration
// const firebaseConfig = {};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// function LoginCard() {
//   const handleGoogleLogin = () => {
//     const provider = new GoogleAuthProvider();

//     signInWithRedirect(auth, provider)
//       .then(() => {})
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleDiscordLogin = () => {
//     const discordOAuthId = "YOUR_DISCORD_OAUTH_ID";
//     authenticateWithDiscord(discordOAuthId);
//   };

//   const authenticateWithDiscord = (discordOAuthId) => {
//     const userId = getLocalUserId();

//     const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${discordOAuthId}&redirect_uri=${window.location.origin}/discord-callback&scope=email&state=${userId}&response_type=code`;
//     window.location.href = discordAuthUrl;
//   };

//   const getLocalUserId = () => {
//     const userId = "123456";
//     return userId;
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         height: "100%",
//         width: "30%",
//         marginTop: "150px",
//         marginLeft: "auto",
//         marginRight: "auto",
//         fontSize: "25px",
//       }}
//     >
//       <Card style={{ padding: "90px" }} className="landing-page-cards">
//         <Button variant="primary" size="lg" block onClick={handleGoogleLogin}>
//           Log in with Google
//         </Button>
//         <br />
//         <Button variant="primary" size="lg" block onClick={handleDiscordLogin}>
//           Log in with Discord
//         </Button>
//       </Card>
//     </div>
//   );
// }

// export default LoginCard;
