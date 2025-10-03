import React from 'react';

function Greeting({name}) {
    const fontStyle = {
        color: "white",
        fontSize: "20px"
    }
  return (
  <h1 style={fontStyle}>selamat malam {name}, anda diminta menghadap presiden sekarang👮🏻👮🏻</h1>
);
  
}

export default Greeting;