// src/components/ContactForm.jsx
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
    <section id="contact">
      <div className="home-section-inner">
        <header className="home-section-header">
          <div>
            <div className="home-section-kicker">Contact</div>
            <h2 className="home-section-title">Let&apos;s Connect</h2>
          </div>
        </header>

        <p className="home-section-description">
          Feel free to reach out via this form or through my social channels. I
          usually respond within a day.
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
      </div>
    </section>
  );
}
