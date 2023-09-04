import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Ready to turn your digital dreams into reality? Drop me a line,
              and let's embark on this coding adventure together!"
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: markopavleka@gmx.at</li>
              <li className="contact-item">Phone: +43 6606519117</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
