import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Github, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <div className="flex min-h-screen">
        {/* Left side - Form */}
        <div className="flex w-full flex-col justify-center px-4 py-12 lg:w-1/2 lg:px-12">
          <div className="mx-auto w-full max-w-md">
            {/* Logo */}
            <Link to="/" className="mb-8 inline-block">
              <span className="font-display text-2xl font-bold text-primary">Blogify</span>
            </Link>

            {/* Header */}
            <div className="mb-8">
              <h1 className="font-display text-3xl font-bold text-foreground">
                {isLogin ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {isLogin
                  ? "Sign in to your account to continue writing"
                  : "Start your writing journey with Blogify"}
              </p>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-center gap-2">
                <Chrome className="h-5 w-5" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full justify-center gap-2">
                <Github className="h-5 w-5" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative my-8">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-4 text-sm text-muted-foreground">
                or continue with email
              </span>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-end">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Link to="/dashboard">
                <Button className="w-full" size="lg">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>
              </Link>
            </form>

            {/* Toggle */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-primary hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Right side - Image/Pattern */}
        <div className="hidden bg-primary lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <div className="p-12 text-center">
            <div className="mx-auto max-w-md">
              <h2 className="font-display text-4xl font-bold text-primary-foreground">
                Share your stories with the world
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Join thousands of writers who use Blogify to publish their ideas, build their audience, and connect with readers.
              </p>
              <div className="mt-12 flex justify-center gap-8">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary-foreground">50K+</p>
                  <p className="text-sm text-primary-foreground/70">Writers</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary-foreground">1M+</p>
                  <p className="text-sm text-primary-foreground/70">Articles</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary-foreground">10M+</p>
                  <p className="text-sm text-primary-foreground/70">Readers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
