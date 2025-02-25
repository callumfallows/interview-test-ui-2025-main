import { useEffect, useState } from "react";
import { useScrolled } from "../../hooks/useScrolled";

interface StickyNavProps {
  children: React.ReactNode;
}

export function StickyNav({ children }: StickyNavProps) {
  const isScrolled = useScrolled(50);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsSticky(isScrolled);
  }, [isScrolled]);

  return (
    <div
      className={` bg-white transition-all animation-ease duration-800 ${isSticky ? "fixed z-10 top-0 left-0 w-full shadow-lg pt-4" : "relative t-0 l-0"}`}
    >
      {children}
    </div>
  );
}
