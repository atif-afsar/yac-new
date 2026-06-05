import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-yac-bg-elevated py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-gradient-yac">YAC</p>
            <p className="mt-2 text-sm text-yac-muted">
              Yasir Ali Classes — Coaching Institute, Aligarh
            </p>
          </div>
          <div className="text-sm text-yac-muted">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-yac-gold" />
              Aligarh, Uttar Pradesh
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-yac-gold" />
              +91 XXXXX XXXXX
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-yac-gold" />
              contact@yasiraliclasses.com
            </p>
          </div>
          <div className="flex items-start gap-4 md:justify-end">
            <a
              href="#"
              className="text-yac-muted transition-colors hover:text-yac-purple-light"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-yac-muted transition-colors hover:text-yac-red-light"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-yac-muted transition-colors hover:text-yac-gold"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-yac-muted">
          © {new Date().getFullYear()} Yasir Ali Classes. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
