/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// import Tippy from '@tippyjs/react';
// import Image from 'next/image';
import 'tippy.js/animations/scale.css';
import { Fade } from 'react-reveal';
// import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Banner = () => {
  const texts = [
    {
      first: 'LIVE EVENT',
      second: 'MAZE',
      third:
        '100 first ones who escape the maze will get a <b>Whitelist</b> spot!',
    },
  ] as any;

  const [text, setText] = React.useState(texts[0]);

  // #endregion

  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });
    setText(texts[0]);

    return () => {};
  }, []);

  return (
    <Background
      color="bg-gradient-radial from-primary to-primary-dark
      before:content-[''] before:absolute before:top-0 before:left-0 before:bg-[url('/assets/images/bgs/bg-grunge-purple.png')] before:mix-blend-multiply before:w-full before:h-full before:bg-cover
      after:content-[''] after:absolute after:top-20 after:right-0 after:bg-[url('/assets/images/vectors/arrows-right.svg')] after:w-[65%] after:h-full after:bg-contain after:bg-no-repeat
      "
      className="relative pt-32 pb-16 h-screen"
    >
      <Section className="relative flex items-center lg:!px-4 ">
        <div className="absolute top-0 flex flex-col justify-center z-[3] bg-secondary border-x border-y border-secondary rounded-xl overflow-hidden">
          <Fade top duration={750} delay={250} when={state.isReady}>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-headline bg-primary text-secondary pl-3 pr-6 py-2 rounded-br-full">
                {text?.first}
              </h3>
            </div>
          </Fade>
          <div className="p-4">
            <Fade top duration={750} delay={500} when={state.isReady}>
              <h1 className="text-5xl font-headline text-primary">
                {text?.second}
              </h1>
            </Fade>

            <Fade top duration={750} delay={750} when={state.isReady}>
              <p
                className="text-sm mt-2 mb-4 text-black max-w-[250px] relative"
                dangerouslySetInnerHTML={{ __html: text?.third }}
              >
                {}
              </p>
            </Fade>
            <Fade top duration={750} delay={1000} when={state.isReady}>
              <button
                className="
                    px-12 py-3
                    bg-primary
                    text-3xl font-headline text-white
                    rounded-md
                  "
                onClick={() => {}}
              >
                ENTER
                <div className="font-sans text-sm font-normal text-secondary">
                  Ends in 10:23:45
                </div>
              </button>
            </Fade>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default Banner;
