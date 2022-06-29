/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useEthers } from '@usedapp/core';
// import Link from 'next/link';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
// import { DropdownMenu } from '@components/dropdown';
import { Section } from '@components/layout';
import { Modal } from '@components/modal';
import { NavbarThreeColumns } from '@components/navigation/index';
// import { menus } from '@data/index';
import { useActions, useState } from '@overmind/index';

const Header = () => {
  const { modal } = useState();
  const { showModal, hideModal } = useActions();

  const [state, setState] = React.useState({
    isReady: false,
    isAnimationDone: false,
  });

  React.useEffect(() => {
    if (state.isReady) {
      setTimeout(() => {
        setState({ ...state, isAnimationDone: true });
      }, 750);
    }

    return () => {};
  }, [state.isReady]);

  // ----- Metamask related -----
  const { activateBrowserWallet, account } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  React.useEffect(() => {
    if (modal.name === 'connect-wallet' && modal.isVisible) {
      hideModal();
    }

    return () => {};
  }, [account]);

  const [isScrolled, setIsScrolled] = React.useState(false);
  const onScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    // onScroll();
    window.addEventListener('scroll', onScroll);

    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  return (
    <Background
      color="bg-transparent"
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        state.isAnimationDone ? '' : ''
      }`}
    >
      <Fade top duration={750} delay={0} when={state.isReady}>
        <Section
          yPadding="py-5 pb-6"
          className={`relative mt-8 lg:!px-8 rounded-full transition-colors duration-500 ${
            isScrolled ? 'bg-white shadow-xl' : ''
          }`}
          isHeader
        >
          <NavbarThreeColumns
            logo={
              <img
                src="/assets/images/logos/logo-yooniez.svg"
                alt=""
                className={`h-8 aspect-auto transition-opacity duration-300 ${
                  isScrolled ? '' : 'hidden'
                }`}
              />
            }
            leftComponent={
              <div className="pt-1 flex items-center gap-5">
                <div className={isScrolled ? 'text-primary' : 'text-white'}>
                  <FaDiscord size={18} />
                </div>
                <div className={isScrolled ? 'text-primary' : 'text-white'}>
                  <FaInstagram size={18} />
                </div>
                <div className={isScrolled ? 'text-primary' : 'text-white'}>
                  <FaTwitter size={18} />
                </div>
              </div>
            }
          >
            {/* {menus.map(
              ({
                id,
                label,
                href,
                submenus,
                isButton,
                isDesktop,
                isMobile,
              }: any) => (
                <li
                  key={id}
                  className={`${
                    isDesktop && !isMobile ? 'hidden md:block' : ''
                  } ${!isDesktop && isMobile ? 'md:hidden' : ''}`}
                >
                  <div className="text-right">
                    {submenus ? (
                      <DropdownMenu
                        title={label}
                        items={submenus}
                        onChange={(v: any) => console.log(v)}
                        showPreview
                        classNames={{ itemsWrapper: '!mt-4 !rounded-xl' }}
                      />
                    ) : (
                      <Link href={href} passHref>
                        <a
                          className={`text-base lg:text-lg font-bold ${
                            isButton
                              ? 'bg-tertiary text-black px-4 lg:px-6 py-2 lg:py-4'
                              : 'text-white'
                          }`}
                        >
                          {label}
                        </a>
                      </Link>
                    )}
                  </div>
                </li>
              )
            )} */}
            <li>
              <button
                className="
                  flex gap-2
                  px-5 py-3
                  rounded-full shadow-lg bg-white
                  border-x border-y border-black
                  text-base font-bold text-black
                "
                onClick={() => {
                  if (!account) {
                    showModal('connect-wallet');
                  }
                }}
              >
                <img
                  src="/assets/images/logos/logo-metamask.svg"
                  alt=""
                  className="h-[22px] aspect-auto"
                />
                {account ? (
                  <>
                    {account &&
                      `${account.slice(0, 6)}...${account.slice(
                        account.length - 1,
                        account.length
                      )}`}
                    ETH
                  </>
                ) : (
                  'Connect Wallet'
                )}
              </button>
            </li>
            <li
              className={`transition-opacity duration-500 ${
                isScrolled ? '' : 'hidden'
              }`}
            >
              <button
                className="
                  flex gap-2 items-center
                  px-5 py-3
                  rounded-full shadow-lg bg-tertiary
                  border-x border-y border-tertiary-dark
                  text-base font-bold text-tertiary-dark
                "
                onClick={() => {
                  if (!account) {
                    showModal('connect-wallet');
                  } else {
                    showModal('tweet');
                  }
                }}
              >
                Enter Labyrinth
                <FiArrowRight size={18} />
              </button>
            </li>
          </NavbarThreeColumns>
        </Section>
      </Fade>

      <Modal name="connect-wallet">
        <div className="text-left bg-primary-dark text-white shadow-xl p-14 rounded-2xl">
          <img
            src="/assets/images/logos/logo-metamask.svg"
            alt=""
            className="h-[48px] aspect-auto mb-5"
          />
          <h1 className="text-2xl font-semibold mb-2">Connect Wallet</h1>
          <p className="font-light mb-5">
            Connect your wallet to be able to join
            <br /> the Labyrinth
          </p>
          <button
            className="
              px-5 py-3
              rounded-full shadow-lg bg-tertiary
              border-x border-y border-tertiary-dark
              text-base font-bold text-tertiary-dark
            "
            onClick={handleConnectWallet}
          >
            Connect with Metamask
          </button>
        </div>
      </Modal>

      <Modal name="tweet">
        <div className="text-left bg-primary-dark text-white shadow-xl p-14 rounded-2xl">
          <img
            src="/assets/images/logos/logo-twitter.svg"
            alt=""
            className="h-[48px] aspect-auto mb-5"
          />
          <h1 className="text-2xl font-semibold mb-2">
            Step 1 - Tweet to enter Labyrinth
          </h1>
          <p className="font-light mb-5">
            “Game on! Joining @YoonizNFT #InToTheYouniverse. I bet you should
            too. <br />
            https://uniques-links. here #NFT #WAGMI“
          </p>
          <a
            className="
              inline-block
              px-5 py-3
              rounded-full shadow-lg bg-tertiary
              border-x border-y border-tertiary-dark
              text-base font-bold text-tertiary-dark
            "
            target={'_blank'}
            href={
              'https://twitter.com/intent/tweet?hashtags=NFT%20%23WAGMI&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Game%20on!%20Joining%20%40YoonizNFT%20%23InToTheYouniverse.%20I%20bet%20you%20should%20too.&url=https%3A%2F%2Fplay.yooniez.com'
            }
            rel="noreferrer"
          >
            Tweet
          </a>
        </div>
      </Modal>
    </Background>
  );
};

export { Header };
