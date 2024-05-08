import  { useState } from 'react';
import PropertyCard from './PropertyCard';

function PropertyCardForm() {
  const [properties, setProperties] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
    setShowForm(false); // Hide the form after adding the property
  };

  const deleteProperty = (index) => {
    const updatedProperties = [...properties];
    updatedProperties.splice(index, 1);
    setProperties(updatedProperties);
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the visibility of the form
  };

  return (
    <div>
      <h1>Property Form</h1>
      {showForm && (
        <div>
          <h2>Add Property</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProperty({
                title: e.target.title.value,
                description: e.target.description.value,
                price: e.target.price.value,
                location: e.target.location.value,
                type: e.target.type.value,
                image: e.target.image.value,
                reviews: e.target.reviews.value,
                bedrooms: e.target.bedrooms.value,
                space: e.target.space.value,
                yearBuilt: e.target.yearBuilt.value,
                contactAgent: e.target.contactAgent.value,
              });
            }}
          >
            <label>
              Title:
              <input type="text" name="title" required />
            </label>
            <label>
              Description:
              <textarea name="description" required />
            </label>
            <label>
              Price:
              <input type="number" name="price" required />
            </label>
            <label>
              Location:
              <input type="text" name="location" required />
            </label>
            <label>
              Type:
              <select name="type" required>
                <option value="">Select</option>
                <option value="selling">Selling</option>
                <option value="renting">Renting</option>
                <option value="AirBnB">AirBnB</option>
              </select>
            </label>
            <label>
              Image Address:
              <input type="text" name="image" />
            </label>
            <label>
              Reviews:
              <input type="number" name="reviews" />
            </label>
            <label>
              Bedrooms:
              <input type="number" name="bedrooms" />
            </label>
            <label>
              Space (sqft):
              <input type="number" name="space" />
            </label>
            <label>
              Year Built:
              <input type="number" name="yearBuilt" />
            </label>
            <label>
              Contact Agent:
              <input type="text" name="contactAgent" />
            </label>
            <button type="submit">Add Property</button>
          </form>
        </div>
      )}
      <div>
        <button onClick={toggleForm}>Add Property</button>
      </div>
      <div>
        <h2>Properties</h2>
        <ul>
          {properties.map((property, index) => (
            <div key={index}>
              <PropertyCard {...property} />
              <button onClick={() => deleteProperty(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PropertyCardForm;
