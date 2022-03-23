import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Clients from "./Pages/Clients";
import Home from "./Pages/Home";
import Counts from "./Pages/Counts";
import Tab from "./Pages/Tab";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Testimonial from "./Pages/Testimonial";
import Pricing from "./Pages/Pricing";
import Faq from "./Pages/Faq";
import Team from './Pages/Team'
import Contact from "./Pages/Contact";
import {BrowserRouter as Router,Route } from "react-router-dom";
import { } from 'react-router-dom';
function App() {
  return (
   <>
   <Router>

   <Navbar/>

   <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/clients" component={Clients} />
   <Route exact path="/counts" component={Counts} />
   <Route exact path="/tab" component={Tab} />
   <Route exact path="/services" component={Services} />
   <Route exact path="/testimonial" component={Testimonial} />
   <Route exact path="/pricing" component={Pricing} />
   <Route exact path="/faq" component={Faq} />
   <Route exact path="/team" component={Team} />
   <Route exact path="/contact" component={Contact} />
   <Route exact path="/portfolio" component={Portfolio} />
   {/* <Route path="/pricing" component={Pricing} />  */}


   <Footer/>
  </Router>
   </>
  );
}

export default App;
