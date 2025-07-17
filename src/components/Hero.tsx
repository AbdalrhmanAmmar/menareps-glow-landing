
import { ArrowRight, Shield, Users, BarChart3, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
              <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                Medical Reps
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionary system for medical representatives in the Middle East & North Africa region. 
              Streamline your operations, track performance, and grow your business.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-200">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25">
              Start Free Trial
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-400">
            <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-white font-semibold mb-2">Secure</h3>
              <p className="text-slate-400 text-sm">Enterprise-grade security</p>
            </div>
            <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <Users className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-white font-semibold mb-2">Team Management</h3>
              <p className="text-slate-400 text-sm">Efficient team coordination</p>
            </div>
            <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <BarChart3 className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-white font-semibold mb-2">Analytics</h3>
              <p className="text-slate-400 text-sm">Real-time insights</p>
            </div>
            <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <Zap className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-white font-semibold mb-2">Fast Performance</h3>
              <p className="text-slate-400 text-sm">Lightning-fast operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
