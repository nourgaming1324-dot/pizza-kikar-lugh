import aboutPizza from "@/assets/about-pizza.jpg";
import { CheckCircle2 } from "lucide-react";

const features = [
  "פיצריה שכונתית עם טעם ביתי",
  "חומרי גלם איכותיים ולחם אפוי טרי",
  "שירות מהיר ואמין – גם במשלוח",
  "הכשר מהודר",
];

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-black mb-6">קצת עלינו</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            ב&quot;פיצה בכיכר&quot; אנחנו מאמינים שפיצה טובה מתחילה בבצק טרי, רוטב עגבניות
            ביתי וגבינה איכותית. אנחנו כאן כדי להביא לכם את הטעם האיטלקי
            המושלם ישר עד הבית, בלוד ובסביבה.
          </p>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={aboutPizza}
            alt="גבינה נמשכת מפיצה"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
