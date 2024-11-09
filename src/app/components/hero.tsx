"use client";

import React from 'react';
import Image from 'next/image'
import Asserts from '@/app/asserts/hero.jpg'
import Typewriter from 'typewriter-effect'
import './Hero.css';

const Hero = () => {
  return (
    <div id="Hero">
        <section>
          <div className="hero-container">
            <Image
              className="hero-image"
              alt="hero"
              src={Asserts}
            />
            <div className="hero-text">
              <h1 className="hero-title">
                <div>
                  <div>Hello, <br /> I am</div>
                  <Typewriter
                    options={{
                      strings: ['Maryam Shakeel', 'Web Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </h1>
              <div className="button-container">
                <a href="https://github.com/maryamshakeel22" className="button">GITHUB</a>
                <a href="https://www.linkedin.com/in/maryam-shakeel-5720a12b5/" className="button">LINKEDIN</a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Hero;
