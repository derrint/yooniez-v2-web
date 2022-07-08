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

  const items = [
    {
      id: 1,
      title: 'MAZE',
      description:
        'Yooniez first entrance into the metaverse through WorldWide Webb in form of Hot Maze! You can get a Whitelist spot fairly through the Maze!',
      href: '/services/playables',
      asset: '/assets/images/illustrations/roadmap-1.png',
      count: 100,
    },
    {
      id: 2,
      title: 'YOONITZ',
      description:
        'Yoonitz is the soft currency that players obtain only by playing and interacting with the activities in the Yooniverse and our social channels.',
      href: '/services/app-video-ads',
      asset: '/assets/images/illustrations/roadmap-2.png',
      count: 80,
    },
    {
      id: 3,
      title: 'RELEASE OF ROADMAP 2.0',
      description: 'More, more, more to come!',
      href: '/services/lyric-video',
      asset: '/assets/images/illustrations/roadmap-2.png',
      count: 100,
    },
  ];

  return (
    <>
      <Background
        color="bg-[url('/assets/images/bgs/bg-grunge-white.png')] bg-cover bg-blend-overlay"
        className="relative z-[2]"
      >
        <img
          src="/assets/images/vectors/diagonal-line-purple.svg"
          alt=""
          className="absolute hidden sm:block left-[35px] lg:left-[59px] top-0 sm:w-72 z-[1]"
        />
        <Section yPadding="pt-8 sm:pt-16">
          <div className="relative flex flex-col justify-center z-[1]">
            <div>
              <Fade left duration={750} delay={0} when={state.isReady}>
                <div className="text-center">
                  <h1 className="text-2xl sm:text-4xl lg:text-6xl mb-2 lg:mb-3 text-black font-headline">
                    WHAT WE PLAN AHEAD
                  </h1>
                </div>
              </Fade>
            </div>
          </div>

          <div className="relative flex flex-col justify-center z-[1]">
            <Zoom duration={750} delay={250} when={state.isReady}>
              <div className="mt-10 mx-10">
                {items.map((item: any) => (
                  <div
                    key={item.id}
                    className={`items-center gap-2 relative flex lg:w-[80%] mb-10 ${
                      item.id === 2
                        ? 'lg:ml-32'
                        : item.id === 3
                        ? 'lg:ml-64'
                        : ''
                    }`}
                  >
                    <img
                      src={item.asset}
                      alt=""
                      className={`h-40 lg:h-52 aspect-auto ${
                        item.id === 1 ? '' : 'mr-4 lg:mr-8'
                      }`}
                    />
                    <div>
                      <h2 className="text-primary font-headline text-xl sm:text-2xl lg:text-4xl">
                        {item.title}
                      </h2>
                      <h3 className="text-black text-sm sm:text-base">
                        {item.description}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </Zoom>
          </div>
        </Section>
      </Background>

      <style jsx>
        {`
          h1 {
            -webkit-text-stroke: 2px #9100f4;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </>
  );
};

export default Traits;
