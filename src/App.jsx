// App.jsx (hoặc pages/index.js)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-legal-dark text-legal-text-main font-sans scroll-smooth antialiased">
      <Navbar />

      <main>
        <Hero />
        <Services />

        {/* Contact Section - Nâng cấp: glass effect, form cơ bản, CTA nổi bật */}
        <section
          id="contact"
          className="relative py-32 bg-gradient-to-b from-legal-deep to-legal-dark overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-legal-gold/10 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in-up">
              Cần hỗ trợ pháp lý <span className="text-legal-gold">ngay bây giờ</span>?
            </h2>

            <p className="text-xl md:text-2xl text-legal-text-muted mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Với hơn 12 năm kinh nghiệm xử lý các vụ việc hành chính & đất đai phức tạp tại Cà Mau và ĐBSCL, luật sư Tường Vy sẵn sàng đồng hành cùng bạn.
            </p>

            {/* Hotline nổi bật */}
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-legal-dark/70 backdrop-blur-xl rounded-2xl border border-legal-gold/20 mb-12 shadow-xl">
              <svg className="w-10 h-10 text-legal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-legal-text-muted text-sm uppercase tracking-wider">Hotline tư vấn 24/7</p>
                <p className="text-3xl md:text-4xl font-bold text-legal-gold">0900 123 456</p>
              </div>
            </div>

            {/* Form liên hệ đơn giản */}
            <form className="max-w-2xl mx-auto space-y-6 animate-fade-in-up animation-delay-600">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-6 py-4 bg-legal-dark/60 border border-legal-text-muted/30 rounded-xl focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/30 outline-none transition-all duration-300 backdrop-blur-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-6 py-4 bg-legal-dark/60 border border-legal-text-muted/30 rounded-xl focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/30 outline-none transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </div>

              <textarea
                placeholder="Mô tả ngắn gọn vấn đề của bạn (ví dụ: khiếu nại quyết định thu hồi đất, tranh chấp quyền sử dụng đất...)"
                rows={4}
                className="w-full px-6 py-4 bg-legal-dark/60 border border-legal-text-muted/30 rounded-xl focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/30 outline-none transition-all duration-300 backdrop-blur-sm resize-none"
              ></textarea>

              <button
                type="submit"
                className="group relative w-full md:w-auto bg-legal-gold text-legal-dark px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-legal-gold/30 hover:shadow-legal-gold/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">Gửi yêu cầu tư vấn miễn phí</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>

            <p className="mt-10 text-legal-text-muted text-sm">
              Chúng tôi cam kết bảo mật thông tin theo quy định pháp luật Việt Nam.
            </p>
          </div>
        </section>
      </main>

      {/* Footer nâng cấp - CENTER HOÀN TOÀN */}
      <footer className="py-16 bg-legal-navy border-t border-legal-gold/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-legal-gold mb-4">
                LS. Tường Vy
              </h3>
              <p className="text-legal-text-muted">
                Chuyên gia Luật Hành chính & Tranh chấp Đất đai<br />
                Đồng hành cùng bạn trước cơ quan nhà nước.
              </p>
            </div>

            {/* Liên hệ nhanh */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Liên hệ</h4>
              <ul className="space-y-3 text-legal-text-muted">
                <li>Hotline: 0838565797</li>
                <li>Email: luattuongvy@lawyer.vn</li>
                <li>Địa chỉ: Số 123 Đường 3/2, TP. Cà Mau</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Liên kết nhanh</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="hover:text-legal-gold transition-colors">Trang chủ</a></li>
                <li><a href="#services" className="hover:text-legal-gold transition-colors">Dịch vụ</a></li>
                <li><a href="#contact" className="hover:text-legal-gold transition-colors">Liên hệ</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright - center */}
          <div className="border-t border-legal-gold/10 pt-8 text-legal-text-muted text-sm">
            <p>© {new Date().getFullYear()} Luật sư Tường Vy. Mọi quyền được bảo lưu.</p>
            <p className="mt-2">
              Thiết kế & Phát triển bởi{" "}
              <a
                href="https://profile-personal-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Phước Chung
              </a>.
            </p>          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;