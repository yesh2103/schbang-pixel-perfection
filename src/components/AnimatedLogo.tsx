import { useEffect, useState } from "react";

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className={`transition-all duration-500 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
        <span className="text-2xl lg:text-3xl font-black tracking-tight">
          Schbang
        </span>
        <span className="text-xs lg:text-sm font-normal ml-2 text-muted-foreground">
          .Production
        </span>
      </div>
      {isAnimating && (
        <div className="absolute inset-0 rounded-lg animate-pulse-glow pointer-events-none" />
      )}
    </div>
  );
};

export default AnimatedLogo;