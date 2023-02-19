import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import JoinUs from "@/components/JoinUs";
import Head from "next/head";
import Image from "next/image";
import Map from '../assets/Map.png'
import React from "react";


export default function Home() {
  return (
    <div style={{ backgroundImage: 'linear-gradient(180deg, #DDDCDB, #FFDD9C 50%)' }}>
      <Head>
        <title>Coding Moon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <div style={{ width: '100%', margin: 0, padding: 0 }}>
        <div style={{ height: '100vh', width: '100wh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={Map} height={500} style={{ borderRadius: '25px' }} />
        </div>
      </div>
      <JoinUs />

    </div>
  )
}
