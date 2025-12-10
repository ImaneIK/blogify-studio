import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PenLine, Users, TrendingUp, Sparkles, BookOpen, MessageSquare } from "lucide-react";
import blogImage1 from "@/assets/blog-thumb-1.jpg";
import blogImage2 from "@/assets/blog-thumb-2.jpg";
import blogImage3 from "@/assets/blog-thumb-3.jpg";
import blogImage4 from "@/assets/blog-thumb-4.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between gap-4 px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-display text-primary text-sm font-semibold">B</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1 bg-surface-elevated rounded-full px-2 py-1">
          <Link to="/about" className="px-4 py-2 text-foreground hover:text-primary transition-colors text-sm">
            About us
          </Link>
          <Link to="/categories" className="px-4 py-2 text-foreground hover:text-primary transition-colors text-sm">
            Features
          </Link>
          <Link to="/articles" className="px-4 py-2 text-foreground hover:text-primary transition-colors text-sm">
            Blog
          </Link>
          <Link to="/auth" className="px-4 py-2 text-foreground hover:text-primary transition-colors text-sm">
            Pricing
          </Link>
        </div>
        <Link to="/auth">
          <Button className="rounded-full">Get Started</Button>
        </Link>
      </nav>

      <main className="px-6 md:px-8 py-8 max-w-7xl mx-auto">
        {/* Hero Section - Bento Grid */}
        <section className="grid grid-cols-12 gap-4 mb-16">
          {/* Main headline */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4">
              Share your story<br />
              <span className="italic text-primary">with the world</span>
            </h1>
          </div>

          {/* Hero image 1 */}
          <div className="col-span-6 lg:col-span-3">
            <div className="bento-card aspect-[4/5] bg-card">
              <img 
                src={blogImage1} 
                alt="Creative writing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description card */}
          <div className="col-span-6 lg:col-span-4 bg-card rounded-3xl p-6 flex flex-col justify-end">
            <p className="text-card-foreground/90 text-base leading-relaxed mb-4">
              Create beautiful articles with our intuitive editor. Reach thousands of readers and grow your audience effortlessly.
            </p>
          </div>

          {/* Hero image 2 */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bento-card aspect-video lg:aspect-[4/3]">
              <img 
                src={blogImage2} 
                alt="Content creation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 justify-center">
            <Link to="/auth">
              <Button size="lg" className="rounded-full w-full">
                START WRITING FREE
              </Button>
            </Link>
            <Link to="/articles">
              <Button variant="outline" size="lg" className="rounded-full w-full">
                EXPLORE ARTICLES
              </Button>
            </Link>
          </div>

          {/* Hero image 3 */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bento-card aspect-video lg:aspect-[4/3]">
              <img 
                src={blogImage3} 
                alt="Community of writers" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display text-3xl lg:text-4xl leading-tight text-foreground mb-4">
              Everything you need<br />
              <span className="italic text-primary">to succeed</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Blogify gives you all the tools to write, publish, and grow your audience. No technical skills required.
            </p>
          </div>

          {/* Feature cards */}
          <div className="col-span-6 lg:col-span-4">
            <div className="bg-surface-elevated rounded-3xl p-6 h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <PenLine className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Rich Editor</h3>
              <p className="text-muted-foreground text-sm">
                Write with markdown, add images, code blocks, and more with our intuitive editor.
              </p>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-4">
            <div className="bg-surface-elevated rounded-3xl p-6 h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Track views, reads, and engagement. Understand what resonates with your audience.
              </p>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-4">
            <div className="bg-surface-elevated rounded-3xl p-6 h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground text-sm">
                Connect with fellow writers and readers. Build meaningful relationships.
              </p>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-4">
            <div className="bg-surface-elevated rounded-3xl p-6 h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">SEO Ready</h3>
              <p className="text-muted-foreground text-sm">
                Optimized for search engines out of the box. Get discovered organically.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="bento-card aspect-video lg:aspect-auto lg:h-full">
              <img 
                src={blogImage4} 
                alt="Writing inspiration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Writers Section */}
        <section className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={blogImage1} 
                  alt="Featured writer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <h3 className="font-display text-3xl text-card-foreground mb-4">Join 10,000+ Writers</h3>
              <p className="text-card-foreground/80 leading-relaxed mb-6">
                Writers from around the world trust Blogify to share their ideas, build their brand, and connect with readers who matter.
              </p>
              <Link to="/auth">
                <Button variant="outline" className="rounded-full w-fit border-card-foreground/30 text-card-foreground bg-card-foreground/10 hover:bg-card-foreground/20">
                  JOIN THE COMMUNITY
                </Button>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <div className="bg-surface-elevated rounded-3xl p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <span className="font-display text-3xl text-foreground">50K+</span>
              </div>
              <p className="text-muted-foreground">Articles published this month</p>
            </div>
            <div className="bg-surface-elevated rounded-3xl p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
                <span className="font-display text-3xl text-foreground">100K+</span>
              </div>
              <p className="text-muted-foreground">Comments and interactions</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 bg-card rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-card-foreground mb-4">
              Ready to start your writing journey?
            </h2>
            <p className="text-card-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of writers who are already sharing their stories on Blogify. It's free to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" variant="outline" className="rounded-full border-card-foreground/30 text-card-foreground bg-card-foreground/10 hover:bg-card-foreground/20">
                  CREATE FREE ACCOUNT
                </Button>
              </Link>
              <Link to="/articles">
                <Button size="lg" variant="ghost" className="rounded-full text-card-foreground hover:bg-card-foreground/10">
                  BROWSE ARTICLES <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display text-primary text-xs font-semibold">B</span>
              </div>
              <span className="font-display text-xl text-foreground">Blogify</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              The modern platform for writers and readers. Share your story with the world.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Product</h4>
              <div className="flex flex-col gap-2">
                <Link to="/categories" className="text-muted-foreground text-sm hover:text-primary">Features</Link>
                <Link to="/auth" className="text-muted-foreground text-sm hover:text-primary">Pricing</Link>
                <Link to="/articles" className="text-muted-foreground text-sm hover:text-primary">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="text-muted-foreground text-sm hover:text-primary">About</Link>
                <Link to="/auth" className="text-muted-foreground text-sm hover:text-primary">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;