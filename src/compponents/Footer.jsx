import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white text-center py-3">
        <h1>Welcome to My Website</h1>
      </header>
      <main className="flex-fill">
        {/* Your other components or content */}
      </main>
      <Footer />
      </div>
        </div>
    );
}

export default Footer;
