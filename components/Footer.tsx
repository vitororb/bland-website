import motel from "@/data/motel.json";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ClockIcon, MailIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <footer className="bg-secondary w-full text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8">
        {/* Logo */}
        <Image
          src="/logos/logo-h-white.png"
          alt="Bland Motel"
          width={750}
          height={172}
          className="hidden h-10 w-fit shrink-0 sm:inline-flex"
        />

        {/* Contact Information */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={motel.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 hover:underline"
            >
              <MapPinIcon size={16} className="shrink-0 font-light" />
              <span>{motel.address}</span>
            </a>

            <a
              href={`https://wa.me/${motel.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 hover:underline"
            >
              <WhatsappLogoIcon size={16} className="shrink-0" />
              <span>{motel.phoneFormatted}</span>
            </a>

            <a
              href={`mailto:${motel.email}`}
              className="flex w-fit items-center gap-2 hover:underline"
            >
              <MailIcon size={16} className="shrink-0" />
              <span>{motel.email}</span>
            </a>

            <div className="flex items-center gap-2">
              <ClockIcon size={16} />
              <span>Aberto 24 horas</span>
            </div>
          </div>

          <Button
            href={`https://wa.me/${motel.phone}`}
            target="_blank"
            rel="noopener noreferrer"
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
            <a
              href={motel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Bland Motel"
              className="transition-opacity hover:opacity-70"
            >
              <InstagramLogoIcon size={20} />
            </a>
            <a
              href={motel.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Bland Motel"
              className="transition-opacity hover:opacity-70"
            >
              <FacebookLogoIcon size={20} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
