import { Play, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "البث المباشر", href: "/" },
      { label: "الجدول", href: "/schedule" },
      { label: "التصنيفات", href: "/categories" },
      { label: "الباقة المميزة", href: "#" },
    ],
    company: [
      { label: "عن المنصة", href: "/about" },
      { label: "الوظائف", href: "#" },
      { label: "الإعلام", href: "#" },
      { label: "اتصل بنا", href: "#" },
    ],
    support: [
      { label: "مركز المساعدة", href: "#" },
      { label: "شروط الخدمة", href: "#" },
      { label: "سياسة الخصوصية", href: "#" },
      { label: "سياسة ملفات تعريف الارتباط", href: "#" },
    ],
    sports: [
      { label: "كرة القدم", href: "/categories" },
      { label: "كرة السلة", href: "/categories" },
      { label: "UFC", href: "/categories" },
      { label: "التنس", href: "/categories" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "تويتر", color: "hover:text-sky-400" },
    { icon: Instagram, href: "#", label: "انستغرام", color: "hover:text-pink-400" },
    { icon: Youtube, href: "#", label: "يوتيوب", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-[#0a0f0a] border-t border-gray-800/50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:shadow-emerald-600/50 transition-all">
                <Play className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                سبورت<span className="text-emerald-500">ستريم</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              وجهتك المثالية للبث الرياضي المباشر. استمتع بإثارة المباريات
              بجودة فائقة الوضوح وتحديثات لحظية.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={["w-10 h-10 rounded-lg bg-slate-900/50 border border-gray-800/50 flex items-center justify-center text-gray-400 transition-all hover:scale-110 hover:border-emerald-600/50", social.color].join(" ")}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">المنتج</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">الشركة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">الدعم</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">الرياضات</h3>
            <ul className="space-y-3">
              {footerLinks.sports.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">ابق على اطلاع</h3>
              <p className="text-gray-400 text-sm">
                اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والمحتوى الحصري.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full bg-slate-900/50 border border-gray-800/50 text-white pr-12 pl-4 py-3 rounded-lg focus:outline-none focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/20 transition-all placeholder:text-gray-500 text-sm"
                />
              </div>
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-emerald-600/30 whitespace-nowrap text-sm">
                اشترك
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span dir="ltr"></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span dir="ltr"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-right">
              &copy; {currentYear} <span className="text-white font-semibold">سبورت ستريم</span>. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                الشروط
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}