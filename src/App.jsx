import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // Ensure this exists

function App() {
  
  const location = useLocation(); // Get the current route path

  return (
    <>
      <ScrollToTop /> {/* Ensures the page scrolls to the top on navigation */}
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <Navbar />
        <Box
          component="main"
          sx={{           
            mt: location.pathname === '/' ? '0px' : '120px', // No gap for Home, default for others
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;