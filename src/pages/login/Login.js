import React, { useState } from "react";
import login1 from '../../img/login1.png';
import login2 from '../../img/login2.png';
import login3 from '../../img/login3.png';
import { Button } from "antd";
import './Login.scss';
import { Link, useHistory } from "react-router-dom";
import { Carousel } from "antd";

function Login() {
  let history = useHistory();

  function handleGetStarted() {
    history.push("/get-started");
  }

  function handleSignIn() {
    history.push("/sign-in");
  }

  const contentStyle = {
    height: '300px',
    color: '#ff6067',
    lineHeight: '300px',
    textAlign: 'center',
    background: 'transparent',
  };

  return (
    <div className="small-container">
      <Link to="/" className="login-logo">ooblee</Link>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img src={login1} alt="login1" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={login2} alt="login2" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={login3} alt="login3" /></h3>
        </div>
      </Carousel>
      <br></br><br></br>
      <p>Country: <b className="primary-color">Montenegro</b></p>
      <Button type="primary" onClick={handleGetStarted}>Get Started</Button>
      <p>Already using ooblee?</p>
      <Button type="default" onClick={handleSignIn}>Sign In</Button>
      <div className="pp-terms flex-center">
        <Link to="#" className="underline">Privacy Policy</Link>
        <Link to="#" className="underline">Terms and Conditions</Link>
      </div>
    </div>
  );
}

export default Login;