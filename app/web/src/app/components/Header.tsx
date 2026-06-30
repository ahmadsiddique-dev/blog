import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import Keycap from "./elements/Keycap";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3.5 bg-[#0d0d0d] border-b border-hairline transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-linear-to-b from-surface-card to-surface border border-hairline flex items-center justify-center text-accent-yellow font-mono font-bold text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            Y
          </div>
          <span className="text-sm font-bold tracking-widest text-ink font-sans uppercase group-hover:text-primary transition-colors duration-150">
            [Your_Name]
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-xs font-semibold text-mute hover:text-ink transition-colors duration-150 cursor-pointer">
              Blogs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
