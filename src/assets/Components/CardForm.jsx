import { useState } from 'react';

function CardForm() {
  const [property, setProperty] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the property data to your backend or perform any other action
    console.log('Submitted Property:', property);
    // Reset form fields after submission
    setProperty({
      title: '',
      description: '',
      price: '',
      location: '',
      type: '',
    });
  };

  return (
    <div className="new-property-form">
      {/* Card Form: Allows users to add properties */}
      <h2>New Property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Type:
          <select name="type" value={property.type} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="selling">Selling</option>
            <option value="renting">Renting</option>
            <option value="AirBnB">AirBnB</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CardForm;
