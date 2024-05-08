import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard'; 

function PropertyCardList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/properties`)
            .then(res => res.json())
            .then(properties => setProperties(properties))
            .catch(error => console.log("Error fetching properties:", error));
    }, []);

    return (
        <ul className="property-list">
            {properties.map(property => (
                <PropertyCard
                    key={property.id}
                    name={property.name}
                    image={property.image}
                    price={property.price}
                    reviews={property.reviews}
                    bedrooms={property.bedrooms}
                    space={property.space}
                    location={property.location}
                    garage={property.garage}
                    yearBuilt={property.yearBuilt}
                    type={property.type}
                    agent={property.agent}
                />
            ))}
        </ul>
        
    );
}

export default PropertyCardList;
