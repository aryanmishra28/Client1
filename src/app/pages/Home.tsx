import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  TrendingUp, 
  Shield, 
  FileText, 
  PiggyBank, 
  Calculator, 
  Users,
  CreditCard,
  Banknote,
  GraduationCap,
  Building2,
  LineChart,
  Car,
  Heart,
  CircleCheck,
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function Home() {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Mutual Funds',
      description: 'Expert guidance on mutual fund selection and portfolio management for wealth creation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: 'SIP Planning',
      description: 'Systematic Investment Plans tailored to your financial goals and risk appetite',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Life Insurance',
      description: 'Comprehensive life insurance and term plans to secure your family\'s future',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Health Insurance',
      description: 'Medical insurance solutions to protect you and your family from health emergencies',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Vehicle Insurance',
      description: 'Comprehensive auto insurance coverage for cars, bikes and commercial vehicles',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'ITR Filing',
      description: 'Hassle-free income tax return filing with maximum refunds and compliance',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: 'Bonds & FD',
      description: 'Safe investment options in government bonds and fixed deposits',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Retirement Planning',
      description: 'Secure your golden years with comprehensive retirement planning',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Child Education',
      description: 'Plan and save for your child\'s education with dedicated investment plans',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Loans',
      description: 'Home loans, personal loans, and business loans with best interest rates',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Trading',
      description: 'Stock market trading guidance and demat account services',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Credit Cards',
      description: 'Find the best credit cards with rewards, cashback and exclusive benefits',
      color: 'from-rose-500 to-rose-600'
    },
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '₹50Cr+', label: 'AUM Managed' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  const whyChooseUs = [
    { title: 'Expert Guidance', description: 'SEBI registered advisors with proven track record' },
    { title: 'Personalized Service', description: 'Customized solutions for your unique needs' },
    { title: 'Complete Transparency', description: 'No hidden charges, full disclosure' },
    { title: '24/7 Support', description: 'Always available for your financial queries' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer, Mumbai',
      text: 'Aniket\'s guidance helped me build a diversified portfolio. His SIP planning is excellent!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner, Pune',
      text: 'Professional and trustworthy service. The tax planning advice saved me lakhs!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Marketing Manager, Delhi',
      text: 'Best financial advisor I\'ve worked with. Highly recommend Ridhaan Investments!',
      rating: 5
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-950 text-white py-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Trusted Financial Partner</span>
              </div>
              <h1 className="text-4xl md:text-6xl">
                Build Your Wealth with <span className="text-green-400">Ridhaan Investments</span>
              </h1>
              <p className="text-xl text-blue-100">
                Expert financial advisory services from Aniket Shukla. Your journey to financial freedom starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto shadow-xl">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                </Link>
                <Link to="/calculators">
                  <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm">
                    <Calculator className="w-4 h-4 mr-2" />
                    Try Calculators
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744473755637-e09f0c2fab41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NjYyOTQ4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Financial Growth"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-muted/30 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for your financial journey under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-blue-500 dark:hover:border-blue-400 bg-card">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl mb-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-lg">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-300 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl text-foreground mb-6">
                Your Financial Success is Our Priority
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                With years of expertise and a client-first approach, we help you make informed financial decisions.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-muted/50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CircleCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9uJTIwZmFtaWx5fGVufDF8fHx8MTc2NjMxOTY0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Financial Planning"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications/Trust Badges */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Certified & Trusted
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Regulated and certified by leading financial authorities
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-green-500 dark:border-green-600 min-w-[150px]">
              <p className="font-bold text-foreground">SEBI Registered</p>
              <p className="text-sm text-muted-foreground mt-1">Investment Advisor</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-blue-500 dark:border-blue-600 min-w-[150px]">
              <p className="font-bold text-foreground">AMFI Certified</p>
              <p className="text-sm text-muted-foreground mt-1">Mutual Fund Advisor</p>
            </div>
            {/* <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-purple-500 dark:border-purple-600 min-w-[150px]">
              <p className="font-bold text-foreground">IRDA Licensed</p>
              <p className="text-sm text-muted-foreground mt-1">Insurance Advisor</p>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-orange-500 dark:border-orange-600 min-w-[150px]">
              <p className="font-bold text-foreground">CFP Certified</p>
              <p className="text-sm text-muted-foreground mt-1">Financial Planner</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-muted/30 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-600 to-green-800 dark:from-green-800 dark:to-green-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Book a free consultation with Aniket Shukla and take the first step towards financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 shadow-xl w-full sm:w-auto">
                Contact Now
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
      </section>
    </div>
  );
}