
import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. Your transmission has been received with prayer.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const faqs = [
    { q: "How are field reports verified?", a: "Each story is documented by our ground team with photos and local community signatures to ensure absolute transparency." },
    { q: "Can I choose which region my donation goes to?", a: "While we allow general designations (Outreach, Education, Relief), we trust our field directors to allocate funds where the immediate need is greatest." },
    { q: "Are there opportunities to visit the field?", a: "Yes! We coordinate short-term mission trips for our monthly partners twice a year." }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-24 reveal">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-4 block">Let's Connect</span>
          <h1 className="text-5xl sm:text-8xl font-black text-slate-800 serif tracking-tight mb-8">Get in <span className="text-orange-600 italic">Touch</span></h1>
          <p className="text-slate-500 text-lg sm:text-xl serif max-w-2xl mx-auto italic">Whether you have questions, prayer requests, or want to volunteer, we'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-12">
            <div className="bg-white p-12 sm:p-20 rounded-[3rem] shadow-sm border border-slate-50 reveal">
              <h3 className="text-3xl font-black text-slate-800 mb-10 serif">Connect Personally</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 serif font-light">
                Our team is committed to transparency and relationship. We respond to every inquiry with prayer and attention.
              </p>
              
              <div className="space-y-10">
                {[
                  { label: "Missions Hub", val: "Raipur, Chhattisgarh, India", icon: "📍" },
                  { label: "Email Support", val: "contact@jesusforindia.org", icon: "✉️" },
                  { label: "Hours of Prayer", val: "Sun-Sat: 24h Availability", icon: "🕒" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-all duration-500">{item.icon}</div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-slate-800 font-bold serif text-xl group-hover:text-orange-600 transition-colors">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer Request Portal - NEW */}
            <div className="bg-orange-600 p-12 rounded-[3rem] text-white shadow-xl reveal group cursor-pointer hover:-translate-y-2 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-5xl group-hover:rotate-12 transition-transform">🙏</div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] bg-white/20 px-4 py-2 rounded-full">Active Prayer Wall</span>
                </div>
                <h3 className="text-3xl font-black serif mb-4">Submit a Prayer Request</h3>
                <p className="text-orange-100 serif italic mb-8">Our intercessors across India meet daily. We would be honored to lift your needs before the Throne of Grace.</p>
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b-2 border-white/40 pb-2 group-hover:border-white transition-all">
                  Access Portal
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
            </div>
          </div>

          <div className="bg-white p-12 sm:p-20 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 reveal" style={{ transitionDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 text-slate-800 focus:outline-none focus:border-orange-200 transition-all font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 text-slate-800 focus:outline-none focus:border-orange-200 transition-all font-semibold"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Message Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 text-slate-800 focus:outline-none focus:border-orange-200 transition-all font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">How can we help?</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 text-slate-800 focus:outline-none focus:border-orange-200 transition-all font-semibold resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="mission-button w-full py-6 bg-orange-600 text-white font-bold text-sm uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQs - NEW */}
        <section className="reveal max-w-4xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black serif text-slate-800">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-xl font-black serif text-slate-800 mb-4">{faq.q}</h4>
                <p className="text-slate-500 serif italic">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
