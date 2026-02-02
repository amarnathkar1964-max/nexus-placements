import { UserPlus, Sparkles, Building, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and build your comprehensive profile with skills, experiences, and career goals.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI Analysis",
    description: "Our AI analyzes your profile, identifies skill gaps, and creates a personalized preparation plan.",
  },
  {
    icon: Building,
    number: "03",
    title: "Smart Matching",
    description: "Get matched with companies that align with your skills, culture fit, and career aspirations.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Land Your Dream Job",
    description: "Interview confidently with AI coaching and track your progress to successful placement.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to transform your placement journey from stressful to successful.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step indicator */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-xl shadow-primary/30">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <span className="text-sm font-mono text-primary mb-2">{step.number}</span>
                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
