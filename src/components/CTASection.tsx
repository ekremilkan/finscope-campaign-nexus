import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-black-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 text-center max-w-4xl mx-auto glow-border">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-xl pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Launch Your <span className="text-primary glow-text">Next Campaign?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Join the future of blockchain marketing. Start reaching your ideal users with 
              precision targeting and data-driven insights today.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Users Ready</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">6</div>
                <div className="text-sm text-muted-foreground">Networks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline-glow" size="xl" className="group">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                🚀 <span className="text-primary font-medium">Join the future of decentralized marketing</span> • 
                No setup fees • Start in minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;