"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

interface CounterProps {
  end: number;
  duration?: number;
  colors?: string[];
  className?: string;
}

export default function Counter({
  end,
  duration = 1,
  colors = Object.values(siteConfig.colors),
  className = "text-9xl inline-block w-24",
}: CounterProps) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    let start = 0;
    const stepTime = (duration * 1000) / end;
    const timer = setInterval(() => {
      start++;
      if (start > end) {
        clearInterval(timer);
        start = end;
      }
      setValue(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  // Determine color based on current value
  const color = colors[(value - 1) % colors.length]; // cycles if fewer colors than end

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ color }}
    >
      {value}
    </motion.div>
  );
}
