
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Pray4India from './pages/Pray4India';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { ThemeProvider } from './context/ThemeContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const location = useLocation();
  const isPray4India = location.pathname === '/pray4india';

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfcf9] dark:bg-[#0f172a] transition-colors duration-500">
      {!isPray4India && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/pray4india" element={<Pray4India />} />
        </Routes>
      </main>
      {!isPray4India && <Footer />}
      <ScrollToTopButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
