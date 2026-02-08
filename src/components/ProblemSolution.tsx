import { AlertCircle, Target, Lightbulb, ArrowRight } from "lucide-react";
const cards = [{
  icon: AlertCircle,
  title: "Problem",
  description: "Fragmented processes, preparation gaps, and disconnected stakeholders slow down placements.",
  color: "destructive"
}, {
  icon: Target,
  title: "Need",
  description: "A unified, intelligent platform with personalized AI-driven guidance for all users.",
  color: "primary"
}, {
  icon: Lightbulb,
  title: "Solution",
  description: "End-to-end AI suite that predicts, personalizes, and automates the entire placement journey.",
  color: "accent"
}];
const ProblemSolution = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="flex items-center gap-4 md:gap-6">
                <div className="glass-strong p-6 rounded-2xl flex-1 max-w-xs hover:scale-105 transition-transform">
                  <div className={`w-10 h-10 rounded-xl bg-${card.color}/20 flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 text-${card.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
                {index < cards.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProblemSolution;