import React from 'react';
import Navbar from "./components/navbar";
import Highlighted from "./components/highlighted"
import Categories from "./components/categories"
import ItemsPoted from "./components/itemsPosted"
import Footer from "./components/footer"
import PublishCard from "./components/publishCard"
import About from "./components/about"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      {/* <Categories/>
      <Highlighted />
      <ItemsPoted />
    <PublishCard /> */}
    <Footer />
    </div>
  );
}

export default App;
