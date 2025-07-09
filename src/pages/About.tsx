// import { Shield, Award, Users, Clock, Star, Wrench } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const About = () => {
//   const stats = [
//     { icon: Users, number: '5,000+', label: 'Happy Customers' },
//     { icon: Wrench, number: '15,000+', label: 'Devices Repaired' },
//     { icon: Star, number: '4.9/5', label: 'Average Rating' },
//     { icon: Clock, number: '24-48hr', label: 'Average Turnaround' },
//   ];

//   const values = [
//     {
//       icon: Shield,
//       title: 'Quality Guaranteed',
//       description: 'We use only premium parts and provide comprehensive warranties on all repairs.',
//     },
//     {
//       icon: Clock,
//       title: 'Fast Service',
//       description: 'Most repairs completed within 24-48 hours with our efficient workflow.',
//     },
//     {
//       icon: Award,
//       title: 'Expert Technicians',
//       description: 'Certified professionals with years of experience in tech repair services.',
//     },
//     {
//       icon: Users,
//       title: 'Customer Focus',
//       description: 'Transparent pricing, honest diagnostics, and exceptional customer service.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
      
//       <main className="pt-16">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center space-y-6">
//               <h1 className="text-4xl md:text-5xl font-bold">
//                 About <span className="gradient-text text-red-400">TechFix Pro</span>
//               </h1>
//               <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
//                 Your trusted technology repair partner, delivering professional service 
//                 and quality solutions since 2018.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-16 bg-secondary/30">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.label}
//                   className="text-center animate-fade-up"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <stat.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
//                   <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Story Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <h2 className="text-3xl md:text-4xl font-bold">
//                   Our Story
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Founded in 2018, TechFix Pro started as a small repair shop with a simple mission: 
//                   to provide honest, reliable, and affordable tech repair services to our community.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   What began as a two-person operation has grown into a trusted repair center 
//                   serving thousands of customers. Our commitment to quality, transparency, and 
//                   customer satisfaction has made us the go-to choice for tech repairs in the area.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Today, we continue to expand our services while maintaining the personal touch 
//                   and attention to detail that our customers have come to expect. From the latest 
//                   smartphones to vintage electronics, we treat every device with the same care.
//                 </p>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-4">
//                   <div className="service-card text-center">
//                     <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
//                     <h3 className="font-semibold mb-2">Certified Repairs</h3>
//                     <p className="text-sm text-muted-foreground">Industry-standard repair processes</p>
//                   </div>
//                   <div className="service-card text-center">
//                     <Award className="h-8 w-8 text-accent mx-auto mb-3" />
//                     <h3 className="font-semibold mb-2">Quality Parts</h3>
//                     <p className="text-sm text-muted-foreground">Premium replacement components</p>
//                   </div>
//                 </div>
//                 <div className="space-y-4 mt-8">
//                   <div className="service-card text-center">
//                     <Clock className="h-8 w-8 text-success mx-auto mb-3" />
//                     <h3 className="font-semibold mb-2">Fast Service</h3>
//                     <p className="text-sm text-muted-foreground">Quick turnaround times</p>
//                   </div>
//                   <div className="service-card text-center">
//                     <Users className="h-8 w-8 text-primary mx-auto mb-3" />
//                     <h3 className="font-semibold mb-2">Expert Team</h3>
//                     <p className="text-sm text-muted-foreground">Skilled technicians</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className="py-20 bg-secondary/30">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center space-y-4 mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold">
//                 Our Values
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 The principles that guide everything we do and every service we provide.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <div
//                   key={value.title}
//                   className="service-card text-center"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <value.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="max-w-3xl mx-auto space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold">
//                 Ready to Experience the TechFix Pro Difference?
//               </h2>
//               <p className="text-lg text-muted-foreground">
//                 Join thousands of satisfied customers who trust us with their tech repair needs.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="btn-hero bg-green-500 text-black">Get Started Today</button>
//                 <button className="btn-secondary bg-red-500 text-black">View Our Services</button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* <Footer /> */}
//     </div>
//   );
// };

const About = () => {
  return (
    <h1>
      hi
    </h1>
  )
}
export default About;