import React from 'react';
import './ZipfinnLove.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ZipfinnLove = () => {
  // 20 unique users with individual images and names
  const users = [
    { name: '@ananya', img: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d6?w=400&q=60' },
    { name: '@rahul', img: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=400&q=60' },
    { name: '@riya', img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=60' },
    { name: '@kabir', img: 'https://images.unsplash.com/photo-1622646017263-4b47f556c03f?w=400&q=60' },
    { name: '@neha', img: 'https://images.unsplash.com/photo-1569025690768-2d7c6c6f0f7e?w=400&q=60' },
    { name: '@arjun', img: 'https://images.unsplash.com/photo-1631206737656-1e5bdf4cf0bf?w=400&q=60' },
    { name: '@tanya', img: 'https://images.unsplash.com/photo-1565374387558-9b5b0e8f7a32?w=400&q=60' },
    { name: '@varun', img: 'https://images.unsplash.com/photo-1559526323-1e7883f7c6a6?w=400&q=60' },
    { name: '@ishita', img: 'https://images.unsplash.com/photo-1634733988138-c8c1d3e3c8f4?w=400&q=60' },
    { name: '@sahil', img: 'https://images.unsplash.com/photo-1620775998511-3f43e3b5b3ad?w=400&q=60' },
    { name: '@meera', img: 'https://images.unsplash.com/photo-1647430903111-0422f3f0043b?w=400&q=60' },
    { name: '@yash', img: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d6?w=400&q=60' },
    { name: '@priya', img: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=400&q=60' },
    { name: '@aman', img: 'https://images.unsplash.com/photo-1622646017263-4b47f556c03f?w=400&q=60' },
    { name: '@sneha', img: 'https://images.unsplash.com/photo-1631206737656-1e5bdf4cf0bf?w=400&q=60' },
    { name: '@rehan', img: 'https://images.unsplash.com/photo-1634733988138-c8c1d3e3c8f4?w=400&q=60' },
    { name: '@kriti', img: 'https://images.unsplash.com/photo-1620775998511-3f43e3b5b3ad?w=400&q=60' },
    { name: '@deepak', img: 'https://images.unsplash.com/photo-1647430903111-0422f3f0043b?w=400&q=60' },
    { name: '@aisha', img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=60' },
    { name: '@rohan', img: 'https://images.unsplash.com/photo-1631206737656-1e5bdf4cf0bf?w=400&q=60' },
  ];

  return (
    <div className="ZipfinnLove-container">
      {/* Heading Section */}
      <div className="ZipfinnLove-heading-section">
        <h1 className="ZipfinnLove-heading">
          Growth in every trade with Zepfinn
        </h1>
        <button className="ZipfinnLove-btn">
          Share your photo with love <FontAwesomeIcon icon={faXTwitter} />
        </button>
      </div>

      {/* Image Grid */}
      <div className="ZipfinnLove-images">
        {users.map((user, index) => (
          <div className="ZipfinnLove-card" key={index}>
            <img src={user.img} alt={user.name} />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZipfinnLove;
