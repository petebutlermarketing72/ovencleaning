import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { OrderForm } from "@/components/OrderForm";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Star, MapPin, CheckCircle } from "lucide-react";

const CLEANS = [
  {
    location: "Brighton, East Sussex",
    type: "Double Oven & Hob Deep Clean",
    customer: "Sarah M.",
    review: "Absolutely fantastic service! My double oven was in a terrible state after years of neglect, but now it looks like it just came out of the showroom. The team was professional, tidy, and the results speak for themselves. Highly recommend!",
    before: "https://vibe.filesafe.space/1782763641912367521/attachments/82227c32-8809-4d5c-a951-8977ead5bd11.jpg",
    after: "https://vibe.filesafe.space/1782763641912367521/attachments/bb0c6c63-47e9-4e51-bee7-6ab5cfeda514.jpg",
  },
  {
    location: "Eastbourne, East Sussex",
    type: "Single Oven Restoration",
    customer: "James T.",
    review: "I couldn't believe my eyes when I saw the after result. They managed to remove baked-on grease that I've been trying to scrub off for months. Very friendly service and totally worth the money. 5 stars all the way!",
    before: "https://vibe.filesafe.space/1782763641912367521/attachments/79bac9a5-3e1f-4225-962c-dec556b661cd.jpg",
    after: "https://vibe.filesafe.space/1782763641912367521/attachments/00f6fc76-5f89-4444-9d1d-2cb01b51df40.jpg",
  },
  {
    location: "Lewes, East Sussex",
    type: "Range Cooker & Extractor",
    customer: "Emma W.",
    review: "We recently moved into a new house and the previous owners left the range cooker in a shocking state. The guys came in and worked their magic. It's sparkling clean now! Great communication and punctual.",
    before: "https://vibe.filesafe.space/1782763641912367521/attachments/82227c32-8809-4d5c-a951-8977ead5bd11.jpg",
    after: "https://vibe.filesafe.space/1782763641912367521/attachments/bb0c6c63-47e9-4e51-bee7-6ab5cfeda514.jpg",
  },
  {
    location: "Hastings, East Sussex",
    type: "Double Oven Clean",
    customer: "David L.",
    review: "Superb job! The glass door is completely clear again and the racks are shining. They used eco-friendly products which meant no nasty chemical smells in the house. Will definitely be using them again next year.",
    before: "https://vibe.filesafe.space/1782763641912367521/attachments/79bac9a5-3e1f-4225-962c-dec556b661cd.jpg",
    after: "https://vibe.filesafe.space/1782763641912367521/attachments/00f6fc76-5f89-4444-9d1d-2cb01b51df40.jpg",
  }
];

export default function OurCleans() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 lg:pt-32 lg:pb-16 overflow-hidden bg-black text-white px-4">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full opacity-20">
              <svg viewBox="0 0 800 800" className="absolute -top-20 -right-20 w-full h-full animate-[spin_60s_linear_infinite]">
                <path 
                  fill="hsl(var(--primary))" 
                  d="M399.5,720.5C282.8,720.5,176.5,658.2,118.5,557.5C60.5,456.8,60.5,333.2,118.5,232.5C176.5,131.8,282.8,69.5,399.5,69.5C516.2,69.5,622.5,131.8,680.5,232.5C738.5,333.2,738.5,456.8,680.5,557.5C622.5,658.2,516.2,720.5,399.5,720.5Z" 
                  transform="translate(-50 -50) scale(1.1)"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full opacity-10">
              <svg viewBox="0 0 800 800" className="absolute -bottom-40 -left-40 w-[120%] h-[120%] animate-[spin_40s_linear_infinite_reverse]">
                <path 
                  fill="hsl(var(--primary))" 
                  d="M455.5,745.5C321.8,745.5,199.5,668.2,132.5,547.5C65.5,426.8,65.5,273.2,132.5,152.5C199.5,31.8,321.8,-45.5,455.5,-45.5C589.2,-45.5,711.5,31.8,778.5,152.5C845.5,273.2,845.5,426.8,778.5,547.5C711.5,668.2,589.2,745.5,455.5,745.5Z" 
                />
              </svg>
            </div>
          </div>

          <div className="container relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white drop-shadow-lg">
              Our <span className="text-primary">Latest Cleans</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
              Don't just take our word for it. Browse through our recent oven transformations across East Sussex and see the showroom-quality results we deliver every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base font-bold uppercase tracking-wide rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:-translate-y-1" asChild>
                <a href="tel:07481345814">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07481 345814
                </a>
              </Button>
              <Button size="lg" className="text-base font-bold uppercase tracking-wide rounded-full bg-white text-black hover:bg-white/90 border-none transition-all hover:-translate-y-1" asChild>
                <a href="sms:07481345814">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Text Us Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Cleans List */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-24">
              {CLEANS.map((clean, index) => (
                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
                  
                  {/* Images Side */}
                  <div className="lg:w-1/2 p-4 md:p-6 grid grid-cols-2 gap-4 bg-gray-100">
                    <div className="space-y-2">
                      <div className="inline-block bg-black text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-2">Before</div>
                      <img src={clean.before} alt={`Before ${clean.type}`} className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md" />
                    </div>
                    <div className="space-y-2">
                      <div className="inline-block bg-primary text-black text-xs font-bold uppercase px-3 py-1 rounded-full mb-2 shadow-sm">After</div>
                      <img src={clean.after} alt={`After ${clean.type}`} className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md" />
                    </div>
                  </div>

                  {/* Details Side */}
                  <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center text-gray-500 mb-4 font-medium">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      {clean.location}
                    </div>
                    
                    <h3 className="text-3xl font-black uppercase mb-4 text-black">
                      {clean.type}
                    </h3>
                    
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 italic mb-8 border-l-4 border-primary pl-4">
                      "{clean.review}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="font-bold text-black flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        Verified Customer: {clean.customer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OrderForm />
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}
