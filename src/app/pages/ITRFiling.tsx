import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, CircleCheck, Clock, Shield } from 'lucide-react';

export function ITRFiling() {
  const itrTypes = [
    {
      form: 'ITR-1 (Sahaj)',
      suitableFor: 'Salaried individuals with income from salary, one house property, and other sources',
    },
    {
      form: 'ITR-2',
      suitableFor: 'Individuals and HUFs not having income from business or profession',
    },
    {
      form: 'ITR-3',
      suitableFor: 'Individuals and HUFs having income from business or profession',
    },
    {
      form: 'ITR-4 (Sugam)',
      suitableFor: 'Presumptive income from business and profession',
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Expert Filing',
      description: 'Experienced CAs handle your ITR filing with complete accuracy',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Processing',
      description: 'Fast turnaround time with doorstep document pickup',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Tax Optimization',
      description: 'Maximize your refunds with legal tax-saving strategies',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Full Support',
      description: 'End-to-end support from filing to acknowledgment',
    },
  ];

  const documents = [
    'PAN Card',
    'Aadhaar Card',
    'Form 16 / Salary Slips',
    'Bank Statements',
    'Investment Proofs (80C, 80D, etc.)',
    'Capital Gains Statements',
    'Interest Certificates',
    'Previous Year ITR (if applicable)',
  ];

  const pricing = [
    { plan: 'Basic', price: '₹499', features: ['ITR-1', 'Salary Income', 'One Property', 'Email Support'] },
    { plan: 'Standard', price: '₹999', features: ['ITR-2/ITR-3', 'Multiple Sources', 'Capital Gains', 'Phone Support'] },
    { plan: 'Premium', price: '₹1,999', features: ['All ITR Forms', 'Business Income', 'Tax Planning', 'Priority Support'] },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            ITR Filing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hassle-free income tax return filing with expert assistance
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

        {/* ITR Forms */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-gray-900 mb-8">
            Which ITR Form Do You Need?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itrTypes.map((itr, index) => (
              <Card key={index} className="p-6 hover:border-[#1e3a8a] transition-colors">
                <h3 className="text-xl text-[#1e3a8a] mb-3">{itr.form}</h3>
                <p className="text-gray-600">{itr.suitableFor}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-gray-900 mb-8">
            Documents Required
          </h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-gray-900 mb-8">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <Card key={index} className={`p-6 ${index === 1 ? 'border-[#1e3a8a] border-2' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl text-gray-900 mb-2">{plan.plan}</h3>
                  <p className="text-4xl text-[#1e3a8a]">{plan.price}</p>
                  <p className="text-sm text-gray-500 mt-1">Per Filing</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className={`w-full ${index === 1 ? 'bg-[#1e3a8a] hover:bg-[#1e3a8a]/90' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">1</div>
              <h3 className="text-xl text-gray-900 mb-2">Submit Details</h3>
              <p className="text-gray-600">Fill the form and upload documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">2</div>
              <h3 className="text-xl text-gray-900 mb-2">Expert Review</h3>
              <p className="text-gray-600">Our CA reviews your documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">3</div>
              <h3 className="text-xl text-gray-900 mb-2">ITR Filing</h3>
              <p className="text-gray-600">We file your ITR electronically</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">4</div>
              <h3 className="text-xl text-gray-900 mb-2">Acknowledgment</h3>
              <p className="text-gray-600">Receive ITR-V and confirmation</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Don't Wait! File Your ITR Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Deadline approaching? Our experts are here to help you file on time
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100">
              Start Filing Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}