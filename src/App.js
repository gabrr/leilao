import React from 'react';
import Navbar from "./components/navbar";
import Highlighted from "./components/highlighted"
import Categories from "./components/categories"
import ItemsPoted from "./components/itemsPosted"
import Footer from "./components/footer"
import PublishCard from "./components/publishCard"
import About from "./components/about"
import Contact from "./components/contact"
import Bidding from "./components/bidding"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Highlighted />
      <Categories/>
      <ItemsPoted />
      {/* <Bidding />
      <Contact /> 
      <About />
      <PublishCard /> */}
      <Footer />
    </div>
  );
}

export default App;
