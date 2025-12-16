import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-2xl font-extrabold text-white tracking-tight block">
            Astranova
          </span>
          <p className="text-xs text-gray-600 mt-2">
            &copy; {new Date().getFullYear()} Astranova Biotech Pvt. Ltd. <br/> ISO 9001:2015 Certified.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;