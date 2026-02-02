import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Target, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: AlertCircle,
    title: "Problem Context",
    description: "Traditional placement processes are fragmented, time-consuming, and lack personalization. Students struggle with preparation gaps while coordinators juggle multiple tools.",
    color: "destructive",
    gradient: "from-destructive/20 to-destructive/5",
  },
  {
    icon: Target,
    title: "User Need",
    description: "A unified platform that streamlines placement preparation, provides intelligent insights, and connects all stakeholders with personalized AI-driven guidance.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Lightbulb,
    title: "Solution Objective",
    description: "PlaceAI delivers an end-to-end AI suite that predicts outcomes, personalizes preparation, and automates coordination—making placements smarter and faster.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
];

const ProblemSolution = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Why <span className="gradient-text">PlaceAI</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We identified the core challenges in campus placements and built the solution that addresses them all.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Card
              key={card.title}
              variant="glass"
              className="relative overflow-hidden animate-fade-in-up group hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-${card.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-7 h-7 text-${card.color}`} />
                </div>
                <CardTitle className="text-2xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
