
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Users, BarChart3, Zap, MapPin, Clock, Award, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.features-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.features-title',
            start: 'top 80%',
          }
        }
      );

      // Animate feature cards with stagger
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Floating animation for icons
      gsap.to('.feature-icon', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'أمان متقدم',
      description: 'حماية عالية المستوى لبيانات المندوبين الطبيين'
    },
    {
      icon: Users,
      title: 'إدارة الفرق',
      description: 'تنسيق فعال وسهل لفرق المندوبين في المنطقة'
    },
    {
      icon: BarChart3,
      title: 'تحليلات ذكية',
      description: 'رؤى فورية وتقارير مفصلة عن الأداء'
    },
    {
      icon: Zap,
      title: 'أداء سريع',
      description: 'نظام سريع ومتجاوب لجميع العمليات'
    },
    {
      icon: MapPin,
      title: 'تتبع المواقع',
      description: 'متابعة مواقع المندوبين في الوقت الفعلي'
    },
    {
      icon: Clock,
      title: 'جدولة ذكية',
      description: 'تنظيم المواعيد والزيارات بكفاءة عالية'
    },
    {
      icon: Award,
      title: 'تقييم الأداء',
      description: 'نظام شامل لتقييم ومكافأة الأداء المتميز'
    },
    {
      icon: Target,
      title: 'تحقيق الأهداف',
      description: 'متابعة وتحليل تحقيق الأهداف المحددة'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="features-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            مميزات النظام
          </h2>
          <p className="features-title text-xl text-slate-300 max-w-3xl mx-auto">
            نظام شامل ومتطور لإدارة المندوبين الطبيين في منطقة الشرق الأوسط وشمال أفريقيا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:bg-slate-800/90 hover:scale-105"
            >
              <div className="feature-icon mb-6 p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl w-fit mx-auto group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-100 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
