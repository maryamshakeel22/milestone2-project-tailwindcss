'use client';

import React from 'react';
import Image from 'next/image';
import Asserts from '@/app/asserts/about.jpeg';
import Typewriter from 'typewriter-effect';
import './about.css';

const AboutMe = () => {
  return (
    <div className="about-section" id="About">
      <div className="about-container">
        <div className="section-title">
          <h1>About Me</h1>
        </div>
        <div className="about-content">
          {/* Personal Information Section */}
          <div>
            <h1 className="subtitle">
              <Typewriter
                options={{
                  strings: ['Personal Information'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="about-text">
              I`&apos;`m a passionate web developer with experience in building dynamic and responsive websites using HTML, CSS, TypeScript, and Next.js. I enjoy crafting clean, user-friendly interfaces and bringing ideas to life through code. With a strong focus on modern web technologies, I strive to create seamless and efficient digital experiences. Whether it`&apos;`s developing reusable components or optimizing performance, I am always eager to tackle new challenges and learn along the way.
            </p>
          </div>
          {/* Image Section */}
          <Image
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            src={Asserts}
            alt="About img"
            width={400}
            height={300}
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
