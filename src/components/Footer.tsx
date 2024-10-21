import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">German Point</h3>
            <p>Authentic German cuisine since 1999</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>123 Restaurant Street, City</p>
            <p>Phone: 0798 363 800</p>
            <p>Email: info@germanpoint.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 German Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;