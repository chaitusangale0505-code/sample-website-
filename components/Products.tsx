import React from 'react';
import { ProductCategory } from '../types';
import { Download, ChevronRight } from 'lucide-react';

const products: ProductCategory[] = [
  {
    category: 'Cardiology',
    items: [
      { name: 'TELMISURE-40', chemical: 'Telmisartan' },
      { name: 'CARVEDILOL-12.5', chemical: 'Carvedilol' },
      { name: 'STATINS Range', chemical: 'Lipid Regulators' },
    ],
  },
  {
    category: 'Neuro-Psychiatry',
    items: [
      { name: 'ZOLPISURE-10', chemical: 'Zolpidem Tartrate' },
      { name: 'PREGABALIN SR', chemical: 'Neuropathic Pain' },
      { name: 'SSRI/SNRI', chemical: 'Antidepressants' },
    ],
  },
  {
    category: 'Gastroenterology',
    items: [
      { name: 'PANTOPRAZOLE-DSR', chemical: 'PPI + Domperidone' },
      { name: 'RABEPRAZOLE-L', chemical: 'Acid Reflux' },
      { name: 'ORS', chemical: 'Electrolyte Balance' },
    ],
  },
  {
    category: 'General Care',
    items: [
      { name: 'DICLOFENAC-SP', chemical: 'Anti-Inflammatory' },
      { name: 'AZITHROMYCIN-500', chemical: 'Anti-Biotic' },
      { name: 'METFORMIN-500', chemical: 'Anti-Diabetic' },
    ],
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-bold text-white mb-2">Formulations</h2>
                <p className="text-gray-400">High-efficacy product portfolio.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-accent font-medium hover:text-white transition-colors">
                Download Catalog <Download size={18} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((cat, index) => (
            <div 
              key={index} 
              className="bg-surface border border-border p-6 rounded-3xl flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5">
                {cat.category}
              </h3>
              <ul className="space-y-4 flex-grow">
                {cat.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-200 group-hover:text-accent transition-colors">{item.name}</span>
                        <ChevronRight size={14} className="text-gray-600 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-xs text-gray-500">{item.chemical}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <button className="flex items-center justify-center gap-2 text-accent font-medium w-full p-4 bg-surface rounded-xl border border-border">
                Download Catalog <Download size={18} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Products;