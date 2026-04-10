import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const OrderSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ההזמנה נשלחה! 🍕",
      description: `תודה ${form.name}, ניצור איתך קשר בהקדם.`,
    });
    setForm({ name: "", phone: "", address: "", notes: "" });
  };

  return (
    <section id="order" className="py-20 section-warm">
      <div className="container max-w-xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2">הזמנה</h2>
        <p className="text-muted-foreground text-center mb-10">מלאו את הפרטים ונחזור אליכם</p>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-md border space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">שם מלא</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition"
              placeholder="ישראל ישראלי"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">טלפון</label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition"
              placeholder="050-0000000"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">כתובת למשלוח</label>
            <input
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition"
              placeholder="רחוב, מספר בית, עיר"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">הערות</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition resize-none"
              rows={3}
              placeholder="בקשות מיוחדות..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-full text-lg hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            שלח הזמנה
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
