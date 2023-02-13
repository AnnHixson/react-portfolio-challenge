import React, { useState } from 'react';
import NavTabs from './NavTabs';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import HeaderDiv from './Header';
import FooterDiv from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <HeaderDiv />

        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}

        <FooterDiv />
    </div>
  );
}
