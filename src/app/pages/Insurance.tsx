import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Heart, Users, House, CircleCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Insurance() {
  const healthPlans = [
    {
      title: 'Individual Health Insurance',
      coverage: 'Up to ₹50 Lakhs',
      features: ['Cashless Treatment', 'Pre & Post Hospitalization', 'Daycare Procedures', 'No Claim Bonus'],
    },
    {
      title: 'Family Floater',
      coverage: 'Up to ₹1 Crore',
      features: ['Covers Entire Family', 'Maternity Benefits', 'New Born Coverage', 'Ambulance Charges'],
    },
    {
      title: 'Critical Illness',
      coverage: 'Up to ₹50 Lakhs',
      features: ['Lump Sum Payout', '36+ Critical Illnesses', 'Survival Period', 'Tax Benefits'],
    },
  ];

  const lifePlans = [
    {
      title: 'Term Insurance',
      coverage: 'Up to ₹5 Crores',
      features: ['High Coverage', 'Low Premium', 'Tax Benefits', 'Accidental Death Benefit'],
    },
    {
      title: 'ULIP',
      coverage: 'Market-Linked Returns',
      features: ['Investment + Insurance', 'Flexible Premiums', 'Partial Withdrawals', 'Tax Free Returns'],
    },
    {
      title: 'Endowment Plans',
      coverage: 'Guaranteed Returns',
      features: ['Maturity Benefits', 'Bonus Additions', 'Loan Facility', 'Tax Benefits'],
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Comprehensive Coverage',
      description: 'Wide range of insurance products from top insurers',
    },
    {
      icon: <CircleCheck className="w-10 h-10" />,
      title: 'Easy Claims',
      description: 'Hassle-free claim assistance and support',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Expert Advice',
      description: 'Personalized recommendations based on your needs',
    },
    {
      icon: <House className="w-10 h-10" />,
      title: 'Policy Management',
      description: 'Regular policy reviews and renewal reminders',
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Insurance Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protect yourself and your loved ones with comprehensive insurance coverage
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-[#1e3a8a]/10 rounded-full mb-4">
                <div className="text-[#1e3a8a]">{benefit.icon}</div>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Health Insurance */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div className="flex flex-col justify-center">
              <div className="inline-block p-3 bg-[#22c55e]/10 rounded-lg w-fit mb-4">
                <Heart className="w-10 h-10 text-[#22c55e]" />
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">
                Health Insurance
              </h2>
              <p className="text-gray-600 mb-4">
                Medical emergencies can happen anytime. Protect yourself and your family with comprehensive health insurance coverage that covers hospitalization, surgeries, and critical illnesses.
              </p>
              <p className="text-gray-600">
                Our health insurance plans offer cashless treatment at 10,000+ network hospitals across India, tax benefits under Section 80D, and coverage for pre and post-hospitalization expenses.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542665093852-744c79500d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Health Insurance"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthPlans.map((plan, index) => (
              <Card key={index} className="p-6 hover:border-[#22c55e] transition-colors">
                <h3 className="text-xl text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-2xl text-[#22c55e] mb-4">{plan.coverage}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90">
                    Get Quote
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Life Insurance */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542665093852-744c79500d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Life Insurance"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-block p-3 bg-[#1e3a8a]/10 rounded-lg w-fit mb-4">
                <Shield className="w-10 h-10 text-[#1e3a8a]" />
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">
                Life Insurance
              </h2>
              <p className="text-gray-600 mb-4">
                Secure your family's financial future with life insurance coverage. Get high coverage at affordable premiums and ensure your loved ones are protected even in your absence.
              </p>
              <p className="text-gray-600">
                Choose from term insurance for maximum coverage, ULIPs for investment + protection, or traditional endowment plans for guaranteed returns and maturity benefits.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifePlans.map((plan, index) => (
              <Card key={index} className="p-6 hover:border-[#1e3a8a] transition-colors">
                <h3 className="text-xl text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-2xl text-[#1e3a8a] mb-4">{plan.coverage}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                    Get Quote
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Get the Right Insurance Coverage Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Compare quotes from top insurers and get expert advice on choosing the best policy
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100">
              Request Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}