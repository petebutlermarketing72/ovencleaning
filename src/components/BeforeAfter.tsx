import { useState, useEffect } from "react";

const slides = [
  {
    before: "https://vibe.filesafe.space/1782763641912367521/attachments/82227c32-8809-4d5c-a951-8977ead5bd11.jpg",
    after: "https://vibe.filesafe.space/1782763641912367521/attachments/bb0c6c63-47e9-4e51-bee7-6ab5cfeda514.jpg"
  },
  {
    before: "https://vibe.filesafe.space/1782763641912367521/attachments/79bac9a5-3e1f-4225-962c-dec556b661cd.jpg",
    after: "https://vibe.filesafe.space/1782763641912367521/attachments/00f6fc76-5f89-4444-9d1d-2cb01b51df40.jpg"
  }
];

export function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">
            See the <span className="text-primary">Difference</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our premium cleaning process removes years of baked-on grease and grime, restoring your oven to showroom condition.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:gap-8 items-center relative aspect-[8/3]">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 grid grid-cols-2 gap-4 md:gap-8 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-full">
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/80 backdrop-blur-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold uppercase tracking-wider text-[10px] md:text-sm z-10">
                    Before
                  </div>
                  <img 
                    src={slide.before} 
                    alt="Oven before cleaning" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group relative rounded-2xl overflow-hidden shadow-2xl border border-primary/30 h-full">
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-black px-2 py-1 md:px-4 md:py-2 rounded-full font-bold uppercase tracking-wider text-[10px] md:text-sm z-10 shadow-lg">
                    After
                  </div>
                  <img 
                    src={slide.after} 
                    alt="Oven after cleaning" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
