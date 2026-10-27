import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-slate-200 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img 
            src="https://vibe.filesafe.space/1782763641912367521/attachments/54ee5901-47cd-489f-888d-15ddc1088322.png" 
            alt="Oven Cleaning East Sussex Logo" 
            className="h-16 w-auto object-contain mb-4"
          />
          <p className="text-sm text-slate-400 max-w-xs">
            Expert oven cleaning service based in East Sussex, delivering showroom results in your kitchen.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:07481345814" className="flex items-center hover:text-white transition-colors">
                <Phone className="mr-2 h-4 w-4" />
                07481 345814
              </a>
            </li>
            <li>
              <a href="mailto:info@ovencleaningeastsussex.co.uk" className="flex items-center hover:text-white transition-colors">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </li>
            <li className="flex items-start">
              <MapPin className="mr-2 h-4 w-4 mt-0.5 shrink-0" />
              <span>
                East Sussex<br />
                United Kingdom
              </span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="/our-cleans" className="hover:text-white transition-colors">Our Cleans</a></li>
            <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
        <p>&copy; {new Date().getFullYear()} Oven Cleaning East Sussex. All rights reserved.</p>
      </div>
    </footer>
  );
}