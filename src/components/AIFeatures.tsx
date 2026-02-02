import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  BookOpen, 
  Brain, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Resume Analyzer",
    description: "Upload your resume and get instant AI feedback on quality, ATS compatibility, and skill gaps aligned with your target companies.",
    tag: "Resume & Profile",
  },
  {
    icon: MessageSquare,
    title: "AI Mock Interview",
    description: "Practice with our AI interviewer through text or voice. Get real-time evaluation on confidence, technical accuracy, and communication.",
    tag: "Interview Prep",
  },
  {
    icon: TrendingUp,
    title: "Placement Prediction",
    description: "AI predicts your placement probability based on skills, performance, and market trends. See your readiness score and improvement areas.",
    tag: "Analytics",
  },
  {
    icon: BookOpen,
    title: "Smart Preparation",
    description: "Aptitude, technical, and HR preparation with AI-generated questions, explanations, and company-specific practice modules.",
    tag: "Practice",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Personalized learning paths that adapt to your performance, skills, and career goals. Focus on what matters most.",
    tag: "Personalization",
  },
  {
    icon: BarChart3,
    title: "Batch Analytics",
    description: "For coordinators: AI-powered insights on batch performance, company matching, and placement forecasting reports.",
    tag: "Admin Tools",
  },
];

const AIFeatures = () => {
  return (
    <section id="ai-features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Modules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Intelligent Features for <span className="gradient-text">Every Step</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From resume building to interview preparation, our AI modules guide you through every phase of your placement journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="feature"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {feature.tag}
                  </span>
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

export default AIFeatures;
