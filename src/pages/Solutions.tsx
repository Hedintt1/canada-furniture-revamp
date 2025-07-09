
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
  CheckCircle,
  Timer,
  Shield,
  ArrowRight,
  Star,
  ChevronRight
} from "lucide-react";

const Solutions = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState(0);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Elegant Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-8xl mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-extralight tracking-wider text-gray-900">
              atlantic<span className="font-medium text-lime-500 ml-2">business</span><br />
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-light">solutions</span>
            </div>
            <div className="flex items-center space-x-8">
              <Button variant="ghost" className="text-gray-600 hover:text-lime-600 font-light">
                About
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-lime-600 font-light">
                Services
              </Button>
              <Button className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white px-10 py-3 rounded-full font-light shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen with Overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/3c9323a3-a1a7-4048-b4fb-a20f66b7668b.png"
            alt="Brother printer in modern office"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-12 text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-light mb-8 border border-white/20">
              <Star className="w-4 h-4 mr-3" />
              Professional Printing Excellence
            </div>
            
            <h1 className="text-8xl lg:text-9xl font-extralight leading-[0.85] text-white mb-8">
              Elegant<br />
              <span className="font-light">printing</span><br />
              <span className="text-lime-400 font-normal">solutions</span>
            </h1>
            
            <p className="text-2xl text-white/90 leading-relaxed max-w-2xl font-light mb-12">
              Discover sophisticated printing technology that enhances your workspace with Brother and Atlantic Business Interiors
            </p>
            
            <div className="flex items-center space-x-8">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-4 text-lg font-light rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                Explore Solutions
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:text-lime-400 px-8 py-4 text-lg font-light border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Carousel */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extralight text-gray-900 mb-8">
              Trusted <span className="font-light text-lime-500">expertise</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-lime-400 to-green-400 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="text-7xl lg:text-8xl font-extralight text-gray-900 mb-6 group-hover:text-lime-500 transition-colors duration-500">
                    {stat.number}<span className="text-4xl">{stat.suffix}</span>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/0 via-lime-400/10 to-lime-400/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-lg font-light text-gray-600 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy & Features - Alternating Layout */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-12">
          {/* Legacy */}
          <div className="grid lg:grid-cols-12 gap-20 items-center mb-32">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="inline-block px-6 py-2 bg-lime-100 rounded-full text-lime-700 text-sm font-light uppercase tracking-wide">
                    Heritage
                  </div>
                  <h2 className="text-6xl font-extralight text-gray-900 leading-tight">
                    A century of<br />
                    <span className="font-light text-lime-500">innovation</span>
                  </h2>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-lime-400 to-green-400"></div>
                </div>
                
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                  <p>
                    For over <strong className="text-gray-900 font-normal">100 years</strong>, Brother has been a global leader in printing technology, known for 
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
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-lime-100/50 to-green-100/50 rounded-[3rem] transform rotate-2"></div>
                <img 
                  src="/lovable-uploads/6e2536da-6a1d-47b8-aa2d-5e5283e9380b.png"
                  alt="Person using Brother printer"
                  className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-12 gap-20 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'order-2' : 'order-1'}`}>
                  <div className="space-y-8">
                    <div className={`flex items-center space-x-6 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                      <div className="w-20 h-20 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-10 h-10 text-lime-600" />
                      </div>
                      <div className="w-32 h-0.5 bg-gradient-to-r from-lime-400 to-green-400"></div>
                    </div>
                    <h3 className="text-4xl font-light text-gray-900">{feature.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl">{feature.description}</p>
                  </div>
                </div>
                
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'order-1' : 'order-2'}`}>
                  <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Printing - Split Screen */}
      <section className="min-h-screen flex">
        <div className="w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-16">
          <div className="max-w-2xl text-white">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-light uppercase tracking-wide">
                  Local Expertise
                </div>
                <h2 className="text-5xl font-extralight leading-tight">
                  Smart printing,<br />
                  <span className="font-light text-lime-400">local expertise</span>
                </h2>
                <p className="text-xl text-white/80 font-light">Powered by Brother. Delivered by Atlantic Business Interiors</p>
              </div>
              
              <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">
                <p>
                  At <strong className="text-white font-normal">Atlantic Business Interiors</strong>, we're proud to be a trusted Brother partner 
                  — delivering tailored printer solutions, fast deployment, and expert 
                  support throughout Atlantic Canada.
                </p>
                
                <p>
                  With 40 years of experience supporting offices across the region, we 
                  ensure your Brother solution works long after delivery. Our team offers 
                  personalized onboarding, staff training, and responsive local service.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-gray-900 px-10 py-4 font-light rounded-full transition-all duration-300 bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 relative">
          <img 
            src="/lovable-uploads/d8801a33-7245-4b64-939f-973a7aaec7c0.png"
            alt="Smart printing with mobile device"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>
        </div>
      </section>

      {/* FAQ Timeline */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extralight text-gray-900 mb-8">
              Common <span className="font-light text-lime-500">inquiries</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-lime-400 to-green-400 mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 to-green-400"></div>
            
            <div className="space-y-16">
              {faqData.map((faq, index) => (
                <div key={index} className="relative pl-24">
                  <div className="absolute left-6 w-4 h-4 bg-lime-400 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100/50">
                    <h3 className="text-2xl font-light text-gray-900 mb-6">{faq.question}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Floating */}
      <section className="py-32 relative bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-8xl mx-auto px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <h2 className="text-6xl font-extralight text-gray-900 leading-tight">
                  Start your <span className="font-light text-lime-500">journey</span>
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-lime-400 to-green-400"></div>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  Connect with our experts to discover the perfect printing solution for your business needs.
                </p>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2">
                    <CheckCircle className="w-7 h-7 text-lime-600" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">Secure authentication, print release, and data encryption to safeguard your confidential information.</p>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2">
                    <Timer className="w-7 h-7 text-lime-600" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">High-yield toner, duplex printing, and energy-saving modes to help lower your printing expenses.</p>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2">
                    <Shield className="w-7 h-7 text-lime-600" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">Scalable print management tailored for expanding businesses, government offices, and educational institutions.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Card className="shadow-2xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardContent className="p-16">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <Label htmlFor="firstName" className="text-sm font-light text-gray-700 uppercase tracking-widest">
                          First Name*
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-5 px-6 rounded-2xl text-lg font-light bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="lastName" className="text-sm font-light text-gray-700 uppercase tracking-widest">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-5 px-6 rounded-2xl text-lg font-light bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="email" className="text-sm font-light text-gray-700 uppercase tracking-widest">
                        Email*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-5 px-6 rounded-2xl text-lg font-light bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="company" className="text-sm font-light text-gray-700 uppercase tracking-widest">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 py-5 px-6 rounded-2xl text-lg font-light bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="message" className="text-sm font-light text-gray-700 uppercase tracking-widest">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="border-gray-200 focus:border-lime-500 focus:ring-lime-500 p-6 rounded-2xl text-lg font-light resize-none bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white font-light py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      Send Message
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 text-white py-24 px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-8">
              <div className="text-3xl font-extralight tracking-wider">
                atlantic<span className="font-medium text-lime-400 ml-2">business</span><br />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-light">solutions</span>
              </div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-lime-400 to-green-400"></div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-light text-white text-lg uppercase tracking-widest">Services</h4>
              <div className="space-y-4 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Printing Solutions</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Managed Services</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Support</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Consultation</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-light text-white text-lg uppercase tracking-widest">Connect</h4>
              <div className="space-y-4 text-gray-400 font-light">
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Contact</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">About</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">Careers</p>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">News</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12 text-center">
            <p className="text-gray-400 font-light text-lg">© 2024 Atlantic Business Interiors. Crafted with excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solutions;
