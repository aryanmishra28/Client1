import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Phone, Mail, MapPin, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+91 8601206984',
      subdetails: 'Mon-Sat, 9 AM - 7 PM',
      link: 'tel:+918601206984'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'aniket8601206984@gmail.com',
      subdetails: 'We reply within 24 hours',
      link: 'mailto:aniket8601206984@gmail.com'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Advisor',
      details: 'Aniket Shukla',
      subdetails: 'Certified Financial Planner',
      link: null
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      details: '+91 8601206984',
      subdetails: 'Quick response on WhatsApp',
      link: 'https://wa.me/918601206984'
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="w-full py-16 px-4 bg-muted/30 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach out to Aniket Shukla at Ridhaan Investments. We're here to help you achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
            <h2 className="text-2xl text-foreground mb-6">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg">
                <p className="text-green-700 dark:text-green-300">Thank you! We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="service">Service Interested In *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mutual-funds">Mutual Fund Advisory</SelectItem>
                    <SelectItem value="sip">SIP Planning</SelectItem>
                    <SelectItem value="health-insurance">Health Insurance</SelectItem>
                    <SelectItem value="life-insurance">Life Insurance</SelectItem>
                    <SelectItem value="itr-filing">ITR Filing</SelectItem>
                    <SelectItem value="tax-planning">Tax Planning</SelectItem>
                    <SelectItem value="retirement">Retirement Planning</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                Submit Inquiry
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 hover:border-blue-500 dark:hover:border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <div className="text-blue-600 dark:text-blue-400">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg text-foreground mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">{info.subdetails}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Office Hours */}
            <Card className="p-6 border-2 border-border mb-6">
              <h3 className="text-xl text-foreground mb-4">Office Hours</h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                    <span className="text-foreground">{schedule.day}</span>
                    <span className="text-blue-600 dark:text-blue-400">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/918601206984" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-slate-950 text-white border-2 border-blue-500">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">
              Ridhaan Investments
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Your trusted partner for comprehensive financial planning and investment advisory services. Led by Aniket Shukla, certified financial planner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm text-blue-100 mb-1">Call Us</p>
                <a href="tel:+918601206984" className="text-white hover:text-blue-200">+91 8601206984</a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm text-blue-100 mb-1">Email Us</p>
                <a href="mailto:aniket8601206984@gmail.com" className="text-white hover:text-blue-200 break-all">aniket8601206984@gmail.com</a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}