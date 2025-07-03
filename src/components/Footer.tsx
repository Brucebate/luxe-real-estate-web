
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-lg"></div>
              <span className="text-xl font-bold">LuxeRealty</span>
            </div>
            <p className="text-gray-400 text-sm">
              Redefining Real Estate Excellence with innovative design, sustainability, and prime locations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/projects" className="block text-gray-400 hover:text-white transition-colors">Projects</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link to="/careers" className="block text-gray-400 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Residential Properties</p>
              <p className="text-gray-400">Commercial Spaces</p>
              <p className="text-gray-400">Investment Opportunities</p>
              <p className="text-gray-400">Property Management</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Residential: homes@luxerealty.com</p>
              <p>Commercial: offices@luxerealty.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>123 Business District, City Center</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 LuxeRealty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
