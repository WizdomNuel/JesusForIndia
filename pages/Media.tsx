
import React, { useState, useEffect, useRef } from 'react';

interface StoryAsset {
  id: string;
  title: string;
  location: string;
  thumbnail: string;
  category: string;
  longDesc?: string;
}

const Media: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedStory, setSelectedStory] = useState<StoryAsset | null>(null);

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
  }, [activeCategory]);

  const stories: StoryAsset[] = [
    { id: "s1", title: "Voices of Rural Raipur", location: "Chhattisgarh", thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", category: "VILLAGE_LIFE", longDesc: "Deep in the heart of rural Raipur, we witness a spiritual awakening as local communities gather to hear the Gospel for the first time." },
    { id: "s2", title: "The Bible in Every Home", location: "Odisha", thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800", category: "SCRIPTURE", longDesc: "Our distribution efforts in Odisha focus on bringing translated scriptures to households that have never owned a book." },
    { id: "s3", title: "Joy in the Highlands", location: "Assam", thumbnail: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=800", category: "OUTREACH", longDesc: "Traveling through the mountainous regions of Assam, our medical camp brings healing and the message of eternal hope." },
    { id: "s4", title: "Clean Water, Living Water", location: "Bihar", thumbnail: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800", category: "COMMUNITY", longDesc: "By digging wells in water-scarce villages, we demonstrate Christ's love by meeting a desperate physical need." },
    { id: "s5", title: "Sunday in the Sun", location: "Tamil Nadu", thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800", category: "WORSHIP", longDesc: "Worship in the open air, where hundreds join in praise, creating a sound that echoes across the fields of Tamil Nadu." },
    { id: "s6", title: "Learning with Love", location: "Madhya Pradesh", thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800", category: "EDUCATION", longDesc: "Our makeshift schools provide literacy and hope to children who would otherwise have no access to education." },
    { id: "s7", title: "A Mother's New Hope", location: "Gujarat", thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800", category: "COMMUNITY", longDesc: "Widow empowerment programs are providing vocational training and a supportive sisterhood in Christ." },
    { id: "s8", title: "Seed Sowers in Punjab", location: "Punjab", thumbnail: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800", category: "VILLAGE_LIFE", longDesc: "Sharing agricultural techniques and spiritual truth with farmers in the breadbasket of India." },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 sm:pt-40 pb-24 dark:bg-slate-900 transition-colors duration-500">
      {/* Header */}
      <section className="mb-24 text-center reveal px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.4em] mb-4 block italic">Our Visual Journey</span>
          <h1 className="text-4xl sm:text-8xl font-black text-slate-800 dark:text-slate-100 serif leading-none mb-8">
            Stories <span className="text-orange-600 italic">of Grace</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl serif max-w-2xl mx-auto italic">Capturing the moments where faith meets action across the vibrant landscape of India.</p>
        </div>
      </section>

      {/* Filter Terminal */}
      <section className="max-w-7xl mx-auto px-6 mb-20 reveal">
        <div className="flex flex-wrap justify-center gap-3">
          {['ALL', 'VILLAGE_LIFE', 'SCRIPTURE', 'OUTREACH', 'WORSHIP', 'COMMUNITY'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 sm:px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${activeCategory === cat ? 'bg-slate-800 dark:bg-orange-600 text-white shadow-lg' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-100 dark:border-slate-700'}`}
            >
              {cat.replace('_', ' ')}
            </button>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-6 reveal mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.filter(s => activeCategory === 'ALL' || s.category === activeCategory).map((story) => (
            <div
              key={story.id}
              className="bg-white dark:bg-slate-800 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group cursor-pointer border border-slate-50 dark:border-slate-700"
              onClick={() => setSelectedStory(story)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold text-orange-700 uppercase tracking-widest">
                  {story.category.replace('_', ' ')}
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">{story.location}</span>
                <h4 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 serif group-hover:text-orange-700 transition-colors leading-tight mb-4">{story.title}</h4>
                <div className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:hover:text-white transition-colors">
                  View Story
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Film Highlights Section - NEW */}
      <section className="bg-slate-900 py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Documenting the Call</span>
              <h2 className="text-3xl sm:text-6xl font-black text-white serif mb-8">Film <span className="italic text-orange-500">Highlights</span></h2>
              <p className="text-slate-400 text-lg serif leading-relaxed italic mb-12">
                Experience the sights and sounds of the mission field through our documentary short films. See the smiles, hear the prayers, and witness the power of God in motion.
              </p>
              <button className="bg-orange-600 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition-all">
                Watch Archive
              </button>
            </div>
            <div className="reveal">
              <div className="aspect-video bg-slate-800 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative group cursor-pointer border-4 border-slate-700">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60" alt="Video teaser" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest block mb-2">Featured Film</span>
                  <h4 className="text-2xl text-white font-black serif">Subcontinent Awakening</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox placeholder */}
      {selectedStory && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" onClick={() => setSelectedStory(null)}></div>
          <div className="relative bg-white dark:bg-slate-800 w-full max-w-5xl rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedStory(null)} className="absolute top-4 sm:top-8 right-4 sm:right-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-orange-900/40 hover:text-orange-700 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-[600px]">
                <img src={selectedStory.thumbnail} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="p-8 sm:p-20 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-4">Missions Field Log • {selectedStory.category}</span>
                <h2 className="text-3xl sm:text-6xl font-black text-slate-800 dark:text-slate-100 serif leading-none mb-8">{selectedStory.title}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-10 italic serif">
                  {selectedStory.longDesc || "This narrative detail reflects the heart of the mission, demonstrating Christ's love in action within local communities."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-slate-800 dark:bg-orange-600 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest w-full sm:w-fit">Download Report</button>
                  <button onClick={() => setSelectedStory(null)} className="border border-slate-200 dark:border-slate-700 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all w-full sm:w-fit">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
