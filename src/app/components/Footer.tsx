import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-4">Ridhaan Investments</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive financial planning and investment advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/calculators" className="text-gray-300 hover:text-white transition-colors">
                Calculators
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">+91 86012 06984</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">aniket8601206984@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Prayagraj, Uttar Pradesh India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-blue-700 pt-6">
          <p className="text-sm text-gray-300 mb-4">
            <strong>Disclaimer:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} FinanceAdvisor. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
