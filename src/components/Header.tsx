import { Phone, Mail, Menu, X, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white text-slate-900 shadow-md py-2" 
          : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between transition-all duration-300">
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="https://vibe.filesafe.space/1782763641912367521/attachments/54ee5901-47cd-489f-888d-15ddc1088322.png" 
            alt="Oven Cleaning East Sussex Logo" 
            className={`transition-all duration-300 w-auto object-contain ${scrolled ? "h-10 brightness-0" : "h-14"}`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider">
          <a href="/#services" className={`transition-colors ${scrolled ? "hover:text-primary" : "hover:text-primary"}`}>Services</a>
          <a href="/our-cleans" className={`transition-colors ${scrolled ? "hover:text-primary" : "hover:text-primary"}`}>Our Cleans</a>
          <a href="/#about" className={`transition-colors ${scrolled ? "hover:text-primary" : "hover:text-primary"}`}>About</a>
          <a href="/#contact" className={`transition-colors ${scrolled ? "hover:text-primary" : "hover:text-primary"}`}>Contact</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant={scrolled ? "outline" : "outline"} size="sm" asChild className={`hidden lg:flex rounded-full font-bold uppercase tracking-wide ${!scrolled ? "bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm" : ""}`}>
            <a href="sms:07481345814">
              <MessageSquare className="mr-2 h-4 w-4" />
              Text Us
            </a>
          </Button>
          <Button size="sm" asChild className={`rounded-full font-bold uppercase tracking-wide ${!scrolled ? "bg-primary text-white hover:bg-primary/90" : ""}`}>
            <a href="tel:07481345814">
              <Phone className="mr-2 h-4 w-4" />
              07481 345814
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white text-slate-900 absolute top-full left-0 w-full shadow-lg">
          <nav className="flex flex-col space-y-4 mb-6">
            <a href="/#services" className="text-sm font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="/our-cleans" className="text-sm font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Our Cleans</a>
            <a href="/#about" className="text-sm font-bold uppercase" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/#contact" className="text-sm font-bold uppercase" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="w-full justify-start rounded-full font-bold uppercase" asChild>
              <a href="sms:07481345814">
                <MessageSquare className="mr-2 h-4 w-4" />
                Text Us
              </a>
            </Button>
            <Button className="w-full justify-start rounded-full font-bold uppercase" asChild>
              <a href="tel:07481345814">
                <Phone className="mr-2 h-4 w-4" />
                07481 345814
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}