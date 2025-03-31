
import { SectionHeading } from "@/components/ui-components/SectionHeading";
import { Info, Users, Star, Heart, MapPin } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="page-container py-12 md:py-16">
      <SectionHeading
        title="About Zomana"
        subtitle="Our story, mission, and values"
        className="mb-12"
      />

      {/* Hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2015, Zomana began with a simple idea: to create a shopping experience that 
            combines quality, affordability, and exceptional customer service. What started as a 
            small online store has grown into a trusted e-commerce destination for shoppers 
            worldwide.
          </p>
          <p className="text-muted-foreground">
            Our journey has been shaped by our commitment to innovation and our passion for 
            meeting the evolving needs of our customers. Today, we offer thousands of products 
            across multiple categories, all carefully selected to ensure they meet our high standards.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72" 
            alt="Zomana team meeting" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mission and Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Our Mission & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-subtle">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Quality First</h3>
            <p className="text-muted-foreground">
              We rigorously test and evaluate all products to ensure they meet our quality standards.
              We believe in selling only what we would use ourselves.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-subtle">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Customer Focused</h3>
            <p className="text-muted-foreground">
              Our customers are at the heart of everything we do. We continuously seek feedback
              and improve our services to exceed expectations.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-subtle">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Community Impact</h3>
            <p className="text-muted-foreground">
              We believe business should be a force for good. That's why we invest in sustainable
              practices and give back to the communities we serve.
            </p>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Alex Morgan",
              role: "CEO & Founder",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            },
            {
              name: "Taylor Chen",
              role: "Chief Operations Officer",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            },
            {
              name: "Jordan Smith",
              role: "Head of Product",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            },
            {
              name: "Riley Johnson",
              role: "Customer Experience Lead",
              image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            }
          ].map((member, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-subtle">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-muted rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            We'd love to hear from you. Whether you have a question about our products, 
            need help with an order, or want to explore partnership opportunities, our team 
            is here to help.
          </p>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <span>123 Commerce St, Market City</span>
          </div>
          <div className="flex justify-center">
            <a 
              href="mailto:hello@zomana.com" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
