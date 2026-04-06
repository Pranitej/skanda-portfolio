import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Smooth Scroll Progress Bar Component with Left-to-Right Glowing Animation
const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let rafId = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200/30 dark:bg-gray-800/30 backdrop-blur-[1px]">
        <div
          className="h-full relative overflow-hidden"
          style={{
            width: `${scrollProgress}%`,
            background:
              "linear-gradient(90deg, #FFD700, #FFA500, #FFD700, #FFA500, #FFD700)",
            backgroundSize: "300% 100%",
            boxShadow:
              "0 0 12px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.5)",
            borderRadius: "0 4px 4px 0",
            willChange: "width",
          }}
        >
          {/* Left to Right Glowing Animation */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), rgba(255, 215, 0, 0.5), transparent)",
              transform: "translateX(-100%)",
              animation: "glowMove 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              borderRadius: "0 4px 4px 0",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes glowMove {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          @keyframes glowMove {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        }
      `}</style>
    </>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("skanda-theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("skanda-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[#faf8f2] dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500">
      <ScrollProgressBar />
      <div
        aria-hidden="true"
        className="page-ambient pointer-events-none fixed inset-0 -z-10"
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
