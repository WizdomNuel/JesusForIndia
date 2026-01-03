
import React, { useState, useEffect } from 'react';

const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [25, 50, 100, 250, 500, 1000];

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

  const allocationData = [
    { title: "Direct Outreach", pct: 70, color: "bg-orange-600", desc: "Sustaining village missions & evangelism." },
    { title: "Education & Literacy", pct: 20, color: "bg-green-700", desc: "Providing scriptures and leadership training." },
    { title: "Local Relief", pct: 10, color: "bg-slate-700", desc: "Essential community support services." },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-12 sm:pb-24 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 reveal">
          <span className="text-[10px] sm:text-xs font-bold text-orange-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Together for the Gospel</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-800 dark:text-slate-100 serif tracking-tight mb-6 sm:mb-8 px-4">
            Partner in <span className="text-orange-600 italic">Faith</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl serif max-w-2xl mx-auto italic px-4">Your support directly empowers local missions to bring hope and restoration to unreached hearts across India.</p>
        </div>

        {/* Gifts of Hope - NEW */}
        <section className="mb-12 sm:mb-16 md:mb-24 lg:mb-32 reveal">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-black serif text-slate-800 dark:text-slate-100 italic">Impact of Your Giving</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { amt: "$30", desc: "Provides 5 Bibles in local dialects.", icon: "📖" },
              { amt: "$100", desc: "Sponsors 1 local pastor for a month.", icon: "⛪" },
              { amt: "$250", desc: "Equips a medical camp for one village.", icon: "🩺" },
              { amt: "$500", desc: "Funds a clean water well installation.", icon: "💧" }
            ].map((gift, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-slate-50 dark:border-slate-700 shadow-sm text-center group hover:shadow-xl transition-all duration-500">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform">{gift.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black serif text-orange-600 mb-2">{gift.amt}</div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 serif italic">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-32 items-start mb-12 sm:mb-16 md:mb-24 lg:mb-32">

          {/* Impact Left */}
          <div className="space-y-8 sm:space-y-12 reveal">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-12 lg:p-20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow-sm border border-slate-50 dark:border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-orange-50 dark:bg-orange-900/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none"></div>

              <h3 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 sm:mb-12 md:mb-16 italic serif">Where Your Giving Goes</h3>

              <div className="space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
                {allocationData.map((item, i) => (
                  <div key={i} className="group/item">
                    <div className="flex justify-between items-end mb-4 sm:mb-6">
                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-black text-slate-800 dark:text-slate-100 serif group-hover/item:text-orange-700 transition-colors tracking-tight">{item.title}</h4>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black serif text-orange-600 flex-shrink-0">{item.pct}%</div>
                    </div>

                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.pct}%` }}></div>
                    </div>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 serif italic font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">Safe & Transparent Partnership</span>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Terminal Right */}
          <div id="donation-card" className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-12 lg:p-20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 dark:text-slate-100 mb-8 sm:mb-10 md:mb-12 serif text-center">Support the Call</h3>

            <div className="flex p-1.5 sm:p-2 bg-slate-50 dark:bg-slate-900 rounded-full mb-8 sm:mb-10 md:mb-12 border border-slate-200/50 dark:border-slate-700">
              <button onClick={() => setIsMonthly(false)} className={`flex-1 py-3 sm:py-4 rounded-full font-bold text-[9px] sm:text-[10px] uppercase tracking-widest transition-all ${!isMonthly ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md' : 'text-slate-400 dark:text-slate-500'}`}>One-Time</button>
              <button onClick={() => setIsMonthly(true)} className={`flex-1 py-3 sm:py-4 rounded-full font-bold text-[9px] sm:text-[10px] uppercase tracking-widest transition-all ${isMonthly ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md' : 'text-slate-400 dark:text-slate-500'}`}>Monthly</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
              {amounts.map((amt) => (
                <button key={amt} onClick={() => { setAmount(amt); setCustomAmount(''); }} className={`py-4 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-lg sm:text-xl md:text-2xl serif transition-all ${amount === amt && !customAmount ? 'bg-orange-600 text-white shadow-xl shadow-orange-100' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-orange-100'}`}>
                  ${amt}
                </button>
              ))}
            </div>

            <div className="mb-8 sm:mb-10 md:mb-12 relative">
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-slate-800 dark:text-white focus:outline-none focus:border-orange-500 transition-all serif"
                placeholder="0.00"
              />
              <span className="absolute top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">Custom Amount</span>
            </div>

            <button className="mission-button w-full py-5 sm:py-6 md:py-8 bg-orange-600 text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all">
              {isMonthly ? 'Start Monthly Mission' : 'Submit Donation'}
            </button>

            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 sm:mr-3"></span>
                Secure SSL Encrypted
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
              <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 text-center serif">Direct Bank Transfer (Nigeria)</h4>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 text-center space-y-2 border border-slate-100 dark:border-slate-700">
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Zenith Bank</p>
                <p className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-widest select-all">1229667302</p>
                <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest">Making Christ Known to All Mission</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Circle Section - NEW */}
        <section className="bg-green-800 dark:bg-green-950 p-6 sm:p-8 md:p-12 lg:p-20 xl:p-32 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] text-white relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] md:w-[40rem] md:h-[40rem] bg-white/5 rounded-full blur-[80px] sm:blur-[100px] -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32 pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black serif leading-tight mb-6 sm:mb-8">Join the Monthly <span className="italic text-orange-400">Mission Circle</span></h3>
              <p className="text-green-100 text-base sm:text-lg md:text-xl serif leading-relaxed italic mb-8 sm:mb-10 md:mb-12">
                Consistency is the key to deep, generational impact. Our Monthly Partners provide the stable foundation needed to plan year-long outreaches and support local leaders without interruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold serif text-orange-400">1.2K</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-green-300">Active Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold serif text-orange-400">100%</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-green-300">Field Efficiency</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-white/20">
              <h4 className="text-xl sm:text-2xl font-black serif mb-4 sm:mb-6">Partner Benefits</h4>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Exclusive monthly field video updates",
                  "Early access to annual impact reports",
                  "A personalized prayer request portal",
                  "Invites to virtual field visit webinars"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3 sm:space-x-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mt-0.5 sm:mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm sm:text-base text-green-50 serif italic">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setIsMonthly(true);
                  const el = document.getElementById('donation-card');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-white text-green-900 py-4 sm:py-5 md:py-6 rounded-full font-bold uppercase tracking-widest mt-8 sm:mt-10 md:mt-12 hover:bg-orange-100 transition-all shadow-xl text-sm sm:text-base"
              >
                Join the Circle
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate;
