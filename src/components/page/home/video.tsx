import React from 'react';

import { Background } from '@components/background';
import { Modal } from '@components/modal';
import { useActions } from '@overmind/index';

const Spotlight = () => {
  const { showModal } = useActions();

  const videoUrls = ['/assets/videos/big_buck_bunny_720p_1mb.mp4'];

  const [videoUrl, setVideoUrl] = React.useState(videoUrls[0]);

  return (
    <Background
      color="bg-[url('/assets/images/bgs/bg-video-2.png')] bg-cover"
      className="relative"
    >
      <button
        onClick={() => {
          setVideoUrl(videoUrls[0]);
          showModal('video-player');
        }}
        className="relative cursor-pointer w-screen aspect-video outline-none"
      ></button>

      <img
        src="/assets/images/vectors/vertical-line-w.svg"
        alt=""
        className="absolute hidden sm:block left-10 bottom-0 sm:w-5 z-[2]"
      />

      <Modal name="video-player" closeButton={{ color: 'black' }}>
        <div className="text-left bg-white shadow-xl ">
          <>
            <div
              className="flex justify-center"
              dangerouslySetInnerHTML={{
                __html: `
                  <video
                    loop
                    controls
                    autoplay
                    playsinline
                    preload="metadata"
                    class="max-h-[720px]"
                  >
                    <source src="${videoUrl}" type="video/mp4" />
                  </video>`,
              }}
            />
          </>
        </div>
      </Modal>
    </Background>
  );
};

export default Spotlight;
