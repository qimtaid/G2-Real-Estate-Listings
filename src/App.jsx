import React from "react";
import CardForm from "./components/CardForm.jsx"; // Import the CardForm component
import PropertyCardList from "./components/PropertyCardList.jsx";

function App() {
  return (
    <div className="App">
      <h1>Property Details</h1>
      <CardForm />
      <PropertyCardList/>
    </div>
  );
}

export default App;


