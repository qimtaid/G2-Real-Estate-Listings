import { useState } from 'react';
import PropertyCard from './PropertyCard';

function PropertyCardForm() {
    const [properties, setProperties] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        type: '', // This will be handled by a select dropdown
        image: '',
        reviews: '',
        bedrooms: '',
        space: '',
        yearBuilt: '',
        agent: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add property');
                }
                return response.json();
            })
            .then(newProperty => {
                setProperties([...properties, newProperty]);
                setFormData({
                    name: '',
                    description: '',
                    price: '',
                    location: '',
                    type: '',
                    image: '',
                    reviews: '',
                    bedrooms: '',
                    space: '',
                    yearBuilt: '',
                    agent: ''
                });
            })
            .catch(error => {
                console.error('Error adding property:', error);
            });
    };

    return (
        <div className='container' id='form-container'>
            <h1>Property Form</h1>
            <div className='content' id='form-content'>
                <h2>Add Property</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div className="form-field" key={key}>
                            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            {key === 'type' ? (
                                <select id={key} name={key} value={formData[key]} onChange={handleChange} required>
                                    <option value="">Select Type</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Sale">Sell</option>
                                    <option value="AirBnB">AirBnB</option>
                                </select>
                            ) : (
                                <input
                                    type={key === 'price' || key === 'bedrooms' || key === 'space' || key === 'yearBuilt' ? 'number' : 'text'}
                                    id={key}
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <button type="submit">Add Property</button>
                </form>
            </div>
            <h2>Properties</h2>
            <ul>
                {properties.map((property, index) => (
                    <li key={property.id}> {index} :
                        <PropertyCard property={property} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PropertyCardForm;