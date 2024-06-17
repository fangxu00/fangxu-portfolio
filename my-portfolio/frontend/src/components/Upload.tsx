import React, { useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import './Upload.css';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage('Please select a file to upload.');
      setSuccessMessage('');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('description', description);

    try {
      await axiosInstance.post('/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('File uploaded successfully!');
      setErrorMessage('');
      setFile(null);
      setDescription('');
    } catch (error) {
      setErrorMessage('Error uploading file. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Image</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <label>
          File:
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
