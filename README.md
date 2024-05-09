# React + Vite for G2 Real Estate Listings

**Author**: Dan Koskei  
**Date**: May 6, 2024

### Project Description
G2 Real Estate Listings is a dynamic React.js application designed for individuals interested in the real estate market. Whether you're looking to buy, sell, rent, or list properties on Airbnb, this application provides a comprehensive platform to view and manage real estate listings. The application features an intuitive user interface with various functionalities such as property filtering, searching, and detailed displays, all powered by Vite with HMR for an improved development experience.

### Setup
Our src folder contains the following JavaScript files:
src/
├── components/
    ├── PropertyCard.jsx
    ├── NavBar.jsx
    ├── NavBar.css
└── pages/
    ├── Rent.jsx
    ├── Buy.jsx
    ├── Sell.jsx
    ├── Home.jsx
    ├── About.jsx
├── index.css
├── main.jsx
├── routes.jsx

### Features

- **NavBar**: Handles routing throughout the application.
- **Home**: Entry point that prompts users on their intent (buy, sell, rent, or find AirBnB).
- **Card**: Displays property details such as images, name, price, features like reviews, bedrooms count, space, location, garage availability, year built, property type (sale/rent/AirBnB), and agent contact information.
- **Card Form**: Enables users to add properties (for selling, renting, or AirBnB).
- **Card Container**: Manages and displays multiple property cards.
- **About**: Provides application details and contact information.
- **Popular/Wish List**: Showcases properties that are highly liked or wished by users.
- **Sell/Buy/Rent/BnB Pages**: Dedicated pages for different transaction types.
- **Filter/Sort**: Allows users to filter and sort properties based on price, location, and type.
- **SearchBar**: Enables searching for properties directly.
- **db.json**: Serves as a mock database for properties using JSON-server.
- **CSS**: Ensures the application is visually appealing and functionally responsive.

### Setup Instructions

#### Vite Plugins for React
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh, enhancing the development speed and experience.

#### Requirements
- Node.js
- NPM (Node Package Manager)
- Git

#### Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/qimtaid/your-g2-real-estate-listings
   cd g2-real-estate-listings
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

4. To view the mock database:
   ```bash
   json-server --watch db.json
   ```

### Live Link
Access the web application directly via [this link](https://your-g2-real-estate-live-link.com/).

### Technologies Used
- HTML
- CSS
- JavaScript (React.js)
- JSON-server for mock backend
- Vite

**Contribution**
Feel free to fork this repository and propose changes by submitting a pull request.

**Team Contact Information**
- Daniel Kamanthi: [daniel.kamanthi@student.moringaschool.com](mailto:daniel.kamanthi@student.moringaschool.com)
- Dan Koskei: [dan.koskei@student.moringaschool.com](mailto:dan.koskei@student.moringaschool.com)
- Maureen Cheptoo: [maureen.cheptoo@student.moringaschool.com](mailto:maureen.cheptoo@student.moringaschool.com)
- Collins Kibet: [Collins.kibet@student.moringaschool.com](mailto:Collins.kibet@student.moringaschool.com)
- Ian Chege: [ian.chege1@student.moringaschool.com](mailto:ian.chege1@student.moringaschool.com)
- Emma Marilyne: [emarilyne.wakio@student.moringaschool.com](mailto:emarilyne.wakio@student.moringaschool.com)

### License
MIT License Copyright (c) 2024 Dan Koskei

