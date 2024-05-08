// import React from "react";
function PropertyCard(property) {
  
  return (
    <li className="card">
      <img src={property.image} alt={property.name} />
      <h4>{property.name}</h4>
      <p>Price: ${property.price}</p>
      <p>Reviews: {property.reviews}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Space: {property.space} sqft</p>
      <p>Location: {property.location}</p>
      <p>Garage: {property.garage ? 'Available' : 'Not Available'}</p>
      <p>Year Built: {property.yearBuilt}</p>
      <p>Type: {property.type}</p>
      <p>Contact Agent: {property.agent}</p>
    </li>
  );
}

export default PropertyCard;
