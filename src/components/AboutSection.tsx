import React from 'react';
import { Brain, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Analyze User Profiles",
      description: "Deep blockchain data analysis to understand user behavior, transaction patterns, and DeFi activity across multiple networks."
    },
    {
      icon: Target,
      title: "Smart Classification",
      description: "AI-powered segmentation system that classifies users into A, B, C, D tiers based on project-specific metrics and engagement levels."
    },
    {
      icon: Zap,
      title: "Direct Engagement",
      description: "Launch targeted campaigns that reach your ideal users with precision, maximizing conversion rates and ROI."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What is <span className="text-primary glow-text">FinScope</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            In simple terms, FinScope is your gateway to precision blockchain marketing. 
            We transform raw blockchain data into actionable user insights, enabling projects 
            to connect with their ideal audience like never before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="glass-card p-8 h-full text-center hover:glow-border transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Ready to discover your ideal users?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the revolution in blockchain marketing and start reaching users who truly matter to your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;