import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Welcome to my corner of the web! I'm a 26-year-old full-stack
              developer based in the beautiful city of Vienna. With a passion
              for technology and a knack for problem-solving, I've dedicated my
              career to crafting innovative web solutions that not only meet but
              exceed expectations.
            </p>
          </div>
          <img src="/IMG_6854.jpeg" alt="Thats me"></img>
        </div>
      </section>
    </>
  );
}

export default About;
