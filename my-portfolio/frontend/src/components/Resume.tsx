import React, { useState } from 'react';
import axios from '../services/axiosInstance'; // Import the Axios instance
import './Resume.css';

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const downloadResume = async () => {
    try {
      const response = await axios.get('/api/resume/download', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = "resume.pdf";
      link.click();
    } catch (error) {
      console.error('There was an error downloading the resume:', error);
      alert('Error downloading resume. Please try again later.');
    }
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>My Resume</h1>
        <button onClick={downloadResume} className="resume-download-link">
          PDF of current resume
        </button>
      </div>
      <div className="resume-sections">
        <div className="resume-section" onClick={() => toggleSection('education')}>
          <h2>Education {activeSection === 'education' ? '-' : '+'}</h2>
          <div className={`resume-content ${activeSection === 'education' ? 'active' : ''}`}>
            <div className="resume-item">
              <h3>Boston University</h3>
              <p>MS in Computer Information Systems Program</p>
              <p>GPA: 3.83</p>
              <span>Boston, MA | Sep 2022 – July 2025</span>
            </div>
          </div>
        </div>
        <div className="resume-section" onClick={() => toggleSection('skills')}>
          <h2>Skills {activeSection === 'skills' ? '-' : '+'}</h2>
          <div className={`resume-content ${activeSection === 'skills' ? 'active' : ''}`}>
            <div className="resume-item">
              <p>Programming skills: Java, JavaScript, HTML, CSS, Node.js, React, Git/Github</p>
            </div>
          </div>
        </div>
        <div className="resume-section" onClick={() => toggleSection('projects')}>
          <h2>Projects {activeSection === 'projects' ? '-' : '+'}</h2>
          <div className={`resume-content ${activeSection === 'projects' ? 'active' : ''}`}>
            <div className="resume-item">
              <h3>Backery Shop</h3>
              <p>It’s a backery shop online shopping website. It includes sign in and log in, order, check out, comment functions.</p>
              <p>Technologies used: Java, JavaScript, HTML, CSS</p>
              <a href="https://github.com/fangxu00/BackeryShop" target="_blank" rel="noopener noreferrer">https://github.com/fangxu00/BackeryShop</a>
            </div>
          </div>
        </div>
        <div className="resume-section" onClick={() => toggleSection('award')}>
          <h2>Award {activeSection === 'award' ? '-' : '+'}</h2>
          <div className={`resume-content ${activeSection === 'award' ? 'active' : ''}`}>
            <div className="resume-item">
              <p>Sep 2022</p>
              <p>Merit Scholarship Award</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
