
import React, { useState } from 'react';
import { SHAYAN_DATA } from './constants';
import { 
  Phone, Mail, MapPin, ExternalLink, Download, Github, Linkedin, Youtube, Instagram, Music2, Calendar, GraduationCap, Code2, Globe, Sparkles, Award 
} from 'lucide-react';

const App = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    setTimeout(() => {
      window.print();
      setIsGenerating(false);
    }, 300);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'portfolio': return <Globe size={14} />;
      case 'github': return <Github size={14} />;
      case 'linkedin': return <Linkedin size={14} />;
      case 'youtube': return <Youtube size={14} />;
      case 'instagram': return <Instagram size={14} />;
      case 'tiktok': return <Music2 size={14} />;
      default: return <ExternalLink size={14} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center py-8 print:py-0">
      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white; }
          .no-print { display: none !important; }
          .print-avoid-break { page-break-inside: avoid; }
          .print-break-before { page-break-before: always; }
        }
      `}</style>

      {/* Action Bar */}
      <div className="no-print w-full max-w-[210mm] mb-4 flex justify-end">
        <button 
          onClick={handleDownload}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md active:translate-y-0.5 disabled:opacity-70"
        >
          {isGenerating ? <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <Download size={18} />}
          {isGenerating ? 'GENERATING PDF...' : 'DOWNLOAD RESUME'}
        </button>
      </div>

      {/* A4 Paper Container */}
      <main className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-xl print:shadow-none mx-auto overflow-hidden text-slate-800 text-[13px] leading-relaxed">
        
        {/* Header - Top Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white px-10 py-10 print:px-8 print:py-8 border-b-[6px] border-indigo-500 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h1 className="text-[2.75rem] leading-tight font-black font-outfit tracking-tighter uppercase mb-1 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              {SHAYAN_DATA.name}
            </h1>
            <h2 className="text-indigo-400 text-[15px] font-bold tracking-widest uppercase mb-5 flex items-center gap-3">
              {SHAYAN_DATA.role}
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
            </h2>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium text-slate-300">
              <div className="flex items-center gap-2 group">
              <div className="p-1.5 bg-white/10 rounded-md group-hover:bg-indigo-500/50 transition-colors">
                <Mail size={12} className="text-indigo-300" />
              </div>
              <a href={`mailto:${SHAYAN_DATA.email}`} className="hover:text-white transition-colors tracking-wide">{SHAYAN_DATA.email}</a>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 bg-white/10 rounded-md group-hover:bg-indigo-500/50 transition-colors">
                <Phone size={12} className="text-indigo-300" />
              </div>
              <span className="tracking-wide">{SHAYAN_DATA.phone}</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-1.5 bg-white/10 rounded-md group-hover:bg-indigo-500/50 transition-colors">
                <MapPin size={12} className="text-indigo-300" />
              </div>
              <span className="tracking-wide">{SHAYAN_DATA.location}</span>
            </div>
            {SHAYAN_DATA.socials
              .filter(social => ['Portfolio', 'GitHub', 'LinkedIn', 'YouTube', 'Instagram', 'TikTok'].includes(social.platform))
              .map((social, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <div className="p-1.5 bg-white/10 rounded-md group-hover:bg-indigo-500/50 transition-colors">
                  <span className="text-indigo-300">{getSocialIcon(social.platform)}</span>
                </div>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-wide">
                  {social.platform}
                </a>
              </div>
            ))}
          </div>
          </div>
        </header>

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row print:flex-row relative">
          
          {/* LEFT COLUMN */}
          <aside className="w-full md:w-[33%] print:w-[33%] bg-slate-50/50 border-r border-slate-100 px-7 py-8 print:px-6 print:py-6 flex flex-col gap-8 flex-shrink-0">
            
            {/* Education */}
            <section>
              <h3 className="text-sm font-black font-outfit uppercase tracking-widest text-blue-800 flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-indigo-500" /> Education
              </h3>
              <div className="space-y-4">
                {SHAYAN_DATA.education.map((edu, idx) => (
                  <div key={idx} className="print-avoid-break relative pl-3 border-l-2 border-indigo-100">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white border-[1.5px] border-indigo-400"></div>
                    <h4 className="font-bold text-slate-700 text-[13px] leading-tight">{edu.degree}</h4>
                    <p className="text-slate-500 text-xs mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <Calendar size={10} className="text-indigo-400" />
                      <span className="text-indigo-600/80 font-semibold text-[10px] uppercase tracking-wide">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-sm font-black font-outfit uppercase tracking-widest text-blue-800 flex items-center gap-2 mb-4 mt-2">
                <Code2 size={16} className="text-indigo-500" /> Skills
              </h3>
              <div className="space-y-4">
                {SHAYAN_DATA.skills.map((skillGroup, idx) => (
                  <div key={idx} className="print-avoid-break">
                    <h4 className="font-black text-slate-700 text-[11px] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-indigo-400"></div>
                      {skillGroup.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-white border border-slate-200/80 shadow-sm rounded-full text-[10.5px] font-bold text-slate-600 print:text-slate-800 print:border-slate-300 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-md transition-all">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-sm font-black font-outfit uppercase tracking-widest text-blue-800 flex items-center gap-2 mb-4 mt-2">
                <Globe size={16} className="text-indigo-500" /> Languages
              </h3>
              <div className="space-y-2.5">
                {SHAYAN_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="print-avoid-break">
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span className="font-semibold text-slate-700 text-xs">{lang.name}</span>
                      <span className="text-indigo-500 font-bold text-[10px] uppercase tracking-wide">{lang.level}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                      <div 
                        className="bg-indigo-400 h-1.5 rounded-full" 
                        style={{ width: lang.level === 'Native' ? '100%' : lang.level === 'Professional' ? '80%' : '40%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </aside>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-[67%] print:w-[67%] px-8 py-8 print:px-8 print:py-6 flex flex-col gap-7">
            
            {/* Professional Summary */}
            <section>
              <h3 className="text-[16px] font-black font-outfit uppercase tracking-widest text-slate-800 flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-indigo-500" /> Professional Summary
              </h3>
              <p className="text-slate-600 leading-relaxed text-[13px] text-justify bg-indigo-50/50 p-5 rounded-xl border border-indigo-100/60 shadow-sm print:shadow-none print:bg-transparent print:border-none print:p-0">
                {SHAYAN_DATA.profileSummary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-[15px] font-black font-outfit uppercase tracking-widest text-blue-800 flex items-center gap-2 mb-4 mt-2 border-b-2 border-blue-100 pb-2">
                Work Experience
              </h3>
              <div className="space-y-6">
                {SHAYAN_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="print-avoid-break relative pl-4 border-l-2 border-slate-200">
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-white shadow-sm print:ring-0"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-800 text-[14px]">{exp.title}</h4>
                      <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 print:border print:border-indigo-100">
                        <Calendar size={10} /> {exp.period}
                      </span>
                    </div>
                    <p className="text-indigo-600 font-bold text-[11px] mb-2.5 uppercase tracking-wide">{exp.subtitle}</p>
                    <ul className="space-y-1.5">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-slate-600 text-[12.5px] leading-relaxed pl-4 relative">
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-indigo-300"></span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-[15px] font-black font-outfit uppercase tracking-widest text-slate-800 flex items-center gap-2 mb-4 mt-2 border-b-2 border-slate-100 pb-2">
                Key Projects
              </h3>
              <div className="space-y-4">
                {SHAYAN_DATA.projects.map((project, idx) => (
                  <div key={idx} className="print-avoid-break bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group print:shadow-none print:border-slate-300">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity print:opacity-100"></div>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <h4 className="font-bold text-slate-800 text-[14px] flex items-center gap-2">
                        {project.name}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 bg-indigo-50 p-1 rounded print:hidden">
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-[13px] leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold tracking-wide text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded border border-indigo-100/50 print:bg-white print:border-slate-300 print:text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements & Certifications */}
            <section>
              <h3 className="text-[15px] font-black font-outfit uppercase tracking-widest text-slate-800 flex items-center gap-2 mb-4 mt-2 border-b-2 border-slate-100 pb-2">
                Achievements & Certifications
              </h3>
              <div className="space-y-4">
                
                {/* Kaggle Condensed */}
                <div className="print-avoid-break bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-lg p-4 shadow-md print:shadow-none print:bg-slate-50 print:border print:border-slate-200 print:text-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-[14px] flex items-center gap-2 print:text-slate-800">
                      <Award size={16} className="text-indigo-200 print:text-indigo-600" />
                      17 Certifications from Kaggle
                    </h4>
                    <a href={SHAYAN_DATA.kaggleDriveLink} target="_blank" rel="noopener noreferrer" className="no-print text-[10px] font-bold uppercase tracking-wider text-indigo-100 hover:text-white bg-white/10 px-2 py-1 rounded flex items-center gap-1 transition-colors">
                      View All <ExternalLink size={10} />
                    </a>
                  </div>
                  <p className="text-indigo-100/90 text-[12.5px] leading-relaxed print:text-slate-600">
                    Completed comprehensive courses in Python, Machine Learning, Deep Learning, SQL, Data Visualization, and NLP.
                  </p>
                </div>

                {/* Volunteers / Events */}
                {SHAYAN_DATA.volunteerEvents.map((event, idx) => (
                  <div key={idx} className="print-avoid-break pl-4 border-l-2 border-slate-200 relative">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-800 text-[13px]">{event.title} <span className="font-medium text-slate-500 ml-1">at {event.organizer}</span></h4>
                    </div>
                    <p className="text-slate-600 text-[12.5px] leading-relaxed">{event.description}</p>
                  </div>
                ))}

              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
