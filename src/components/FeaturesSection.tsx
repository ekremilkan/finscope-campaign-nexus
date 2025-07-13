import React from 'react';
import { 
  Brain, 
  Target, 
  Network, 
  Zap, 
  BarChart3, 
  Shield,
  DollarSign,
  Users,
  TrendingUp
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Blockchain Data Analysis",
      description: "Deep dive into user behavior patterns, transaction history, and DeFi activity across multiple blockchain networks."
    },
    {
      icon: Target,
      title: "Smart Classification System", 
      description: "AI-powered user segmentation with A, B, C, D tier classifications based on engagement and value metrics."
    },
    {
      icon: Network,
      title: "Multi-Chain Support",
      description: "Comprehensive coverage across Ethereum, Solana, Tron, BNB Chain, SUI, and Base networks."
    },
    {
      icon: Zap,
      title: "Real-time Campaigns",
      description: "Launch and manage targeted campaigns with instant user engagement and real-time performance monitoring."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed campaign insights with conversion tracking, ROI analysis, and user engagement metrics."
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Blockchain-based verification ensures data integrity and transparent campaign performance tracking."
    }
  ];

  const highlights = [
    {
      icon: DollarSign,
      stat: "Average 300%",
      description: "ROI improvement for targeted campaigns"
    },
    {
      icon: Users,
      stat: "10,000+",
      description: "Classified user profiles ready for targeting"
    },
    {
      icon: TrendingUp,
      stat: "98%",
      description: "Classification accuracy with AI-powered analysis"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Key <span className="text-primary glow-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Powerful tools and advanced analytics designed to revolutionize how crypto projects 
            connect with their ideal users through blockchain data insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="glass-card p-8 h-full hover:glow-border transition-all duration-300">
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

        {/* Highlights Section */}
        <div className="glass-card p-8 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose <span className="text-primary">FinScope?</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the power of precision targeting with industry-leading performance metrics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{highlight.stat}</div>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;