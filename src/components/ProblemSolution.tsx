import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Target, Lightbulb } from "lucide-react";
const cards = [{
  icon: AlertCircle,
  title: "Problem Context",
  description: "Traditional placement processes are fragmented, time-consuming, and lack personalization. Students struggle with preparation gaps while coordinators juggle multiple tools.",
  color: "destructive",
  gradient: "from-destructive/20 to-destructive/5"
}, {
  icon: Target,
  title: "User Need",
  description: "A unified platform that streamlines placement preparation, provides intelligent insights, and connects all stakeholders with personalized AI-driven guidance.",
  color: "primary",
  gradient: "from-primary/20 to-primary/5"
}, {
  icon: Lightbulb,
  title: "Solution Objective",
  description: "PlaceAI delivers an end-to-end AI suite that predicts outcomes, personalizes preparation, and automates coordination—making placements smarter and faster.",
  color: "accent",
  gradient: "from-accent/20 to-accent/5"
}];
const ProblemSolution = () => {
  return <section className="py-24 relative">
      
    </section>;
};
export default ProblemSolution;