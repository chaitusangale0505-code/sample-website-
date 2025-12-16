import React from 'react';
import { User } from 'lucide-react';

interface Director {
  name: string;
  role: string;
  bio: string;
}

const directors: Director[] = [
  {
    name: "Mr. Managing Director",
    role: "Managing Director",
    bio: "20+ years of pharmaceutical leadership. The strategic visionary behind Astranova's global expansion."
  },
  {
    name: "Mr. Joint Director",
    role: "Joint Director",
    bio: "Ensuring operational excellence and research-driven growth for every formulation."
  }
];

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership</h2>
            <p className="text-gray-400">The minds behind the molecules.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directors.map((director, index) => (
            <div 
              key={index}
              className="group bg-surface border border-border rounded-3xl p-8 hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-surfaceHighlight to-black border border-white/5 flex items-center justify-center shrink-0">
                  <User size={32} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">{director.name}</h3>
                    <span className="text-accent font-medium text-sm tracking-wide uppercase mb-3 block">{director.role}</span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {director.bio}
                    </p>
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 blur-3xl rounded-full group-hover:bg-accent/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;