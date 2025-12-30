
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
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-24 md:pb-32 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 reveal">
          <span className="text-[9px] sm:text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-3 sm:mb-4 block">Let's Connect</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-800 dark:text-slate-100 serif tracking-tight mb-6 sm:mb-8 px-4">Get in <span className="text-orange-600 italic">Touch</span></h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl serif max-w-2xl mx-auto italic px-4">Whether you have questions, prayer requests, or want to volunteer, we'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-start mb-16 sm:mb-24 md:mb-32">
          <div className="space-y-8 sm:space-y-12">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-12 lg:p-20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-slate-50 dark:border-slate-700 reveal">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100 mb-6 sm:mb-8 md:mb-10 serif">Connect Personally</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 serif font-light">
                Our team is committed to transparency and relationship. We respond to every inquiry with prayer and attention.
              </p>

              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {[
                  { label: "Missions Hub", val: "Raipur, Chhattisgarh, India", icon: "📍" },
                  { label: "Email Support", val: "contact@jesusforindia.org", icon: "✉️" },
                  { label: "Hours of Prayer", val: "Sun-Sat: 24h Availability", icon: "🕒" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-xl sm:text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-all duration-500">{item.icon}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-800 dark:text-slate-100 font-bold serif group-hover:text-orange-600 transition-colors break-words">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer Request Portal - NEW */}
            <div className="bg-orange-600 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] text-white shadow-xl reveal group cursor-pointer hover:-translate-y-2 transition-all">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="text-4xl sm:text-5xl group-hover:rotate-12 transition-transform">🙏</div>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">Active Prayer Wall</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black serif mb-3 sm:mb-4">Submit a Prayer Request</h3>
              <p className="text-orange-100 serif italic mb-6 sm:mb-8 text-sm sm:text-base">Our intercessors across India meet daily. We would be honored to lift your needs before the Throne of Grace.</p>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b-2 border-white/40 pb-2 group-hover:border-white transition-all">
                Access Portal
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-12 lg:p-20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-700 reveal" style={{ transitionDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block text-slate-400 dark:text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-200 transition-all font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 dark:text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-200 transition-all font-semibold"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 dark:text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4">Message Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-200 transition-all font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 dark:text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4">How can we help?</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-200 transition-all font-semibold resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mission-button w-full py-4 sm:py-5 md:py-6 bg-orange-600 text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQs - NEW */}
        <section className="reveal max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-black serif text-slate-800 dark:text-slate-100">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-slate-50 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-base sm:text-lg md:text-xl font-black serif text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">{faq.q}</h4>
                <p className="text-slate-500 dark:text-slate-400 serif italic text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
