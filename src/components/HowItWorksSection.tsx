import React from 'react';
import { Database, UserCheck, Rocket, BarChart3 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: Database,
      title: "Data Collection",
      description: "We analyze blockchain activity across Ethereum, Solana, Tron, BNB Chain, SUI, and Base to gather comprehensive user behavior data."
    },
    {
      step: "02", 
      icon: UserCheck,
      title: "User Classification",
      description: "Our AI-powered system classifies users into A, B, C, D tiers based on trading volume, DeFi activity, and project-specific metrics."
    },
    {
      step: "03",
      icon: Rocket,
      title: "Campaign Launch",
      description: "Launch targeted campaigns that reach your classified users directly, ensuring maximum engagement and conversion rates."
    },
    {
      step: "04",
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor campaign performance with real-time analytics, detailed insights, and ROI tracking across all engagement channels."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="text-primary glow-text">FinScope</span> Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our proven 4-step process transforms blockchain data into targeted marketing campaigns 
            that deliver real results for your project.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-lg pulse-glow">
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card p-6 pt-8 lg:pt-6 h-full text-center hover:glow-border transition-all duration-300">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Classification Accuracy</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">5M+</div>
            <div className="text-sm text-muted-foreground">Data Points Analyzed</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">300%</div>
            <div className="text-sm text-muted-foreground">Average ROI Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;