import React from 'react';

function Card(props) {
  return (
    <div style={{ 
        border: '1px solid black', 
        padding: '20px', 
        margin: '10px', 
        borderRadius: '8px',
        background: 'white',
        color: 'black'
         }}>
      {props.children}
    </div>
  );
}

export default Card;