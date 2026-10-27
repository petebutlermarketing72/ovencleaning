import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://vibe.filesafe.space/1782763641912367521/assets/555f2ef1-edc3-462a-9ada-10160ebce378.png" 
                alt="Professional oven cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-5xl font-black text-primary mb-1">5+</div>
              <div className="text-sm font-semibold text-slate-600">Years of<br/>Excellence</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-slate-900">
              Driven by a Passion for <span className="text-accent">A Spotless Kitchen</span>
            </h2>
            <div className="space-y-4 text-lg text-slate-600 mb-8">
              <p>
                Welcome to Oven Cleaning East Sussex, your trusted oven valeting and cleaning service based in Heathfield, proudly serving the surrounding areas.
              </p>
              <p>
                Established by local experts, our passion for a clean and healthy home drives us to deliver exceptional results. With an expert eye for detail and the highest quality eco-friendly products, we ensure a flawless finish every time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Fully insured service",
                "Eco-friendly solutions",
                "Premium quality products",
                "Expert eye for detail",
                "From single ovens to Agas",
                "Satisfaction guaranteed"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}