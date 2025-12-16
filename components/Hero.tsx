import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-48 pb-32 md:pt-64 md:pb-48 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/20 blur-[120px] rounded-full opacity-30 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent mb-8 animate-fade-in-up">
          <Star size={14} fill="currentColor" />
          <span>ISO 9001:2015 Certified Excellence</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
          Healthcare <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-blue-500">Reimagined.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We formulate the future. Premium pharmaceutical solutions driven by quality, technology, and service.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a 
            href="#products" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-2xl hover:scale-105 transition-transform duration-200"
          >
            View Products
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/10 font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Partner with us <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;