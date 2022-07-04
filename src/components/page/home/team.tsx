/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade, Zoom } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Traits = () => {
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
    <>
      <Background
        color="bg-primary
        before:content-[''] before:absolute before:top-0 before:left-0 before:bg-[url('/assets/images/bgs/bg-grunge-purple.png')] before:mix-blend-multiply before:w-full before:h-full before:bg-cover
        after:content-[''] after:absolute after:top-0 after:right-0 after:bg-[url('/assets/images/bgs/bg-coming-soon.png')] after:w-full after:h-full after:bg-contain after:bg-no-repeat 
        "
        className="relative z-[2] pb-48"
      >
        <img
          src="/assets/images/bgs/bg-dots-purple-3.png"
          alt=""
          className="absolute hidden sm:block right-0 top-44 sm:w-1/2 z-[1] opacity-70 mix-blend-multiply"
        />

        <Section yPadding="py-[8%]">
          <div className="relative flex flex-col justify-center z-[1]">
            <div>
              <Fade left duration={750} delay={0} when={state.isReady}>
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-4xl mb-2 lg:mb-3 text-secondary font-headline">
                    COMING TO YOU
                  </h2>
                  <h1 className="text-2xl sm:text-4xl lg:text-8xl mb-2 lg:mb-3 text-secondary font-headline">
                    MID 2022
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </Section>

        <Section
          yPadding="pt-8 sm:pt-16"
          className="
        before:content-[''] before:absolute before:top-0 before:right-0 before:bg-[url('/assets/images/vectors/diagonal-line-yellow.svg')] before:w-1/2 before:h-full before:bg-cover before:bg-no-repeat overflow-hidden
        "
        >
          <div className="relative flex flex-col justify-center z-[1]">
            <div>
              <Fade left duration={750} delay={0} when={state.isReady}>
                <div className="">
                  <h1 className="text-outline text-xl sm:text-3xl lg:text-7xl mb-2 lg:mb-3 text-black font-headline">
                    MEET
                    <br />
                    THE TEAM
                  </h1>
                </div>
              </Fade>
            </div>
          </div>

          <div className="relative flex flex-col justify-center z-[1]">
            <Zoom duration={750} delay={250} when={state.isReady}>
              <div className="mt-10 grid grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item: any) => (
                  <div key={item}>
                    <img
                      src={'/assets/images/illustrations/team-1.png'}
                      alt=""
                      className={`w-full aspect-auto ${
                        item.id === 1 ? '' : 'mr-8'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item: any) => (
                  <div key={item}>
                    <img
                      src={'/assets/images/illustrations/team-1.png'}
                      alt=""
                      className={`w-full aspect-auto ${
                        item.id === 1 ? '' : 'mr-8'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </Zoom>
          </div>
        </Section>
      </Background>

      <style jsx>
        {`
          h1.text-outline {
            -webkit-text-stroke: 2px #ffffff;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </>
  );
};

export default Traits;
