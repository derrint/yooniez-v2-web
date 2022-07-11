/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const About = () => {
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
      color="bg-tertiary"
      className="
        relative z-[2]
        after:bg-[url('/assets/images/bgs/bg-grunge-red.png')] after:bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-full 
        before:bg-[url('/assets/images/bgs/bg-red-spike.svg')] before:bg-contain before:absolute before:-top-[4%] sm:before:-top-[10%] md:before:-top-[12%]  before:left-0 before:w-full before:h-full 
      "
    >
      <Section
        yPadding="py-24 sm:py-16 lg:py-32"
        id="about"
        className="px-12 sm:px-16 lg:px-24 "
      >
        <div className="relative flex flex-col justify-center z-[1] bg-[url('/assets/images/bgs/bg-grunge-red-2.png')]">
          <div className="mx-auto">
            <Fade left duration={750} delay={0} when={state.isReady}>
              <div className="text-center">
                <p className="lg:text-xl font-light text-white max-w-md">
                  <img
                    src="/assets/images/logos/logo-yooniez-w.svg"
                    alt=""
                    className="inline h-3 lg:h-5 mr-2 mb-1"
                  />
                  are the enlightened, a society who seeks freedom of senses and
                  intellect.
                  <br />
                  We pursue an authentic experience, and eventually a bliss to
                  create, shape, and live a worthy future.
                </p>
              </div>
            </Fade>
          </div>

          <div className="mt-24 lg:mt-56 mb-12 lg:mb-32">
            <Fade left duration={750} delay={0} when={state.isReady}>
              <div className="text-left">
                <p className="sm:text-xl lg:text-3xl font-light text-white max-w-xl ">
                  Change will not come if we wait for some other person or some
                  other time.
                  <br />
                  We are the ones we’ve been waiting for.
                  <br />
                  We are the change that we seek.
                  <br />
                  We are
                  <img
                    src="/assets/images/logos/logo-yooniez-w.svg"
                    alt=""
                    className="inline h-3 sm:h-4 lg:h-6 ml-2 mb-1"
                  />
                  , a legion of misfits.
                </p>

                <div className="mt-10">
                  <a
                    href="#"
                    className="text-secondary underline underline-offset-8"
                  >
                    Read complete Lore here
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default About;
