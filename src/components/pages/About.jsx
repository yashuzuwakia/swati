import React from "react";
import image from "./images/yash.png"

import "./About.css"

export const About = () => {
  return (
    <div class="about">
      <div class="top-container">
        <img class="top-cloud" src="" alt="cloud-image" />
        <div class="text">
          <h1 class="head">I'm Swati</h1>
          <h2>
            a <span class="pro">pro</span>grammer.
          </h2>
        </div>

        <img class="bottom-cloud" src="images/cloud.png" alt="cloud-image" />
        <img class="mountain" src="images/mountain.png" alt="cloud-image" />
      </div>
      <div class="middle-container">
        <div class="profile">
          <img src="images/yash.png" alt="swati" />
          <h2>Hello.</h2>
          <p class="intro">I am a Programmer Analyst at Cognizant. And I ❤ coding and traveling.</p>
        </div>


        <div class="skills">
          <h2>My Skills.</h2>
          <div class="skill-row">
            <img class="computer" src="images/computer-modified.png" alt="" />

            <h3>Full Stack Developer (Design & Development)</h3>
            <p>I started learning code when i was in my 3rd year of my college I wanted to make my own applicion and websites. Over time i am learning skills and technologies.</p>

          </div>
          <div class="skill-row">
            <img class="chillies" src="images/chillies.png" alt="" />

            <h3>Love for Foods</h3>
            <p>But i am really good at eating and exploring differnt kind of foods, travelling a lot of places and I never get bored of them.</p>

          </div>
        </div>

        <div class="contact-me">
          <h2>Get In Touch</h2>
          <h3>If You love coding as i do.</h3>
          <p class="contact-message">Let's talk about how awsome this is. We can share our ideas on this.</p>
          <a class="btn" href="bittukr.0000@gmail.com">CONTACT ME</a>
        </div>
      </div>
    </div>
  );
};
