import { useState } from 'react';
import Modal from './Modal'; 

function PropertyCard({ property }) {
    const [showModal, setShowModal] = useState(false);

    // Convert review numbers to stars
    const renderStars = (count) => {
        return "★".repeat(count) + "☆".repeat(5 - count);
    };

   
  
    const handleSendEmail = () => {
      window.location.href = 'mailto:info@g2realestatelisting.com';
    };

    return (
        <li className="card">
            <img src={property.image} alt={property.name} style={{width: '100%', height: 'auto'}} />
            <h4>{property.name}</h4>
            <strong>Price: ${property.price}</strong>
            <p>Reviews: {renderStars(property.reviews)}</p>
            <button onClick={() => setShowModal(true)}>Read More</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                   
                    <img src={property.image} alt={property.name} style={{width: '100%', height: 'auto'}} />
                    <h4>{property.name}</h4>
                    <strong>Price: ${property.price}</strong>
                    <p>Reviews: {renderStars(property.reviews)}</p>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>Space: {property.space} sq.ft.</p>
                    <p>Location: {property.location}</p>
                    <p>Garage: {property.garage ? 'Available' : 'Not Available'}</p>
                    <p>Year Built: {property.yearBuilt}</p>
                    <p>Type: {property.type}</p>
                    <p>Contact Agent: {property.agent}</p>
                    
                   
                    <div className="contact-form">
                      <textarea placeholder="Enter your message..." />
                      <button onClick={handleSendEmail}>Send Email</button>
                    </div>
                 
                </Modal>
            )}
        </li>
    );
}

export default PropertyCard;
