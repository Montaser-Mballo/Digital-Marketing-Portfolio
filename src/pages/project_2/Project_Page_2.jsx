import "../project_page.css";
import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/Habeebi Academy logo.jpg";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
// import MediaIcon from "../../assets/media-icon.png";

const Project_Page_2 = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project__page">
      <Navbar />

      <div className="project-header">
        <h1>Competitor Analysis</h1>
        <p className="project-subtitle">Competitor Analysis & Research</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <img src={ProjectImg} alt="Course Curation Project" />
        </div>

        <div className="project_overview">
          <h2>Description</h2>

          <p>
            Conducted a comprehensive competitor analysis and course research
            for Habeebi Academy to gain insights into industry trends and
            identify opportunities for growth. The goal was to enhance the
            course offerings on the platform and strategically position the
            website in the competitive online education market.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            Market research, data analysis, competitor analysis, strategic
            planning.
          </p>

          <h2>Tools Used</h2>

          <p>
            Google Sheets for data organization, SEMrush for competitor
            analysis, and social media platforms for trend identification.
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
                examining industry reports, social media discussions, and
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

        {/* <div className="project_card">
          <img src={MediaIcon} alt="Media Icon" />

          <h2>Media</h2>

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
        </div> */}
      </div>

      <div className="btn_container">
        <a
          href="//habeebiacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex">
          Visit Company Page
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Project_Page_2;
