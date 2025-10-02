import React from "react";
import ProfileCard from "./components/profileCard";

// Komponen Diskon (MathDiscount) — tetap di luar App
function MathDiscount() {
  const nama = "Zaki";
  const price = 250000;
  const discount = 0.5; // 50%
  const finalPrice = price - price * discount;

  const cardStyle = {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    maxWidth: "300px",
    margin: "20px auto",
    background: "#f9fafb",
    color: "black"
  };

  return (
    <div style={cardStyle}>
      <h3>Contoh Ekspresi JSX</h3>
      <p>Halo, {nama} 👋</p>
      <p>Harga asli: Rp.{price.toLocaleString("id-ID")}</p>
      <p>Diskon: {discount * 100}%</p>
      <p>
        <strong>Harga setelah diskon: Rp.{finalPrice.toLocaleString("id-ID")}</strong>
      </p>
    </div>
  );
}


function MessageCondition({ sudahLogin, pesanBelumTerbaca }) {
  const boxStyle = {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    maxWidth: "300px",
    margin: "20px auto",
    background: "#fff",
    color: "black"
  };

  return (
    <div style={boxStyle}>
      <h3>Conditional Rendering</h3>

     
      <p>{sudahLogin ? "Selamat datang kembali" : "Silakan login terlebih dahulu 🔑"}</p>

   
      {sudahLogin && pesanBelumTerbaca > 0 && (
        <p>Ada {pesanBelumTerbaca} pesan yang belum dibaca woi</p>
      )}

      {sudahLogin && pesanBelumTerbaca === 0 && <p>kosong melompong</p>}
    </div>
  );
}

function ListRenderer({ items }) {
  const boxStyle = {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    maxWidth: "300px",
    margin: "20px auto",
    background: "#fefce8",
    color: "black"
  };

  return (
    <div style={boxStyle}>
      <h3>Daftar Buah</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const buah= ["apel", "mangga", "ikan", "jeruk", "lmao"]
  return (
  
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>Daftar Hunter</h1>
      <section style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
        <ProfileCard
          name="Sung Jin Woo"
          photo="https://preview.redd.it/sigma-monarch-v0-76lt41jttxie1.jpeg?width=1080&crop=smart&auto=webp&s=864af5f4f923da5d061b74ea86f35ea5a4979486"
          bio="Sigma monarch."
          skills={["arise", "aura farming"]}
        />

        <ProfileCard
          name="Ryuji Goto"
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgALrq31eMAxe4jw3oeeBuJrW6KziNPWc3Ww&s"
          bio="king👑👑"
          skills={["aku rajanya(ceunah)", "pride brutal"]}
        />

        <ProfileCard
          name="Thomas Andre"
          photo="https://static.beebom.com/wp-content/uploads/2024/03/thomas-andre-solo-leveling.jpg?w=1024"
          bio="gayanya sok keras giliran di gas sesak napas beliau ini"
          skills={["antek anteknya architect", "samsak"]}
        />

        <ProfileCard
          name="Cha Hae-In"
          photo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4lz-B6ca7zGOBpmaNEYRxnZ_H_1lAZoFI0eQQh7ARDUDe-I3_Lb7uXeKAcNKVz56OhZ6LNtXP1aE71pw755atLM8euqytfjPO3rs2DSTWA0GUqkgfGQSsrFhzw98zIbI3Y6chehZyEs3G/s1600-rw/1635497641407734-0.png"
          bio="bukankah ini my..."
          skills={["my istri", "my bini"]}
        />

        <ProfileCard
          name="Liu zhigang"
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6KxUa4HVTyGqTmKNdlRcaf_n0_IAVaf0hw&s"
          bio="sekuat apa beliau satu ini"
          skills={["??", "??"]}
        />
      </section>

      <MathDiscount />
      <MessageCondition sudahLogin={false} pesanBelumTerbaca={0} />
      <ListRenderer items={buah} />
    </div>
  );
}
