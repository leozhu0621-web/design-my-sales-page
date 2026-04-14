import { useEffect, useRef, useState } from "react";

const ScrollProgressCurve = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [point, setPoint] = useState({ x: 50, y: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const p = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
          setProgress(p);

          if (pathRef.current) {
            const totalLength = pathRef.current.getTotalLength();
            const pt = pathRef.current.getPointAtLength(p * totalLength);
            setPoint({ x: pt.x, y: pt.y });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-16 h-screen z-40 pointer-events-none hidden md:block">
      <svg
        viewBox="0 0 60 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* The curved path */}
        <path
          ref={pathRef}
          d="M 30 0 C 45 150, 15 250, 35 400 S 20 550, 30 650 S 45 800, 25 900 S 35 950, 30 1000"
          fill="none"
          stroke="hsl(var(--mist-500, 210 15% 55%) / 0.15)"
          strokeWidth="1.5"
        />

        {/* Traced portion of the path */}
        <path
          d="M 30 0 C 45 150, 15 250, 35 400 S 20 550, 30 650 S 45 800, 25 900 S 35 950, 30 1000"
          fill="none"
          stroke="hsl(var(--harbor-500, 205 35% 23%) / 0.3)"
          strokeWidth="1.5"
          strokeDasharray={pathRef.current ? pathRef.current.getTotalLength().toString() : "2000"}
          strokeDashoffset={pathRef.current ? ((1 - progress) * pathRef.current.getTotalLength()).toString() : "2000"}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />

        {/* Glowing dot */}
        <circle
          cx={point.x}
          cy={point.y}
          r="5"
          fill="hsl(var(--harbor-500, 205 35% 23%))"
          filter="url(#glow)"
          opacity={progress > 0.001 ? 1 : 0}
          style={{ transition: "opacity 0.3s" }}
        />
        <circle
          cx={point.x}
          cy={point.y}
          r="2.5"
          fill="hsl(var(--ivory-100, 45 80% 92%))"
          opacity={progress > 0.001 ? 1 : 0}
          style={{ transition: "opacity 0.3s" }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgressCurve;
