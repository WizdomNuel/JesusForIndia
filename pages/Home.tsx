
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Serene Hero Section with Missionary Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-32 pb-12 sm:pb-20 px-4">

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-15"
            alt="Missionary field work background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf9] via-transparent to-[#fdfcf9]"></div>
        </div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] h-[30rem] sm:h-[40rem] md:h-[50rem] lg:h-[60rem] bg-orange-100/40 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none z-0"
          style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
          <div
            className="reveal inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full bg-white/70 backdrop-blur-md border border-orange-100 mb-6 sm:mb-10 animate-float shadow-sm"
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-orange-700 leading-tight">Called to Serve • Proclaiming Christ Across India</span>
          </div>

          <div className="relative inline-block mb-6 sm:mb-10">
            {/* Decorative Dots from Image Reference */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-sky-500 rounded-full blur-[1px] shadow-[0_0_20px_#0ea5e9] z-10 animate-pulse"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-indigo-500 rounded-full blur-[1px] shadow-[0_0_20px_#6366f1] z-10 animate-pulse"></div>

            <h1
              className="reveal text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem] font-black serif text-slate-800 leading-[1.1] sm:leading-[0.9] md:leading-[0.75] transition-all duration-1000 px-2 sm:px-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              style={{ transform: `translateY(${-scrollY * 0.1}px)`, transitionDelay: '0.3s' }}
            >
              <span className="block opacity-95 mb-2 sm:mb-4 md:mb-0">JESUS</span>
              <span className="text-orange-600 italic block">FOR INDIA</span>
            </h1>
          </div>

          <p
            className="reveal text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-medium mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 italic serif px-4"
            style={{ transform: `translateY(${-scrollY * 0.05}px)`, transitionDelay: '0.5s' }}
          >
            "Go therefore and make disciples of all nations..." — Establishing a lasting foundation of faith, compassion, and hope across the heart of India.
          </p>

          <div
            className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 px-4"
            style={{ transform: `translateY(${-scrollY * 0.07}px)`, transitionDelay: '0.7s' }}
          >
            <Link
              to="/media"
              className="mission-button w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-slate-200 text-center"
            >
              Explore Our Journey
            </Link>
            <Link
              to="/donate"
              className="mission-button w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 bg-white border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-50 shadow-sm text-center"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Community Focus Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-48 relative overflow-hidden bg-white/60 dark:bg-slate-900/40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-green-50 text-green-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-6 sm:mb-8">Building Hope</div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800 dark:text-slate-100 mb-6 sm:mb-8 leading-[1.1] sm:leading-[0.9] serif">
                Transformed <br /><span className="text-green-700 dark:text-green-400 italic">Hearts</span>, Restored <br />Communities.
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-light serif">
                We believe in holistic transformation. Through rural outreach, educational support, and community building, we share the love of Christ in tangible, lasting ways.
              </p>
              <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest shadow-sm">
                  40+ Regions Active
                </div>
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest shadow-sm">
                  Empowering Local Leaders
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl relative group border-4 sm:border-6 md:border-8 border-white">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Community Prayer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - NEW CONTENT */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#F9F7F2] dark:bg-slate-900/60 relative overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
            <h2 className="text-[9px] sm:text-[10px] font-bold text-orange-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4">The Pillars of Our Ministry</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black serif text-slate-800 dark:text-slate-100">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Radical Love", icon: "❤️", text: "Following Christ's example by loving the unloved and reaching the unreachable." },
              { title: "Authentic Faith", icon: "📖", text: "Standing firm on the Word of God as our ultimate authority and source of life." },
              { title: "Empowerment", icon: "🤝", text: "Training and equipping local leaders to carry the Gospel within their own culture." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-slate-50 dark:border-slate-700 hover:shadow-xl transition-all duration-500 reveal" style={{ transitionDelay: `${idx * 0.2}s` }}>
                <div className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">{value.icon}</div>
                <h4 className="text-xl sm:text-2xl font-black serif text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">{value.title}</h4>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 serif leading-relaxed italic">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Experience - NEW CONTENT */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-48 bg-white dark:bg-slate-900/40 relative transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800" className="rounded-2xl sm:rounded-3xl aspect-square object-cover shadow-lg" alt="Field work" />
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800" className="rounded-2xl sm:rounded-3xl aspect-square object-cover shadow-lg mt-6 sm:mt-8" alt="Worship" />
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <span className="text-[9px] sm:text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 block">Deepening the Roots</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black serif text-slate-800 dark:text-slate-100 mb-6 sm:mb-8 leading-tight">Investing in the Next <span className="text-orange-600 italic">Generation</span>.</h3>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 serif mb-8 sm:mb-10 italic leading-relaxed">
                Sustainability is at the heart of our mission. By establishing local bible schools and vocational training centers, we ensure the flame of faith continues to burn brightly long after we move to the next field.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                {["12 Active Discipleship Centers", "Vocational Training for Widows", "Orphanage Support Programs"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 sm:space-x-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-bold serif italic">
                    <span className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-orange-700 dark:text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center">
                Learn About Volunteering
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50 relative reveal transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center relative z-10">
          {[
            { val: "30K+", label: "LIVES TOUCHED", color: "text-orange-700" },
            { val: "200+", label: "VILLAGES REACHED", color: "text-green-800" },
            { val: "15+", label: "ACTIVE PROJECTS", color: "text-slate-700" },
            { val: "Unlimited", label: "GOD'S GRACE", color: "text-orange-600" }
          ].map((stat, i) => (
            <div key={i} className="group reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 sm:mb-4 serif ${stat.color} group-hover:scale-110 transition-transform duration-700`}>
                {stat.val}
              </div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] leading-tight px-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
