import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const tiers = [
    {
      name: "Tier A Users",
      icon: Crown,
      price: "$0.15",
      description: "High-value users with significant DeFi activity",
      features: [
        "Trading volume > $100k",
        "Active in 5+ protocols",
        "Liquidity mining experience",
        "Premium wallet holders",
        "Early adopter profile"
      ],
      popular: false,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Tier B Users", 
      icon: Star,
      price: "$0.08",
      description: "Engaged users with moderate DeFi experience",
      features: [
        "Trading volume $10k-$100k",
        "Active in 2-4 protocols", 
        "Regular DeFi participation",
        "Growing portfolio",
        "Medium engagement"
      ],
      popular: true,
      color: "from-primary to-primary-glow"
    },
    {
      name: "Tier C Users",
      icon: Zap,
      price: "$0.04",
      description: "New users exploring DeFi opportunities",
      features: [
        "Trading volume $1k-$10k",
        "Active in 1-2 protocols",
        "Basic DeFi knowledge",
        "Learning phase",
        "Growth potential"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary glow-text">Pay Only</span> for Results
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transparent, tier-based pricing with no setup fees. Choose your target audience 
            and pay only for successful user engagements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative group ${tier.popular ? 'scale-105' : ''}`}>
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`glass-card p-8 h-full hover:glow-border transition-all duration-300 ${tier.popular ? 'border-primary/50' : ''}`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${tier.color} mb-4`}>
                    <tier.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                  
                  <div className="text-4xl font-bold text-primary mb-1">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">per successful engagement</div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={tier.popular ? "hero" : "outline-glow"} 
                  size="lg" 
                  className="w-full"
                >
                  Target {tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Enterprise Solutions</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Need custom user classifications, bulk campaigns, or dedicated support? 
            Our enterprise solutions are tailored for large-scale crypto projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-2">Custom Analytics</div>
              <div className="text-sm text-muted-foreground">Project-specific metrics and KPIs</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary mb-2">Dedicated Support</div>
              <div className="text-sm text-muted-foreground">Priority support and account management</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary mb-2">Volume Discounts</div>
              <div className="text-sm text-muted-foreground">Special pricing for large campaigns</div>
            </div>
          </div>

          <Button variant="outline-glow" size="lg">
            Contact Sales
          </Button>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-primary font-medium">No setup fees</span> • 
            <span className="text-primary font-medium mx-2">No monthly subscriptions</span> • 
            <span className="text-primary font-medium">Pay per result</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;