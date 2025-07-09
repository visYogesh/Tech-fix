import { useState } from 'react';
import { Smartphone, Laptop, Key, Headphones, Wrench, Gamepad, Monitor, Tablet } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Wrench },
    { id: 'mobile', name: 'Mobile Devices', icon: Smartphone },
    { id: 'computers', name: 'Computers', icon: Laptop },
    { id: 'accessories', name: 'Accessories', icon: Headphones },
    { id: 'keys', name: 'Key Services', icon: Key },
  ];

  const services = [
    {
      category: 'mobile',
      icon: Smartphone,
      title: 'Smartphone Screen Repair',
      description: 'Professional screen replacement for iPhone, Samsung, Google Pixel, and all major smartphone brands.',
      features: ['Original quality parts', 'Same-day service', '90-day warranty', 'Water damage repair'],
      price: 'From $79',
    },
    {
      category: 'mobile',
      icon: Tablet,
      title: 'Tablet Repair Services',
      description: 'Complete tablet repair solutions including screen replacement, battery service, and hardware fixes.',
      features: ['iPad and Android tablets', 'Screen digitizer repair', 'Charging port fix', 'Button replacement'],
      price: 'From $99',
    },
    {
      category: 'computers',
      icon: Laptop,
      title: 'Laptop Screen Replacement',
      description: 'Expert laptop screen repair for all brands including Dell, HP, Lenovo, MacBook, and more.',
      features: ['LED/LCD screens', 'MacBook Retina displays', 'Touchscreen laptops', 'Hinge repair'],
      price: 'From $149',
    },
    {
      category: 'computers',
      icon: Monitor,
      title: 'Computer Hardware Service',
      description: 'Complete computer diagnostics, hardware upgrades, and performance optimization services.',
      features: ['RAM upgrades', 'SSD installation', 'Virus removal', 'Data recovery'],
      price: 'From $69',
    },
    {
      category: 'keys',
      icon: Key,
      title: 'Car Key Programming',
      description: 'Professional automotive key duplication, programming, and transponder key services.',
      features: ['All car makes/models', 'Remote programming', 'Transponder keys', 'Emergency lockout'],
      price: 'From $89',
    },
    {
      category: 'keys',
      icon: Key,
      title: 'Home Key Duplication',
      description: 'Residential key cutting and duplication services with precision and quality.',
      features: ['Standard keys', 'High-security keys', 'Mailbox keys', 'Padlock keys'],
      price: 'From $5',
    },
    {
      category: 'accessories',
      icon: Headphones,
      title: 'Audio Device Repair',
      description: 'Repair services for headphones, earbuds, speakers, and audio accessories.',
      features: ['Wire replacement', 'Jack repair', 'Battery replacement', 'Driver replacement'],
      price: 'From $29',
    },
    {
      category: 'accessories',
      icon: Gamepad,
      title: 'Gaming Console Repair',
      description: 'Professional repair services for PlayStation, Xbox, Nintendo Switch, and gaming accessories.',
      features: ['Controller repair', 'Disk drive issues', 'HDMI port repair', 'Overheating fixes'],
      price: 'From $59',
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Repair Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional tech repair services with fast turnaround times, quality parts, 
              and comprehensive warranties. We fix it right the first time.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-[var(--shadow-medium)]'
                      : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground shadow-[var(--shadow-soft)]'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.title}
                  className="service-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-accent w-full">
                    Get Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Services;