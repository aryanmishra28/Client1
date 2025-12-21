import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, FileText, PiggyBank, Calculator, Users, ArrowRight, CircleCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Mutual Fund Advisory',
      description: 'Get personalized mutual fund recommendations based on your risk profile and financial goals. Our expert advisors help you select the right funds from equity, debt, and hybrid categories.',
      features: ['Portfolio Analysis', 'Fund Selection', 'Regular Rebalancing', 'Performance Tracking'],
      image: 'https://images.unsplash.com/photo-1654504514858-ab527fa95238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR1YWwlMjBmdW5kJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NjYyOTQ4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <PiggyBank className="w-12 h-12" />,
      title: 'SIP Planning',
      description: 'Start your systematic investment journey with our comprehensive SIP planning services. Build wealth gradually through disciplined monthly investments.',
      features: ['Goal-based Planning', 'Auto-debit Setup', 'Monthly Monitoring', 'Tax Benefits'],
      image: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGNoYXJ0fGVufDF8fHx8MTc2NjIzNDUxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Health Insurance',
      description: 'Comprehensive health insurance solutions to protect you and your family from medical emergencies. Compare and choose from top insurance providers.',
      features: ['Policy Comparison', 'Claim Assistance', 'Renewal Support', 'Family Floater Plans'],
      image: 'https://images.unsplash.com/photo-1542665093852-744c79500d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with the right life insurance coverage. Term plans, ULIPs, and endowment policies tailored to your needs.',
      features: ['Term Insurance', 'ULIPs', 'Endowment Plans', 'Claim Support'],
      image: 'https://images.unsplash.com/photo-1542665093852-744c79500d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'ITR Filing',
      description: 'Hassle-free income tax return filing services for individuals and businesses. Maximize your refunds and ensure compliance with tax laws.',
      features: ['All ITR Forms', 'Tax Optimization', 'Quick Processing', 'Documentation Support'],
      image: 'https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NjMyOTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize your tax liability legally. Expert advice on Section 80C, 80D, and other tax-saving options.',
      features: ['Tax Saving Strategies', 'Investment Planning', 'Deduction Optimization', 'Year-round Support'],
      image: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGNoYXJ0fGVufDF8fHx8MTc2NjIzNDUxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Retirement Planning',
      description: 'Secure your golden years with comprehensive retirement planning. Calculate your retirement corpus and create a sustainable withdrawal strategy.',
      features: ['Corpus Calculation', 'Investment Strategy', 'Pension Plans', 'Estate Planning'],
      image: 'https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBzYXZpbmdzfGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to help you achieve your financial goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="text-[#1e3a8a] mb-4">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CircleCheck className="w-4 h-4 text-[#22c55e]" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert advisors and take the first step towards financial freedom
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}