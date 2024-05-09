import CardForm from "../components/CardForm";
import NavBar from "../components/NavBar";
import PropertyCardList from "../components/PropertyCardList";
import Footer from "../components/Footer";
import "../index.css"
function Sell() {
    return (
        <>
            <NavBar />
            <h2>Please enter the details of the house you want to sell</h2>
            <CardForm />

            <PropertyCardList/>
            <Footer />
        </>
            
      
    )
}
export default Sell;
