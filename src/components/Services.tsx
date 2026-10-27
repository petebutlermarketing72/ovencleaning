import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Phone } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-slate-900">Our Premium Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you need a quick refresh or a complete deep clean, we offer professional oven cleaning packages tailored to your needs.
          </p>
        </div>

        <Tabs defaultValue="ovens" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="ovens" className="text-base">Ovens</TabsTrigger>
              <TabsTrigger value="hobs" className="text-base">Hobs & Extras</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ovens" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Single Oven */}
              <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Single Oven</CardTitle>
                  <CardDescription>Complete clean of a standard single oven.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-black text-slate-900">£60</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-2">⏱ 1.5-2 Hours</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate-600 mb-4">
                    Includes removal of doors, glass, and racks. Deep clean of the interior cavity to remove all burnt-on carbon and grease.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href="tel:07481345814">Book Now</a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Double Oven */}
              <Card className="flex flex-col border-primary/20 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Double Oven</CardTitle>
                  <CardDescription>Thorough clean of both oven cavities.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-black text-slate-900">£80</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-2">⏱ 2-2.5 Hours</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate-600 mb-4">
                    Our most popular service. Designed for built-in or freestanding double ovens. Includes both cavities, racks, and glass doors.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href="tel:07481345814">Book Now</a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Range / Aga */}
              <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Range / Aga</CardTitle>
                  <CardDescription>Specialist cleaning for large cookers.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-black text-slate-900">£120</span>
                    <span className="text-slate-500 ml-1">From</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-2">⏱ 3-4 Hours</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate-600 mb-4">
                    Comprehensive clean for Range cookers, Agas, and Rayburns. Includes all ovens, warming drawers, and the hob surface.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="tel:07481345814">Enquire</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hobs" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Hobs & Extractors */}
              <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Hobs & Extractors</CardTitle>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-slate-500">Prices From</span><br/>
                    <span className="text-4xl font-black text-slate-900">£20</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">Gas, Electric, Ceramic & Induction Hobs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">Extractor Hoods (including filters)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">Microwaves & Combi Ovens</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">BBQs (Summer only)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:07481345814">
                      <Phone className="mr-2 h-4 w-4" />
                      Book Now
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* The Full Package */}
              <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                  BUNDLE
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">The Full Package</CardTitle>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-slate-500">Prices From</span><br/>
                    <span className="text-4xl font-black text-slate-900">£110</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-2">⏱ 3-4 Hours</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">Double Oven Deep Clean</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">Hob Clean (Any type)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">Extractor Hood Clean</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-semibold text-primary">Save £10 on individual prices</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" variant="default" asChild>
                    <a href="tel:07481345814">
                      <Phone className="mr-2 h-4 w-4" />
                      Book Now
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}