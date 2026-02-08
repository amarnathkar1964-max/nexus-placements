import { AlertCircle, Target, Lightbulb, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: AlertCircle,
    title: "Problem",
    description: "Fragmented processes, preparation gaps, and disconnected stakeholders slow down placements.",
    color: "destructive",
  },
  {
    icon: Target,
    title: "Need",
    description: "A unified, intelligent platform with personalized AI-driven guidance for all users.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Solution",
    description: "End-to-end AI suite that predicts, personalizes, and automates the entire placement journey.",
    color: "accent",
  },
];

const ProblemSolution = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div key={card.title} className="flex items-center gap-4 flex-1">
              <div
                className={`flex-1 p-5 rounded-xl bg-gradient-to-br from-${card.color}/10 to-transparent border border-${card.color}/20 hover:border-${card.color}/40 transition-all duration-300 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-lg bg-${card.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <card.icon className={`w-4 h-4 text-${card.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{card.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              {index < cards.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 hidden lg:block shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
