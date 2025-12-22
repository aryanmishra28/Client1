import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Shield, 
  FileText, 
  PiggyBank, 
  Calculator, 
  Users, 
  ArrowRight, 
  CircleCheck,
  CreditCard,
  Banknote,
  GraduationCap,
  Building2,
  LineChart,
  Car,
  Heart,
  Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Mutual Fund Advisory',
      description: 'Get personalized mutual fund recommendations based on your risk profile and financial goals. Our expert advisor helps you select the right funds from equity, debt, and hybrid categories.',
      features: ['Portfolio Analysis', 'Fund Selection', 'Regular Rebalancing', 'Performance Tracking'],
      image: 'https://images.unsplash.com/photo-1654504514858-ab527fa95238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR1YWwlMjBmdW5kJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NjYyOTQ4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <PiggyBank className="w-12 h-12" />,
      title: 'SIP Planning',
      description: 'Start your systematic investment journey with our comprehensive SIP planning services. Build wealth gradually through disciplined monthly investments.',
      features: ['Goal-based Planning', 'Auto-debit Setup', 'Monthly Monitoring', 'Tax Benefits'],
      image: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGNoYXJ0fGVufDF8fHx8MTc2NjIzNDUxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Life Insurance & Term Plans',
      description: 'Secure your family\'s financial future with the right life insurance coverage. Term plans, ULIPs, and endowment policies tailored to your needs.',
      features: ['Term Insurance', 'ULIPs', 'Endowment Plans', 'Claim Support'],
      image: 'https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9uJTIwZmFtaWx5fGVufDF8fHx8MTc2NjMxOTY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Health Insurance',
      description: 'Comprehensive health insurance solutions to protect you and your family from medical emergencies. Compare and choose from top insurance providers.',
      features: ['Policy Comparison', 'Claim Assistance', 'Renewal Support', 'Family Floater Plans'],
      image: 'https://images.unsplash.com/photo-1542665093852-744c79500d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Vehicle Insurance',
      description: 'Complete vehicle insurance solutions for cars, bikes, and commercial vehicles. Comprehensive coverage with add-ons for complete protection.',
      features: ['Car Insurance', 'Two-Wheeler Insurance', 'Comprehensive Coverage', 'Zero Depreciation'],
      image: 'https://images.unsplash.com/photo-1542665093852-744c79500d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Banknote className="w-12 h-12" />,
      title: 'Bonds & Fixed Deposits',
      description: 'Safe and secure investment options in government bonds, corporate bonds, and fixed deposits. Guaranteed returns with capital protection.',
      features: ['Government Bonds', 'Corporate Bonds', 'Fixed Deposits', 'Tax-free Bonds'],
      image: 'https://images.unsplash.com/photo-1758227365187-016878604d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib25kcyUyMGludmVzdG1lbnR8ZW58MXx8fHwxNzY2NDE0NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Retirement Planning',
      description: 'Secure your golden years with comprehensive retirement planning. Calculate your retirement corpus and create a sustainable withdrawal strategy.',
      features: ['Corpus Calculation', 'Investment Strategy', 'Pension Plans', 'Estate Planning'],
      image: 'https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBzYXZpbmdzfGVufDF8fHx8MTc2NjMyOTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Child Education Planning',
      description: 'Plan and save for your child\'s education with dedicated investment plans. Ensure your child gets the best education without financial stress.',
      features: ['Education Fund Planning', 'Long-term Investments', 'Goal-based SIPs', 'Insurance Plans'],
      image: 'https://images.unsplash.com/photo-1633360821222-7e8df83639fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzYXZpbmdzfGVufDF8fHx8MTc2NjQxNDQwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'ITR Filing & Tax Planning',
      description: 'Hassle-free income tax return filing services for individuals and businesses. Maximize your refunds and ensure compliance with tax laws.',
      features: ['All ITR Forms', 'Tax Optimization', 'Quick Processing', 'Documentation Support'],
      image: 'https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NjMyOTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Loans & Financing',
      description: 'Get the best loan deals for home, personal, business, and education needs. Competitive interest rates with quick approvals.',
      features: ['Home Loans', 'Personal Loans', 'Business Loans', 'Education Loans'],
      image: 'https://images.unsplash.com/photo-1559067096-d109b66fd5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FuJTIwbW9ydGdhZ2V8ZW58MXx8fHwxNzY2NDE0NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: 'Trading & Demat Services',
      description: 'Start your stock market journey with expert guidance. Demat account opening, trading strategies, and market analysis.',
      features: ['Demat Account', 'Stock Trading', 'Market Analysis', 'Portfolio Review'],
      image: 'https://images.unsplash.com/photo-1719464521902-4dc9595b182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwc3RvY2tzfGVufDF8fHx8MTc2NjQxNDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Credit Cards',
      description: 'Find the best credit cards with rewards, cashback, and exclusive benefits. Compare offers and choose the right card for you.',
      features: ['Card Comparison', 'Rewards Programs', 'Cashback Offers', 'Application Support'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudHxlbnwxfHx8fDE3NjYzNTQwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-rose-500 to-rose-600'
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-muted/30 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Complete Financial Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From investments to insurance, loans to tax planning - we cover all your financial needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all bg-card">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CircleCheck className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-slate-950 text-white rounded-2xl p-8 md:p-12 text-center border-2 border-blue-500 shadow-2xl">
          <h2 className="text-3xl md:text-5xl mb-4">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation with Aniket Shukla at Ridhaan Investments and take the first step towards financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 shadow-xl w-full sm:w-auto">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+918601206984">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm">
                Call +91 8601206984
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
