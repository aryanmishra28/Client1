import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TrendingUp, Shield, FileText, PiggyBank, Calculator, Users } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function Home() {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Mutual Fund Advisory',
      description: 'Expert guidance on mutual fund selection and portfolio management',
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: 'SIP Planning',
      description: 'Systematic Investment Plans tailored to your financial goals',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Insurance Solutions',
      description: 'Comprehensive health and life insurance planning',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'ITR Filing',
      description: 'Hassle-free income tax return filing services',
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Tax Planning',
      description: 'Strategic tax optimization and planning solutions',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Retirement Planning',
      description: 'Secure your future with comprehensive retirement planning',
    },
  ];

  const whyChooseUs = [
    { title: 'Expert Advisors', description: 'SEBI registered advisors with 10+ years experience' },
    { title: 'Client-Centric', description: 'Personalized solutions for your unique needs' },
    { title: 'Transparent Pricing', description: 'No hidden charges, complete transparency' },
    { title: 'Comprehensive Services', description: 'All-in-one financial planning solutions' },
  ];

  const testimonials = [
    {
      name: 'Aryan Mishra',
      role: 'Software Engineer',
      text: 'Excellent service! Their SIP planning helped me build a solid investment portfolio.',
    },
    {
      name: 'Jyoti Shukla',
      role: 'Business Owner',
      text: 'Professional and trustworthy. They made my tax filing stress-free.',
    },
    {
      name: 'Amit Patel',
      role: 'Marketing Manager',
      text: 'Their retirement planning advice gave me peace of mind about my future.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Your Trusted Partner at Ridhaan Investments
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert services from Ridhaan Investments for wealth creation, tax planning, and secure future
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 w-full sm:w-auto">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link to="/calculators">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Start SIP
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NjMyOTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ridhaan Investments"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive financial solutions for all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-[#1e3a8a] mb-4">{service.icon}</div>
                <h3 className="text-xl mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Your financial success is our priority
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#22c55e] rounded-full"></div>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications/Trust Badges */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-8">
            Certified & Trusted
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-[#1e3a8a]">SEBI Registered</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-[#1e3a8a]">AMFI Certified</p>
            </div>
            {/* <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-[#1e3a8a]">IRDA Licensed</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-[#1e3a8a]">CFP Certified</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
