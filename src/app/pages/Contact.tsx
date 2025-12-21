import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // EmailJS configuration - Replace with your actual IDs from https://www.emailjs.com/
  // 1. Create account at emailjs.com
  // 2. Add email service (Gmail, Outlook, etc.)
  // 3. Create email template with variables: {{from_name}}, {{from_email}}, {{phone}}, {{service}}, {{message}}, {{to_email}}
  // 4. Replace the IDs below with your actual service ID, template ID, and public key
  const SERVICE_ID = 'service_123456789'; // Replace with your actual service ID
  const TEMPLATE_ID = 'template_123456789'; // Replace with your actual template ID
  const PUBLIC_KEY = 'PASTE_YOUR_ACTUAL_PUBLIC_KEY_HERE'; // Replace with your actual public key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'aniket8601206984@gmail.com', // Your email address
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Email send failed:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
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
      details: '+91 86012 06984',
      subdetails: 'Mon-Sat, 9 AM - 7 PM',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'aniket8601206984@gmail.com',
      subdetails: 'We reply within 24 hours',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: 'Civil Lines, Prayagraj',
      subdetails: 'Uttar Pradesh, India',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      details: '+91 86012 06984',
      subdetails: 'Quick response on WhatsApp',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our financial experts. We're here to help you achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700">Thank you! We'll get back to you within 24 hours.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
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

              <Button 
                type="submit" 
                className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#1e3a8a]/10 rounded-lg">
                      <div className="text-[#1e3a8a]">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700">{info.details}</p>
                      <p className="text-sm text-gray-500 mt-1">{info.subdetails}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Office Hours */}
            <Card className="p-6">
              <h3 className="text-xl text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b last:border-0">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="text-[#1e3a8a]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <Button className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Map / Address Section */}
        <Card className="p-8">
          <h2 className="text-2xl text-gray-900 mb-6 text-center">
            Visit Our Office
          </h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-700 mb-2">Ridhaan Investments</p>
              <p className="text-gray-600">Civil Lines</p>
              <p className="text-gray-600">Prayagraj</p>
              <p className="text-gray-600">Uttar Pradesh, India</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
