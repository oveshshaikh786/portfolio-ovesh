// src/components/ParticleBackground.jsx
"use client";

import * as THREE from "three";
import { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

/* ---------- Theme-aware palette (no UI changes) ---------- */
function readVars() {
  const root = document.documentElement;
  const get = (name, fallback) =>
    getComputedStyle(root).getPropertyValue(name).trim() || fallback;

  const inSpace = document.body?.dataset?.theme === "space";

  const brand = get("--brand", "#007ced");
  const brandLight = get("--brand-light", "#3fa9ff");

  const waveTint = inSpace ? "#9fe3ff" : brand;
  const ringColor = inSpace ? "#7dd3fc" : brand;
  const nodeColor = inSpace ? "#a5b4fc" : "#00a8ff";
  const linkColor = inSpace ? "#60a5fa" : brand;
  const lightColor = inSpace ? "#7dd3fc" : brand;

  return {
    inSpace,
    brand,
    brandLight,
    waveTint,
    ringColor,
    nodeColor,
    linkColor,
    lightColor,
  };
}

function useThemePalette() {
  const [palette, setPalette] = useState(() =>
    typeof window !== "undefined"
      ? readVars()
      : {
          inSpace: false,
          brand: "#007ced",
          brandLight: "#3fa9ff",
          waveTint: "#007ced",
          ringColor: "#007ced",
          nodeColor: "#00a8ff",
          linkColor: "#007ced",
          lightColor: "#007ced",
        }
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setPalette(readVars());

    const mo = new MutationObserver(update);
    mo.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", update);
    requestAnimationFrame(update);

    return () => {
      mo.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return palette;
}

/* ---------- Floating particles with wave motion (UNCHANGED logic) ---------- */
function WaveParticles({ count = 3000, tint = "#007ced" }) {
  const ref = useRef();
  const timeRef = useRef(0);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const t = Math.random();
      colors[i * 3 + 0] = 0.0 + t * 0.3;
      colors[i * 3 + 1] = 0.5 + t * 0.5;
      colors[i * 3 + 2] = 0.9 + t * 0.1;
    }
    return { positions, colors };
  }, [count]);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [positions, colors]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    timeRef.current += delta;
    const posAttr = ref.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const z = positions[i3 + 2];
      posAttr.array[i3 + 1] =
        positions[i3 + 1] +
        Math.sin(timeRef.current * 0.5 + x * 0.3) * 0.3 +
        Math.cos(timeRef.current * 0.3 + z * 0.2) * 0.2;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.y = timeRef.current * 0.05;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        vertexColors
        color={tint}
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ---------- Orbiting rings (UNCHANGED logic) ---------- */
function OrbitRings({ color = "#007ced" }) {
  const group = useRef();

  const rings = useMemo(
    () => [
      { radius: 4, speed: 0.2, tilt: 0.3, particles: 150 },
      { radius: 5.5, speed: -0.15, tilt: -0.2, particles: 200 },
      { radius: 7, speed: 0.1, tilt: 0.1, particles: 250 },
    ],
    []
  );

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={group}>
      {rings.map((ring, idx) => (
        <Ring key={idx} {...ring} color={color} />
      ))}
    </group>
  );
}

function Ring({ radius, speed, tilt, particles, color }) {
  const ref = useRef();
  const timeRef = useRef(Math.random() * Math.PI * 2);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    for (let i = 0; i < particles; i++) {
      const angle = (i / particles) * Math.PI * 2;
      positions[i * 3 + 0] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.1;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [radius, particles]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    timeRef.current += delta * speed;
    ref.current.rotation.y = timeRef.current;
    ref.current.rotation.x = tilt;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color={color}
        transparent
        opacity={0.45}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ---------- Connected particles (UNCHANGED logic) ---------- */
function ConnectedParticles({
  count = 100,
  nodeColor = "#00a8ff",
  linkColor = "#007ced",
}) {
  const pointsRef = useRef();
  const linesRef = useRef();
  const timeRef = useRef(0);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, [count]);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return g;
  }, [positions]);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);

  useFrame((_, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    timeRef.current += delta;
    const posAttr = pointsRef.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posAttr.array[i3 + 0] =
        positions[i3] + Math.sin(timeRef.current + i) * 0.5;
      posAttr.array[i3 + 1] =
        positions[i3 + 1] + Math.cos(timeRef.current * 0.7 + i) * 0.5;
    }
    posAttr.needsUpdate = true;

    const linePositions = [];
    const maxDistance = 2;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
        const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
        const dz = posAttr.array[i * 3 + 2] - posAttr.array[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDistance) {
          linePositions.push(
            posAttr.array[i * 3],
            posAttr.array[i * 3 + 1],
            posAttr.array[i * 3 + 2],
            posAttr.array[j * 3],
            posAttr.array[j * 3 + 1],
            posAttr.array[j * 3 + 2]
          );
        }
      }
    }
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
  });

  return (
    <>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.05}
          color={nodeColor}
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color={linkColor}
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </>
  );
}

/* ---------- Mouse interaction (UNCHANGED logic) ---------- */
function MouseInteraction({ palette }) {
  const { size } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const groupRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / size.width) * 2 - 1,
        y: -(event.clientY / size.height) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x +=
        (mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y +=
        (mouse.x * 0.2 - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <WaveParticles count={2000} tint={palette.waveTint} />
      <ConnectedParticles
        count={80}
        nodeColor={palette.nodeColor}
        linkColor={palette.linkColor}
      />
    </group>
  );
}

/* ---------- Root canvas (layout unchanged) ---------- */
export default function ParticleBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const palette = useThemePalette();

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
      style={{
        background: "transparent",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight
        position={[10, 10, 10]}
        intensity={0.55}
        color={palette.lightColor}
      />

      <MouseInteraction palette={palette} />
      <OrbitRings color={palette.ringColor} />
    </Canvas>
  );
}
