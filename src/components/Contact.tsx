
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the form
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Animate contact info cards
      gsap.fromTo('.contact-card',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
          }
        }
      );

      // Animate form inputs
      gsap.fromTo('.form-field',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@menareps.com',
      description: 'راسلنا في أي وقت'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+966 12 345 6789',
      description: 'متاحون 24/7'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      description: 'مقرنا الرئيسي'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            تواصل معنا
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا لمعرفة المزيد عن خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="contact-info space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">معلومات التواصل</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card group flex items-start space-x-4 rtl:space-x-reverse p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                      <info.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-emerald-400 font-medium mb-1">{info.value}</p>
                      <p className="text-slate-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8">أرسل رسالة</h3>
            <form className="space-y-6">
              <div className="form-field">
                <label className="block text-slate-300 font-medium mb-2">الاسم</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                  placeholder="اسمك الكامل"
                />
              </div>
              
              <div className="form-field">
                <label className="block text-slate-300 font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-field">
                <label className="block text-slate-300 font-medium mb-2">الموضوع</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                  placeholder="موضوع الرسالة"
                />
              </div>
              
              <div className="form-field">
                <label className="block text-slate-300 font-medium mb-2">الرسالة</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              
              <div className="form-field">
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25"
                >
                  إرسال الرسالة
                  <Send className="inline-block mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
