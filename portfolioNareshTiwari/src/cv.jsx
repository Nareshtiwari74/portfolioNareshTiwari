import React, { useEffect } from 'react';
import './cv.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cv() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

    const handleDownloadCV = () => {
        window.open('/Naresh_Tiwari_Resume.pdf', '_blank');
    };

    return (
        <div className="cv-container" data-aos="fade-up">
            <header className="cv-header" data-aos="fade-down">
                <h1 className="cv-name">Naresh Tiwari</h1>
                <p className="cv-contact">Email: nareshtiwarilog@gmail.com | Phone: +91 9977974384</p>
                <p className="cv-contact">LinkedIn: <a href="https://www.linkedin.com/in/naresh-tiwari/" target="_blank" rel="noreferrer">linkedin.com/in/naresh-tiwari</a></p>
                <p className="cv-contact">GitHub: <a href="https://github.com/Nareshtiwari74" target="_blank" rel="noreferrer">github.com/Nareshtiwari74</a></p>
              <a href='https://drive.google.com/file/d/1PYML_DLDLMgdMQqPOnQahhLrw1yVzO-s/view?usp=sharing'>
                <button onClick={handleDownloadCV} className="cv-download-button">Download CV</button> </a>
            </header>

            <section className="cv-section" data-aos="fade-right">
                <h2 className="cv-section-title">Skills Summary</h2>
                <ul className="cv-list">
                    <li>Languages: C++, Python, R, Java, HTML/CSS, SQL</li>
                    <li>Frameworks: VSCode, Pycharm, Tableau, Rstudio, TensorFlow, MongoDB</li>
                    <li>Tools/Platforms: MySQL, MongoDB, Google Cloud, Firebase, Git, Gitlab</li>
                    <li>Soft Skills: Leadership, Problem-Solving, Team Player, Communication, Adaptability</li>
                </ul>
            </section>

            <section className="cv-section" data-aos="fade-left">
                <h2 className="cv-section-title">Projects</h2>
                <ul className="cv-list">
                    <li data-aos="zoom-in">
                        <strong>ToothGrowth Predictive Analysis with ML Models</strong> (Nov 2024)
                        <p>Used KNN, Naive Bayes, Decision Tree, and Neural Networks on the ToothGrowth dataset to achieve 90% prediction accuracy.</p>
                    </li>
                    <li data-aos="zoom-in">
                        <strong>Passenger Experience Analysis for British Airways</strong> (Oct 2024)
                        <p>Performed an analysis of passenger satisfaction across various cabin classes to identify service improvements.</p>
                    </li>
                    <li data-aos="zoom-in">
                        <strong>Library Management System</strong> (July 2024)
                        <p>Developed a Library Management System in C++ with features like book searching, borrowing, and returning, ensuring data integrity with error handling.</p>
                    </li>
                </ul>
            </section>

            <section className="cv-section" data-aos="fade-right">
                <h2 className="cv-section-title">Achievements</h2>
                <ul className="cv-list">
                    <li>Cleared NPTEL Cloud Computing (Nov 2024)</li>
                    <p>Received awards in Interschool Competitions (Nov 2019)</p>
                    <p>Earned silver in long jump and gold in high jump</p>
                </ul>
            </section>

            <section className="cv-section" data-aos="fade-left">
                <h2 className="cv-section-title">Certifications</h2>
                <ul className="cv-list">
                    <li>Introduction to Android Mobile Application Development (Nov 2024)</li>
                    <li>NPTEL Cloud Computing (Nov 2024)</li>
                    <li>Data Structures and Algorithms (July 2024)</li>
                    <li>10+ Certifications in Generative AI and Prompt Engineering (May 2024)</li>
                    <li>Become Data Scientist (Feb 2023)</li>
                </ul>
            </section>

            <section className="cv-section" data-aos="fade-up">
                <h2 className="cv-section-title">Education</h2>
                <ul className="cv-list">
                    <li data-aos="fade-up">
                        <strong>Bachelor of Technology in Computer Science</strong>
                        <p>Lovely Professional University, Punjab | 2021 - 2025 |</p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>Intermediate</strong>
                        <p>GCM Convent School Nowgong, Chhatarpur | July 2020 - March 2022 |</p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>Matriculation</strong>
                        <p>GCM Convent School Nowgong, Chhatarpur | April 2019 - March 2020 |</p>
                    </li>
                </ul>
            </section>

            <footer className="cv-footer" data-aos="fade-up">
                <p>© 2025 Naresh Tiwari. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Cv;
