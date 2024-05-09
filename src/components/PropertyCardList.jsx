import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard'; 

function PropertyCardList({ selection }) {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/properties`)
            .then(res => res.json())
            .then(setProperties) // Simplified
            .catch(error => console.log("Error fetching properties:", error));
    }, []);

    // Filter properties based on selection
    const filteredProperties = selection === 'All'
        ? properties
        : properties.filter(property => property.type === selection);

    return (
        <ul className="property-list">
            {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </ul>
    );
}

export default PropertyCardList;
