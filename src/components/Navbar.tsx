import { useState } from "react";
import { Menu, X, Pizza } from "lucide-react";

const links = [
  { href: "#home", label: "בית" },
  { href: "#menu", label: "תפריט" },
  { href: "#about", label: "אודות" },
  { href: "#order", label: "הזמנה" },
  { href: "#contact", label: "צור קשר" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Pizza className="w-7 h-7" />
          פיצה בכיכר
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="תפריט">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t">
          <ul className="flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 hover:bg-muted transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
