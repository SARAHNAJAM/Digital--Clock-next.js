// pages/index.js
"use client"; // Enables client-side behavior for the clock

// pages/index.tsx (or index.js if using JavaScript)
import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState<Date>(new Date());

  // useEffect to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to format time into HH:MM:SS
  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Digital Clock</h1>
      <div style={{ fontSize: "4rem", fontFamily: "monospace" }}>
        {formatTime(time)}
      </div>
    </div>
  );
}