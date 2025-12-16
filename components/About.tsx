import React from 'react';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Text Card */}
          <div className="lg:col-span-2 bg-surface border border-border rounded-3xl p-10 flex flex-col justify-center bento-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Health is Astral. <br/>Life is Novel.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Astranova Biotech Pvt. Ltd. was incorporated in 2017 with a singular ambition: to redefine healthcare standards. We don't just manufacture; we craft solutions for Semi-chronic, Chronic, and Super Chronic therapies with an obsession for quality.
            </p>
          </div>

          {/* Stat/Badge Card */}
          <div className="bg-gradient-to-br from-surface to-surfaceHighlight border border-border rounded-3xl p-10 flex flex-col items-center justify-center text-center bento-card relative">
             <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent">
                <ShieldCheck size={40} />
             </div>
             <h3 className="text-4xl font-bold text-white mb-2">ISO 9001</h3>
             <p className="text-gray-400 font-medium">2015 Certified</p>
             <p className="text-sm text-gray-500 mt-4">Global Standard Quality</p>
          </div>

          {/* Feature 1 */}
          <div className="bg-surface border border-border rounded-3xl p-8 bento-card">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rapid Innovation</h3>
            <p className="text-gray-400 text-sm">Deploying advanced technology to bring formulations to market faster.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-surface border border-border rounded-3xl p-8 bento-card lg:col-span-2">
            <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0 text-purple-400">
                    <Globe size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Pan-India & Beyond</h3>
                    <p className="text-gray-400 text-sm max-w-md">Our network spans the nation, delivering critical care products to the remotest corners with the same efficacy as metro hubs.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;