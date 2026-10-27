import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-[450px] animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">Chat with us</h3>
              <p className="text-xs opacity-90">We typically reply in a few minutes</p>
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 rounded-full" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-950/50 overflow-y-auto flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                OC
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-slate-100 dark:border-slate-700">
                Hi there! 👋 How can we help you today? Looking to book an oven clean?
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Type your message..." className="rounded-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" />
              <Button type="submit" size="icon" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
