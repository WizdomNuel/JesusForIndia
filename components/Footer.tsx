
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-black serif text-slate-800 mb-8 tracking-tight">
              Jesus<span className="text-orange-600 italic">For</span>India
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-10 serif italic">
              Sharing the hope of the Gospel and empowering local communities through faith and holistic ministry.
            </p>
            <div className="flex space-x-6">
              {['FB', 'IG', 'YT'].map((s) => (
                <a key={s} href="#" className="text-xs font-bold text-slate-400 hover:text-orange-600 transition-colors uppercase tracking-widest">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8">Navigation</h3>
              <ul className="space-y-6">
                <li><Link to="/" className="text-sm text-slate-500 hover:text-orange-700 transition-colors serif">Our Story</Link></li>
                <li><Link to="/media" className="text-sm text-slate-500 hover:text-orange-700 transition-colors serif">Field Reports</Link></li>
                <li><Link to="/donate" className="text-sm text-slate-500 hover:text-orange-700 transition-colors serif">Ways to Give</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8">Resources</h3>
              <ul className="space-y-6">
                <li><a href="#" className="text-sm text-slate-500 hover:text-orange-700 transition-colors serif">Prayer Calendar</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-orange-700 transition-colors serif">Annual Report</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-orange-700 transition-colors serif">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
               <h3 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8">Reach Out</h3>
               <p className="text-sm text-slate-500 serif italic mb-6">Connect with us for partnerships or prayer.</p>
               <a href="#" className="inline-block px-8 py-3 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold text-slate-700 uppercase tracking-widest hover:bg-slate-100 transition-all">
                 Message Us
               </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Jesus For India • Sowing Seeds of Hope</div>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
             <span className="hover:text-slate-800 cursor-pointer transition-colors">Grace Alone</span>
             <span className="hover:text-slate-800 cursor-pointer transition-colors">Faith Alone</span>
             <span className="hover:text-slate-800 cursor-pointer transition-colors">Christ Alone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
