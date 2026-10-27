import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://vibe.filesafe.space/1782763641912367521/assets/ff604084-3d11-46a1-9721-cb809f4d1e77.png",
  "https://vibe.filesafe.space/1782763641912367521/assets/2b793e18-9481-4faf-beed-a177cf510bc2.png",
  "https://vibe.filesafe.space/1782763641912367521/assets/8bc7f3a7-7cb4-4f14-88de-3b25427c4a34.png"
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 lg:pt-32 lg:pb-16 overflow-hidden bg-black text-white">
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

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl animate-in slide-in-from-left-8 fade-in duration-1000 fill-mode-both">
            <div className="inline-block px-3 py-1.5 mb-6 text-xs font-bold tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm uppercase">
              East Sussex's Premier Oven Cleaning
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 text-white drop-shadow-lg leading-[1.1]">
              Showroom Finish, <br />
              <span className="text-primary">Right in Your Kitchen.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-300 leading-relaxed max-w-xl font-medium">
              Expert oven cleaning service based in East Sussex. We remove stubborn grease, burnt-on food, and carbon deposits, bringing the shine back to your oven.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base font-bold uppercase tracking-wide rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:-translate-y-1" asChild>
                <a href="tel:07481345814">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07481 345814
                </a>
              </Button>
              <Button size="lg" className="text-base font-bold uppercase tracking-wide rounded-full bg-white text-black hover:bg-white/90 border-none transition-all hover:-translate-y-1" asChild>
                <a href="sms:07481345814">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Text Us
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-row items-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-slate-300 font-medium whitespace-nowrap">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">
                <div className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-primary animate-pulse shrink-0"></div>
                Eco-Friendly Products
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">
                <div className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-primary animate-pulse shrink-0"></div>
                Fully Insured
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Oven PNG & SVG */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] flex items-center justify-center animate-in slide-in-from-right-8 fade-in duration-1000 delay-300 fill-mode-both">
            {/* SVG Blob Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 500 500" className="w-[120%] h-[120%] max-w-[800px] opacity-80 text-primary animate-[spin_20s_linear_infinite]">
                <path 
                  fill="currentColor" 
                  d="M414.5,321.5C390.5,372,311,402,234.5,402.5C158,403,84.5,374,53.5,310.5C22.5,247,34,149,82.5,95.5C131,42,216.5,33,294,45.5C371.5,58,441,92,463.5,153.5C486,215,438.5,271,414.5,321.5Z" 
                  transform="translate(0 0)"
                />
              </svg>
            </div>
            
            {/* Oven Images Slideshow */}
            <div className="relative z-10 w-[75%] max-w-[420px] aspect-square rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_50px_rgba(255,215,0,0.2)] animate-float">
              {HERO_IMAGES.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Premium oven cleaning ${idx + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    idx === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
