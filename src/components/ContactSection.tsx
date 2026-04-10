import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 section-warm">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-2">צור קשר</h2>
      <p className="text-muted-foreground text-center mb-10">נשמח לשמוע מכם</p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">כתובת</h3>
              <p className="text-muted-foreground">רחוב ארבע עונות 16, לוד</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">טלפון</h3>
              <a href="tel:08-0000000" className="text-primary hover:underline font-semibold">
                08-0000000
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">שעות פעילות</h3>
              <p className="text-muted-foreground">ראשון-חמישי: 11:00-23:00</p>
              <p className="text-muted-foreground">שישי: 11:00-15:00</p>
              <p className="text-muted-foreground">מוצ״ש: שעה לאחר צאת שבת</p>
            </div>
          </div>

          <a
            href="tel:08-0000000"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            חייגו עכשיו
          </a>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border h-72 md:h-auto">
          <iframe
            title="מיקום פיצה בכיכר"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8!2d34.888!3d31.951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzAzLjYiTiAzNMKwNTMnMTYuOCJF!5e0!3m2!1siw!2sil!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
