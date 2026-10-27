import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

const SERVICES = [
  "Single Oven",
  "Double Oven",
  "Range Cooker",
  "Hob",
  "Extractor",
  "Microwave"
];

export function OrderForm() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section className="py-20 bg-primary text-black" id="book-now">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Book Your Clean
          </h2>
          <p className="text-lg font-medium opacity-80">
            Get a free quote and schedule your oven cleaning in three easy steps.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
            <div 
              className="absolute left-0 top-1/2 h-1 bg-black -z-10 -translate-y-1/2 transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-colors ${
                  step >= num 
                    ? "bg-black border-black text-primary" 
                    : "bg-white border-gray-200 text-gray-400"
                }`}
              >
                {step > num ? <Check className="w-5 h-5" /> : num}
              </div>
            ))}
          </div>

          {/* Step 1: Services */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-2xl font-bold mb-4">What needs cleaning?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map(service => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedServices.includes(service)
                        ? "border-black bg-black/5 font-bold"
                        : "border-gray-200 hover:border-black/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{service}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedServices.includes(service) ? "border-black bg-black" : "border-gray-300"
                      }`}>
                        {selectedServices.includes(service) && <Check className="w-3 h-3 text-primary" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-2xl font-bold mb-4">Your Details</h3>
              <div className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold">First Name</label>
                    <Input placeholder="John" className="bg-gray-50 border-gray-200 text-black" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Last Name</label>
                    <Input placeholder="Doe" className="bg-gray-50 border-gray-200 text-black" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 text-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Phone Number</label>
                  <Input type="tel" placeholder="07481 345814" className="bg-gray-50 border-gray-200 text-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Postcode</label>
                  <Input placeholder="BN1 1AA" className="bg-gray-50 border-gray-200 text-black" />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Finish */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-2xl font-bold mb-4">Preferred Date</h3>
              <div className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-sm font-bold">When would you like us to come?</label>
                  <Input type="date" className="bg-gray-50 border-gray-200 text-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Any additional notes?</label>
                  <textarea 
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    placeholder="e.g. Parking available on driveway..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={step === 1}
              className={`border-gray-200 text-black hover:bg-gray-50 ${step === 1 ? 'opacity-0' : 'opacity-100'}`}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            {step < 3 ? (
              <Button 
                onClick={nextStep}
                className="bg-black text-primary hover:bg-black/90 font-bold px-8"
                disabled={step === 1 && selectedServices.length === 0}
              >
                Next Step
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button 
                className="bg-black text-primary hover:bg-black/90 font-bold px-8"
              >
                Request Quote
                <Check className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}