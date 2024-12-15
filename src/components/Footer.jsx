import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-secondary pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Arctura Technovations</h3>
            <p className="text-gray-400">
              Innovating tomorrow's solutions today.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-accent">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-accent">Products</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-accent">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tech Street</li>
              <li>Innovation City, IC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@arctura.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent"><FaLinkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><FaFacebook size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arctura Technovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;