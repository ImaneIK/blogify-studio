import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import AuthPage from "./pages/AuthPage";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import ArticlesPage from "./pages/ArticlesPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import AssetsPage from "./pages/AssetsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Blog Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/articles" element={<ArticlesPage />} />
          <Route path="/dashboard/create" element={<CreateArticlePage />} />
          <Route path="/dashboard/assets" element={<AssetsPage />} />
          <Route path="/dashboard/settings" element={<Dashboard />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
