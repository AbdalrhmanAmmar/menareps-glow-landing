
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          }
        }
      );

      gsap.fromTo('.footer-section',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          }
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'المميزات', href: '#features' },
    { name: 'من نحن', href: '#about' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const services = [
    'إدارة المندوبين',
    'تتبع الأداء',
    'تحليل البيانات',
    'التقارير الذكية'
  ];

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="footer-section lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Menareps
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              النظام الرائد في إدارة المندوبين الطبيين في منطقة الشرق الأوسط وشمال أفريقيا
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-xl font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="text-xl font-bold text-white mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="text-xl font-bold text-white mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-slate-400">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>info@menareps.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-slate-400">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+966 12 345 6789</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse text-slate-400">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-center md:text-right">
              © 2024 Menareps. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-8 rtl:space-x-reverse">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
