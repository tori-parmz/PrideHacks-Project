import LoginCard from '../LoginCard';
import { useState } from 'react';

function Login() {

    const [newHowdy, setNewHowdy] = useState("Howdy!")

    return (
      <LoginCard howdy={newHowdy} setNewHowdy={setNewHowdy} />
    );
  }
  
  export default Login;