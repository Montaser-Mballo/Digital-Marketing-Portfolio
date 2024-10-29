import { useState } from 'react';
import '../project_screenshots.css';
import Screenshot6Img from '../../assets/Screenshot 6.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Project_ScreenshotsData = [
    {
        id: 1,
        image: Screenshot6Img,
        title: 'Branding Proposal',
        description: 'Collaborated with a team to develop a comprehensive city branding proposal for Al Jubail City aimed at enhancing its image and promoting it as a prime destination for businesses and tourism. The project focused on identifying the city\'s unique attributes and creating a cohesive branding strategy that resonates with target audiences.',
        viewLink: 'https://drive.google.com/file/d/1_gbrktCeANT7M2xA4EfhjSMbmSTe1ON5/view?usp=sharing'
    },
];

const Project_Screenshots_5 = () => {

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

    const [selectedProject_Screenshots, setSelectedProject_Screenshots] = useState(null);

    const openPreview = (Project_Screenshots) => {
        setSelectedProject_Screenshots(Project_Screenshots);
    };

    const closePreview = () => {
        setSelectedProject_Screenshots(null);
    };

    // Function to handle closing modal when clicking outside modal content
    const handleClickOutside = (event) => {
        if (event.target.classList.contains('project_screenshots__modal')) {
            closePreview();
        }
    };

    return (
        <section className="project_screenshots" id="project_screenshots">

            <span className="section__title"><h3>Works</h3></span>
            <span className="section__subtitle">My Achievements</span>

            <div className="project_screenshots__container">
                {Project_ScreenshotsData.map((Project_Screenshots) => (
                    <div key={Project_Screenshots.id} className="project_screenshots__content" onClick={() => openPreview(Project_Screenshots)}>
                        <img src={Project_Screenshots.image} alt={Project_Screenshots.title} className="project_screenshots__image" />
                        <h3 className="project_screenshots__title">{Project_Screenshots.title}</h3>
                    </div>
                ))}
            </div>

            {selectedProject_Screenshots && (
                <div className="project_screenshots__modal active-modal" onClick={handleClickOutside}>
                    <div className="project_screenshots__modal-content">
                        <span onClick={closePreview} className="project_screenshots__modal-close">&times;</span>
                        <h3 className="project_screenshots__modal-title">{selectedProject_Screenshots.title}</h3>
                        <img src={selectedProject_Screenshots.image} alt={selectedProject_Screenshots.title} className="project_screenshots__modal-image" />
                        <p className="project_screenshots__modal-description">{selectedProject_Screenshots.description}</p>
                        {/* <a href={selectedProject_Screenshots.viewLink} target="_blank" rel="noopener noreferrer" className="view__project_screenshots-button">
                            View Content
                        </a> */}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project_Screenshots_5;
