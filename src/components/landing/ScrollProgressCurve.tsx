import { useEffect, useRef, useState } from "react";

const ScrollProgressCurve = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [point, setPoint] = useState({ x: 50, y: 0 });
  const [progress, setProgress] = useState(0);
  const [totalLen, setTotalLen] = useState(2000);

  useEffect(() => {
    if (pathRef.current) setTotalLen(pathRef.current.getTotalLength());
  }, []);

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
            const pt = pathRef.current.getPointAtLength(p * totalLen);
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
  }, [totalLen]);

  const PATH_D = "M 30 0 C 45 150, 15 250, 35 400 S 20 550, 30 650 S 45 800, 25 900 S 35 950, 30 1000";
  const visible = progress > 0.001;

  return (
    <div className="fixed left-0 top-0 w-16 h-screen z-40 pointer-events-none hidden md:block">
      <svg viewBox="0 0 60 1000" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="traceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#273C4D" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#586C7B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#273C4D" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Background path */}
        <path ref={pathRef} d={PATH_D} fill="none" stroke="#80939B" strokeOpacity="0.15" strokeWidth="1.5" />

        {/* Traced gradient path */}
        <path
          d={PATH_D}
          fill="none"
          stroke="url(#traceGrad)"
          strokeWidth="2"
          strokeDasharray={totalLen}
          strokeDashoffset={(1 - progress) * totalLen}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />

        {/* Outer glow ring - pulsing */}
        <circle
          cx={point.x} cy={point.y} r="8"
          fill="none" stroke="#273C4D" strokeWidth="1.5" strokeOpacity="0.4"
          filter="url(#glow)"
          opacity={visible ? 1 : 0}
          style={{ transition: "opacity 0.3s" }}
          className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        />

        {/* Main glowing dot */}
        <circle
          cx={point.x} cy={point.y} r="5"
          fill="#273C4D"
          filter="url(#glow)"
          opacity={visible ? 1 : 0}
          style={{ transition: "opacity 0.3s" }}
        />

        {/* Bright center */}
        <circle
          cx={point.x} cy={point.y} r="2"
          fill="#FEF6DC"
          opacity={visible ? 1 : 0}
          style={{ transition: "opacity 0.3s" }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgressCurve;
