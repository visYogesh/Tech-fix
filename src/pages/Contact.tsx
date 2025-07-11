import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', deviceType: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '(555) 123-4567',
      subtext: 'Mon-Fri 9AM-6PM, Sat 10AM-4PM',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@techfixpro.com',
      subtext: '24/7 email support',
    },
    {
      icon: MapPin,
      title: 'Location',
      info: '123 Tech Street',
      subtext: 'City, ST 12345',
    },
    {
      icon: Clock,
      title: 'Hours',
      info: 'Mon-Fri: 9AM-6PM',
      subtext: 'Sat: 10AM-4PM, Sun: Closed',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-green-500">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to get your device repaired? Contact us today for a free quote 
              or to schedule your repair service.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="service-card text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground font-medium mb-1">{item.info}</p>
                  <p className="text-muted-foreground text-sm">{item.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your inquiry. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Device Type</label>
                      <Select value={formData.deviceType} onValueChange={(value) => handleInputChange('deviceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select device type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="smartphone">Smartphone</SelectItem>
                          <SelectItem value="tablet">Tablet</SelectItem>
                          <SelectItem value="laptop">Laptop</SelectItem>
                          <SelectItem value="desktop">Desktop Computer</SelectItem>
                          <SelectItem value="car-key">Car Key</SelectItem>
                          <SelectItem value="home-key">Home Key</SelectItem>
                          <SelectItem value="headphones">Headphones/Audio</SelectItem>
                          <SelectItem value="gaming">Gaming Console</SelectItem>
                          <SelectItem value="other">Other Electronics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Describe the issue with your device and any additional details..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="btn-hero w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Choose TechFix Pro?</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Free Diagnostics', desc: 'We provide honest, upfront assessments at no cost.' },
                      { title: 'Fast Turnaround', desc: 'Most repairs completed within 24-48 hours.' },
                      { title: 'Quality Guarantee', desc: '90-day warranty on all repairs and parts.' },
                      { title: 'Transparent Pricing', desc: 'No hidden fees or surprise charges.' },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-card bg-primary/5 border-primary/20">
                  <h3 className="text-lg font-semibold mb-3">Emergency Repairs</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Need your device fixed urgently? We offer same-day emergency repair services 
                    for critical situations.
                  </p>
                  <Button className="btn-accent">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: (555) 123-4567
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="service-card">
              <h3 className="text-xl font-semibold mb-4 text-center">Visit Our Store</h3>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Interactive map coming soon<br />
                    123 Tech Street, City, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default Contact;
