import "./skills.css";
import Skills_Container_1 from './Skills_Container_1';
import Skills_Container_2 from './Skills_Container_2';
import Scroll from "./Scroll";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Skills = () => {

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
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Lvl</span>
      <div className="skills__container container grid">
        <Skills_Container_1 />
        <Skills_Container_2 />
        <Scroll />
      </div>

    </section>
  );
}

export default Skills;