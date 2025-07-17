
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the section background
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Animate numbers counting up
      const stats = [5000, 250, 15, 99];
      
      numbersRef.current.forEach((numberEl, index) => {
        if (numberEl) {
          gsap.fromTo(numberEl,
            { innerText: 0 },
            {
              innerText: stats[index],
              duration: 2,
              ease: "power2.out",
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: numberEl,
                start: 'top 80%',
              },
              onUpdate: function() {
                numberEl.innerHTML = Math.floor(this.targets()[0].innerText).toLocaleString();
              }
            }
          );
        }
      });

      // Animate stat cards
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 70%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      number: '5,000',
      label: 'مندوب طبي',
      description: 'في جميع أنحاء المنطقة'
    },
    {
      number: '250',
      label: 'شركة دوائية',
      description: 'تثق في نظامنا'
    },
    {
      number: '15',
      label: 'دولة',
      description: 'في الشرق الأوسط وأفريقيا'
    },
    {
      number: '99',
      label: '% معدل الرضا',
      description: 'من عملائنا'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
            نحن في أرقام
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            أرقام تتحدث عن نجاحنا وثقة عملائنا في خدماتنا
          </p>
        </div>

        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:bg-slate-800/80"
            >
              <div className="mb-4">
                <span
                  ref={(el) => {
                    if (el) numbersRef.current[index] = el;
                  }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-teal-300 transition-all duration-300"
                >
                  0
                </span>
                {stat.number.includes('%') && (
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">%</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-100 transition-colors duration-300">
                {stat.label}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
