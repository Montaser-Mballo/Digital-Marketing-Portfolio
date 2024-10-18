import { RiSeoFill } from "react-icons/ri";
import { SiPowerpages } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { VscFileMedia } from "react-icons/vsc";
import { TbBrandAbstract } from "react-icons/tb";

const Skills_Container_1 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Marketing</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <RiSeoFill />
                        <div>
                            <h3 className="skills__name">On-page optimization</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiPowerpages />
                        <div>
                            <h3 className="skills__name">Off-page optimization</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <MdOutlineEmail />
                        <div>
                            <h3 className="skills__name">Email marketing</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <TfiWrite />
                        <div>
                            <h3 className="skills__name">Copywriting</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <VscFileMedia />
                        <div>
                            <h3 className="skills__name">Content Creation</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <TbBrandAbstract />
                        <div>
                            <h3 className="skills__name">Branding</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills_Container_1;