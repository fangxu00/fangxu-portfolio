import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import './Biography.css';

const Biography: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axiosInstance.get('/api/images');
        if (response.data.length > 0) {
          const image = response.data.find((img: { name: string }) => img.name === '1718500767702-WechatIMG44.jpg');
          if (image) {
            setImageUrl(image.url);
          }
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="biography-container">
      <div className="bio-header">
        {imageUrl && <img src={imageUrl} alt="Your Name" />}
        <div className="bio-header-content">
          <h1>Fang Xu</h1>
          <h2>Graduate student at Boston University pursuing a Master of Science in Information Systems with interests in technology, golf, and ballet.
          </h2>
        </div>
      </div>
      <div className="bio-text">
        <p>
        Hello everyone,

I am from Shenzhen, Guangdong, China, one of the most promising and technologically advanced cities in the country. Shenzhen is the birthplace of renowned Chinese companies such as Tencent, Huawei, and DJI. Growing up in such a vibrant tech hub has fueled my passion for the technology industry since my student days.

I have transitioned from a technology role in the financial field to a similar position focused more on software development. To further my knowledge systematically and comprehensively, I am currently pursuing a master's degree in Information Systems at Boston University.

Beyond my academic and professional pursuits, I have a keen interest in various sports. Golf, in particular, is a sport I excel at and am passionate about. During my college years, I had the opportunity to serve as a volunteer scorer when the Omega Golf World Cup was held in Shenzhen.

Another one of my specialties is ballet, which I began learning at the age of 4. This early start has provided me with significant advantages in movement and rhythm, contributing to my overall physical coordination and grace.        </p>
      </div>
    </div>
  );
};

export default Biography;
