"use client";

import React, { useEffect, useState, useRef } from 'react';

/**
 * AnimatedCounter component counts from 1 to `target` over `duration` ms
 * using smooth ease-out animation. Automatically starts when visible in viewport.
 */
export default function AnimatedCounter({
  target = 100,
  suffix = '+',
  prefix = '',
  duration = 2000,
  className = ''
}) {
  const [count, setCount] = useState(1);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();
          const startVal = 1;
          const endVal = Number(target) || 1;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutCubic curve for smooth premium deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startVal + (endVal - startVal) * easeOutProgress);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
