
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
  Headphones
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
    { number: "40", label: "Years of experience" },
    { number: "100+", label: "Expert teams" },
    { number: "5000", label: "Projects" },
    { number: "$100M", label: "Project value" }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-lime-50 to-green-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-green-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-gray-800">
                  atlantic<br />
                  <span className="text-lime-600">business</span><br />
                  interiors
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Brother printing solutions for{" "}
                  <span className="text-lime-600">Atlantic Canada</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Save time, reduce printing costs, and get expert local support, 
                  powered by Brother and Atlantic Business Interiors
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get quote
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/lovable-uploads/3c9323a3-a1a7-4048-b4fb-a20f66b7668b.png"
                alt="Brother printer printing landscape photo"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A legacy of innovation</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/6e2536da-6a1d-47b8-aa2d-5e5283e9380b.png"
                alt="Person using Brother printer"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                For over 100 years, <strong>Brother</strong> has been a global leader in printing technology, known for 
                developing reliable, user-friendly, and cost-effective devices. From Japan to homes and 
                offices around the world, Brother's innovations have set the standard for workplace printing 
                and document solutions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                In Canada, Brother has built a strong reputation for dependable print performance and excellent 
                service, with nationwide support and ENERGY STAR® certified devices trusted by businesses 
                of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-lime-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-lime-100 rounded-full flex items-center justify-center group-hover:bg-lime-200 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Printing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart printing, local expertise</h2>
            <p className="text-xl text-gray-600">Powered by Brother. Delivered by Atlantic Business Interiors</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <img 
                src="/lovable-uploads/d8801a33-7245-4b64-939f-973a7aaec7c0.png"
                alt="Smart printing with mobile device"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At <strong>Atlantic Business Interiors</strong>, we're proud to be a trusted Brother partner 
                  — delivering tailored printer solutions, fast deployment, and expert 
                  support throughout Nova Scotia, New Brunswick, Newfoundland & 
                  Labrador, and Prince Edward Island.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  With 40 years of experience supporting Atlantic Canadian offices, we 
                  ensure your Brother solution works long after delivery. Our team offers 
                  personalized onboarding, staff training, and responsive local service — no 
                  call centers, no delays.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white px-6 py-3 font-semibold"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-lime-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl lg:text-6xl font-bold text-lime-200 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-lime-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-lime-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Serving your printing needs.{" "}
                  <span className="text-lime-600">Contact us!</span>
                </h2>
                <p className="text-lg text-gray-600">
                  We'd love to hear from you! Please fill out the form and we'll get back to 
                  you as soon as possible.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-lime-600" />
                  </div>
                  <p className="text-gray-700">Our printers include user authentication, secure print release, and data encryption to safeguard your confidential information.</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                    <Timer className="w-6 h-6 text-lime-600" />
                  </div>
                  <p className="text-gray-700">Our printers feature high-yield toner, duplex printing, and energy-saving modes to help lower your printing expenses.</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-lime-600" />
                  </div>
                  <p className="text-gray-700">We provide scalable print management and device fleets tailored for expanding businesses, government offices, and educational institutions.</p>
                </div>
              </div>
            </div>
            
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name*
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-xl font-bold text-gray-800">
                atlantic<br />
                <span className="text-lime-600">business</span><br />
                interiors
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-lime-500 to-green-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Offices</h4>
              <div className="space-y-2 text-gray-600">
                <p>Desks</p>
                <p>Chairs</p>
                <p>Storage</p>
                <p>Worktools</p>
                <p>Space division</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Services</h4>
              <div className="space-y-2 text-gray-600">
                <p>Consulting</p>
                <p>Managed Print Services</p>
                <p>Federal Government SA</p>
                <p>Printers and Copiers</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Resources</h4>
              <div className="space-y-2 text-gray-600">
                <p>Blog</p>
                <p>Guides</p>
                <p>Policies</p>
                <p>Term and Condition</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
