import Link from 'next/link';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import { Background } from '@components/background/Background';
import { Section } from '@components/layout/Section';

const Footer = () => {
  const menus = [
    {
      id: 1,
      label: 'Drop Details and Tips',
      href: '/',
    },
    {
      id: 2,
      label: 'Traits & Rarities',
      href: '/',
    },
    {
      id: 3,
      label: 'Terms of Service',
      href: '/',
    },
    {
      id: 4,
      label: 'White Paper',
      href: '/',
    },
    {
      id: 5,
      label: 'Complete Lore',
      href: '/',
    },
  ];

  return (
    <Background
      color="bg-secondary"
      className="relative before:content-[''] before:absolute before:-top-20 before:left-0 before:bg-[url('/assets/images/bgs/bg-footer.png')] before:w-full before:h-full before:bg-cover z-[2]"
    >
      {/* <img
        src="/assets/images/bgs/bg-footer.png"
        alt=""
        className="absolute hidden sm:block right-0 -top-20 sm:w-full z-[2]"
      /> */}
      <Section
        className="lg:!px-8 grid grid-cols-2 sm:grid-cols-3 justify-between"
        isFooter
      >
        <div className="hidden sm:block" />
        <div className="z-[4] sm:text-center flex flex-col gap-3 sm:gap-10">
          <div>
            <img
              src="/assets/images/logos/logo-yooniez-purple.svg"
              alt=""
              className="inline h-4 sm:h-6 md:h-8 lg:h-12 mx-0 sm:mx-2 sm:mb-1"
            />
          </div>

          <div className="flex items-center sm:justify-center gap-2">
            <div className="rounded-md rounded-br-xl p-1 bg-primary text-white">
              <FaTwitter size={16} />
            </div>
            <div className="rounded-md rounded-br-xl p-1 bg-primary text-white">
              <FaDiscord size={16} />
            </div>
          </div>

          <span className="text-sm text-black">&copy; 2022 Yooniez</span>
        </div>
        <div className="z-[4] text-right">
          <h2 className="font-headline text-primary text-base sm:text-lg mb-2">
            PUBLIC DOC
          </h2>
          <ul className=" flex flex-col gap-2 justify-start lg:justify-end items-end">
            {menus.map((item: any) => {
              return (
                <li
                  key={item.id}
                  className="flex justify-center items-center gap-3 whitespace-nowrap"
                >
                  <Link href="/">
                    <a className="text-xs sm:text-sm text-black">
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </Background>
  );
};

export { Footer };
