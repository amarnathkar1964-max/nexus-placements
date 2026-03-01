import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  MessageSquare,
  TrendingUp,
  BookOpen,
  Brain,
  BarChart3 } from
"lucide-react";

const features = [
{
  icon: FileText,
  title: "Resume Analyzer",
  description: "AI feedback on quality, ATS compatibility, and skill gaps.",
  tag: "Profile"
},
{
  icon: TrendingUp,
  title: "Predictions",
  description: "AI predicts placement probability and highlights weak areas.",
  tag: "Analytics"
},
{
  icon: BookOpen,
  title: "Smart Prep",
  description: "AI-generated questions with company-specific practice modules.",
  tag: "Practice"
},
{
  icon: BarChart3,
  title: "Batch Insights",
  description: "For coordinators: batch performance and forecasting.",
  tag: "Admin"
}];


const AIFeatures = () => {
  return (
    <section id="ai-features" className="py-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      
      











































    </section>);

};

export default AIFeatures;