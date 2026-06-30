import Link from "next/link";
import { IconBrandFacebook, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-hairline bg-[#0d0d0d] px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-200 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-8">
        <div className="flex flex-col gap-2.5 max-w-md">
          <Link href="/" className="flex items-center gap-2 select-none w-fit">
            <span className="text-sm font-bold tracking-widest text-ink uppercase">
              Ahmad Siddique
            </span>
          </Link>
          <p className="text-xs text-mute leading-relaxed">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-xs text-stone mt-1">
            &copy; {new Date().getFullYear()} Ahmad Siddique. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-3 min-w-32">
          <span className="text-xs font-semibold text-ink uppercase tracking-wider">Connect</span>
          <ul className="flex flex-col gap-2 text-xs text-mute">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-150 flex items-center gap-2"
              >
                <IconBrandFacebook className="w-4 h-4" stroke={1.5} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-150 flex items-center gap-2"
              >
                <IconBrandLinkedin className="w-4 h-4" stroke={1.5} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@example.com"
                className="hover:text-primary transition-colors duration-150 flex items-center gap-2"
              >
                <IconMail className="w-4 h-4" stroke={1.5} />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
