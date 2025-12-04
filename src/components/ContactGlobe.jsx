// src/components/ContactGlobe.jsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

// react-globe.gl loads three under the hood; we import the component dynamically
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function ContactGlobe() {
  const globeRef = useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [key, setKey] = useState(0); // Force remount on theme change

  // ---- LOCATIONS (keep existing variable name "city", just add more markers)
  // Cleveland + places you can relocate: San Jose, Los Angeles, New York
  const city = useMemo(
    () => [
      // Cleveland (home base)
      {
        lat: 41.4993,
        lng: -81.6944,
        size: 0.12,
        color: "rgba(0, 200, 255, 0.95)",
        label: "Cleveland, OH",
      },
      // San Jose, CA
      {
        lat: 37.3382,
        lng: -121.8863,
        size: 0.1,
        color: "rgba(0, 180, 255, 0.9)",
        label: "San Jose, CA",
      },
      // Los Angeles, CA
      {
        lat: 34.0522,
        lng: -118.2437,
        size: 0.1,
        color: "rgba(0, 160, 255, 0.9)",
        label: "Los Angeles, CA",
      },
      // New York, NY
      {
        lat: 40.7128,
        lng: -74.006,
        size: 0.1,
        color: "rgba(0, 140, 255, 0.9)",
        label: "New York, NY",
      },
    ],
    []
  );

  const arcs = useMemo(() => {
    const cle = { lat: 41.4993, lng: -81.6944 };
    const targets = [
      { lat: 37.3382, lng: -121.8863, name: "San Jose, CA" },
      { lat: 34.0522, lng: -118.2437, name: "Los Angeles, CA" },
      { lat: 40.7128, lng: -74.006, name: "New York, NY" },
    ];
    return targets.map((t, i) => ({
      startLat: cle.lat,
      startLng: cle.lng,
      endLat: t.lat,
      endLng: t.lng,
      name: t.name,

      arcAlt: 0.12 + i * 0.02,
      color: [
        "rgba(0,124,237,0.15)",
        theme === "space" ? "rgba(63,169,255,0.9)" : "rgba(0,124,237,0.9)",
      ],
    }));
  }, [theme]);

  // Optional: pulsing rings to accent markers (works like a ping)
  const rings = useMemo(() => {
    return city.map((c) => ({
      lat: c.lat,
      lng: c.lng,
      maxR: 3.2, // in degrees roughly; visual radius on globe
      propagationSpeed: 0.7, // ring speed
      repeatPeriod: 1400, // ms
      color:
        theme === "space"
          ? () => "rgba(63,169,255,0.65)"
          : () => "rgba(0,124,237,0.55)",
    }));
  }, [city, theme]);

  // Globe textures based on theme
  const globeTextures = useMemo(() => {
    if (theme === "space") {
      // Night/Dark theme - Earth at night with city lights
      return {
        globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
        bump: "https://unpkg.com/three-globe/example/img/earth-topology.png",
        atmosphereColor: "#3fa9ff",
        atmosphereAltitude: 0.15,
        labelColor: "white",
      };
    } else {
      // Day/Light theme - Blue marble Earth (daytime)
      return {
        globe:
          "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
        bump: "https://unpkg.com/three-globe/example/img/earth-topology.png",
        atmosphereColor: "#87CEEB", // Sky blue
        atmosphereAltitude: 0.12,
        labelColor: "#feffffff",
      };
    }
  }, [theme]);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Force remount when theme changes (to update textures)
  useEffect(() => {
    if (mounted) {
      setKey((prev) => prev + 1);
    }
  }, [theme, mounted]);

  // Setup controls and rotation
  useEffect(() => {
    if (!mounted) return;

    const g = globeRef.current;
    if (!g) return;

    const controls = g.controls();
    controls.enableZoom = false;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    controls.autoRotate = !prefersReduced;
    controls.autoRotateSpeed = 0.4;

    // 👉 Centered, nice default point of view
    if (g.pointOfView) {
      g.pointOfView(
        { lat: 20, lng: -40, altitude: 2.4 },
        0 // no animation on first load
      );
    }
  }, [mounted, key]);

  if (!mounted) {
    // Render placeholder during SSR
    return (
      <div className="globe-shell" aria-hidden="true">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            fontSize: "1.2rem",
          }}
        >
          <i
            className="fa-solid fa-globe"
            style={{ fontSize: "3rem", opacity: 0.3 }}
          ></i>
        </div>
      </div>
    );
  }

  return (
    <div className="globe-shell" aria-hidden="true">
      <Globe
        key={key} // Force remount on theme change
        ref={globeRef}
        width={undefined} // let CSS size it
        height={undefined}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={globeTextures.globe}
        bumpImageUrl={globeTextures.bump}
        showAtmosphere
        atmosphereColor={globeTextures.atmosphereColor}
        atmosphereAltitude={globeTextures.atmosphereAltitude}
        // ---- Labels: now includes Cleveland + SJ + LA + NY
        labelsData={city}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.label}
        labelSize={1.2}
        labelColor={() => globeTextures.labelColor}
        labelResolution={2}
        labelDotRadius={0.45}
        labelAltitude={0.01}
        // ---- Animated "arrows" (flight arcs)
        arcsData={arcs}
        arcColor={(d) => d.color}
        arcAltitude={(d) => d.arcAlt}
        arcStroke={0.9}
        arcDashLength={0.35}
        arcDashGap={0.7}
        arcDashInitialGap={() => Math.random()} // stagger starts
        arcDashAnimateTime={2200}
        // ---- Pulsing rings at each marker
        ringsData={rings}
        ringColor={(d) => d.color(d)}
        ringMaxRadius={(d) => d.maxR}
        ringPropagationSpeed={(d) => d.propagationSpeed}
        ringRepeatPeriod={(d) => d.repeatPeriod}
      />
      {/* Subtle pulse under the marker(s) */}
      <div className="glow-ring" />
    </div>
  );
}
