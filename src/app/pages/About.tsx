import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Client-First Approach',
      description: 'Your financial goals are our top priority. We provide personalized solutions tailored to your unique needs.',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Transparency',
      description: 'Complete transparency in our services and pricing. No hidden charges, no surprises.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Expertise',
      description: 'SEBI registered advisor with decades of experience in financial planning.',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable results and helping you achieve your financial objectives.',
    },
  ];

  const team = [
    { name: 'Aniket Shukla', role: 'Founder & CEO', qualification: 'SEBI Registered Investment Advisor' },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in wealth creation and financial planning
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765735049473-7cb6466e5b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjYyODczODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our Founder"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, Ridhaan Investments has been helping individuals and families across India achieve their financial dreams. What started as a small consultancy has grown into a trusted name in financial planning and wealth management.
            </p>
            <p className="text-gray-600 mb-4">
              With over 100+ satisfied clients and ₹5+ crores of assets under advisory, we take pride in our client-first approach and commitment to ethical financial practices.
            </p>
            <p className="text-gray-600">
              As a SEBI registered advisor, I bring decades of experience in mutual funds, insurance, tax planning, and retirement solutions.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 bg-[#1e3a8a]/10 rounded-full mb-4">
                  <div className="text-[#1e3a8a]">{value.icon}</div>
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-gray-900 mb-12">
            Meet Our Founder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-24 h-24 bg-[#1e3a8a]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-[#1e3a8a] mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.qualification}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl mb-2">100+</p>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl mb-2">₹5Cr+</p>
              <p className="text-blue-100">Assets Under Advisory</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl mb-2">3+</p>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl mb-2">99%</p>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
