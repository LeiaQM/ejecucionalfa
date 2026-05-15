import { useEffect } from "react";

declare global {
  interface Window {
    hotmartLoaded?: boolean;
  }
}

interface HotmartButtonProps {
  label: string;
  size?: "default" | "large";
}

export function HotmartButton({ label, size = "default" }: HotmartButtonProps) {
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
      onClick={(e) => e.preventDefault()}
      href="https://pay.hotmart.com/M105834545M?checkoutMode=2"
      className="hotmart-fb hotmart__button-checkout"
      data-cta={label}
      style={size === "large" ? { fontSize: "1.15rem", padding: "1.4rem 3.2rem" } : undefined}
    >
      <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="" />
      <span style={{ position: "relative", zIndex: 2 }}>{label}</span>
    </a>
  );
}
