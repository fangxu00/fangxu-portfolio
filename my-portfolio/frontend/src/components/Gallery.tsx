import React, { useEffect, useState } from 'react';
import axios from '../services/axiosInstance'; // Import the Axios instance
import './Gallery.css'; // Import the CSS file

interface Image {
  name: string;
  url: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.url} alt={image.name} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
