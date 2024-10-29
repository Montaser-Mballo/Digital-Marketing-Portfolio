import { useState } from 'react';
import './certificates.css';
import exCerImg from '../../assets/experienc-certificate-img.jpg';
import googleCertImg from '../../assets/google-digital-marketing-certificate-img.jpg';
import mediaCerImg from '../../assets/basics-of-media-certidicate-img.jpg';
import exCerDoc from '../../assets/Experience Certificate.pdf';
import goCerDoc from '../../assets/Google digital marketing & E-commerce.pdf';
import baCerDoc from '../../assets/Basics of media certificate.pdf';
// import Scroll from "./Scroll";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const certificatesData = [
    {
        id: 1,
        image: exCerImg,
        title: 'Experience Certificate',
        // description: 'Description of Certificate 1',
        viewLink: exCerDoc,
    },
    {
        id: 2,
        image: googleCertImg,
        title: 'Google digital marketing & E-commerce Certificate',
        // description: 'Description of Certificate 2',
        viewLink: goCerDoc,
    },

    {
        id: 3,
        image: mediaCerImg,
        title: 'Basics of media certificate',
        // description: 'Description of Certificate 3',
        viewLink: baCerDoc,
    },
];

const Certificates = () => {

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

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openPreview = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const closePreview = () => {
        setSelectedCertificate(null);
    };

    // Function to handle closing modal when clicking outside modal content
    const handleClickOutside = (event) => {
        if (event.target.classList.contains('certificate__modal')) {
            closePreview();
        }
    };

    return (
        <section className="certificates section" id="certificates">
            <span className="section__title"><h3>Certificates</h3></span>
            <span className="section__subtitle">My Achievements</span>

            <div className="certificates__container container grid">
                {certificatesData.map((certificate) => (
                    <div key={certificate.id} className="certificate__content" onClick={() => openPreview(certificate)}>
                        <img src={certificate.image} alt={certificate.title} className="certificate__image" />
                        <h3 className="certificate__title">{certificate.title}</h3>
                    </div>
                ))}
                {/* <Scroll /> */}
            </div>

            {selectedCertificate && (
                <div className="certificate__modal active-modal" onClick={handleClickOutside}>
                    <div className="certificate__modal-content">
                        <span onClick={closePreview} className="certificate__modal-close">&times;</span>
                        <h3 className="certificate__modal-title">{selectedCertificate.title}</h3>
                        <img src={selectedCertificate.image} alt={selectedCertificate.title} className="certificate__modal-image" />
                        <p className="certificate__modal-description">{selectedCertificate.description}</p>
                        <a href={selectedCertificate.viewLink} target="_blank" rel="noopener noreferrer" className="view__certificate-button">
                            View Certificate
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
