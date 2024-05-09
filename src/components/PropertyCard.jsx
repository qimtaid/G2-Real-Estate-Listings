import React, { useState } from 'react';

function PropertyCard({ property }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactButtonText, setContactButtonText] = useState('Contact Us');

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  const handleContactClick = () => {
    if (showContactForm) {
      setShowContactForm(false);
      setContactButtonText('Contact Us');
    } else {
      setShowContactForm(true);
      setContactButtonText('Keep Looking');
    }
  };

  const handleSendEmail = () => {
    window.location.href = 'mailto:info@g2realestatelisting.com';
  };

  return (
    <li className="card">
      <img src={property.image} alt={property.name} />
      <h4>{property.name}</h4>
      <div className='minor-details'>
      <strong>Price: ${property.price}</strong>
      <p>Reviews: {renderStars(property.reviews)}</p>
      </div>
      <div className="button-container">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Read Less' : 'Read More'}
        </button>
        <button onClick={handleContactClick}>{contactButtonText}</button>
      </div>
      {showDetails && (
        <div className="details">
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Space: {property.space} sq.ft.</p>
          <p>Location: {property.location}</p>
          <p>Garage: {property.garage ? 'Available' : 'Not Available'}</p>
          <p>Year Built: {property.yearBuilt}</p>
          <p>Type: {property.type}</p>
          <p>Contact Agent: {property.agent}</p>
        </div>
      )}
      {showContactForm && (
        <div className="contact-form">
          <textarea placeholder="Enter your message..." />
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
    </li>
  );
}

export default PropertyCard;