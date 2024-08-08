import React from "react";
import profile from "./images/swati.png"
import cloud from "./images/musiccloud.png"
import mountain from "./images/singinglady.png"
import chilli from "./images/chillies.png"
import music from "./images/music.png"
import audio from "./images/music.mp3"

import { NavLink } from "react-router-dom";


import "./About.css"

export const About = () => {

  const start = () => {
    new Audio(audio).play();
  }
  return (
    <div className="about">
      <div className="top-container" onClick={start}>
        <img className="top-cloud1" src={cloud} alt="cloud-image"/>
        <img className="top-cloud2" src={cloud} alt="cloud-image" />
        <div className="text">
          <h1 className="head">I'm Swati</h1>
          <h2>
            a <span className="pro">Singer</span> & Musician.
          </h2>
        </div>

        <img className="bottom-cloud1" src={cloud} alt="cloud-image" />
        <img className="bottom-cloud2" src={cloud} alt="cloud-image" />
        <img className="mountain" src={mountain} alt="cloud-image" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <img src={profile} alt="swati" />
          <h2>Hello.</h2>
          <p className="intro">I am a Musician. And I ❤ Singing and traveling.</p>
        </div>


        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <img className="computer" src={music} alt="" />

            <h3>Singer (Music and Singing)</h3>
            <p>I started learning music since my childhood. I want to create my own album and really keen to share my knowledge with the upcoming generations. Currently i am pursuing Masters in Music Vocal from Central University of Punjab.</p>

          </div>
          <div className="skill-row">
            <img className="chillies" src={chilli} alt="" />

            <h3>Love for Foods</h3>
            <p>But i am really good at eating and exploring differnt kind of foods, travelling a lot of places and I never get bored of them.</p>

          </div>
        </div>

        <div className="contact-me">
          <h2>Get In Touch</h2>
          <h3>If You really looking for an awsome singer or any colllab.</h3>
          <p className="contact-message">Let's talk about how awsome this is. We can share our ideas on this.</p>
          <NavLink to="/contact" classNameName="contact">CONTACT ME</NavLink>
        </div>
      </div>
    </div>
  );
};
