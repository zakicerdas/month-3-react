import React, { useState, useEffect } from 'react';

function timerCount(){
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log("prittt!");
        const intervalID = setInterval(() =>{
        setCount(prevCount => prevCount + 1);
        },1000);

    return () => {
        clearInterval(intervalID);
        console.log("stopppp!")
    };
    }, []);

return (
    <div>
      <h2>{count} detik</h2>
    </div>
);
}

export default timerCount;