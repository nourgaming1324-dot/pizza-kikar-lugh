import { useState } from "react";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type MenuItem = { name: string; price: number };

const menuData: Record<string, MenuItem[]> = {
  "פיצות": [
    { name: "מרגריטה", price: 45 },
    { name: "פיצה זיתים", price: 50 },
    { name: "פיצה פטריות", price: 52 },
    { name: "פיצה טונה", price: 55 },
    { name: "פיצה מקסיקנית", price: 58 },
    { name: "פיצה משפחתית", price: 70 },
  ],
  "תוספות": [
    { name: "גבינה נוספת", price: 8 },
    { name: "זיתים", price: 6 },
    { name: "פטריות", price: 7 },
    { name: "בצל", price: 5 },
    { name: "פלפל חריף", price: 5 },
    { name: "תירס", price: 6 },
  ],
  "מאפים": [
    { name: "זיווה", price: 15 },
    { name: "ג׳חנון", price: 18 },
    { name: "מלאווח", price: 16 },
    { name: "בורקס גבינה", price: 12 },
    { name: "בורקס תפו״א", price: 12 },
  ],
  "שתייה": [
    { name: "קולה", price: 8 },
    { name: "ספרייט", price: 8 },
    { name: "מים מינרליים", price: 6 },
    { name: "בירה", price: 15 },
    { name: "לימונדה", price: 12 },
  ],
};

const categories = Object.keys(menuData);

const MenuSection = () => {
  const [active, setActive] = useState(categories[0]);
  const { toast } = useToast();

  const handleAdd = (item: MenuItem) => {
    toast({
      title: `${item.name} נוסף להזמנה`,
      description: `₪${item.price}`,
    });
  };

  return (
    <section id="menu" className="py-20 section-warm">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2">התפריט שלנו</h2>
        <p className="text-muted-foreground text-center mb-10">בחרו מהמבחר העשיר שלנו</p>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground border hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {menuData[active].map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow border"
            >
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <span className="text-primary font-bold">₪{item.price}</span>
              </div>
              <button
                onClick={() => handleAdd(item)}
                className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors hover:scale-110"
                aria-label={`הוסף ${item.name}`}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
