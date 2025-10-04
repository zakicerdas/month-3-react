
import './components/App.css'
import Button from './components/button';
import DynamicCard from "./components/dynamic";
import ResponsiveCard from './components/responsiveCard';

function App() {
 const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "10px",
    gap: "20px" 
  };
  const imgStyle ={
    width: "120px",
    height: "auto"
  }

  return (
  <div>
    {/* ini contoh inline css */}
    <div style={containerStyle}>
      <img src="https://i.redd.it/57qd65ozy7gf1.gif" alt="kiri" style={imgStyle}/>
      <h1 style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>ini inline css</h1>
      <img src="https://i.redd.it/57qd65ozy7gf1.gif" alt="kanan" style={imgStyle}/>
    </div>
    {/* ini contoh css className */}
    <div className='container'>
      <img src="https://media.tenor.com/11epJYaPDq4AAAAj/gold-ship-uma-musume.gif" alt="golshi kiri" className='image'/>
      <h1 className='title'>Gold ship</h1>
      <img src="https://media.tenor.com/11epJYaPDq4AAAAj/gold-ship-uma-musume.gif" alt="golshi" className='image'/>
    </div>
    <div style={containerStyle}>
        <Button label="Primary" type="primary" />
          <Button label="default" type="" />
    </div>

<div>
     <DynamicCard status="success"/>
      <DynamicCard status="warning"/>
      <DynamicCard status="error"/>
</div>
<ResponsiveCard/>
  </div>
  )
};

export default App
