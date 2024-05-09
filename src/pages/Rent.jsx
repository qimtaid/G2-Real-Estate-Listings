import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PropertyCardList from "../components/PropertyCardList";

function Rent() {
    return (
        <>

            <NavBar />
            <h2>The following houses are available for renting</h2>
            <PropertyCardList />
            <Footer />

        </>
        
           
        
    )
}
export default Rent;