import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine, RiArrowRightSLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import brandMark from "@/assets/images/logo2.svg";

// ─── Mega Menu Data ────────────────────────────────────────────────────────
const menuData = {
  products: {
    capabilities: [
      { name: "Cloud", href: "/products/cloud" },
      { name: "Data", href: "/products/data" },
      { name: "Enterprise", href: "/products/enterprise" },
      { name: "Consulting", href: "/products/security" },
    ],
    features: [{ name: "BridgeIntelligence AI", href: "/bridge-intelligence" }],
    spotlight: {
      title: "BridgeIntelligence AI",
      desc: "Discover how BridgeIntelligence powers enterprise workflows with real-time insights, automation, and predictive analytics.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      author: "Product Team",
    },
  },
  solutions: {
    industries: [
      { name: "Financial Services", href: "/solutions/financial" },
      { name: "Healthcare", href: "/solutions/healthcare" },
      { name: "Public Sector", href: "/solutions/public-sector" },
      { name: "Supply Chain", href: "/solutions/logistics" },
    ],
    useCases: [
      { name: "Cloud Migration", href: "/solutions/migration" },
      { name: "Data Compliance", href: "/solutions/compliance" },
      { name: "AI Automation", href: "/solutions/automation" },
    ],
    spotlight: {
      title: "Built for regulated institutions",
      desc: "See how Bridgesoft helps organizations modernize infrastructure while staying compliant and in control.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Product Team",
    },
  },
  company: [
    { name: "About", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "Investors", href: "/investors" },
    { name: "Careers", href: "/careers" },
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // The crucial "Lights On" logic: Navbar turns dark if not on the homepage,
  // or if scrolled, or if a dropdown / mobile menu is open. This ensures the
  // header remains visible on pages with light backgrounds immediately.
  const isHome = location.pathname === "/";
  const isDarkTheme =
    !isHome || isScrolled || activeDropdown !== null || mobileMenuOpen;

  return (
    <>
      <header
        onMouseLeave={() => setActiveDropdown(null)}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isDarkTheme
            ? "bg-white border-rule shadow-sm"
            : "bg-transparent border-transparent",
        )}
      >
        <div className="site-container flex items-center justify-between h-20">
          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-2 relative z-50">
            <img
              src={brandMark}
              alt="Bridgesoft"
              className="h-8 w-auto object-contain"
            />
            <span
              className={cn(
                "font-sans font-bold text-[22px] tracking-tight transition-colors",
                isDarkTheme ? "text-[#0A2540]" : "text-white",
              )}
            >
              Bridgesoft
            </span>
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {/* Products */}
            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveDropdown("products")}
            >
              <span
                className={cn(
                  "text-[15px] font-medium transition-colors flex items-center gap-1",
                  isDarkTheme
                    ? "text-[#0A2540] hover:text-accent"
                    : "text-white/90 hover:text-white",
                )}
              >
                Products {activeDropdown === "products" ? "-" : "+"}
              </span>
            </div>

            {/* Solutions */}
            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveDropdown("solutions")}
            >
              <span
                className={cn(
                  "text-[15px] font-medium transition-colors flex items-center gap-1",
                  isDarkTheme
                    ? "text-[#0A2540] hover:text-accent"
                    : "text-white/90 hover:text-white",
                )}
              >
                Solutions {activeDropdown === "solutions" ? "-" : "+"}
              </span>
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              onMouseEnter={() => setActiveDropdown(null)}
              className={cn(
                "text-[15px] font-medium transition-colors",
                isDarkTheme
                  ? "text-[#0A2540] hover:text-accent"
                  : "text-white/90 hover:text-white",
              )}
            >
              Pricing
            </Link>

            {/* Company */}
            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveDropdown("company")}
            >
              <span
                className={cn(
                  "text-[15px] font-medium transition-colors flex items-center gap-1",
                  isDarkTheme
                    ? "text-[#0A2540] hover:text-accent"
                    : "text-white/90 hover:text-white",
                )}
              >
                Company {activeDropdown === "company" ? "-" : "+"}
              </span>
            </div>
          </nav>

          {/* ── DESKTOP CTAs ── */}
          <div className="hidden lg:flex items-center gap-6 relative z-50">
            <Link
              to="/login"
              className={cn(
                "text-[13px] font-bold uppercase tracking-widest transition-colors",
                isDarkTheme
                  ? "text-[#0A2540] hover:text-accent"
                  : "text-white hover:text-white/70",
              )}
            >
              Log In
            </Link>
            <Link
              to="/contact"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-bold uppercase tracking-widest transition-all",
                isDarkTheme
                  ? "bg-[#0A2540] text-white hover:bg-gray-800"
                  : "bg-white text-[#0A2540] hover:bg-gray-200",
              )}
            >
              Request a Demo
              <RiArrowRightSLine className="w-4 h-4" />
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className="lg:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <RiCloseLine
                className={cn(
                  "w-7 h-7",
                  isDarkTheme ? "text-[#0A2540]" : "text-white",
                )}
              />
            ) : (
              <RiMenuLine
                className={cn(
                  "w-7 h-7",
                  isDarkTheme ? "text-[#0A2540]" : "text-white",
                )}
              />
            )}
          </button>
        </div>

        {/* ── FULL WIDTH MEGA MENUS ── */}
        <AnimatePresence>
          {activeDropdown === "products" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-b border-rule shadow-2xl overflow-hidden"
            >
              <div className="site-container py-12 grid grid-cols-12 gap-8">
                <div className="col-span-3 space-y-6">
                  <h4 className="text-[11px] font-bold text-subtle uppercase tracking-widest">
                    Platform
                  </h4>
                  <ul className="space-y-4">
                    {menuData.products.capabilities.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-[15px] font-medium text-[#0A2540] hover:text-accent transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3 space-y-6">
                  <h4 className="text-[11px] font-bold text-subtle uppercase tracking-widest">
                    Intelligence
                  </h4>
                  <ul className="space-y-4">
                    {menuData.products.features.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-[15px] font-medium text-[#0A2540] hover:text-accent transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-6 pl-12 border-l border-rule">
                  <h4 className="text-[11px] font-bold text-subtle uppercase tracking-widest mb-6">
                    Spotlight
                  </h4>
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-[20px] font-medium text-[#0A2540] leading-tight">
                        {menuData.products.spotlight.title}
                      </h3>
                      <p className="text-[14px] text-[#425466] leading-relaxed">
                        {menuData.products.spotlight.desc}
                      </p>
                    </div>
                    <div className="w-[240px] shrink-0">
                      <img
                        src={menuData.products.spotlight.image}
                        alt="Spotlight"
                        className="w-full h-[140px] object-cover rounded-xl shadow-sm"
                      />
                      <p className="text-[12px] text-subtle mt-3 text-center">
                        Featured · {menuData.products.spotlight.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeDropdown === "solutions" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-b border-rule shadow-2xl overflow-hidden"
            >
              <div className="site-container py-12 grid grid-cols-12 gap-8">
                <div className="col-span-3 space-y-6">
                  <h4 className="text-[11px] font-bold text-subtle uppercase tracking-widest">
                    By industry
                  </h4>
                  <ul className="space-y-4">
                    {menuData.solutions.industries.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-[15px] font-medium text-[#0A2540] hover:text-accent transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3 space-y-6">
                  <h4 className="text-[11px] font-bold text-subtle uppercase tracking-widest">
                    By use case
                  </h4>
                  <ul className="space-y-4">
                    {menuData.solutions.useCases.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-[15px] font-medium text-[#0A2540] hover:text-accent transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-6 pl-12 border-l border-rule">
                  <h4 className="text-[11px] font-bold text-subtle uppercase tracking-widest mb-6">
                    Spotlight
                  </h4>
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-[20px] font-medium text-[#0A2540] leading-tight">
                        {menuData.solutions.spotlight.title}
                      </h3>
                      <p className="text-[14px] text-[#425466] leading-relaxed">
                        {menuData.solutions.spotlight.desc}
                      </p>
                    </div>
                    <div className="w-[240px] shrink-0">
                      <img
                        src={menuData.solutions.spotlight.image}
                        alt="Spotlight"
                        className="w-full h-[140px] object-cover rounded-xl shadow-sm"
                      />
                      <p className="text-[12px] text-subtle mt-3 text-center">
                        Case Study · {menuData.solutions.spotlight.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeDropdown === "company" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-[60%] -translate-x-1/2 w-[260px] bg-white border border-rule shadow-2xl rounded-b-xl rounded-tl-xl overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {menuData.company.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-2.5 text-[15px] font-medium text-[#0A2540] hover:bg-[#F6F9FC] hover:text-accent rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 top-20 bottom-0 z-50 bg-white px-6 py-8 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-[12px] font-bold text-subtle uppercase tracking-widest">
                  Products
                </span>
                {menuData.products.capabilities.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[18px] font-medium text-[#0A2540] border-b border-rule pb-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  to="/pricing"
                  className="text-[18px] font-medium text-[#0A2540] border-b border-rule pb-3"
                >
                  Pricing
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[12px] font-bold text-subtle uppercase tracking-widest">
                  Solutions
                </span>
                {menuData.solutions.industries.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[18px] font-medium text-[#0A2540] border-b border-rule pb-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[12px] font-bold text-subtle uppercase tracking-widest">
                  Company
                </span>
                {menuData.company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[18px] font-medium text-[#0A2540] border-b border-rule pb-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-6 border-t border-rule flex flex-col gap-4">
                <Link
                  to="/login"
                  className="text-[16px] font-bold uppercase tracking-widest text-[#0A2540] text-center mb-2"
                >
                  Log In
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-[#0A2540] text-white w-full py-4 rounded-sm text-[14px] font-bold uppercase tracking-widest"
                >
                  Request a Demo <RiArrowRightSLine className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
