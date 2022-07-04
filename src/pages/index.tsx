import {
  Banner,
  About,
  Chars,
  Roadmap,
  Team,
  Video,
} from '@components/page/home';

const Home = () => {
  return (
    <>
      <Banner />
      <Chars />
      <About />
      <Video />
      <Roadmap />
      <Team />
    </>
  );
};

export default Home;
