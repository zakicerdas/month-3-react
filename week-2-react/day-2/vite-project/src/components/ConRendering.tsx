import React from 'react';

function UserGreeting() {
  return <h1>okaeri master!</h1>;
}

function GuestGreeting() {
  return <h1>yokouso atarashi no master.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;