// components/Navbar.jsx
export default function Navbar() {
  const navLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Về luật sư", href: "#about" },
    { name: "Thành tựu", href: "#achievements" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-legal-dark/70 backdrop-blur-xl border-b border-legal-gold/10 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-3xl font-serif font-extrabold tracking-tight">
          LS. <span className="text-legal-gold">Tường Vy</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-3 text-legal-text-main hover:text-legal-gold font-medium transition-colors duration-300 after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-legal-gold after:rounded-full after:transition-all after:duration-400 hover:after:w-3/4"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-6 relative overflow-hidden bg-legal-gold text-legal-dark px-8 py-3.5 rounded-full font-bold shadow-xl shadow-legal-gold/30 hover:shadow-legal-gold/50 hover:-translate-y-1 transition-all duration-500 group"
          >
            <span className="relative z-10">Tư vấn miễn phí ngay</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>

        {/* Mobile Hamburger (có thể mở rộng sau) */}
        <button className="md:hidden text-legal-gold">
          <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}