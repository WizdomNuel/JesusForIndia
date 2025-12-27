
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
    <div className="flex flex-col min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-24 reveal">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-[0.4em] mb-4 block">Together for the Gospel</span>
          <h1 className="text-5xl sm:text-8xl font-black text-slate-800 serif tracking-tight mb-8">
            Partner in <span className="text-orange-600 italic">Faith</span>
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl serif max-w-2xl mx-auto italic">Your support directly empowers local missions to bring hope and restoration to unreached hearts across India.</p>
        </div>

        {/* Gifts of Hope - NEW */}
        <section className="mb-32 reveal">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-black serif text-slate-800 italic">Impact of Your Giving</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { amt: "$30", desc: "Provides 5 Bibles in local dialects.", icon: "📖" },
              { amt: "$100", desc: "Sponsors 1 local pastor for a month.", icon: "⛪" },
              { amt: "$250", desc: "Equips a medical camp for one village.", icon: "🩺" },
              { amt: "$500", desc: "Funds a clean water well installation.", icon: "💧" }
            ].map((gift, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-sm text-center group hover:shadow-xl transition-all duration-500">
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform">{gift.icon}</div>
                <div className="text-3xl font-black serif text-orange-600 mb-2">{gift.amt}</div>
                <p className="text-sm text-slate-500 serif italic">{gift.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
          
          {/* Impact Left */}
          <div className="space-y-12 reveal">
            <div className="bg-white p-12 sm:p-20 rounded-[3.5rem] shadow-sm border border-slate-50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] pointer-events-none"></div>
               
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-16 italic serif">Where Your Giving Goes</h3>

               <div className="space-y-16 relative z-10">
                 {allocationData.map((item, i) => (
                   <div key={i} className="group/item">
                     <div className="flex justify-between items-end mb-6">
                       <div>
                         <h4 className="text-2xl font-black text-slate-800 serif group-hover/item:text-orange-700 transition-colors tracking-tight">{item.title}</h4>
                       </div>
                       <div className="text-3xl font-black serif text-orange-600">{item.pct}%</div>
                     </div>
                     
                     <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.pct}%` }}></div>
                     </div>
                     <p className="mt-4 text-slate-500 serif italic font-light">{item.desc}</p>
                   </div>
                 ))}
               </div>
               
               <div className="mt-20 pt-12 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safe & Transparent Partnership</span>
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Donation Terminal Right */}
          <div id="donation-card" className="bg-white p-12 sm:p-20 rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100 reveal" style={{transitionDelay: '0.3s'}}>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-800 mb-12 serif text-center">Support the Call</h3>
            
            <div className="flex p-2 bg-slate-50 rounded-full mb-12 border border-slate-200/50">
              <button onClick={() => setIsMonthly(false)} className={`flex-1 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${!isMonthly ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400'}`}>One-Time</button>
              <button onClick={() => setIsMonthly(true)} className={`flex-1 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${isMonthly ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400'}`}>Monthly</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {amounts.map((amt) => (
                <button key={amt} onClick={() => { setAmount(amt); setCustomAmount(''); }} className={`py-8 rounded-3xl font-black text-2xl serif transition-all ${amount === amt && !customAmount ? 'bg-orange-600 text-white shadow-xl shadow-orange-100' : 'bg-slate-50 text-slate-600 hover:bg-white border border-transparent hover:border-orange-100'}`}>
                  ${amt}
                </button>
              ))}
            </div>

            <div className="mb-12 relative">
              <input 
                type="number" 
                value={customAmount} 
                onChange={(e) => setCustomAmount(e.target.value)} 
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-10 py-10 text-slate-800 text-5xl font-black text-center focus:outline-none focus:border-orange-500 transition-all serif" 
                placeholder="0.00" 
              />
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Custom Amount</span>
            </div>

            <button className="mission-button w-full py-8 bg-orange-600 text-white font-bold text-lg uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all">
              {isMonthly ? 'Start Monthly Mission' : 'Submit Donation'}
            </button>
            
            <div className="mt-12 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></span>
                    Secure SSL Encrypted
                </p>
            </div>
          </div>
        </div>

        {/* Monthly Circle Section - NEW */}
        <section className="bg-green-800 p-12 sm:p-32 rounded-[4rem] text-white relative overflow-hidden reveal">
           <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
               <h3 className="text-4xl sm:text-6xl font-black serif leading-tight mb-8">Join the Monthly <span className="italic text-orange-400">Mission Circle</span></h3>
               <p className="text-green-100 text-xl serif leading-relaxed italic mb-12">
                 Consistency is the key to deep, generational impact. Our Monthly Partners provide the stable foundation needed to plan year-long outreaches and support local leaders without interruption.
               </p>
               <div className="flex space-x-8">
                 <div className="text-center">
                    <div className="text-4xl font-bold serif text-orange-400">1.2K</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-green-300">Active Partners</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-bold serif text-orange-400">100%</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-green-300">Field Efficiency</div>
                 </div>
               </div>
             </div>
             <div className="bg-white/10 backdrop-blur-md p-12 rounded-[3rem] border border-white/20">
                <h4 className="text-2xl font-black serif mb-6">Partner Benefits</h4>
                <ul className="space-y-6">
                  {[
                    "Exclusive monthly field video updates",
                    "Early access to annual impact reports",
                    "A personalized prayer request portal",
                    "Invites to virtual field visit webinars"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <svg className="w-6 h-6 text-orange-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-green-50 serif italic">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    setIsMonthly(true);
                    const el = document.getElementById('donation-card');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-white text-green-900 py-6 rounded-full font-bold uppercase tracking-widest mt-12 hover:bg-orange-100 transition-all shadow-xl"
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
