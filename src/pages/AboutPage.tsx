import { BlogNavbar } from "@/components/blog/BlogNavbar";
import { BlogFooter } from "@/components/blog/BlogFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, BookOpen, Award, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Writers" },
  { icon: BookOpen, value: "1M+", label: "Articles" },
  { icon: Award, value: "99%", label: "Satisfaction" },
  { icon: Heart, value: "10M+", label: "Readers" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Where great ideas find their audience
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Blogify is a modern publishing platform that empowers writers to share their stories, build their audience, and connect with readers worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/auth">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Writing
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stagger-item text-center"
                  style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                >
                  <stat.icon className="mx-auto h-10 w-10 text-primary" />
                  <p className="mt-4 font-display text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Our mission is simple: give every voice a platform
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We believe that everyone has a story worth telling. Whether you're a seasoned journalist, an industry expert, or someone just starting their writing journey, Blogify provides the tools you need to reach your audience.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our platform is designed with writers in mind. Beautiful typography, seamless publishing, and powerful analytics help you focus on what matters most—your content.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-surface p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">For Writers</h3>
                <p className="mt-2 text-muted-foreground">
                  Powerful editor, markdown support, and complete creative control over your content.
                </p>
              </div>
              <div className="rounded-lg bg-surface p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">For Readers</h3>
                <p className="mt-2 text-muted-foreground">
                  Clean, distraction-free reading experience optimized for long-form content.
                </p>
              </div>
              <div className="rounded-lg bg-surface p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">Analytics</h3>
                <p className="mt-2 text-muted-foreground">
                  Deep insights into your audience, engagement metrics, and content performance.
                </p>
              </div>
              <div className="rounded-lg bg-surface p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">Community</h3>
                <p className="mt-2 text-muted-foreground">
                  Connect with fellow writers, get feedback, and grow your network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to start writing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Join thousands of writers who trust Blogify to share their ideas with the world.
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="mt-8">
                Create Your Free Account
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
};

export default AboutPage;
