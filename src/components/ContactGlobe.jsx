// src/components/ContactGlobe.jsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function ContactGlobe() {
  const globeRef = useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [key, setKey] = useState(0);

  // Locations — home base: Milpitas/Fremont CA (PDDN), open to more
  const city = useMemo(
    () => [
      // {
      //   lat: 37.4323,
      //   lng: -121.8996,
      //   size: 0.14,
      //   color: "rgba(0, 200, 255, 0.95)",
      //   label: "Fremont, CA (Current)",
      // },
      {
        lat: 37.3382,
        lng: -121.8863,
        size: 0.1,
        color: "rgba(0, 180, 255, 0.88)",
        label: "San Jose, CA",
      },
      {
        lat: 34.0522,
        lng: -118.2437,
        size: 0.09,
        color: "rgba(0, 160, 255, 0.85)",
        label: "Los Angeles, CA",
      },
      {
        lat: 40.7128,
        lng: -74.006,
        size: 0.09,
        color: "rgba(0, 140, 255, 0.82)",
        label: "New York, NY",
      },
    ],
    [],
  );

  const arcs = useMemo(() => {
    const home = { lat: 37.4323, lng: -121.8996 };
    const targets = [
      { lat: 37.3382, lng: -121.8863 },
      { lat: 34.0522, lng: -118.2437 },
      { lat: 40.7128, lng: -74.006 },
    ];
    return targets.map((t, i) => ({
      startLat: home.lat,
      startLng: home.lng,
      endLat: t.lat,
      endLng: t.lng,
      arcAlt: 0.1 + i * 0.04,
      color: [
        "rgba(0,124,237,0.12)",
        theme === "space" ? "rgba(63,169,255,0.9)" : "rgba(0,124,237,0.9)",
      ],
    }));
  }, [theme]);

  const rings = useMemo(
    () =>
      city.map((c) => ({
        lat: c.lat,
        lng: c.lng,
        maxR: 3,
        propagationSpeed: 0.65,
        repeatPeriod: 1400,
        color:
          theme === "space"
            ? () => "rgba(63,169,255,0.6)"
            : () => "rgba(0,124,237,0.5)",
      })),
    [city, theme],
  );

  const globeTextures = useMemo(
    () =>
      theme === "space"
        ? {
            globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
            bump: "https://unpkg.com/three-globe/example/img/earth-topology.png",
            atmosphereColor: "#3fa9ff",
            atmosphereAltitude: 0.15,
            labelColor: "white",
          }
        : {
            globe:
              "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
            bump: "https://unpkg.com/three-globe/example/img/earth-topology.png",
            atmosphereColor: "#87CEEB",
            atmosphereAltitude: 0.12,
            labelColor: "#ffffff",
          },
    [theme],
  );

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) setKey((k) => k + 1);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const g = globeRef.current;
    if (!g) return;
    const ctrl = g.controls();
    ctrl.enableZoom = false;
    ctrl.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    ctrl.autoRotateSpeed = 0.35;
    if (g.pointOfView) g.pointOfView({ lat: 32, lng: -105, altitude: 2.2 }, 0);
  }, [mounted, key]);

  if (!mounted) {
    return (
      <div className="globe-shell" aria-hidden="true">
        <i
          className="fa-solid fa-globe"
          style={{
            fontSize: "3rem",
            opacity: 0.25,
            color: "var(--text-muted)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="globe-shell" aria-hidden="true">
      <Globe
        key={key}
        ref={globeRef}
        width={undefined}
        height={undefined}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={globeTextures.globe}
        bumpImageUrl={globeTextures.bump}
        showAtmosphere
        atmosphereColor={globeTextures.atmosphereColor}
        atmosphereAltitude={globeTextures.atmosphereAltitude}
        labelsData={city}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.label}
        labelSize={1.1}
        labelColor={() => globeTextures.labelColor}
        labelResolution={2}
        labelDotRadius={0.42}
        labelAltitude={0.01}
        arcsData={arcs}
        arcColor={(d) => d.color}
        arcAltitude={(d) => d.arcAlt}
        arcStroke={0.85}
        arcDashLength={0.32}
        arcDashGap={0.65}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={2200}
        ringsData={rings}
        ringColor={(d) => d.color(d)}
        ringMaxRadius={(d) => d.maxR}
        ringPropagationSpeed={(d) => d.propagationSpeed}
        ringRepeatPeriod={(d) => d.repeatPeriod}
      />
      <div className="glow-ring" />
    </div>
  );
}
