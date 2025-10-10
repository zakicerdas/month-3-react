import { useState, useEffect } from "react";

function sizeDetection(){
    const [width,setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

useEffect(() =>  {
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    console.log('event resize telah ditambahkan');

    return () =>{
        window.removeEventListener('resize', handleResize);
        console.log('event esize telah dihapus.');  
    };

}, [])  

 return (
    <div>
      <h2>ukuran browser</h2>
      <p>Lebar: {width}px</p>
      <p>Tinggi: {height}px</p>
    </div>
  );
}

export default sizeDetection;