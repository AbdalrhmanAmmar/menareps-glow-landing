
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navbar
    home: 'الرئيسية',
    features: 'المميزات',
    about: 'من نحن',
    contact: 'تواصل معنا',
    getStarted: 'ابدأ الآن',
    
    // Hero
    medicalReps: 'المندوبين الطبيين',
    management: 'إدارة',
    heroDescription: 'نظام ثوري للمندوبين الطبيين في منطقة الشرق الأوسط وشمال أفريقيا. بسّط عملياتك، تتبع الأداء، وانمِ أعمالك.',
    startFreeTrial: 'جرب مجاناً',
    watchDemo: 'شاهد العرض',
    secure: 'آمان',
    secureDesc: 'حماية على مستوى المؤسسات',
    teamManagement: 'إدارة الفرق',
    teamDesc: 'تنسيق فعال للفرق',
    analytics: 'التحليلات',
    analyticsDesc: 'رؤى فورية',
    fastPerformance: 'أداء سريع',
    fastDesc: 'عمليات سريعة البرق',
    
    // Features
    featuresTitle: 'مميزات النظام',
    featuresSubtitle: 'نظام شامل ومتطور لإدارة المندوبين الطبيين في منطقة الشرق الأوسط وشمال أفريقيا',
    advancedSecurity: 'أمان متقدم',
    advancedSecurityDesc: 'حماية عالية المستوى لبيانات المندوبين الطبيين',
    teamCoordination: 'إدارة الفرق',
    teamCoordinationDesc: 'تنسيق فعال وسهل لفرق المندوبين في المنطقة',
    smartAnalytics: 'تحليلات ذكية',
    smartAnalyticsDesc: 'رؤى فورية وتقارير مفصلة عن الأداء',
    locationTracking: 'تتبع المواقع',
    locationTrackingDesc: 'متابعة مواقع المندوبين في الوقت الفعلي',
    smartScheduling: 'جدولة ذكية',
    smartSchedulingDesc: 'تنظيم المواعيد والزيارات بكفاءة عالية',
    performanceEvaluation: 'تقييم الأداء',
    performanceEvaluationDesc: 'نظام شامل لتقييم ومكافأة الأداء المتميز',
    goalAchievement: 'تحقيق الأهداف',
    goalAchievementDesc: 'متابعة وتحليل تحقيق الأهداف المحددة',
    
    // Stats
    statsTitle: 'نحن في أرقام',
    statsSubtitle: 'أرقام تتحدث عن نجاحنا وثقة عملائنا',
    activeUsers: 'مستخدم نشط',
    companies: 'شركة',
    satisfaction: 'رضا العملاء',
    uptime: 'وقت التشغيل',
    
    // About
    aboutTitle: 'من نحن؟',
    aboutDescription: 'منارابس هو النظام الرائد في إدارة المندوبين الطبيين في منطقة الشرق الأوسط وشمال أفريقيا. نحن نقدم حلولاً تقنية متطورة تساعد الشركات الدوائية على تحسين أداء مندوبيها وزيادة فعاليتهم.',
    comprehensiveCoverage: 'تغطية شاملة',
    comprehensiveCoverageDesc: 'نخدم جميع دول الشرق الأوسط وشمال أفريقيا',
    professionalTeam: 'فريق محترف',
    professionalTeamDesc: 'خبراء متخصصون في مجال الأدوية والتكنولوجيا',
    integratedSolutions: 'حلول متكاملة',
    integratedSolutionsDesc: 'نظام شامل لجميع احتياجات إدارة المندوبين',
    learnMore: 'اعرف أكثر عنا',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'نحن هنا لمساعدتك. تواصل معنا لمعرفة المزيد عن خدماتنا',
    contactInfo: 'معلومات التواصل',
    email: 'البريد الإلكتروني',
    emailValue: 'info@menareps.com',
    emailDesc: 'راسلنا في أي وقت',
    phone: 'الهاتف',
    phoneValue: '+966 12 345 6789',
    phoneDesc: 'متاحون 24/7',
    address: 'العنوان',
    addressValue: 'الرياض، المملكة العربية السعودية',
    addressDesc: 'مقرنا الرئيسي',
    sendMessage: 'أرسل رسالة',
    name: 'الاسم',
    namePlaceholder: 'اسمك الكامل',
    emailPlaceholder: 'your@email.com',
    subject: 'الموضوع',
    subjectPlaceholder: 'موضوع الرسالة',
    message: 'الرسالة',
    messagePlaceholder: 'اكتب رسالتك هنا...',
    sendMessageBtn: 'إرسال الرسالة',
    
    // Footer
    quickLinks: 'روابط سريعة',
    ourServices: 'خدماتنا',
    repsManagement: 'إدارة المندوبين',
    performanceTracking: 'تتبع الأداء',
    dataAnalysis: 'تحليل البيانات',
    smartReports: 'التقارير الذكية',
    rightsReserved: 'جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfUse: 'شروط الاستخدام'
  },
  en: {
    // Navbar
    home: 'Home',
    features: 'Features',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Get Started',
    
    // Hero
    medicalReps: 'Medical Reps',
    management: 'Management',
    heroDescription: 'Revolutionary system for medical representatives in the Middle East & North Africa region. Streamline your operations, track performance, and grow your business.',
    startFreeTrial: 'Start Free Trial',
    watchDemo: 'Watch Demo',
    secure: 'Secure',
    secureDesc: 'Enterprise-grade security',
    teamManagement: 'Team Management',
    teamDesc: 'Efficient team coordination',
    analytics: 'Analytics',
    analyticsDesc: 'Real-time insights',
    fastPerformance: 'Fast Performance',
    fastDesc: 'Lightning-fast operations',
    
    // Features
    featuresTitle: 'System Features',
    featuresSubtitle: 'Comprehensive and advanced system for managing medical representatives in the Middle East and North Africa region',
    advancedSecurity: 'Advanced Security',
    advancedSecurityDesc: 'High-level protection for medical representatives data',
    teamCoordination: 'Team Management',
    teamCoordinationDesc: 'Effective and easy coordination for representative teams in the region',
    smartAnalytics: 'Smart Analytics',
    smartAnalyticsDesc: 'Instant insights and detailed performance reports',
    locationTracking: 'Location Tracking',
    locationTrackingDesc: 'Real-time tracking of representatives locations',
    smartScheduling: 'Smart Scheduling',
    smartSchedulingDesc: 'Efficient organization of appointments and visits',
    performanceEvaluation: 'Performance Evaluation',
    performanceEvaluationDesc: 'Comprehensive system for evaluating and rewarding outstanding performance',
    goalAchievement: 'Goal Achievement',
    goalAchievementDesc: 'Tracking and analyzing the achievement of set goals',
    
    // Stats
    statsTitle: 'We in Numbers',
    statsSubtitle: 'Numbers that speak of our success and customer trust',
    activeUsers: 'Active Users',
    companies: 'Companies',
    satisfaction: 'Satisfaction',
    uptime: 'Uptime',
    
    // About
    aboutTitle: 'Who We Are?',
    aboutDescription: 'Menareps is the leading system for managing medical representatives in the Middle East and North Africa region. We provide advanced technical solutions that help pharmaceutical companies improve their representatives\' performance and increase their effectiveness.',
    comprehensiveCoverage: 'Comprehensive Coverage',
    comprehensiveCoverageDesc: 'We serve all countries in the Middle East and North Africa',
    professionalTeam: 'Professional Team',
    professionalTeamDesc: 'Experts specialized in pharmaceuticals and technology',
    integratedSolutions: 'Integrated Solutions',
    integratedSolutionsDesc: 'Comprehensive system for all representative management needs',
    learnMore: 'Learn More About Us',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are here to help you. Contact us to learn more about our services',
    contactInfo: 'Contact Information',
    email: 'Email',
    emailValue: 'info@menareps.com',
    emailDesc: 'Email us anytime',
    phone: 'Phone',
    phoneValue: '+966 12 345 6789',
    phoneDesc: 'Available 24/7',
    address: 'Address',
    addressValue: 'Riyadh, Saudi Arabia',
    addressDesc: 'Our headquarters',
    sendMessage: 'Send Message',
    name: 'Name',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'your@email.com',
    subject: 'Subject',
    subjectPlaceholder: 'Message subject',
    message: 'Message',
    messagePlaceholder: 'Write your message here...',
    sendMessageBtn: 'Send Message',
    
    // Footer
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    repsManagement: 'Representatives Management',
    performanceTracking: 'Performance Tracking',
    dataAnalysis: 'Data Analysis',
    smartReports: 'Smart Reports',
    rightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
