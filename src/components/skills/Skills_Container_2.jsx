import { SiGoogleads } from "react-icons/si";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaHubspot } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

const Skills_Container_2 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <SiGoogleads />
                        <div>
                            <h3 className="skills__name">Google Ads</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <TbBrandGoogleAnalytics />
                        <div>
                            <h3 className="skills__name">Google Analytics</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaHubspot />
                        <div>
                            <h3 className="skills__name">Hubspot</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <SiCanva />
                        <div>
                            <h3 className="skills__name">Canva</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaHtml5 />
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <IoLogoCss3 />
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills_Container_2;
