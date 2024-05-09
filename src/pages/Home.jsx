import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PropertyCardList from '../components/PropertyCardList';

function Home() {
    const [selection, setSelection] = useState('All'); // Default to 'All'
    
    const handleSelectionChange = (event) => {
        setSelection(event.target.value);
    };

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to G2 Real Estate Listings</h1>
                <h2>What were you looking to do?</h2>
                <select onChange={handleSelectionChange} value={selection}>
                    <option value="All">All</option> {/* Set value for 'All' */}
                    <option value="Rent">Rent</option>
                    <option value="Sale">Buy</option>
                    <option value="AirBnB">Stay in an AirBnB</option>
                </select>
                <p>Find your perfect home with us. Whether you are buying, selling, renting, or looking for an AirBnB, we can help you move forward.</p>
                <PropertyCardList selection={selection} />
            </main>
            <Footer />
        </>
    );
}

export default Home;
