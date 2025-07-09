import { Link } from 'react-router-dom';
import { Settings, Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Settings className="h-8 w-8 text-primary-glow transition-transform duration-300 group-hover:rotate-180" />
                <Wrench className="absolute -bottom-1 -right-1 h-4 w-4 text-accent" />
              </div>
              <span className="text-xl font-bold">Dallas, Keys and Screens</span>
            </Link>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for professional tech repair services. 
              Fast, reliable, and affordable solutions for all your devices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-background/80 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <div className="space-y-2">
              {[
                'Phone Screen Repair',
                'Laptop Service',
                'Key Programming',
                'Mobile Accessories',
                'Electronics Repair',
              ].map((service) => (
                <div key={service} className="text-background/80 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">info@techfixpro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">123 Tech Street, City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 TechFix Pro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-background/60 hover:text-accent transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-background/60 hover:text-accent transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;