import "./about.css";
import Info from "./Info";
import Scroll from "./Scroll";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">A short introduction</span>
        <div className="about__container container grid">
            <div className="about__data">
                <Info />
                <p className="about__description">
                    I&apos;m Montaser Mballo, a digital marketer with a strong foundation in SEO, content creation, and email marketing. My journey began as a small business owner, where I developed hands-on marketing skills, and now, as a full fledged digital marketer, I continue to expand my expertise. My passion for digital marketing stems from a astrong understanding of data-driven strategies, as well as the ability to craft engaging campaigns across diverse platforms. I stay on top of industry trends and continue to refine my skills. Let&apos;s connect and explore how my expertise can help your business grow!
                </p>
                <Scroll />
            </div>
            
            
        </div>
        
    </section>
  );
}

export default About;