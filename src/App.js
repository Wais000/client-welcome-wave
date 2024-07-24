// index.js or App.js
import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './pages/Home.js';
// import Courses from './pages/Courses.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Institutions from './pages/Institutions.js';
import Donation from './pages/Donation.js';
// import Volunteer from './components/Volunteer.js';
import Footer from './components/Footer/Footer.js';


// import JobList from './components/Job/JobList.js';


// import other components

const App = () => (
  <> 

  <Router>
    <Header />
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/institutions"  element={<Institutions/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/donation" element={<Donation/>} />
      {/* <Route path="/volunteer" element={<Volunteer/>} /> */}
    
      {/* Add other routes as needed */}
    </Routes>
  
    <Footer/>
  </Router> 
  </>
);
export default App;

// ReactDOM.render(<App />, document.getElementById('root'));
