import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-[#1c1c1f] border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's start a conversation.</h2>
                <p className="text-lg text-gray-400">
                    Interested in our products or partnership? We are ready to listen.
                </p>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 bg-green-500/10 rounded-3xl border border-green-500/20">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                    <p className="text-gray-400 mt-2">We will get back to you shortly.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-black/30 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone</label>
                    <input
                      required
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-black/30 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-black/30 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-black/30 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-white text-black font-bold text-lg rounded-2xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={24} /> Processing
                    </>
                  ) : (
                    <>
                      Send Message <Send size={24} />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                <div>
                    <h4 className="text-white font-bold mb-1">Corporate Office</h4>
                    <p className="text-gray-500 text-sm">Sr.No-500/1, G-501, Sarita Sangam,<br/>Kasarwadi, Pune-411034, India</p>
                </div>
                <div>
                     <h4 className="text-white font-bold mb-1">Direct Contact</h4>
                     <p className="text-accent text-sm font-medium">info@astranovabiotech.com</p>
                     <p className="text-gray-500 text-sm">+91-7447494299</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;