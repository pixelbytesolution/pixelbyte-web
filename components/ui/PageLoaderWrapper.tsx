"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  const overlay: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",

    background: "rgba(255, 255, 255, 0.2)", // light glass effect
  };

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {children}

      {loading && (
        <div style={overlay}>
          <Loader />
        </div>
      )}
    </>
  );
}
