import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, TrendingUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 dark:from-blue-950 dark:to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Ridhaan Investments</span>
                <span className="text-xs text-blue-200">by Aniket Shukla</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive financial planning and investment advisory services. Building wealth, securing futures.
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
                <a href="tel:+918601206984" className="text-gray-300 hover:text-white transition-colors">
                  +91 8601206984
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:aniket8601206984@gmail.com" className="text-gray-300 hover:text-white transition-colors break-all">
                  aniket8601206984@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-blue-800 pt-6">
          <p className="text-sm text-gray-300 mb-4">
            <strong>Disclaimer:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future returns. Insurance is subject to terms and conditions of the policy.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Ridhaan Investments. All rights reserved.</p>
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