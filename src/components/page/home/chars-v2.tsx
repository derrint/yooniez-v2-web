/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';
import { useState } from '@overmind/index';

import Banner3d from './banner-3d';

const About = () => {
  const { yScrollPosition } = useState();

  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  return (
    <Background
      color="bg-secondary"
      className="
        relative z-[2]
        h-screen
        before:bg-[url('/assets/images/bgs/bg-yellow.svg')] before:bg-cover before:absolute before:-top-[7%] sm:before:-top-[15%] md:before:-top-[38%] before:left-0 before:w-full before:h-full 
        after:content-[''] after:absolute after:top-20 after:right-0 after:bg-[url('/assets/images/bgs/bg-dots-yellow.png')] after:w-1/2 after:h-full after:bg-contain after:bg-no-repeat after:mix-blend-multiply 
      "
    >
      <div
        className={`z-[3] top-5 w-full h-[650px] flex items-center justify-center transition-all duration-300 ${
          yScrollPosition <= 650 ? 'fixed' : 'absolute'
        }`}
      >
        <Banner3d />
      </div>

      <img
        src="/assets/images/bgs/bg-dots-purple-1.png"
        alt=""
        className="absolute hidden sm:block left-0 bottom-0 sm:w-full z-[1]"
      />

      <img
        src="/assets/images/vectors/diagonal-lines.svg"
        alt=""
        className="absolute hidden sm:block left-0 -top-1/2 sm:w-1/2 z-[1]"
      />

      <Section yPadding="py-8 sm:py-16 lg:pb-32" id="about">
        <div className="relative flex flex-col justify-center z-[1]">
          <div>
            <Fade left duration={750} delay={0} when={state.isReady}>
              <div className="text-center">
                <h1 className="text-xl sm:text-3xl lg:text-8xl lg:leading-[90px] mb-3 lg:mb-5 text-primary font-headline">
                  7,777
                </h1>
                <h3 className="text-md sm:text-lg lg:text-xl mb-3 lg:mb-5 text-black font-headline">
                  UNIQUE CHARACTERS LIVING IN YOONIVERSE
                </h3>
              </div>
            </Fade>
          </div>

          <div className="pt-5">
            <div className="flex justify-center">
              <Fade
                right
                duration={500}
                delay={250}
                when={state.isReady && yScrollPosition > 650}
              >
                <img
                  src="/assets/images/chars/char-owl.png"
                  alt=""
                  className="absolute mt-4 mr-[340px] h-[200px] -z-[2]"
                />
              </Fade>
              <Fade
                right
                duration={500}
                delay={0}
                when={state.isReady && yScrollPosition > 650}
              >
                <img
                  src="/assets/images/chars/char-frog.png"
                  alt=""
                  className="absolute -mt-5 mr-48 h-[240px] -z-[1]"
                />
              </Fade>

              <Fade
                left
                duration={500}
                delay={0}
                when={state.isReady && yScrollPosition > 650}
              >
                <img
                  src="/assets/images/chars/char-fish.png"
                  alt=""
                  className="absolute -mt-5 ml-48 h-[240px] -z-[1]"
                />
              </Fade>
              <Fade
                left
                duration={500}
                delay={250}
                when={state.isReady && yScrollPosition > 650}
              >
                <img
                  src="/assets/images/chars/char-bear.png"
                  alt=""
                  className="absolute mt-4 ml-80 h-[200px] -z-[2]"
                />
              </Fade>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default About;
