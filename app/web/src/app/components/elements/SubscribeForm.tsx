"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconCircleCheck } from "@tabler/icons-react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {status === "success" ? (
        <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-accent-green-soft border border-accent-green/30 text-accent-green">
          <IconCircleCheck className="w-5 h-5 text-accent-green" stroke={2} />
          <span className="text-sm font-medium">Successfully subscribed to updates.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
          <div className="relative flex-1">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Search or enter email..."
              required
              disabled={status === "loading"}
              className="bg-surface-elevated text-ink placeholder:text-mute focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-hairline-strong transition-all duration-200"
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading"}
            className="cursor-pointer active:scale-98 animate-none"
          >
            {status === "loading" ? (
              <svg className="animate-spin h-5 w-5 text-on-primary" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <span>Subscribe</span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
