import { useState } from 'react';

function PropertyCard({property}) {
    const [showDetails, setShowDetails] = useState(false);

    // convert review numbers to stars
    const renderStars = (count) => {
        return "★".repeat(count) + "☆".repeat(5 - count);
    };

    return (
        <li className="card" >
            <img src={property.image} alt={property.name} />
            <h4>{property.name}</h4>
            <strong>Price: ${property.price}</strong>
            <p>Reviews: {renderStars(property.reviews)}</p>
            <button onClick={() => setShowDetails(!showDetails)}>Read More</button>
            {showDetails && (
                <>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>Space: {property.space} sq.ft.</p>
                    <p>Location: {property.location}</p>
                    <p>Garage: {property.garage ? 'Available' : 'Not Available'}</p>
                    <p>Year Built: {property.yearBuilt}</p>
                    <p>Type: {property.type}</p>
                    <p>Contact Agent: {property.agent}</p>
                </>
            )}
        </li>
    );
}

export default PropertyCard;
