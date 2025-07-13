import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-blockchain.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary glow-text">Big Moves</span>
                <br />
                <span className="text-foreground">Real Proofs!</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                FinScope analyzes user profiles based on blockchain data, classifies them according to 
                project-specific metrics, and enables projects to launch campaigns that directly engage 
                with these users.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline-glow" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Analyzed Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Networks</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative glass-card p-8 float-animation">
              <img 
                src={heroImage} 
                alt="Blockchain Data Analysis" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card p-4 rounded-lg pulse-glow">
                <div className="text-primary font-bold text-lg">98%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-lg pulse-glow">
                <div className="text-primary font-bold text-lg">Real-time</div>
                <div className="text-xs text-muted-foreground">Analysis</div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;