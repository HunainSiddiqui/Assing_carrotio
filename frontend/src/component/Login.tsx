// components/LoginButton.js
"use client"
const LoginButton = () => {
    const handleLogin = () => {
      window.location.href = "https://assing-carrotio.onrender.com/auth/google";
    };
  
    return <button onClick={handleLogin}>Login with Google</button>;
  };
  
  export default LoginButton;
  