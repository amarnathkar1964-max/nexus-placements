import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Placement Intelligence
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Your Career Journey,{' '}
            <span className="gradient-text">Intelligently Guided</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Unifying students, coordinators, and recruiters on one AI-driven platform. 
            Predict outcomes, streamline coordination, and personalize your path to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-2 border-background flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold font-display">50,000+</p>
              <p className="text-sm text-muted-foreground">Students placed successfully</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div className="text-left">
              <p className="text-2xl font-bold font-display">500+</p>
              <p className="text-sm text-muted-foreground">Partner companies</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div className="text-left">
              <p className="text-2xl font-bold font-display">98%</p>
              <p className="text-sm text-muted-foreground">Prediction accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
