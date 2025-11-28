// src/components/PageLoader.jsx
"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load - remove this after testing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Or check if all resources are loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="loader-spinner" role="status" aria-label="Loading page">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
