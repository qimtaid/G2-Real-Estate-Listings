import React from 'react';

const PopularProperty = ({ properties }) => {
  // here is to Filter properties with reviews 4.5 and above
  const popularProperties = properties.filter(property => property.reviews >= 4.5);
  // property below 4.4 will not be listed in popular components properties.

  return (
    <div className="popular-properties">
      <h2>Popular Properties</h2>
      <div className="property-list">
        {popularProperties.map(property => (
          <div key={property.id} className="property">
            <img src={property.image} alt={property.name} />
            <div className="details">
              <h3>{property.name}</h3>
              <p>Price: ${property.price}</p>
              <p>Location: {property.location}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Space: {property.space} sqft</p>
              <p>Reviews: {property.reviews}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProperty;