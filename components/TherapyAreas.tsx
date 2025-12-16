import React from 'react';
import { Heart, Brain, Activity, Baby, Sparkles, Stethoscope } from 'lucide-react';
import { TherapyArea } from '../types';

const areas: TherapyArea[] = [
  {
    title: 'Cardiology',
    description: 'Chronic cardiac health.',
    icon: <Heart className="w-6 h-6 text-rose-400" />,
  },
  {
    title: 'Neuro-Psychiatry',
    description: 'Neurological wellness.',
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: 'Gastroenterology',
    description: 'Digestive care.',
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: 'Gynecology',
    description: "Women's health support.",
    icon: <Baby className="w-6 h-6 text-pink-400" />,
  },
  {
    title: 'Dermatology',
    description: 'Skin & ENT treatments.',
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
  },
  {
    title: 'Pediatrics',
    description: 'Gentle care for kids.',
    icon: <Stethoscope className="w-6 h-6 text-cyan-400" />,
  },
];

const TherapyAreas: React.FC = () => {
  return (
    <section id="therapy" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expertise Areas</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Targeted formulations for complex biological needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-surface border border-border p-6 rounded-2xl hover:bg-surfaceHighlight transition-colors duration-300 flex flex-col items-center text-center h-full"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-xl">
                {area.icon}
              </div>
              <h3 className="font-bold text-white mb-1 text-sm">
                {area.title}
              </h3>
              <p className="text-gray-500 text-xs">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyAreas;