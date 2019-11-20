import React from 'react';
import "./App.css"
import Navbar from "./components/navbar";
import Highlighted from "./components/highlighted"
import Categories from "./components/categories"
import ItemsPoted from "./components/itemsPosted"
import Footer from "./components/footer"
import PublishCard from "./components/publishCard"
import About from "./components/about"
import Contact from "./components/contact"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Highlighted />
            <Categories/>
            <ItemsPoted />
          </Route>
          <Route path="/publish">
            <PublishCard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact /> 
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
