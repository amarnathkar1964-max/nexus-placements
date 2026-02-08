const stats = [
  { value: "50K+", label: "Students Placed" },
  { value: "500+", label: "Partner Companies" },
  { value: "98%", label: "Prediction Accuracy" },
  { value: "40%", label: "Faster Placements" },
];

const Stats = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold font-display gradient-text group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
