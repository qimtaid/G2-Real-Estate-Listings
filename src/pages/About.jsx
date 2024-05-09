import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function About() {
  return (
  <>
    <NavBar />
    <h2>About Us</h2>
<div className="card-container">
  <div className="card" id="whoWeAre">
    <h3>Who We Are</h3>
    <p>Real Estate Listing Portal is your one-stop destination for finding, buying, renting, and listing properties. Whether you're looking for a cozy apartment to rent or a luxurious villa to buy, or you need a platform to list your vacation home for short stays, we cater to all your real estate needs.</p>
  </div>
  <div className="card" id="ourMission">
    <h3>Our Mission</h3>
    <p>Our mission is to make real estate accessible to everyone, everywhere. We aim to streamline the process of buying, renting, and listing properties by providing a user-friendly online platform that connects property owners with potential buyers and tenants across the globe.</p>
  </div>
  <div className="card" id="meetOurTeam">
    <h3>Meet Our Team</h3>
    <p>Our team is made up of experienced real estate professionals, tech experts, and customer service specialists dedicated to providing you with the best possible experience. We understand the market and are here to support you every step of the way.</p>
  </div>
</div>


    <h2>Contact Us</h2>
    <p>If you have any questions, please feel free to contact us:</p>
    <p><strong>Email:</strong> info@g2realestatelisting.com</p>
    <p><strong>Phone:</strong> +254 700 700 700</p>
    <p><strong>Address:</strong> P.O. Box 707 Nairobi, Kenya</p>    
    <Footer />
 

  </>
   
    
   
  )
}
