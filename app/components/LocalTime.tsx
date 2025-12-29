"use client";

import { useEffect, useState } from "react";

interface LocalTimeProps {
  timeZone: string;
}

export function LocalTime({ timeZone }: LocalTimeProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const updateTime = () => {
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return <span>{time}</span>;
}
