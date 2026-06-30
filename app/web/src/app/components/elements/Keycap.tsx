import { ReactNode } from "react";

export default function Keycap({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-gradient-to-b from-surface-card to-surface border border-hairline text-mute text-xs font-mono select-none h-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {children}
    </kbd>
  );
}
