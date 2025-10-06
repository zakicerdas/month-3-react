import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const tambah = () => {setCount(firstNum => firstNum + 1);};
    const kurang = () => {setCount(firstNum => firstNum - 1);};

return(
    <div className='flex gap-4'> 
        <p>count:{count}</p>
        <button className='bg-red-600 hover:bg-red-500 text-black p-4 rounded-lg shadow' onClick={tambah}>+</button>
        <button className='bg-blue-600 hover:bg-blue-500 text-black p-4 rounded-lg shadow">'onClick={kurang}>-</button>
    </div>
)
}
export default Counter;