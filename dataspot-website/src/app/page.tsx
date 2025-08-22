'use client'

import { useState, useEffect } from 'react'

export default function DataSpotLanding() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights from your data with our lightning-fast processing engine.',
      icon: '⚡'
    },
    {
      title: 'AI-Powered Insights',
      description: 'Discover hidden patterns and trends with advanced machine learning algorithms.',
      icon: '🧠'
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with SOC 2 Type II and GDPR compliance built-in.',
      icon: '🔒'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with 500+ data sources and tools you already use.',
      icon: '🔗'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: ['Up to 10K records', 'Basic analytics', 'Email support', '1 user'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: ['Up to 100K records', 'Advanced analytics', 'Priority support', '5 users', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited records', 'Custom solutions', 'Dedicated support', 'Unlimited users', 'SLA guarantee'],
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'How does DataSpot handle data security?',
      answer: 'DataSpot uses end-to-end encryption, SOC 2 Type II compliance, and regular security audits to ensure your data remains protected at all times.'
    },
    {
      question: 'Can I integrate DataSpot with my existing tools?',
      answer: 'Yes! DataSpot integrates with over 500+ tools including popular databases, CRMs, and business intelligence platforms.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 email support for all plans, with priority support and dedicated account managers for Professional and Enterprise plans.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required.'
    }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former Google data scientist with 10+ years in analytics'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Ex-Microsoft engineer specializing in big data systems'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Product',
      bio: 'Led product teams at Salesforce and Tableau'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              Data<span className="text-gray-400">Spot</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
              <a href="#demo" className="hover:text-gray-300 transition-colors">Demo</a>
              <a href="#pricing" className="hover:text-gray-300 transition-colors">Pricing</a>
              <a href="#team" className="hover:text-gray-300 transition-colors">Team</a>
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="hover:text-gray-300">Features</a>
                <a href="#demo" className="hover:text-gray-300">Demo</a>
                <a href="#pricing" className="hover:text-gray-300">Pricing</a>
                <a href="#team" className="hover:text-gray-300">Team</a>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Unlock the Power of
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"> Your Data</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transform raw data into actionable insights with AI-powered analytics that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
              Watch Demo
            </button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 flex justify-center items-center space-x-8 text-gray-400">
            <span>Trusted by 1000+ companies</span>
            <div className="flex space-x-4">
              <span className="text-sm">TechCorp</span>
              <span className="text-sm">DataFlow</span>
              <span className="text-sm">CloudSync</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-400">Powerful features to accelerate your data journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See DataSpot in Action</h2>
            <p className="text-xl text-gray-400">Experience the power of intelligent data analytics</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-800 rounded-full p-1">
              {['overview', 'analytics', 'insights'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeTab === tab ? 'bg-white text-black' : 'text-gray-400'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-8">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Real-time Dashboard</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="text-3xl font-bold text-green-400">2.4M</div>
                    <div className="text-gray-400">Records Processed</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="text-3xl font-bold text-blue-400">98.7%</div>
                    <div className="text-gray-400">Accuracy Rate</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="text-3xl font-bold text-purple-400">45ms</div>
                    <div className="text-gray-400">Avg Response Time</div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Advanced Analytics</h3>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-2"></div>
                    <p className="text-gray-400">Revenue trends over time</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded mb-2"></div>
                    <p className="text-gray-400">Customer segmentation analysis</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'insights' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">AI Insights</h3>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-semibold mb-2">Key Finding</h4>
                    <p className="text-gray-400">Customer churn reduced by 23% after implementing predictive analytics</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <h4 className="font-semibold mb-2">Recommendation</h4>
                    <p className="text-gray-400">Focus marketing efforts on users aged 25-34 for 40% higher conversion rates</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`border rounded-lg p-8 ${plan.popular ? 'border-white bg-gray-900' : 'border-gray-800'}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-colors ${
                  plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'border border-white hover:bg-white hover:text-black'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The experts behind DataSpot</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="border border-gray-800 rounded-lg p-6">
                <summary className="cursor-pointer font-semibold text-lg">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Data<span className="text-gray-400">Spot</span></h3>
              <p className="text-gray-400 mb-4">Transform your data into actionable insights.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DataSpot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
