import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PropertyCardList from "../components/PropertyCardList";
function Buy() {
    return (
        <>
        <NavBar />
            <h2>The following houses are available for purchase</h2>
            <PropertyCardList/>
        <Footer />
        </>
    )
}
export default Buy;