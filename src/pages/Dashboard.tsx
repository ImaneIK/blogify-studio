import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, FileText, MessageCircle, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { mockArticles } from "@/data/mockArticles";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Total Views",
    value: "47,340",
    change: "+12.5%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "Published Articles",
    value: "24",
    change: "+3",
    trend: "up",
    icon: FileText,
  },
  {
    title: "Comments",
    value: "340",
    change: "+18.2%",
    trend: "up",
    icon: MessageCircle,
  },
  {
    title: "Engagement Rate",
    value: "8.4%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard" subtitle="Welcome back, John!">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="stagger-item" style={{ animationDelay: `${index * 50}ms` }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <span
                  className={`flex items-center text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4" />
                  )}
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Articles */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display">Recent Articles</CardTitle>
            <Link to="/dashboard/articles">
              <Button variant="ghost" size="sm" className="text-primary">
                View all
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockArticles.slice(0, 4).map((article) => (
                <div
                  key={article.id}
                  className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="h-16 w-24 rounded-md object-cover"
                  />
                  <div className="flex-1 overflow-hidden">
                    <h4 className="truncate font-medium text-foreground">{article.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {article.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {article.comments}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/dashboard/create" className="block">
              <Button className="w-full justify-start" size="lg">
                <FileText className="mr-3 h-5 w-5" />
                Create New Article
              </Button>
            </Link>
            <Link to="/dashboard/assets" className="block">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Eye className="mr-3 h-5 w-5" />
                Upload Media
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <TrendingUp className="mr-3 h-5 w-5" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
