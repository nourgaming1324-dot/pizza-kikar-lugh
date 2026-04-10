import { Pizza } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-10">
    <div className="container text-center space-y-4">
      <div className="flex items-center justify-center gap-2 text-xl font-bold">
        <Pizza className="w-6 h-6" />
        פיצה בכיכר
      </div>
      <p className="text-background/60 text-sm">רחוב ארבע עונות 16, לוד • כל הזכויות שמורות © {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
