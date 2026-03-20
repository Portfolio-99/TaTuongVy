// components/Hero.jsx (phiên bản đầy đủ: Hero + About + Achievements)
export default function Hero() {
  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-legal-dark via-legal-deep to-legal-dark overflow-hidden"
      >
        {/* Background decorative */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-legal-gold/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-legal-gold/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-legal-gold/15 border border-legal-gold/30 text-legal-gold font-semibold text-lg md:text-xl mb-10 animate-fade-in-up">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Luật sư chuyên sâu Hành chính & Đất đai – hơn 12 năm kinh nghiệm
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-serif font-bold text-legal-text-main leading-tight mb-10 tracking-tight">
            <span className="block animate-fade-in-up animation-delay-200">Bảo vệ quyền lợi</span>
            <span className="text-legal-gold animate-fade-in-up animation-delay-500 block">hợp pháp</span>
            <span className="block animate-fade-in-up animation-delay-800">trước cơ quan nhà nước</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-legal-text-muted max-w-4xl mx-auto leading-relaxed mb-16 animate-fade-in-up animation-delay-1100">
            Đại diện, tư vấn và thắng kiện trong các vụ việc khiếu nại hành chính phức tạp, tranh chấp đất đai, thu hồi đất, bồi thường giải phóng mặt bằng, cấp phép đầu tư và thủ tục hành chính cấp cao.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="group relative bg-legal-gold text-legal-dark px-10 py-5 sm:px-12 sm:py-6 rounded-full text-lg sm:text-xl font-bold shadow-2xl shadow-legal-gold/40 hover:shadow-legal-gold/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Đặt lịch tư vấn miễn phí</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>

            <a
              href="#about"
              className="px-10 py-5 sm:px-12 sm:py-6 rounded-full text-lg sm:text-xl font-bold border-2 border-legal-gold/60 text-legal-gold hover:bg-legal-gold/10 hover:border-legal-gold transition-all duration-500 hover:-translate-y-1"
            >
              Tìm hiểu về luật sư
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-70">
            <svg className="w-10 h-10 text-legal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ====================== ABOUT SECTION ====================== */}
      <section id="about" className="py-32 bg-legal-deep/70 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-legal-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-legal-text-main mb-6">
              Về <span className="text-legal-gold">Luật sư Tường Vy</span>
            </h2>
            <div className="w-28 h-1.5 bg-legal-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-legal-text-muted max-w-3xl mx-auto">
              Hơn 12 năm kinh nghiệm thực chiến, chuyên sâu Luật Hành chính và Tranh chấp Đất đai tại Cà Mau & ĐBSCL.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ảnh đại diện */}
            <div className="relative group animate-fade-in-up">
              <div className="overflow-hidden rounded-3xl border-4 border-legal-gold/20 shadow-2xl shadow-legal-gold/20 transition-all duration-700 group-hover:border-legal-gold/50 group-hover:shadow-legal-gold/40">
                <img
                  src="/assets/lawyer-portrait.jpg" // Thay bằng ảnh thật của bạn
                  alt="Luật sư Tường Vy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Nội dung */}
            <div className="space-y-8">
              <div className="animate-fade-in-up animation-delay-300">
                <h3 className="text-3xl font-bold text-legal-gold mb-4">Hành trình nghề nghiệp</h3>
                <p className="text-legal-text-muted text-lg leading-relaxed">
                  Tốt nghiệp Đại học Luật TP.HCM năm 2012. Hành nghề từ 2013, tập trung vào các vụ việc hành chính phức tạp và tranh chấp đất đai. Đại diện thành công cho hàng trăm cá nhân/doanh nghiệp trước Tòa án và cơ quan nhà nước tại Cà Mau, Bạc Liêu, Kiên Giang, Cần Thơ...
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-500">
                <h3 className="text-3xl font-bold text-legal-gold mb-4">Cam kết</h3>
                <ul className="space-y-4 text-legal-text-muted text-lg">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-legal-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Giải quyết triệt để khiếu nại, khởi kiện hành chính, thu hồi đất trái luật.
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-legal-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Hỗ trợ doanh nghiệp xin giấy phép đầu tư, cấp phép xây dựng phức tạp.
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-legal-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tỷ lệ thắng kiện cao nhờ am hiểu quy trình địa phương.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== ACHIEVEMENTS SECTION ====================== */}
      <section id="achievements" className="py-32 bg-legal-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-legal-gold/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-legal-text-main mb-6">
              Thành tựu <span className="text-legal-gold">nổi bật</span>
            </h2>
            <div className="w-28 h-1.5 bg-legal-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-legal-text-muted max-w-3xl mx-auto">
              Hàng trăm vụ việc được giải quyết dứt điểm, mang lại quyền lợi hợp pháp cho khách hàng tại ĐBSCL.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { number: "+500", label: "Vụ việc đã tư vấn & đại diện" },
              { number: "85%", label: "Tỷ lệ thành công cao" },
              { number: "12+", label: "Năm kinh nghiệm thực chiến" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-10 bg-legal-deep/80 backdrop-blur-xl rounded-3xl border border-legal-gold/20 hover:border-legal-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-legal-gold/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <p className="text-6xl font-bold text-legal-gold mb-4">{stat.number}</p>
                <p className="text-xl text-legal-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 space-y-16">
            {[
              {
                title: "Hàng trăm vụ khiếu nại hành chính thành công",
                desc: "Đại diện khách hàng thắng kiện hủy quyết định thu hồi đất trái pháp luật, đòi bồi thường bổ sung tại Cà Mau và các tỉnh lân cận.",
              },
              {
                title: "Chuyên gia tranh chấp đất đai phức tạp",
                desc: "Giải quyết thành công các vụ tranh chấp thừa kế đất, ranh giới thửa đất kéo dài nhiều năm, giúp khách hàng lấy lại quyền lợi hợp pháp.",
              },
              {
                title: "Hỗ trợ doanh nghiệp đầu tư ĐBSCL",
                desc: "Tư vấn cấp phép đầu tư dự án lớn, chuyển mục đích sử dụng đất, xử lý khiếu nại GPMB cho hàng chục doanh nghiệp.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-legal-deep/80 backdrop-blur-xl p-10 rounded-3xl border border-legal-gold/20 hover:border-legal-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-legal-gold/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <h3 className="text-3xl font-bold text-legal-text-main mb-4 hover:text-legal-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-legal-text-muted text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 