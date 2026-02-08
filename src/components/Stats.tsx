import { Card } from "@/components/ui/card";
const stats = [{
  value: "50K+",
  label: "Students Placed",
  description: "Successful career launches"
}, {
  value: "500+",
  label: "Partner Companies",
  description: "From startups to Fortune 500"
}, {
  value: "98%",
  label: "Prediction Accuracy",
  description: "AI-powered matching"
}, {
  value: "40%",
  label: "Faster Placements",
  description: "Compared to traditional methods"
}];
const Stats = () => {
  return <section className="py-20 relative">
      
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => <Card key={stat.label} variant="stat" className="text-center animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <p className="text-4xl md:text-5xl font-bold font-display gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Stats;