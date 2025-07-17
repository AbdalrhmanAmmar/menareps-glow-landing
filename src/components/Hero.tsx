
import { ArrowRight, Shield, Users, BarChart3, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-background via-background/80 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                {t('medicalReps')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                {t('management')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-200">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25">
              {t('startFreeTrial')}
              <ArrowRight className="inline-block ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180 h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-105">
              {t('watchDemo')}
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-400">
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-emerald-500/50 transition-all duration-300 hover:bg-card/80">
              <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-foreground font-semibold mb-2">{t('secure')}</h3>
              <p className="text-muted-foreground text-sm">{t('secureDesc')}</p>
            </div>
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-emerald-500/50 transition-all duration-300 hover:bg-card/80">
              <Users className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-foreground font-semibold mb-2">{t('teamManagement')}</h3>
              <p className="text-muted-foreground text-sm">{t('teamDesc')}</p>
            </div>
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-emerald-500/50 transition-all duration-300 hover:bg-card/80">
              <BarChart3 className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-foreground font-semibold mb-2">{t('analytics')}</h3>
              <p className="text-muted-foreground text-sm">{t('analyticsDesc')}</p>
            </div>
            <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-emerald-500/50 transition-all duration-300 hover:bg-card/80">
              <Zap className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-foreground font-semibold mb-2">{t('fastPerformance')}</h3>
              <p className="text-muted-foreground text-sm">{t('fastDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
