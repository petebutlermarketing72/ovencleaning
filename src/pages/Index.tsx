import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { About } from "@/components/About";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { OrderForm } from "@/components/OrderForm";
import { ExitPopup } from "@/components/ExitPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Services />
        <BeforeAfter />
        <About />
        <Reviews />
        <OrderForm />
      </main>
      <Footer />
      <ChatWidget />
      <ExitPopup />
    </div>
  );
};

export default Index;