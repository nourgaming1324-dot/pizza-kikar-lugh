import heroPizza from "@/assets/hero-pizza.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroPizza}
      alt="פיצה טעימה"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 text-center px-4 max-w-2xl animate-fade-in">
      <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full mb-6">
        🧀 כשר
      </span>
      <h1 className="text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-4">
        הפיצה הכי טעימה בלוד!
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
        מחירים טובים, שירות מהיר וטעם מושלם
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#order"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          הזמן עכשיו
        </a>
        <a
          href="#menu"
          className="bg-primary-foreground/20 backdrop-blur text-primary-foreground border border-primary-foreground/30 font-bold px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/30 transition-all"
        >
          לתפריט
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
