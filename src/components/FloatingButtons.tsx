import { MessageCircle, ShoppingCart } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
    {/* WhatsApp */}
    <a
      href="https://wa.me/9720500000000?text=היי, אשמח להזמין פיצה!"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>

    {/* Order CTA */}
    <a
      href="#order"
      className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="הזמן עכשיו"
    >
      <ShoppingCart className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingButtons;
