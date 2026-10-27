import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when the mouse leaves the top of the viewport
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  const scrollToBooking = () => {
    setIsOpen(false);
    document.getElementById("book-now")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl bg-black border-primary/50 text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl md:text-4xl font-black uppercase text-primary text-center">
            Tell us about your oven??
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-300 mt-4 font-medium">
            Before you leave, please see our latest cleans and what they cost!
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="group relative rounded-xl overflow-hidden border border-white/20 shadow-xl">
            <img 
              src="https://vibe.filesafe.space/1782763641912367521/attachments/bb0c6c63-47e9-4e51-bee7-6ab5cfeda514.jpg" 
              alt="Single Oven Cleaned" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 bg-primary text-black font-black px-4 py-1.5 rounded-full text-sm md:text-base shadow-lg">
              Single Oven - £50
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden border border-white/20 shadow-xl">
            <img 
              src="https://vibe.filesafe.space/1782763641912367521/attachments/00f6fc76-5f89-4444-9d1d-2cb01b51df40.jpg" 
              alt="Double Oven Cleaned" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 bg-primary text-black font-black px-4 py-1.5 rounded-full text-sm md:text-base shadow-lg">
              Double Oven - £70
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 pb-4">
          <Button 
            onClick={scrollToBooking} 
            className="bg-primary text-black hover:bg-primary/90 font-black text-lg px-10 py-6 uppercase tracking-wider w-full md:w-auto"
          >
            Get a Free Quote Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
