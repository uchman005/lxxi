import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '2348025021402';
const DEFAULT_MESSAGE = 'Hello LXXI, I would like to make an enquiry.';

const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-30 flex items-center gap-2.5 rounded-full p-1.5 sm:pr-4 bg-[#33363B]/80 backdrop-blur-lg backdrop-saturate-150 border border-[rgba(229,182,62,0.35)] shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] text-[#F0C85A] transition-all duration-300 hover:border-[rgba(229,182,62,0.7)] hover:bg-[#33363B]/90 hover:shadow-[0_4px_24px_rgba(229,182,62,0.18),inset_0_1px_0_rgba(240,200,90,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B63E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1012]"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/85 ring-1 ring-[rgba(229,182,62,0.4)] text-white transition-colors duration-300 group-hover:bg-[#25D366]">
        <FaWhatsapp className="w-5 h-5" aria-hidden />
      </span>
      <span className="hidden sm:inline text-[13px] font-medium tracking-wide">Chat on WhatsApp</span>
    </a>
  );
}
