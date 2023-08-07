'use client'

import Image from 'next/image'
import './page.css'
import { useEffect, useState } from 'react'

const Home = () => {
  return (
    <div className="background">
      <div className="header">
        <img style={{
          height: 70
        }} src="https://cdn.discordapp.com/attachments/1136234211750195231/1137915130223542372/logo.png" />

        <div style={{
          display: "flex",
        }}>
            <p style={{marginRight: 25}}>Tarifs</p>
            <p style={{marginRight: 25}}>Devis</p>
            <p>Contact</p>
        </div>
      </div>

      <video className="video" src="https://cdn.discordapp.com/attachments/1136234211750195231/1137893102980452452/homepage-brand-4d23f3ddd411640f28a8914415b3ba85.mp4" autoPlay muted loop playsInline />
    
      <div className="content">
        <div>
          <p id="animation-one" style={{fontSize: "1vw", marginBottom: 20}}> </p>
          <p id="animation-two" style={{fontSize: "2vw", marginBottom: 20, lineHeight: 1.2, width: '45%'}}> </p>
          <p id="animation-three" style={{fontSize: "1vw", lineHeight: 1.3, width: '35%'}}> </p>
        </div>
      </div>
    </div>
  )
}

export default Home;