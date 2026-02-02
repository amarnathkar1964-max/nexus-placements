import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Users, Target, BarChart3, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description: "Machine learning models analyze your profile to predict placement outcomes with 98% accuracy.",
    color: "from-primary to-primary/50",
  },
  {
    icon: TrendingUp,
    title: "Smart Preparation",
    description: "Personalized learning paths based on your target companies and skill gaps.",
    color: "from-accent to-accent/50",
  },
  {
    icon: Users,
    title: "Unified Coordination",
    description: "Seamlessly connect students, coordinators, and recruiters on one platform.",
    color: "from-[hsl(200_80%_50%)] to-[hsl(200_80%_50%/0.5)]",
  },
  {
    icon: Target,
    title: "Company Matching",
    description: "AI matches candidates with companies based on mutual fit and success probability.",
    color: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live dashboards for tracking placement metrics, trends, and performance.",
    color: "from-[hsl(280_80%_60%)] to-[hsl(280_80%_60%/0.5)]",
  },
  {
    icon: MessageSquare,
    title: "AI Interview Coach",
    description: "Practice with AI-powered mock interviews tailored to specific roles and companies.",
    color: "from-[hsl(150_80%_45%)] to-[hsl(150_80%_45%/0.5)]",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Powered by <span className="gradient-text">Artificial Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI engine transforms the placement process, making it smarter, faster, and more successful for everyone involved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="feature"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
