import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{
      animationDelay: '2s'
    }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight animate-fade-in-up" style={{
          animationDelay: '0.1s'
        }}>
            An End-to-End AI Suite for{' '}
            <span className="gradient-text">Smarter Placements</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Prepare better, predict outcomes, and place students efficiently using AI.
            One unified platform for students, coordinators, and recruiters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/student/dashboard">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Login Options */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="glass" size="lg" asChild>
              <Link to="/student/dashboard">
                <GraduationCap className="w-5 h-5 mr-2" />
                Student Login
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/coordinator/dashboard">
                <Users className="w-5 h-5 mr-2" />
                Placement Team Login
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/recruiter/dashboard">
                <Building2 className="w-5 h-5 mr-2" />
                Recruiter Login
              </Link>
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 animate-fade-in-up" style={{
          animationDelay: '0.5s'
        }}>
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <div className="rounded-2xl border border-border/50 overflow-hidden shadow-2xl shadow-primary/10 bg-card/50 backdrop-blur-sm">
                <div className="h-8 bg-secondary/50 border-b border-border/50 flex items-center gap-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="p-6 grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-32 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-lg font-display font-semibold text-primary">AI Analytics Dashboard</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-lg bg-secondary/50 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Placement Score</span>
                      </div>
                      <div className="h-24 rounded-lg bg-secondary/50 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Skill Progress</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-20 rounded-lg bg-secondary/50 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Resume Score</span>
                    </div>
                    <div className="h-20 rounded-lg bg-secondary/50 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Interview Ready</span>
                    </div>
                    <div className="h-20 rounded-lg bg-secondary/50 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">AI Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;