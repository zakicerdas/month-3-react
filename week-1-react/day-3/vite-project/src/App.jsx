import React from 'react';
import Greeting from './components/greeting';
import ProductCard from './components/productCard';
import Card from './components/card';
import Comment from './components/comment';



function App() {
  return(
    <div>
      <h1>tugas day 3 nihh</h1>

      {/*<greeting/> akan merender apa ysng telah ditulis di functionnya */}
      <Greeting name={"rehan"}/>

      {/*<productCard/> akan menampilkan props */}
      <ProductCard productName="nendoroid hatsune miku" price={7500000} stock={5} isAvailable={true} />
      <ProductCard productName="Headphone Asus x miku" price={250000} />
      <ProductCard productName="Keyboard" price={500000} stock={0} isAvailable={false} />

      {/*<card> <card/> bisa diisi apa saja*/}
      <Card>
        <h3>isi apa aja terserah wok</h3>
      </Card>
      <Card>
        <img src="https://magicplanetanime.design.blog/wp-content/uploads/2025/06/xghdwgo.jpeg?w=984" alt="" />
        <h3>yoo kaibutsu</h3>
      </Card>

  {/*<comment/> menampilakan komentar dan avatar */}
  <Comment
        nama="rehan"
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9cMOqTaj6EZvNi5FnSjQ-w_uxDUaoV58QA&s"
        text="wah react seru banget!"
      />

    <Comment
        nama="jidan"
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMD-8kYmSeqlgZyY1LVgI5kigZ2eKIxiPo7Q&s"
        text="yang bilang react susah berarti cupu"

    />


    </div>
    
  )
}

export default App
