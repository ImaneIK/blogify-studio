import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import cakeImage1 from "@assets/stock_images/pink_bento_cake_deco_affb12db.jpg";
import cakeImage2 from "@assets/stock_images/pink_bento_cake_deco_84c4f2a1.jpg";
import cakeImage3 from "@assets/stock_images/pink_bento_cake_deco_763f7d0e.jpg";
import cakeImage4 from "@assets/stock_images/pink_bento_cake_deco_ab449c6d.jpg";
import chefImage1 from "@assets/stock_images/female_pastry_chef_w_b6c366bf.jpg";
import chefImage2 from "@assets/stock_images/female_pastry_chef_w_c57eea45.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-display text-primary text-sm">BC</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/about" className="text-foreground hover:text-primary transition-colors" data-testid="link-about">
            About us
          </Link>
          <Link to="/categories" className="text-foreground hover:text-primary transition-colors" data-testid="link-feedback">
            Feedback
          </Link>
          <Link to="/auth" className="text-foreground hover:text-primary transition-colors" data-testid="link-contact">
            Contact
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors" data-testid="link-agenda">
            Agenda
          </Link>
        </div>
      </nav>

      <main className="px-8 py-8">
        <section className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="font-display text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              Master the art of<br />
              <span className="italic">Bento Cakes</span> in London
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img 
                src={cakeImage1} 
                alt="Decorated bento cake" 
                className="w-full h-full object-cover"
                data-testid="img-hero-cake-1"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img 
                src={cakeImage2} 
                alt="Pink decorated cake" 
                className="w-full h-full object-cover"
                data-testid="img-hero-cake-2"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img 
                src={cakeImage3} 
                alt="Bento cake packaging" 
                className="w-full h-full object-cover"
                data-testid="img-hero-cake-3"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 justify-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Prepare your own bento cake under the guidance of an experienced pastry chef, in the pleasant company of Russian speakers in London
            </p>
            <div className="flex flex-col gap-3">
              <Button size="lg" className="rounded-full" data-testid="button-join-now">
                JOIN NOW
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" data-testid="button-contact">
                CONTACT
              </Button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img 
                src={cakeImage4} 
                alt="Pink decorated dessert" 
                className="w-full h-full object-cover"
                data-testid="img-hero-cake-4"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-4 mt-16">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-foreground mb-6">
              Meet your<br />
              <span className="italic">sweet mentors</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are a team of professionals passionate about the art of pastry. We conduct masterclasses on creating bento cakes in London for the Russian-speaking audience.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="bg-card rounded-3xl p-6 grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src={chefImage1} 
                    alt="Kristina - Pastry Chef" 
                    className="w-full h-full object-cover"
                    data-testid="img-mentor-kristina"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
                <h3 className="font-display text-4xl text-card-foreground mb-4">Kristina</h3>
                <p className="text-card-foreground/80 leading-relaxed mb-6">
                  Meet Kristina, our expert chef with over 5 years of experience, who has enhanced her skills through various pastry courses, including a qualification from the renowned Le Cordon Bleu.
                </p>
                <Button variant="outline" className="rounded-full w-fit border-card-foreground/30 text-card-foreground" data-testid="button-contact-kristina">
                  CONTACT
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <span className="text-sm text-muted-foreground mb-2 block">Kristina</span>
              <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                <img 
                  src={chefImage1} 
                  alt="Kristina" 
                  className="w-full h-full object-cover"
                  data-testid="img-kristina-card"
                />
              </div>
              <button 
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                data-testid="button-kristina-arrow"
              >
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <span className="text-sm text-muted-foreground mb-2 block">Milana</span>
              <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                <img 
                  src={chefImage2} 
                  alt="Milana" 
                  className="w-full h-full object-cover"
                  data-testid="img-milana-card"
                />
              </div>
              <button 
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                data-testid="button-milana-arrow"
              >
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex items-end justify-center gap-4 pb-8">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center" data-testid="button-carousel-prev">
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
            </div>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center" data-testid="button-carousel-next">
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
