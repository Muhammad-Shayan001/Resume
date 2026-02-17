
import React, { useState } from 'react';
import { SHAYAN_DATA } from './constants';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Copy,
  Award,
  Cpu,
  Database,
  Globe2,
  Users,
  Code2,
  Sparkles,
  ChevronRight,
  Instagram,
  Youtube,
  Music2,
  Link2,
  Cloud,
  CheckCircle2,
  Download,
  Info,
  Calendar,
  Briefcase,
  Layers,
  GraduationCap,
  Trophy,
  Brain,
  BarChart3,
  Star,
  Zap,
  Github,
  Linkedin,
  FolderGit2
} from 'lucide-react';

const App: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  // QR code for LinkedIn (corrected link)
  const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.linkedin.com/in/muhammad-shayan-98113a260/';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownload = () => {
    setIsGenerating(true);
    // Use a small timeout to let the UI update (spinner) before blocking the thread with the print dialog
    setTimeout(() => {
      window.print();
      setIsGenerating(false);
    }, 300);
  };

  const getSkillIcon = (title: string) => {
    const iconClass = "shrink-0";
    switch (title) {
      case 'Frontend Development': return <Globe2 size={16} className={`${iconClass} text-sky-500`} />;
      case 'Backend & Systems': return <Cpu size={16} className={`${iconClass} text-indigo-500`} />;
      case 'DevOps & Deployment': return <Cloud size={16} className={`${iconClass} text-slate-500`} />;
      case 'Database': return <Database size={16} className={`${iconClass} text-emerald-500`} />;
      case 'Certifications': return <Award size={16} className={`${iconClass} text-amber-500`} />;
      case 'Professional Skills': return <Users size={16} className={`${iconClass} text-rose-500`} />;
      case 'AI & Data Science': return <Brain size={16} className={`${iconClass} text-purple-500`} />;
      default: return <Layers size={16} className={`${iconClass} text-slate-400`} />;
    }
  };

  const getSocialIcon = (platform: string, size: number = 18) => {
    switch (platform.toLowerCase()) {
      case 'github': return <Github size={size} />;
      case 'linkedin': return <Linkedin size={size} />;
      case 'linktree': return <Link2 size={size} />;
      case 'instagram': return <Instagram size={size} />;
      case 'youtube': return <Youtube size={size} />;
      case 'tiktok': return <Music2 size={size} />;
      case 'kaggle': return <BarChart3 size={size} />;
      default: return <ExternalLink size={size} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'python': return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' };
      case 'ml': return { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500' };
      case 'data': return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' };
      case 'sql': return { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500' };
      case 'ai': return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500' };
      default: return { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', dot: 'bg-slate-500' };
    }
  };

  const getSidebarCategoryColor = (category: string) => {
    switch (category) {
      case 'python': return { bg: 'bg-blue-500/15', text: 'text-blue-300', border: 'border-blue-500/30', dot: 'bg-blue-400' };
      case 'ml': return { bg: 'bg-purple-500/15', text: 'text-purple-300', border: 'border-purple-500/30', dot: 'bg-purple-400' };
      case 'data': return { bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30', dot: 'bg-emerald-400' };
      case 'sql': return { bg: 'bg-orange-500/15', text: 'text-orange-300', border: 'border-orange-500/30', dot: 'bg-orange-400' };
      case 'ai': return { bg: 'bg-rose-500/15', text: 'text-rose-300', border: 'border-rose-500/30', dot: 'bg-rose-400' };
      default: return { bg: 'bg-slate-500/15', text: 'text-slate-300', border: 'border-slate-500/30', dot: 'bg-slate-400' };
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'python': return 'Python';
      case 'ml': return 'Machine Learning';
      case 'data': return 'Data Science';
      case 'sql': return 'SQL & Databases';
      case 'ai': return 'AI & Deep Learning';
      default: return 'Other';
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center">
      <style>{`
        @media print {
          @page { margin: 10mm; size: auto; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          aside { background-color: #0f172a !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          aside, aside * { color: white !important; }
          aside .text-indigo-400 { color: #818cf8 !important; }
          aside .text-emerald-400 { color: #34d399 !important; }
          aside .text-amber-400 { color: #fbbf24 !important; }
          aside .text-slate-400 { color: #94a3b8 !important; }
          aside .text-slate-300 { color: #cbd5e1 !important; }
          aside .text-slate-200 { color: #e2e8f0 !important; }
          .print-avoid-break { page-break-inside: avoid; }
        }
      `}</style>
      {/* Global Action Bar */}
      <header className="no-print w-full bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 py-3 px-6 lg:px-12 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Sparkles size={18} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-black text-slate-900 leading-none font-outfit uppercase tracking-tight">
              {SHAYAN_DATA.name}
            </h1>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Digital Portfolio</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={handleDownload}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
          >
            {isGenerating ? <div className="h-3 w-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <Download size={14} />}
            {isGenerating ? 'GENERATING...' : 'SAVE AS PDF'}
          </button>
        </div>
      </header>

      {/* CV Document Wrapper */}
      <main className="resume-container w-full max-w-[1000px] flex flex-col md:flex-row print:flex-row bg-white shadow-xl my-4 md:my-12 print:my-0 print:shadow-none print:max-w-none overflow-hidden md:rounded-3xl print:rounded-none border border-slate-200 print:border-none">
        
        {/* LEFT SIDEBAR: DARK THEME */}
        <aside 
          className="w-full md:w-[320px] print:w-[320px] bg-[#0f172a] print:bg-[#0f172a] text-white p-10 print:p-8 flex flex-col shrink-0"
          style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
        >
          <div className="mb-12 text-center md:text-left print:text-left">
            <h2 className="text-[32px] font-black font-outfit leading-tight tracking-tighter uppercase mb-2">
              {SHAYAN_DATA.name.split(' ')[0]}<br/>
              <span className="text-indigo-400">{SHAYAN_DATA.name.split(' ')[1]}</span>
            </h2>
            <div className="h-1 w-12 bg-indigo-500 rounded-full mb-4 mx-auto md:mx-0"></div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{SHAYAN_DATA.role}</p>
            {/* QR code for LinkedIn */}
            <div className="mt-4 flex justify-center">
              <img src={qrCodeUrl} alt="LinkedIn QR" className="rounded-lg border border-indigo-500/30 shadow-sm" />
            </div>
          </div>

          {/* Sidebar Contact */}
          <section className="mb-8">
            <h3 className="sidebar-section-title">Contact</h3>
            <div className="space-y-3">
              {[
                { label: 'Mobile', val: SHAYAN_DATA.phone, icon: <Phone size={14}/> },
                { label: 'Email', val: SHAYAN_DATA.email, icon: <Mail size={14}/> },
                { label: 'Location', val: SHAYAN_DATA.location, icon: <MapPin size={14}/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-indigo-400">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-8">
            <h3 className="sidebar-section-title">Education</h3>
            <div className="space-y-4">
              {SHAYAN_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative pl-5 border-l border-white/10 group print-avoid-break">
                  <div className="absolute -left-[4px] top-0.5 w-2 h-2 rounded-full bg-[#0f172a] border border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-tight ${edu.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {edu.status}
                    </span>
                    {edu.period && <span className="text-[8px] text-slate-400 font-medium">{edu.period}</span>}
                  </div>
                  <h4 className="text-[11px] font-bold text-slate-100 leading-snug">{edu.degree}</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Links */}
          <section className="mb-8">
            <h3 className="sidebar-section-title">Links</h3>
            <div className="space-y-2.5">
              {SHAYAN_DATA.socials.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group sidebar-link rounded-lg px-2 py-1.5 -mx-2 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-colors">
                    <span className="text-indigo-400">{getSocialIcon(social.platform, 13)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-wider">{social.platform}</p>
                    <p className="text-[9px] text-slate-400 truncate group-hover:text-indigo-400 transition-colors">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Tech Stack in Sidebar */}
          <section className="mb-8">
            <h3 className="sidebar-section-title">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {SHAYAN_DATA.skills.flatMap(cat => cat.items).slice(0, 14).map((skill, idx) => (
                <span key={idx} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[8px] font-bold text-slate-300 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors cursor-default">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* KAGGLE CERTIFICATIONS IN SIDEBAR */}
          <section className="mb-8">
            <h3 className="sidebar-section-title">Kaggle (17 Courses)</h3>
            
            {/* Category summary pills */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {['python', 'ml', 'data', 'sql', 'ai'].map(cat => {
                const colors = getSidebarCategoryColor(cat);
                const count = SHAYAN_DATA.kaggleCertifications.filter(c => c.category === cat).length;
                return (
                  <span key={cat} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider ${colors.bg} ${colors.text} border ${colors.border}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></span>
                    {getCategoryLabel(cat)} ({count})
                  </span>
                );
              })}
            </div>

            {/* Compact certification list */}
            <div className="space-y-1">
              {SHAYAN_DATA.kaggleCertifications.map((cert, idx) => {
                const colors = getSidebarCategoryColor(cert.category);
                return (
                  <div key={idx} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg ${colors.bg} border ${colors.border} group hover:border-indigo-400/50 transition-colors`}>
                    <CheckCircle2 size={10} className={`${colors.text} shrink-0`} />
                    <p className="text-[9px] font-bold text-slate-200 leading-snug truncate flex-1">{cert.name}</p>
                    <span className={`text-[7px] font-bold uppercase tracking-wider ${colors.text} shrink-0 hidden sm:inline print:inline`}>{getCategoryLabel(cert.category)}</span>
                  </div>
                );
              })}
            </div>

            {/* Drive link */}
            <a
              href={SHAYAN_DATA.kaggleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="no-print mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-lg text-[9px] font-bold uppercase tracking-widest text-indigo-300 transition-all"
            >
              <Award size={11} />
              View All Certificates
            </a>
          </section>

          <section className="mt-auto">
            <h3 className="sidebar-section-title">Languages</h3>
            <div className="space-y-3">
              {SHAYAN_DATA.languages.map((lang, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">{lang.name}</span>
                    <span className="text-[9px] text-indigo-400 font-bold">{lang.level}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-500 rounded-full" 
                      style={{ width: lang.level === 'Native' ? '100%' : lang.level === 'Professional' ? '80%' : '40%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* MAIN BODY: RIGHT PANEL */}
        <div className="flex-1 p-8 md:p-14 print:p-10 flex flex-col bg-white">
          
          <section className="mb-10">
            <h3 className="main-section-title">Professional Summary</h3>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 italic relative group">
              <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                "{SHAYAN_DATA.profileSummary}"
              </p>
              <div className="absolute -top-3 -right-3 p-2 bg-white rounded-full border border-slate-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles size={16} className="text-indigo-600" />
              </div>
            </div>
          </section>

          {/* TECH STACK SECTION — removed from main, now in sidebar */}

          {/* KAGGLE CERTIFICATIONS HIGHLIGHT */}
          <section className="mb-10">
            <h3 className="main-section-title">
              <span className="flex items-center gap-2">Kaggle Certifications</span>
            </h3>
            
            {/* Achievement Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 p-6 mb-6 text-white shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative flex items-center gap-5">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shrink-0">
                  <Trophy size={28} className="text-amber-300" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[28px] font-black font-outfit leading-none">17</span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-tight">Courses<br/>Completed</span>
                  </div>
                  <p className="text-[11px] text-white/70 font-medium leading-snug">
                    Certified in Python, Machine Learning, Deep Learning, SQL, Data Science & AI Ethics from Kaggle
                  </p>
                </div>
                <a 
                  href={SHAYAN_DATA.kaggleDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print ml-auto shrink-0 px-4 py-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <Award size={12} />
                  View All Certificates
                </a>
              </div>
            </div>
          </section>

          {/* Kaggle PDF Drive Link (plain text for easy copy) */}
          <div className="mb-6">
            <span className="text-[11px] font-bold text-slate-700">Kaggle Certificates PDF Drive Link:</span>
            <input
              type="text"
              value={SHAYAN_DATA.kaggleDriveLink}
              readOnly
              className="w-full mt-1 px-2 py-1 text-[11px] font-mono bg-slate-50 border border-slate-200 rounded focus:outline-none select-all cursor-pointer"
              onClick={e => (e.target as HTMLInputElement).select()}
            />
          </div>

          {/* All Certificate Drive Links (plain text for easy copy) */}
          <div className="mb-6">
            <span className="text-[11px] font-bold text-slate-700">All Certificates Drive Links:</span>
            {SHAYAN_DATA.volunteerEvents.filter(e => e.certificateUrl).map((event, idx) => (
              <div key={idx} className="mb-2">
                <span className="text-[10px] font-semibold text-slate-600">{event.title}:</span>
                <input
                  type="text"
                  value={event.certificateUrl}
                  readOnly
                  className="w-full mt-1 px-2 py-1 text-[10px] font-mono bg-slate-50 border border-slate-200 rounded focus:outline-none select-all cursor-pointer"
                  onClick={e => (e.target as HTMLInputElement).select()}
                />
              </div>
            ))}
          </div>

          <section className="mb-10">
            <h3 className="main-section-title">Experience</h3>
            <div className="space-y-8">
              {SHAYAN_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100 print-avoid-break">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-600"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="text-[15px] font-black text-slate-900 uppercase tracking-tight">{exp.title}</h4>
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      {exp.period && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-600 text-[9px] font-bold uppercase tracking-wider rounded-lg">
                          <Calendar size={10} />
                          {exp.period}
                        </span>
                      )}
                      <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-wider rounded-lg">
                        {exp.duration || 'Full-Time'}
                      </span>
                    </div>
                  </div>
                  <p className="text-indigo-600 text-[10px] font-bold uppercase tracking-[0.15em] mb-4">{exp.subtitle}</p>
                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-[12px] text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 mt-2 mr-3 shrink-0"></span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-10">
            <h3 className="main-section-title">Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SHAYAN_DATA.projects.map((project, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 project-card hover:border-indigo-500 transition-colors shadow-sm group print-avoid-break">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <FolderGit2 size={16} />
                    </div>
                    <h5 className="text-[12px] font-black text-slate-900 uppercase tracking-wider">{project.name}</h5>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-slate-100 rounded text-[9px] font-bold text-slate-600">{tech}</span>
                    ))}
                  </div>
                  {(project.liveUrl || project.repoUrl) && (
                    <div className="flex items-center gap-3 no-print">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-wider flex items-center gap-1">
                          <ExternalLink size={10} /> Live
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold text-slate-500 hover:text-slate-800 uppercase tracking-wider flex items-center gap-1">
                          <Github size={10} /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* VOLUNTEER & EVENTS — Compact Timeline */}
          <section className="mb-10">
            <h3 className="main-section-title">Events & Achievements</h3>
            <div className="space-y-3">
              {SHAYAN_DATA.volunteerEvents.map((event, idx) => (
                <div key={idx} className="event-card relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 hover:border-indigo-300 transition-colors print-avoid-break">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
                      <Zap size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-tight">{event.title}</h4>
                        <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded text-[8px] font-bold uppercase tracking-wider">{event.certificateLabel || 'Certified'}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mb-2">{event.organizer} • {event.venue}</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed mb-2">{event.description}</p>
                      <ul className="space-y-1">
                        {event.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start text-[11px] text-slate-600 leading-relaxed">
                            <CheckCircle2 size={10} className="text-indigo-400 mt-0.5 mr-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      {event.certificateUrl && (
                        <a
                          href={event.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-print inline-flex items-center gap-1.5 mt-2 text-[9px] font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-wider"
                        >
                          <Award size={10} />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS MOVED TO RIGHT PANEL */}
          <section className="mb-10">
            <h3 className="main-section-title">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SHAYAN_DATA.skills.map((cat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-indigo-600 transition-colors shadow-sm skill-pill">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                      {getSkillIcon(cat.title)}
                    </div>
                    <h5 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{cat.title}</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors cursor-default">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <footer className="no-print mb-12 text-center opacity-40">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Muhammad Shayan | Professional Series</p>
        {/* References & Contact Section */}
        <div className="mt-4 text-center">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-indigo-600 mb-2">References & Contact</h4>
          <p className="text-[10px] text-slate-500 mb-1">Available upon request</p>
          <p className="text-[10px] text-slate-500">Email: shayan.javed091@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
