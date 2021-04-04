import React from "react";
import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";
import { login } from '../utils/authenticationService';


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login= () => {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
// find user in db that matches email from google auth. if match, update user table with res.accessToken.

    refreshTokenSetup(res);   
    login(res.accessToken);
    window.location.href = "/main";
  }; 
  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
