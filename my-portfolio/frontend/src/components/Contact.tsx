import React, { useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('All fields are required.');
      setSuccessMessage('');
      return;
    }

    try {
      await axiosInstance.post('/api/email/send', formData);
      setSuccessMessage('Email sent successfully!');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setErrorMessage('Error sending email. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
