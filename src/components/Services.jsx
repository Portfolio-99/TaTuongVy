// components/Services.jsx
const services = [
  {
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    title: "Khiếu kiện Hành chính",
    desc: "Đại diện khởi kiện, khiếu nại quyết định hành chính, hành vi hành chính, quyết định kỷ luật buộc thôi việc, xử phạt vi phạm hành chính, thu hồi giấy phép, cưỡng chế thi hành..."
  },
  {
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    title: "Tranh chấp & Thu hồi Đất đai",
    desc: "Xử lý tranh chấp ranh giới, thừa kế đất, tranh chấp quyền sử dụng đất, khiếu nại bồi thường, hỗ trợ tái định cư, cưỡng chế thu hồi đất, xác định nguồn gốc đất, cấp giấy chứng nhận..."
  },
  {
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    title: "Thủ tục Đầu tư & Cấp phép",
    desc: "Hỗ trợ xin giấy phép đầu tư, giấy phép xây dựng, giấy phép môi trường, giấy phép khai thác khoáng sản, chuyển mục đích sử dụng đất, điều chỉnh quy hoạch, cấp phép kinh doanh có điều kiện..."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-legal-deep/70 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-legal-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-legal-text-main mb-6">
            Lĩnh vực <span className="text-legal-gold">chuyên sâu</span>
          </h2>
          <div className="w-28 h-1.5 bg-legal-gold mx-auto rounded-full mb-8"></div>
          <p className="text-legal-text-muted text-xl max-w-3xl mx-auto">
            Tập trung nguồn lực giải quyết triệt để các vụ việc phức tạp, đòi hỏi kinh nghiệm thực chiến và am hiểu sâu về quy trình hành chính nhà nước.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 bg-legal-dark/80 backdrop-blur-xl rounded-3xl border border-legal-gold/10 hover:border-legal-gold/50 transition-all duration-700 hover:shadow-2xl hover:shadow-legal-gold/20 hover:-translate-y-6 overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-legal-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-legal-deep border border-legal-gold/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-legal-gold transition-all duration-500">
                  <svg
                    className="w-10 h-10 text-legal-gold group-hover:text-legal-dark transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-legal-text-main mb-6 group-hover:text-legal-gold transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-legal-text-muted text-lg leading-relaxed group-hover:text-legal-text-main/90 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}