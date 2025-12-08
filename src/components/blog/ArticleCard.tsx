import { Link } from "react-router-dom";
import { Clock, MessageCircle, Eye } from "lucide-react";
import { Article } from "@/data/mockArticles";
import { cn } from "@/lib/utils";
import React from "react";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ArticleCard({ article, featured = false, className, style }: ArticleCardProps) {
  return (
    <Link
      to={`/article/${article.id}`}
      style={style}
      className={cn(
        "group block rounded-lg bg-card card-hover overflow-hidden",
        featured && "lg:grid lg:grid-cols-2 lg:gap-0",
        className
      )}
    >
      {/* Thumbnail */}
      <div className={cn(
        "relative overflow-hidden",
        featured ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"
      )}>
        <img
          src={article.thumbnail}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent lg:bg-gradient-to-r" />
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col p-5",
        featured && "lg:justify-center lg:p-8"
      )}>
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {article.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-display font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2",
          featured ? "text-2xl lg:text-3xl" : "text-lg"
        )}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className={cn(
          "mt-2 text-muted-foreground line-clamp-2",
          featured ? "text-base lg:text-lg lg:line-clamp-3" : "text-sm"
        )}>
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-8 w-8 rounded-full bg-muted"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                {article.author.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readingTime} min
            </span>
            {featured && (
              <>
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  {article.views.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" />
                  {article.comments}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
