import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const communityTestimonials = [
    {
      name: "Alex Chen",
      role: "DeFi Trader",
      avatar: "AC",
      rating: 5,
      text: "FinScope's targeting is incredibly accurate. I only see campaigns for projects that actually match my trading interests and DeFi activity patterns."
    },
    {
      name: "Sarah Williams", 
      role: "Crypto Enthusiast",
      avatar: "SW",
      rating: 5,
      text: "Finally, a platform that doesn't spam me with irrelevant crypto projects. The user classification system really works!"
    },
    {
      name: "Mike Rodriguez",
      role: "Yield Farmer",
      avatar: "MR", 
      rating: 5,
      text: "Easy to use platform with great user experience. The campaigns I receive are always relevant to my DeFi strategies."
    }
  ];

  const customerTestimonials = [
    {
      company: "DeFiLabs",
      logo: "DL",
      executive: "Jessica Park",
      role: "Marketing Director",
      text: "FinScope improved our user acquisition by 300%. The targeting precision is unmatched in the crypto space."
    },
    {
      company: "ChainVault",
      logo: "CV", 
      executive: "David Kim",
      role: "Growth Lead",
      text: "Better ROI on campaigns and excellent targeting precision. Our conversion rates increased dramatically."
    },
    {
      company: "CryptoFlow",
      logo: "CF",
      executive: "Emma Thompson", 
      role: "CEO",
      text: "The analytics and user insights provided by FinScope are game-changing for our marketing strategy."
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-primary fill-current' : 'text-gray-600'}`} 
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-black-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Community Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="text-primary glow-text">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trusted by crypto enthusiasts, traders, and DeFi users worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityTestimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 hover:glow-border transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary mb-4" />
                
                {/* Rating */}
                <StarRating rating={testimonial.rating} />
                
                {/* Text */}
                <p className="text-muted-foreground my-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="text-primary glow-text">Customers</span> Say
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trusted by leading crypto projects and marketing teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 hover:glow-border transition-all duration-300">
                {/* Company */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{testimonial.logo}</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Quote */}
                <Quote className="h-8 w-8 text-primary mb-4" />
                
                {/* Text */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Executive */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.executive}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-primary">Trusted by the Crypto Community</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Analyzed Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Successful Campaigns</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Partner Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Blockchain Networks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;