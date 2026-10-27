import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "James T.",
    date: "2 weeks ago",
    text: "Incredible service! Our oven looks brand new again, better than when it left the showroom. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    date: "1 month ago",
    text: "Very professional and punctual. They managed to remove years of burnt-on grease from my double oven. Worth every penny.",
    rating: 5,
  },
  {
    name: "David W.",
    date: "2 months ago",
    text: "Great attention to detail. Had the Aga cleaned and it is flawless. Will definitely use Oven Cleaning East Sussex again.",
    rating: 5,
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-black text-slate-200 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wider text-white">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="font-bold">Excellent</span>
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span>Based on Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-background text-foreground p-8 rounded-2xl border border-border shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <p className="mb-6 italic text-lg">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-heading text-xl">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-lg">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
