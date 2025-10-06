import React, { useState } from 'react';


function Countier(){
    const [count, setCount] = useState(0);

return(
    <div>
         <p>{count}</p>
      <button className='bg-blue-600 hover:bg-blue-500 text-black p-4 rounded-lg shadow' onClick={() => setCount(count + 1)}>tambah</button>
      <button className='bg-red-600 hover:bg-red-500 text-black p-4 rounded-lg shadow' onClick={() => setCount(count - 1)}>kurang</button>
    </div>
)

}

export default Countier;