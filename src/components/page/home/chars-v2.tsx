/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade, Zoom } from 'react-reveal';

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
        h-[650px]
      "
    >
      <div
        className={`z-[3] top-5 w-full h-[650px] flex items-center justify-center transition-all duration-300 ${
          yScrollPosition <= 650 ? 'fixed' : 'absolute'
        }`}
      >
        <Banner3d />
      </div>

      <Section yPadding="py-8 sm:py-16 lg:pb-32" id="about">
        <div className="relative flex flex-col justify-center z-[1]">
          <div>
            <Fade left duration={750} delay={0} when={state.isReady}>
              <div className="text-center pb-96">
                <h1 className="text-xl sm:text-3xl lg:text-9xl lg:leading-[100px] mb-3 lg:mb-5 text-primary font-headline">
                  7,777
                </h1>
                <h3 className="text-md sm:text-lg lg:text-xl mb-3 lg:mb-5 text-black font-headline">
                  UNIQUE CHARACTERS LIVING IN YOONIVERSE
                </h3>
              </div>
            </Fade>
          </div>

          <Zoom duration={750} delay={250} when={state.isReady}>
            <img
              src="/assets/images/vectors/arrow-swirly.svg"
              alt=""
              className="absolute hidden sm:block right-0 lg:right-40 -bottom-20 w-[40px] sm:w-[80px] -z-[1]"
            />
          </Zoom>
        </div>
      </Section>
    </Background>
  );
};

export default About;
