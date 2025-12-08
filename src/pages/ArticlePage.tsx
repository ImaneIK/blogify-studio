import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BlogNavbar } from "@/components/blog/BlogNavbar";
import { BlogFooter } from "@/components/blog/BlogFooter";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { AdPlaceholder } from "@/components/blog/AdPlaceholder";
import { getArticleById, getRelatedArticles } from "@/data/mockArticles";
import { Clock, Eye, MessageCircle, Share2, Bookmark, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || "");
  const relatedArticles = getRelatedArticles(id || "", 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <BlogNavbar />
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground">Article not found</h1>
            <p className="mt-4 text-muted-foreground">The article you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="mt-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />

      <main className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
        {/* Back link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to articles
        </Link>

        {/* Article Layout with Ads */}
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,720px)_1fr]">
          {/* Left Ad (Desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <AdPlaceholder size="sidebar" />
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="fade-in">
            {/* Header */}
            <header className="mb-8">
              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
                {article.excerpt}
              </p>

              {/* Author & Meta */}
              <div className="mt-8 flex flex-col gap-4 border-b border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="h-12 w-12 rounded-full bg-muted"
                  />
                  <div>
                    <p className="font-medium text-foreground">{article.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {article.readingTime} min read
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-4 w-4" />
                      {article.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4" />
                      {article.comments}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-lg">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="article-content">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Mobile Ad */}
            <div className="my-8 lg:hidden">
              <AdPlaceholder size="medium" />
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-lg bg-surface p-6">
              <div className="flex items-start gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-16 w-16 rounded-full bg-muted"
                />
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Written by {article.author.name}
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    A passionate writer and content creator sharing insights on technology, productivity, and modern life.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* Right Ad (Desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <AdPlaceholder size="sidebar" />
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        <section className="mt-16 border-t border-border pt-12">
          <h2 className="mb-8 font-display text-2xl font-bold text-foreground">
            Related Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
};

export default ArticlePage;
