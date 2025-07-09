
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  RefreshCcw, 
  MessageSquare, 
  Sparkles, 
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Timer,
  Shield,
  Headphones,
  Award,
  Globe,
  Users,
  TrendingUp
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
    { number: "40", label: "Years of experience", icon: Award },
    { number: "100+", label: "Expert teams", icon: Users },
    { number: "5000", label: "Projects", icon: Globe },
    { number: "$100M", label: "Project value", icon: TrendingUp }
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
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/80 via-white to-green-50/60"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="pt-20 pb-32">
              {/* Header */}
              <div className="mb-16">
                <div className="inline-flex items-center mb-8">
                  <div className="text-3xl font-light text-gray-900 tracking-wide">
                    atlantic<br />
                    <span className="text-lime-600 font-medium">business</span><br />
                    <span className="text-sm font-normal tracking-wider uppercase text-gray-600">interiors</span>
                  </div>
                </div>
              </div>

              {/* Main Hero Content */}
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 space-y-10">
                  <div className="space-y-8">
                    <div className="inline-block">
                      <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-lime-200 text-lime-700 bg-lime-50">
                        Brother Authorized Partner
                      </Badge>
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                      Premium printing
                      <br />
                      <span className="text-lime-600 font-medium">solutions</span>
                      <br />
                      <span className="text-3xl lg:text-4xl text-gray-600 font-light">for Atlantic Canada</span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
                      Experience exceptional quality and reliability with Brother's cutting-edge printing technology, 
                      backed by our four decades of local expertise and personalized service.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Expert Quote
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-lime-600 text-lime-600 hover:bg-lime-50 px-10 py-4 text-lg font-medium rounded-full transition-all duration-300"
                    >
                      View Solutions
                    </Button>
                  </div>
                </div>
                
                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-green-400/10 rounded-3xl blur-3xl transform rotate-6"></div>
                    <img 
                      src="/lovable-uploads/3c9323a3-a1a7-4048-b4fb-a20f66b7668b.png"
                      alt="Brother printer printing landscape photo"
                      className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-2xl mb-6 group-hover:bg-lime-200 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-lime-600" />
                </div>
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section - Redesigned */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="/lovable-uploads/6e2536da-6a1d-47b8-aa2d-5e5283e9380b.png"
                  alt="Person using Brother printer"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-gray-200 text-gray-700">
                    Heritage & Innovation
                  </Badge>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                  A century of 
                  <span className="text-lime-600 font-medium"> innovation</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  For over <strong className="font-medium text-gray-900">100 years</strong>, Brother has been a global leader in printing technology, 
                  known for developing reliable, user-friendly, and cost-effective devices. From Japan to homes and 
                  offices around the world, Brother's innovations have set the standard for workplace printing 
                  and document solutions.
                </p>
                
                <p>
                  In Canada, Brother has built a strong reputation for dependable print performance and excellent 
                  service, with nationwide support and ENERGY STAR® certified devices trusted by businesses 
                  of all sizes.
                </p>
              </div>
              
              <Separator className="my-8" />
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-600" />
                  <span className="text-sm font-medium text-gray-700">ENERGY STAR® Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-lime-600" />
                  <span className="text-sm font-medium text-gray-700">Global Support Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-lime-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-lime-200 text-lime-700 bg-lime-50">
                Why Choose Us
              </Badge>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Exceptional <span className="text-lime-600 font-medium">printing experience</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Discover the perfect blend of cutting-edge technology and personalized service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="w-14 h-14 bg-lime-100 rounded-2xl flex items-center justify-center group-hover:bg-lime-600 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-lime-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-lime-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Printing Section - Redesigned */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-gray-200 text-gray-700">
                    Local Expertise
                  </Badge>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                  Smart printing,
                  <br />
                  <span className="text-lime-600 font-medium">local expertise</span>
                </h2>
                
                <p className="text-lg text-gray-500 font-light">
                  Powered by Brother. Delivered by Atlantic Business Interiors
                </p>
              </div>
              
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  At <strong className="font-medium text-gray-900">Atlantic Business Interiors</strong>, we're proud to be a trusted Brother partner 
                  — delivering tailored printer solutions, fast deployment, and expert 
                  support throughout Nova Scotia, New Brunswick, Newfoundland & 
                  Labrador, and Prince Edward Island.
                </p>
                
                <p>
                  With <strong className="font-medium text-gray-900">40 years of experience</strong> supporting Atlantic Canadian offices, we 
                  ensure your Brother solution works long after delivery. Our team offers 
                  personalized onboarding, staff training, and responsive local service — no 
                  call centers, no delays.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 font-medium rounded-full"
                >
                  Contact Our Experts
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-medium rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="/lovable-uploads/d8801a33-7245-4b64-939f-973a7aaec7c0.png"
                  alt="Smart printing with mobile device"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Redesigned */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-gray-200 text-gray-700">
                  Common Questions
                </Badge>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Frequently asked <span className="text-lime-600 font-medium">questions</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-medium text-gray-900 pr-8">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        {openFaq === index ? (
                          <ChevronUp className="w-6 h-6 text-lime-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-lime-600" />
                        )}
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8">
                        <Separator className="mb-6" />
                        <p className="text-gray-600 leading-relaxed font-light text-lg">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Redesigned */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-lime-200 text-lime-700 bg-lime-50">
                    Get In Touch
                  </Badge>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                  Ready to transform
                  <br />
                  <span className="text-lime-600 font-medium">your printing?</span>
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Connect with our experts for personalized solutions tailored to your business needs.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Enterprise Security</h4>
                    <p className="text-gray-600 font-light">User authentication, secure print release, and data encryption for complete confidentiality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Timer className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cost Optimization</h4>
                    <p className="text-gray-600 font-light">High-yield toner, duplex printing, and energy-saving modes to reduce operational expenses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Scalable Solutions</h4>
                    <p className="text-gray-600 font-light">Print management and device fleets for growing businesses and institutions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name*
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="border-gray-200 focus:border-lime-500 focus:ring-lime-500/20 h-12 px-4 rounded-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="border-gray-200 focus:border-lime-500 focus:ring-lime-500/20 h-12 px-4 rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500/20 h-12 px-4 rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500/20 h-12 px-4 rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        How can we help you?
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500/20 px-4 py-3 rounded-lg resize-none"
                        placeholder="Tell us about your printing needs..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Redesigned */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="text-2xl font-light tracking-wide">
                atlantic<br />
                <span className="text-lime-400 font-medium">business</span><br />
                <span className="text-sm font-normal tracking-wider uppercase text-gray-400">interiors</span>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-lime-500 to-green-500 rounded-full"></div>
              <p className="text-gray-400 font-light leading-relaxed">
                Transforming workspaces across Atlantic Canada with premium furniture and printing solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-medium text-lg">Office Solutions</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Desks & Workstations</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Ergonomic Chairs</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Storage Solutions</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Workspace Tools</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Space Planning</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-medium text-lg">Services</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Design Consulting</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Managed Print Services</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Government Solutions</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Brother Printers</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-medium text-lg">Resources</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Design Inspiration</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Product Guides</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Support Center</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Terms & Policies</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-800" />
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-light">
              © 2024 Atlantic Business Interiors. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400 font-light">
              <p className="hover:text-lime-400 transition-colors cursor-pointer">Privacy Policy</p>
              <p className="hover:text-lime-400 transition-colors cursor-pointer">Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
