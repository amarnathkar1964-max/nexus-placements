import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Briefcase, ArrowRight, CheckCircle } from "lucide-react";

const roles = [
  {
    icon: GraduationCap,
    title: "For Students",
    description: "Your intelligent career companion from preparation to placement.",
    color: "primary",
    features: [
      "AI-powered skill gap analysis",
      "Personalized interview preparation",
      "Company compatibility scores",
      "Real-time application tracking",
      "Mock interview with AI coach",
    ],
    cta: "Start Your Journey",
  },
  {
    icon: Building2,
    title: "For Coordinators",
    description: "Streamline the entire placement process with intelligent automation.",
    color: "accent",
    features: [
      "Unified student management",
      "Automated scheduling system",
      "Analytics & reporting dashboard",
      "Communication hub",
      "Bulk operations & exports",
    ],
    cta: "Simplify Coordination",
  },
  {
    icon: Briefcase,
    title: "For Recruiters",
    description: "Find the perfect candidates faster with AI-powered matching.",
    color: "[hsl(200_80%_50%)]",
    features: [
      "Smart candidate shortlisting",
      "Skills & culture fit analysis",
      "Integrated interview scheduling",
      "Candidate insights & reports",
      "Streamlined offer management",
    ],
    cta: "Find Top Talent",
  },
];

const RoleCards = () => {
  return (
    <section id="roles" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a student seeking opportunities, a coordinator managing placements, 
            or a recruiter finding talent — we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card 
              key={role.title}
              variant="gradient"
              className="relative overflow-hidden animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${role.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-${role.color}/20 flex items-center justify-center mb-4`}>
                  <role.icon className={`w-7 h-7 text-${role.color}`} />
                </div>
                <CardTitle className="text-2xl">{role.title}</CardTitle>
                <CardDescription className="text-base">
                  {role.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <ul className="space-y-3">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle className={`w-5 h-5 text-${role.color} shrink-0`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group/btn">
                  {role.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCards;
