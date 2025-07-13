import React from 'react';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Networks', href: '#networks' }
  ];

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' }
  ];

  const networks = [
    'Ethereum', 'Solana', 'Tron', 'BNB Chain', 'SUI', 'Base'
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: '#', label: 'Discord' }
  ];

  return (
    <footer className="bg-black-deep pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary glow-text">FinScope</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Built for the decentralized future. Precision blockchain marketing 
              that connects projects with their ideal users through data-driven insights.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {resource.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Networks */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:hello@finscope.io"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@finscope.io
              </a>
            </div>

            <h4 className="text-sm font-semibold text-foreground mb-3">Supported Networks</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {networks.map((network, index) => (
                <span key={index} className="text-muted-foreground">
                  {network}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 FinScope. All rights reserved. Built for the decentralized future.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            {legal.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-primary">
            <span>●</span>
            <span>Powered by blockchain analytics</span>
            <span>●</span>
            <span>Secured by decentralized infrastructure</span>
            <span>●</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;