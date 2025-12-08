import { BlogNavbar } from "@/components/blog/BlogNavbar";
import { BlogFooter } from "@/components/blog/BlogFooter";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { mockArticles } from "@/data/mockArticles";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "All", count: 45 },
  { name: "Technology", count: 18 },
  { name: "AI", count: 12 },
  { name: "Web Dev", count: 15 },
  { name: "Productivity", count: 8 },
  { name: "Design", count: 10 },
  { name: "Lifestyle", count: 6 },
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />

      <main className="container mx-auto px-4 py-12 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Explore Categories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover articles across various topics. From technology to lifestyle, find content that matches your interests.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <Badge
              key={category.name}
              variant={index === 0 ? "default" : "secondary"}
              className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {category.name}
              <span className="ml-2 opacity-70">({category.count})</span>
            </Badge>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              className="stagger-item"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </main>

      <BlogFooter />
    </div>
  );
};

export default CategoriesPage;
