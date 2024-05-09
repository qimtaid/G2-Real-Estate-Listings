import { useState } from 'react';
import PropertyCard from './PropertyCard';

function PropertyCardForm() {
    const [properties, setProperties] = useState([]);
    const [editingIndex, setEditingIndex] = useState(-1);  // Index of the property being edited
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
        contactAgent: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex >= 0) {
            // Update existing property
            const updatedProperties = [...properties];
            updatedProperties[editingIndex] = formData;
            setProperties(updatedProperties);
            setEditingIndex(-1);  // Reset editing index
        } else {
            // Add new property
            setProperties([...properties, formData]);
        }
        setFormData({  // Clear form
            title: '',
            description: '',
            price: '',
            location: '',
            type: '',
            image: '',
            reviews: '',
            bedrooms: '',
            space: '',
            yearBuilt: '',
            contactAgent: ''
        });
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setFormData(properties[index]);
    };

    const handleDelete = (index) => {
        const updatedProperties = [...properties];
        updatedProperties.splice(index, 1);
        setProperties(updatedProperties);
    };

    return (
        <div className='container' id='form-container'>
            <h1>Property Form</h1>
            <div className='content' id='form-content'>
                <h2>{editingIndex >= 0 ? 'Edit Property' : 'Add Property'}</h2>
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
                    <button type="submit">{editingIndex >= 0 ? 'Update Property' : 'Add Property'}</button>
                </form>
            </div>
            <h2>Properties</h2>
            <ul>
                {properties.map((property, index) => (
                    <li key={property.id}>
                        <PropertyCard property={property} />
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PropertyCardForm;
