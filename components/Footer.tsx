
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-black serif text-slate-800 dark:text-slate-100 mb-6 sm:mb-8 tracking-tight">
              Jesus<span className="text-orange-600 italic">For</span>India
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-sm mb-6 sm:mb-8 md:mb-10 serif italic">
              Sharing the hope of the Gospel and empowering local communities through faith and holistic ministry.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              {['FB', 'IG', 'YT'].map((s) => (
                <a key={s} href="#" className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-500 transition-colors uppercase tracking-widest">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h3 className="text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest mb-4 sm:mb-6 md:mb-8">Navigation</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li><Link to="/" className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors serif">Our Story</Link></li>
                <li><Link to="/media" className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors serif">Field Reports</Link></li>
                <li><Link to="/donate" className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors serif">Ways to Give</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest mb-4 sm:mb-6 md:mb-8">Resources</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li><a href="#" className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors serif">Prayer Calendar</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors serif">Annual Report</a></li>
                <li><a href="#" className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors serif">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
               <h3 className="text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest mb-4 sm:mb-6 md:mb-8">Reach Out</h3>
               <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 serif italic mb-4 sm:mb-6">Connect with us for partnerships or prayer.</p>
               <a href="#" className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-[9px] sm:text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
                 Message Us
               </a>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest gap-4">
          <div className="text-center md:text-left">© {new Date().getFullYear()} Jesus For India • Sowing Seeds of Hope</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
             <span className="hover:text-slate-800 dark:hover:text-slate-300 cursor-pointer transition-colors">Grace Alone</span>
             <span className="hover:text-slate-800 dark:hover:text-slate-300 cursor-pointer transition-colors">Faith Alone</span>
             <span className="hover:text-slate-800 dark:hover:text-slate-300 cursor-pointer transition-colors">Christ Alone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
