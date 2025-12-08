import { BlogNavbar } from "@/components/blog/BlogNavbar";
import { BlogFooter } from "@/components/blog/BlogFooter";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { mockArticles } from "@/data/mockArticles";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredArticle = mockArticles[0];
  const recentArticles = mockArticles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />

      <main>
        {/* Hero Section with Featured Article */}
        <section className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Featured Story
              </h1>
              <p className="mt-2 text-muted-foreground">
                Handpicked article of the week
              </p>
            </div>
          </div>
          
          <ArticleCard article={featuredArticle} featured className="stagger-item" />
        </section>

        {/* Recent Articles */}
        <section className="bg-surface py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  Latest Articles
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fresh perspectives from our community
                </p>
              </div>
              <Link to="/categories">
                <Button variant="ghost" className="group text-primary">
                  View all
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  className="stagger-item"
                  style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get the latest articles delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-lg border border-input bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:w-80"
              />
              <Button size="lg" className="h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
};

export default Index;
