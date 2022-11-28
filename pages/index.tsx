import Head from "next/head";
import React from "react";
import AboutSection from "./about-section";
import Contact from "./contact-section";
import HowItWork from "./how-section";
import MainSection from "./main-section";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainSection/>
        <AboutSection/>
        <HowItWork/>
        <Contact/>
      </main>
    </div>
  );
}
