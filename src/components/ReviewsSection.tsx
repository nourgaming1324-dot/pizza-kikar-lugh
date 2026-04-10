import { Star } from "lucide-react";

const reviews = [
  { name: "דוד כ.", text: "הפיצה הכי טובה בלוד! תמיד טרי וחם.", stars: 5 },
  { name: "מיכל ש.", text: "שירות מהיר, מחירים הוגנים. ממליצה בחום!", stars: 5 },
  { name: "יוסי ל.", text: "הג׳חנון שלהם פשוט מדהים. חוזרים כל שבוע.", stars: 5 },
];

const ReviewsSection = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-2">מה הלקוחות אומרים</h2>
      <p className="text-muted-foreground text-center mb-10">ביקורות אמיתיות מלקוחות מרוצים</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            <p className="font-bold text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
