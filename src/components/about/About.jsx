import "./about.css";
import Info from "./Info";
// import Scroll from "./Scroll";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to the section when the component mounts or when the hash changes
    if (hash) {
      const section = document.getElementById(hash.substring(1)); // Remove the '#' character
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <section className="about section" id="about">
      <span className="section__title"><h3>About Me</h3></span>
      <span className="section__subtitle">A short introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <Info />
          <p className="about__description">

            I&apos;m Montaser Mballo, a digital marketer with a strong foundation in SEO, content creation, and email marketing. My journey began as a small business owner, where I developed hands-on marketing skills, and now, as a full fledged digital marketer and a freelancer, I deliver data-driven, engaging campaigns across diverse platforms. Let&apos;s connect and explore how my expertise can help your business grow!

          </p>
          {/* <Scroll /> */}
        </div>


      </div>

    </section>
  );
}

export default About;