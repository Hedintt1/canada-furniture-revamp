
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  RefreshCcw, 
  MessageSquare, 
  Sparkles, 
  MessageCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Timer,
  Shield,
  ArrowRight,
  Star
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { number: "40", label: "Years of experience", suffix: "+" },
    { number: "100", label: "Expert teams", suffix: "+" },
    { number: "5K", label: "Projects", suffix: "" },
    { number: "$100M", label: "Project value", suffix: "" }
  ];

  const features = [
    {
      icon: RefreshCcw,
      title: "Low maintenance, high efficiency",
      description: "Reduce downtime and minimize IT headaches with Brother's durable and easy-to-manage printers."
    },
    {
      icon: MessageSquare,
      title: "Lease or purchase options",
      description: "Choose what fits you, flexible lease terms or outright purchase, with quality."
    },
    {
      icon: Sparkles,
      title: "ENERGY STAR® certified eco models",
      description: "Lower energy use and environmental impact without sacrificing performance or speed."
    },
    {
      icon: MessageCircle,
      title: "Fast local support and delivery",
      description: "Responsive service from our team, with fast setup and ongoing printer support."
    }
  ];

  const faqData = [
    {
      question: "Which printer models are available?",
      answer: "Select from a range of compact and enterprise printers, available in both monochrome and color. Each model is built for durability, minimal upkeep, and enhanced productivity."
    },
    {
      question: "What is the setup time?",
      answer: "Orders in Atlantic Canada typically arrive within 1-3 business days. Our team ensures quick setup and configuration, so your printers are operational immediately."
    },
    {
      question: "Is there local support?",
      answer: "Absolutely, our local support team is available to assist with troubleshooting, maintenance, and ongoing service for all printer models."
    },
    {
      question: "Are printers secure for sensitive data?",
      answer: "Our printers include user authentication, secure print release, and data encryption to safeguard your confidential information."
    },
    {
      question: "How can I reduce printing costs?",
      answer: "Our printers feature high-yield toner, duplex printing, and energy-saving modes to help lower your printing expenses."
    },
    {
      question: "Do you cater to larger organizations?",
      answer: "We provide scalable print management and device fleets tailored for expanding businesses, government offices, and educational institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-wide text-gray-900">
              atlantic<span className="font-semibold text-lime-600 ml-1">business</span><br />
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500">interiors</span>
            </div>
            <Button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-full font-medium">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-lime-50 rounded-full text-lime-700 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Printing Solutions
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light leading-[0.9] text-gray-900">
                  Brother printing<br />
                  <span className="font-semibold">solutions</span> for<br />
                  <span className="text-lime-600 font-medium">Atlantic Canada</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                  Save time, reduce printing costs, and get expert local support, 
                  powered by Brother and Atlantic Business Interiors
                </p>
                
                <div className="flex items-center space-x-6">
                  <Button 
                    size="lg" 
                    className="bg-lime-600 hover:bg-lime-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="text-gray-700 hover:text-lime-600 px-6 py-4 text-lg font-medium"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-100 to-green-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="/lovable-uploads/3c9323a3-a1a7-4048-b4fb-a20f66b7668b.png"
                    alt="Brother printer printing landscape photo"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl lg:text-6xl font-light text-lime-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}<span className="text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-lg font-medium text-gray-700 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-50 to-green-50 rounded-3xl"></div>
                <img 
                  src="/lovable-uploads/6e2536da-6a1d-47b8-aa2d-5e5283e9380b.png"
                  alt="Person using Brother printer"
                  className="relative w-full h-auto object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-900 leading-tight">
                  A legacy of<br />
                  <span className="font-medium text-lime-600">innovation</span>
                </h2>
                <div className="w-24 h-1 bg-lime-600 rounded-full"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  For over <strong className="text-gray-900 font-medium">100 years</strong>, Brother has been a global leader in printing technology, known for 
                  developing reliable, user-friendly, and cost-effective devices. From Japan to homes and 
                  offices around the world, Brother's innovations have set the standard for workplace printing 
                  and document solutions.
                </p>
                
                <p>
                  In Canada, Brother has built a strong reputation for dependable print performance and excellent 
                  service, with nationwide support and ENERGY STAR® certified devices trusted by businesses 
                  of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6">
              Why choose <span className="font-medium text-lime-600">Brother</span>
            </h2>
            <div className="w-24 h-1 bg-lime-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center group-hover:bg-lime-200 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Printing Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-900 leading-tight">
                  Smart printing,<br />
                  <span className="font-medium text-lime-600">local expertise</span>
                </h2>
                <div className="w-24 h-1 bg-lime-600 rounded-full"></div>
                <p className="text-xl text-gray-500 font-light">Powered by Brother. Delivered by Atlantic Business Interiors</p>
              </div>
              
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  At <strong className="text-gray-900 font-medium">Atlantic Business Interiors</strong>, we're proud to be a trusted Brother partner 
                  — delivering tailored printer solutions, fast deployment, and expert 
                  support throughout Nova Scotia, New Brunswick, Newfoundland & 
                  Labrador, and Prince Edward Island.
                </p>
                
                <p>
                  With 40 years of experience supporting Atlantic Canadian offices, we 
                  ensure your Brother solution works long after delivery. Our team offers 
                  personalized onboarding, staff training, and responsive local service — no 
                  call centers, no delays.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white px-8 py-4 font-medium rounded-full transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-l from-lime-50 to-green-50 rounded-3xl"></div>
                <img 
                  src="/lovable-uploads/d8801a33-7245-4b64-939f-973a7aaec7c0.png"
                  alt="Smart printing with mobile device"
                  className="relative w-full h-auto object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6">
              Frequently asked <span className="font-medium text-lime-600">questions</span>
            </h2>
            <div className="w-24 h-1 bg-lime-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-medium text-gray-900 pr-8">{faq.question}</h3>
                    <div className="flex-shrink-0 w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-lime-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-lime-600" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-600 leading-relaxed font-light text-lg">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-900 leading-tight">
                  Ready to get <span className="font-medium text-lime-600">started?</span>
                </h2>
                <div className="w-24 h-1 bg-lime-600 rounded-full"></div>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  We'd love to hear from you! Please fill out the form and we'll get back to 
                  you as soon as possible.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-lime-600" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">Secure authentication, print release, and data encryption to safeguard your confidential information.</p>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Timer className="w-6 h-6 text-lime-600" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">High-yield toner, duplex printing, and energy-saving modes to help lower your printing expenses.</p>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 text-lime-600" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">Scalable print management tailored for expanding businesses, government offices, and educational institutions.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                          First Name*
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-4 px-4 rounded-xl text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-4 px-4 rounded-xl text-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                        Email*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-4 px-4 rounded-xl text-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-4 px-4 rounded-xl text-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 p-4 rounded-xl text-lg resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="text-2xl font-light tracking-wide">
                atlantic<span className="font-semibold text-lime-400 ml-1">business</span><br />
                <span className="text-sm uppercase tracking-[0.2em] text-gray-400">interiors</span>
              </div>
              <div className="w-24 h-1 bg-lime-400 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-medium text-white text-lg uppercase tracking-wide">Offices</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Desks</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Chairs</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Storage</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Worktools</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Space division</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-medium text-white text-lg uppercase tracking-wide">Services</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Consulting</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Managed Print Services</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Federal Government SA</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Printers and Copiers</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-medium text-white text-lg uppercase tracking-wide">Resources</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Blog</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Guides</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Policies</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Terms and Conditions</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400 font-light">© 2024 Atlantic Business Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
