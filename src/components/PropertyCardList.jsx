import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard'; 

function PropertyCardList({selection}) {
    const [properties, setProperties] = useState([]);
      // Filter properties based on selection
      const filteredProperties = properties.filter(property => property.type === selection);

    useEffect(() => {
        fetch(`http://localhost:3000/properties`)
            .then(res => res.json())
            .then(properties => setProperties(properties))
            .catch(error => console.log("Error fetching properties:", error));
    }, []);



    return (

        <ul className="property-list">
            {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </ul>
        
    );
}

export default PropertyCardList;
