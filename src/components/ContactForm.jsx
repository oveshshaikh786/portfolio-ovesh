"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// dynamic import prevents SSR issues with WebGL
const ContactGlobe = dynamic(() => import("../components/ContactGlobe"), {
  ssr: false,
});

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent! ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("There was an error. Please try again.");
      }
    } catch {
      setStatus("There was an error. Please try again.");
    }
  }

  return (
    <section id="contact" className="section">
      <h2>CONTACT ME</h2>
      <p>
        Feel free to reach out via email or through my social media channels.
      </p>
      {/* Globe sits outside the form for layout/accessibility */}
      <ContactGlobe />
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" className="btn">
          Send Message
        </button>
        <div style={{ marginTop: 8 }}>{status}</div>
      </form>
      <div className="social-links" style={{ marginTop: "1.25rem" }}>
        <a
          href="https://www.linkedin.com/in/oveshshaikh786"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/oveshshaikh786"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>

      {/* Mini copyright line under contact section */}
      <div
        style={{
          marginTop: "1rem",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}
      >
        <p> Based in United States</p>© {new Date().getFullYear()} Ovesh Shaikh.
        All rights reserved.
      </div>
    </section>
  );
}
