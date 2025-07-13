import React from 'react';
import networksImage from '@/assets/networks.jpg';

const NetworksSection = () => {
  const networks = [
    {
      name: "Ethereum",
      symbol: "ETH",
      description: "The world's leading smart contract platform",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Solana", 
      symbol: "SOL",
      description: "High-performance blockchain for DeFi",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Tron",
      symbol: "TRX", 
      description: "Decentralized entertainment ecosystem",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "BNB Chain",
      symbol: "BNB",
      description: "Fast and low-cost smart contracts",
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "SUI",
      symbol: "SUI",
      description: "Next-generation smart contract platform",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Base",
      symbol: "BASE",
      description: "Coinbase's L2 scaling solution",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section id="networks" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Supported <span className="text-primary glow-text">Networks</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Multi-chain compatibility for maximum reach. Access users across the most 
            popular blockchain networks with unified analytics and targeting.
          </p>
        </div>

        {/* Networks Visual */}
        <div className="mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <img 
              src={networksImage} 
              alt="Supported Blockchain Networks" 
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Networks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networks.map((network, index) => (
            <div key={index} className="group">
              <div className="glass-card p-6 hover:glow-border transition-all duration-300 cursor-pointer">
                {/* Network Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {network.name}
                    </h3>
                    <span className="text-sm text-primary font-medium">{network.symbol}</span>
                  </div>
                  
                  {/* Icon Placeholder */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${network.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">
                      {network.symbol.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {network.description}
                </p>

                {/* Stats */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="text-primary font-medium">
                      {Math.floor(Math.random() * 5000) + 1000}+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Multi-Chain Analytics
            </h3>
            <p className="text-muted-foreground mb-6">
              Get comprehensive insights across all major blockchain networks. 
              Our unified platform analyzes user behavior patterns regardless of which chain they prefer.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">6</div>
                <div>Networks</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary">Real-time</div>
                <div>Sync</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary">Unified</div>
                <div>Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworksSection;