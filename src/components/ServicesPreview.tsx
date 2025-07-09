import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Key, Headphones, Wrench, ArrowRight } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Phone Repairs',
      description: 'Screen replacements, battery fixes, and hardware repairs for all smartphone brands.',
      popular: true,
    },
    {
      icon: Laptop,
      title: 'Laptop Service',
      description: 'Screen repairs, hardware upgrades, and performance optimization for laptops.',
    },
    {
      icon: Key,
      title: 'Key Programming',
      description: 'Car key duplication, programming, and home key services with advanced technology.',
    },
    {
      icon: Headphones,
      title: 'Mobile Accessories',
      description: 'Repair and replacement of headphones, chargers, and other mobile accessories.',
    },
    {
      icon: Wrench,
      title: 'Electronics Service',
      description: 'General electronics repair for home gadgets, gaming devices, and tech accessories.',
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-black">Repair Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in fast, reliable repairs for all your tech devices. 
            From smartphones to laptops, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card group relative ${
                service.popular ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services" className="bg-green-500 btn-hero inline-flex items-center text-black">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;