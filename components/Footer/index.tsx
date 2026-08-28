import motel from "@/data/motel.json";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ClockIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Button } from "../Button";

export const Footer = () => {
  return (
    <footer className="bg-secondary w-screen text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8">
        {/* Logo */}
        <img
          src="/logos/logo-h-white.png"
          alt="Logo"
          className="hidden h-10 w-fit shrink-0 sm:inline-flex"
        />

        {/* Contact Information */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPinIcon size={16} className="font-light" />
              <span>{motel.address}</span>
            </div>

            <div className="flex items-center gap-2">
              <WhatsappLogoIcon size={16} />
              <span>{motel.phoneFormatted}</span>
            </div>

            <div className="flex items-center gap-2">
              <MailIcon size={16} />
              <span>{motel.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon size={16} />
              <span>Aberto 24 horas</span>
            </div>
          </div>

          <Button
            href={`https://wa.me/${motel.phone}`}
            leftIcon={<WhatsappLogoIcon size={20} />}
            label="Entre em contato"
            className="hidden sm:inline-flex"
            variant="outline"
          />
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Bland Motel. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-2">
            <InstagramLogoIcon size={20} />
            <FacebookLogoIcon size={20} weight="fill" />
          </div>
        </div>
      </div>
    </footer>
  );
};
