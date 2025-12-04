// src/app/layout.js

import ThemeProvider from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollFeatures from "../components/ScrollFeatures";
import "./style.css";

export const metadata = {
  title: {
    default: "Ovesh",
    template: "%s | Ovesh Shaikh",
  },
  description: "Portfolio of Ovesh Shaikh",
  // ❌ Don't add icons here if you use app/icon.png or app/favicon.ico
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Enforce favicon manually in case metadata fails */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollFeatures />
          <div className="app-shell">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
