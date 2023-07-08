import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import './App.css';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');


  // eslint-disable-next-line
  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    // Fetch a random image URL using the Picsum Photos API
    fetch('https://picsum.photos/400/300')
      .then(response => {
        setImageUrl(response.url);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  };

  return (
    <div className="app">
      <Helmet>
      <title>Random Image App</title>
        <meta property="og:title" content="Random Image App" />
        <meta property="og:description" content="A simple React app that displays random images." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Random Image App" />
        <meta name="twitter:description" content="A simple React app that displays random images." />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <h1>Random Image Display and Share with React</h1><hr/>
      <img src={imageUrl} alt="RandomImage" />

      <div className="share-buttons">
        <FacebookShareButton url={window.location.href}>
          <FaFacebook />
        </FacebookShareButton>

        <TwitterShareButton url={window.location.href}>
          <FaTwitter />
        </TwitterShareButton>

        <WhatsappShareButton url={window.location.href}>
          <FaWhatsapp />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default App;


