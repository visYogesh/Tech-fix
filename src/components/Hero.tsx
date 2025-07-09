import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import heroImage from '@/assets/hero-repair.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional tech repair services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            {/* Tagline */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Trusted Tech Repair Experts</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                Get Your Device{' '}
                <span className="gradient-text text-black">Fixed Fast</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Professional repair services for smartphones, laptops, car keys, and electronics. 
                Fast turnaround, quality guaranteed.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-hero inline-flex items-center justify-center bg-green-500">
                Book Repair Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-secondary inline-flex items-center justify-center bg-red-500">
                View Services
              </Link>
            </div>


            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">24-48hr Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">90-Day Warranty</span>
              </div>
            </div>
          </div>

          {/* Right side - Additional content can be added here */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;