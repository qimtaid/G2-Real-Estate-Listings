import React, { useState } from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>Properties</h2>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <p>Type: {property.type}</p>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
            <p>Rooms: {property.rooms}</p>
            <p>BnB: {property.isBnb ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const RealEstateApp = () => {
  const [properties, setProperties] = useState([
    { type: 'House', price: 500000, location: 'Nairobi', rooms: 4, isBnb: false },
    { type: 'Apartment', price: 200000, location: 'Nakuru', rooms: 2, isBnb: true },
    { type: 'House', price: 750000, location: 'Kisumu', rooms: 5, isBnb: true },
    { type: 'Condo', price: 300000, location: 'Eldoret', rooms: 3, isBnb: false },
    { type: 'BnB', price: 1000000, location: 'Mombasa', rooms: 6, isBnb: true },
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = (filterCriteria) => {
    let filteredProperties = properties.filter(property => {
      let isMatch = true;
      if (filterCriteria.operation === 'buy') {
        if (filterCriteria.bnbOnly && !property.isBnb) {
          isMatch = false;
        }
        if (filterCriteria.maxPrice && property.price > filterCriteria.maxPrice) {
          isMatch = false;
        }
        // Add more filtering criteria here as needed
      }
      // Add more filtering options for 'sell' and 'search' operations if required

      return isMatch;
    });

    setFilteredProperties(filteredProperties);
  };

  return (
    <div>
      <h1>Real Estate App</h1>
      <button onClick={() => handleFilter({ operation: 'buy', bnbOnly: true, maxPrice: 750000 })}>
        Filter Buy BnB Properties under $750,000
      </button>
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default RealEstateApp;
