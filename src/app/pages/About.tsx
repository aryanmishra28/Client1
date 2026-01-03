import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Target, Award, TrendingUp, Shield, Heart, Sparkles, Star } from 'lucide-react';
import profileImage from '../../files/Profile.png';

export function About() {
  const values = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Client-First Approach',
      description: 'Your financial goals are our top priority. We provide personalized solutions tailored to your unique needs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Transparency',
      description: 'Complete transparency in our services and pricing. No hidden charges, no surprises.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Expertise',
      description: 'SEBI registered advisor with proven track record in financial planning and wealth management.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable results and helping you achieve your financial objectives.',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const certifications = [
    { name: 'SEBI Registered', desc: 'Investment Advisor', icon: <Shield className="w-6 h-6" /> },
    { name: 'AMFI Certified', desc: 'Mutual Fund Advisor', icon: <Award className="w-6 h-6" /> },
    // { name: 'IRDA Licensed', desc: 'Insurance Advisor', icon: <Heart className="w-6 h-6" /> },
    // { name: 'CFP Certified', desc: 'Financial Planner', icon: <Star className="w-6 h-6" /> },
  ];

  return (
    <div className="w-full py-16 px-4 bg-muted/30 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">About Ridhaan Investments</span>
          </div>
          <h1 className="text-4xl md:text-6xl text-foreground mb-4">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in wealth creation and financial planning
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
            <ImageWithFallback
              src={profileImage}
              alt="Aniket Shukla - Financial Advisor"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover relative z-10"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
              Meet Aniket Shukla
            </h2>
            <p className="text-muted-foreground mb-4">
              Welcome to <strong className="text-foreground">Ridhaan Investments</strong>, your trusted partner for comprehensive financial planning and wealth management services. Founded and led by Aniket Shukla, we are dedicated to helping individuals and families across India achieve their financial dreams.
            </p>
            <p className="text-muted-foreground mb-4">
              With years of experience and expertise in the financial services industry, Aniket brings a client-first approach to every interaction. As a SEBI registered advisor and certified financial planner, he provides personalized solutions tailored to your unique financial goals.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you're looking to invest in mutual funds, plan for retirement, secure insurance coverage, or need assistance with tax filing - Ridhaan Investments offers a complete suite of financial services under one roof.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg">
                <p className="text-sm">✓ SEBI Registered</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg">
                <p className="text-sm">✓ AMFI Certified</p>
              </div>
              {/* <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg">
                <p className="text-sm">✓ IRDA Licensed</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The principles that guide every decision we make
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all border-2 hover:border-blue-500 dark:hover:border-blue-400 group">
                <div className={`inline-block p-4 bg-gradient-to-br ${value.color} rounded-xl mb-4 transform group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Regulated and certified by leading financial authorities in India
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-card to-muted/30 border-2 border-border hover:border-blue-500 dark:hover:border-blue-400 transition-all">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-blue-600 dark:text-blue-400">{cert.icon}</div>
                </div>
                <h3 className="text-lg text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-slate-950 text-white rounded-2xl p-8 md:p-12 border-2 border-blue-500 shadow-2xl">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            Our Achievements
          </h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-2">
                <p className="text-4xl md:text-5xl">500+</p>
              </div>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-2">
                <p className="text-4xl md:text-5xl">₹50Cr+</p>
              </div>
              <p className="text-blue-100">Assets Managed</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-2">
                <p className="text-4xl md:text-5xl">10+</p>
              </div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-2">
                <p className="text-4xl md:text-5xl">99%</p>
              </div>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="p-8 border-2 border-border hover:border-blue-500 dark:hover:border-blue-400 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower individuals and families to achieve financial independence through expert guidance, transparent practices, and personalized financial solutions. We strive to make quality financial planning accessible to everyone.
            </p>
          </Card>
          <Card className="p-8 border-2 border-border hover:border-green-500 dark:hover:border-green-400 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be India's most trusted financial advisory firm, known for our client-first approach, ethical practices, and commitment to delivering measurable results. We envision a future where every Indian has access to professional financial guidance.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
