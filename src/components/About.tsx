import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Globe, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the image section
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -100, rotation: -5 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Animate the content section
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Animate feature items
      gsap.fromTo('.about-feature',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.about-features',
            start: 'top 80%',
          }
        }
      );

      // Floating animation for icons
      gsap.to('.about-icon', {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.4
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Globe,
      title: t('comprehensiveCoverage'),
      description: t('comprehensiveCoverageDesc')
    },
    {
      icon: Users,
      title: t('professionalTeam'),
      description: t('professionalTeamDesc')
    },
    {
      icon: Briefcase,
      title: t('integratedSolutions'),
      description: t('integratedSolutionsDesc')
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Section */}
          <div ref={imageRef} className="relative">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 border border-border/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="about-icon p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <div className="about-icon p-6 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30">
                  <Globe className="h-8 w-8 text-teal-400" />
                </div>
                <div className="about-icon p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                  <Users className="h-8 w-8 text-emerald-400" />
                </div>
                <div className="about-icon p-6 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30">
                  <Briefcase className="h-8 w-8 text-teal-400" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">منارة الرقمنة</h3>
                <p className="text-muted-foreground">في قطاع الأدوية</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            <div className="about-features space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="about-feature flex items-start space-x-4 rtl:space-x-reverse p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <feature.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25">
                {t('learnMore')}
                <span className="inline-block mr-2 rtl:ml-2 rtl:mr-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">←</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
