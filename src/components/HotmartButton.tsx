import { useEffect } from "react";

declare global {
  interface Window {
    hotmartLoaded?: boolean;
  }
}

interface HotmartButtonProps {
  label?: string;
  size?: "default" | "large";
}

export function HotmartButton({ label = "SIGUE IGUAL O EJECUTA HOY", size = "default" }: HotmartButtonProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.hotmartLoaded) return;
    window.hotmartLoaded = true;

    const script = document.createElement("script");
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
    document.head.appendChild(link);
  }, []);

  return (
    <a
      href="https://pay.hotmart.com/M105834545M?checkoutMode=2"
      className="hotmart-fb hotmart__button-checkout inline-flex items-center justify-center text-center border-4 shadow-md border-[#69acb0] font-mono font-bold uppercase tracking-wider"
      style={{
        display: "inline-flex",
        minWidth: size === "large" ? 300 : 220,
        minHeight: size === "large" ? 64 : 48,
        fontSize: size === "large" ? "1.15rem" : "0.9rem",
        padding: size === "large" ? "1.2rem 3rem" : "0.8rem 2rem",
        background: "#00EAFF",
        color: "#050505",
        boxShadow: "0 0 30px rgba(0,234,255,0.5)",
      }}
    >
      {label}
    </a>
  );
}
