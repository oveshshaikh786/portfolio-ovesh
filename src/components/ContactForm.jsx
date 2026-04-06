// src/components/ContactForm.jsx
"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const ContactGlobe = dynamic(() => import("../components/ContactGlobe"), {
  ssr: false,
});

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
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
          Open to full-time roles, collaborations, and interesting projects.
          Fill out the form or reach me directly at{" "}
          <a
            href="mailto:oveshshaikh814@gmail.com"
            style={{ color: "var(--brand-2)", fontWeight: 700 }}
          >
            oveshshaikh814@gmail.com
          </a>
          . I usually respond within a day.
        </p>

        <ContactGlobe />

        <form id="contactForm" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin" />
                Sending...
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane" />
                Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <p
              style={{
                color: "#86efac",
                fontWeight: 700,
                fontSize: "0.9rem",
                marginTop: 6,
              }}
            >
              ✅ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p
              style={{
                color: "#fca5a5",
                fontWeight: 700,
                fontSize: "0.9rem",
                marginTop: 6,
              }}
            >
              ❌ Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
