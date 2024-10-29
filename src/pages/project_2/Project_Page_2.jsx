import "../project_page.css";
import { useEffect } from "react";
import Navbar_V2 from "../../components/navbarV2/Navbar_V2";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/Habeebi Academy logo.jpg";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
import SEMrush from "../../assets/semrush-Icon.png";
import GoogleSheets from "../../assets/google-sheets-logo.png";
import Statista from "../../assets/statista-icon.jpg";
import GoogleAnalytics from "../../assets/google analytics logo.png";
import Ahrefs from "../../assets/ahrefs-icon.jpg";
import Project_Screenshots from './Project_Screenshots_2';







const Project_Page_2 = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="project__page">
      <Navbar_V2 />

      <div className="project-header">
        <h1>Market Research</h1>
        <p className="project-subtitle">Competitor Analysis & Research</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <img src={ProjectImg} alt="Course Curation Project" />
        </div>

        <div className="project_overview">

          <h2>Client Description</h2>

          <p>
            Habeebi Academy is an online education platform.
          </p>

          <h2>Project Description</h2>

          <p>
            Conducted a comprehensive competitor analysis and course research to gain insights into industry trends and
            identify opportunities for growth. The goal was to enhance the
            course offerings on the platform and strategically position the
            website in the competitive online education market.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            Market research, data analysis, competitor analysis
          </p>

          <h2>Tools Used</h2>

          <p>

            <div className="tools_icons">

              <div className="icon_item">
                <img src={GoogleSheets} alt="Google Sheets Icon" />
                <p>Google Sheets</p>
              </div>

              <div className="icon_item">
                <img src={SEMrush} alt="SEMrush Icon" />
                <p>SEMrush</p>
              </div>

              <div className="icon_item">
                <img src={Statista} alt="Statista Icon" />
                <p>Statista</p>
              </div>

              <div className="icon_item">
                <img src={GoogleAnalytics} alt="Google Analytics Icon" />
                <p>Google Analytics</p>
              </div>

              <div className="icon_item">
                <img src={Ahrefs} alt="Ahrefs Icon" />
                <p>Ahrefs</p>
              </div>
            </div>
          </p>
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
                Performing in-depth research on competitors in the online
                education space, analyzing their course offerings, pricing
                structures, marketing strategies, and audience engagement
                tactics. Additionally, I researched trending courses by
                examining industry reports and
                popular search queries to identify high-demand topics that could
                attract more students.
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
                The project provided valuable insights that informed the
                decision to introduce several new courses, including data
                science and digital marketing, which are currently trending. The
                analysis also highlighted gaps in competitor&apos;s offerings
                that we could exploit to attract a larger audience.
              </li>

              <li>
                Significant improvements in keyword rankings, with several
                course-related keywords moving from the second page to the first
                page of search results.
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div className="project_body">

        <Project_Screenshots />

      </div>

      <div className="btn_container">
        <a
          href="//habeebiacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex">
          Visit Client&apos;s Webpage
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Project_Page_2;
