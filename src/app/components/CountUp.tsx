"use client"

import { useState, useEffect } from 'react';

interface CountUpProps {
  endValue: number;
  duration?: number; 
}

export const CountUp: React.FC<CountUpProps> = ({ endValue, duration = 1 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration * 1000 / 16); 
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(Math.floor(start));
      }
    }, 16); 

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return <span className="text-5xl font-open_sans">{count.toLocaleString()}</span>;
};