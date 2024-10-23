import "../project_page.css";
import { useEffect } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Navbar_V2 from "../../components/navbarV2/Navbar_V2";
import Footer from "../../components/footer/Footer";
import ProjectImg2 from "../../assets/fresho-supermarket-logo.png";
import Canva from "../../assets/canva icon.png";
import Hootsuite from "../../assets/hootsuite icon.png";
import Slack from "../../assets/slack-icon.png";
import GoogleAnalytics from "../../assets/google analytics logo.png";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
import MediaIcon from "../../assets/media-icon.png";

const Project_Page_4 = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="project__page">
      <Navbar_V2 />

      <div className="project-header">
        <h1>Social Media</h1>
        <p className="project-subtitle">Social media strategy</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <div>
            <img
              className="img2"
              src={ProjectImg2}
              alt="fresho-supermarket-logo"
            />
          </div>
        </div>

        <div className="project_overview">
          <h2>Description</h2>

          <p>
            Developed and executed comprehensive social media content strategies
            focusing on engaging visuals and videos to enhance brand visibility
            and audience engagement on platforms like Instagram and YouTube.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            Content creation, graphic design, video editing, social media
            strategy, project management.
          </p>

          <h2>Technologies Used</h2>

          <div className="tools_icons">
            <div className="icon_item">
              <img src={Canva} alt="Canva Icon" />
              <p>Canva</p>
            </div>

            <div className="icon_item">
              <img src={Hootsuite} alt="Hootsuite Icon" />
              <p>Hootsuite</p>
            </div>

            <div className="icon_item">
              <img src={Slack} alt="Slack Icon" />
              <p>Slack</p>
            </div>

            <div className="icon_item">
              <img src={GoogleAnalytics} alt="Google Analytics Icon" />
              <p>Google Analytics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="project_body">
        <div className="project_card">
          <img src={PersonIcon} alt="Person Icon" />

          <h2>Role</h2>

          <p>
            <strong>In my role, I was responsible for:</strong>
          </p>

          <article>
            <ul>
              <li>
                Creating a content calendar to plan and organize posts,
                designing eye-catching posters, and producing short videos
                tailored for Instagram Reels and YouTube. This involved
                brainstorming creative concepts, collaborating with the clients
                to align with their brand identity, and ensuring timely delivery
                of all content.
              </li>
            </ul>
          </article>
        </div>

        <div className="project_card">
          <img src={AnalyticsIcon} alt="Analytics Icon" />

          <h2>Outcome</h2>

          <p>
            <strong>The project resulted in:</strong>
          </p>

          <article>
            <ul>
              <li>
                Successfully increased audience engagement across all platforms,
                with measurable improvements such as increased likes, shares,
                and comments. The content resonated well with target
                demographics, leading to an uptick in follower growth for the
                company.
              </li>
            </ul>
          </article>
        </div>

        <div className="project_card">
          <img src={MediaIcon} alt="Media Icon" />

          <h2>Media</h2>

          {/* <p>
            <strong>Some Posters I Made on Instagram:</strong>
          </p>

          <article>
            <div>
              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Post 1{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Post 2{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Post 3{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>
            </div>
          </article>

          <p>
            <strong>Some Videos I Made on Instagram:</strong>
          </p>

          <article>
            <div>
              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Video 1{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Video 2{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Video 3{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>
            </div>
          </article>

          <p>
            <strong>Some Videos I Made on YouTube:</strong>
          </p>

          <article>
            <div>
              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Video 1{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Video 2{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button">
                Video 3{" "}
                <HiOutlineArrowSmRight className="project__button-icon" />
              </a>
            </div>
          </article> */}

          <p>
            <strong>Project Files:</strong>
          </p>

          <article>
            <ul>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1hguI_FdW4P20xOQZYCOrDdRLE7Ec7sHS?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button">
                  Fresho Supermarket{" "}
                  <HiOutlineArrowSmRight className="project__button-icon" />
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div className="btn_container">
        <div>
          <a
            href="//freshosupermarket.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--flex">
            Visit Company Page
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project_Page_4;
