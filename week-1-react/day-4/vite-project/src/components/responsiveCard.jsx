import React from "react";
import styles from "./responsiveCard.module.css"

export default function ResponsiveCard() {
  return (
    <div className={styles.box}>
      <img
        src="https://preview.redd.it/who-wins-this-death-battle-kevin-or-sa-v0-f16ll5sidxvc1.jpg?width=1080&crop=smart&auto=webp&s=135fe2aa6f4ba68981d71d36be79e36bbb9ecf63"
        alt="contoh"
        className={styles.image}
      />
      <p className={styles.text}> pejuang legendaris dari Era Peradaban Sebelumnya (Previous Era) yang menjadi simbol perjuangan paling getir dan tanpa kompromi melawan Honkai.

Perjuangannya adalah sebuah tragedi yang dipenuhi pengorbanan tanpa akhir. Dia menyaksikan kehancuran dunia lamanya, kematian orang yang dicintainya, dan kegagalan hampir seluruh rencana untuk menyelamatkan umat manusia

,Dia bukanlah penjahat dalam hati, melainkan seorang pahlawan yang telah kehilangan semua jalan lain dan memilih jalan paling gelap demi sebuah masa depan, betapapun pahitnya itu. Perjuangannya melawan Honkai adalah perang total tanpa ruang untuk belas kasihan, baik terhadap musuh maupun terhadap dirinya dan umat manusia sendiri.

</p>
    </div>
  );
}
