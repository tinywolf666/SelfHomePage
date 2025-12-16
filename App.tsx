import React, { useState } from 'react';
import { DATA_EN, DATA_CN } from './data';
import { Project, MediaItem } from './types';
import ParticleBackground from './components/ParticleBackground';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Cpu, 
  Globe, 
  X, 
  ChevronRight,
  Maximize2,
  Award,
  BookOpen,
  Briefcase,
  Terminal,
  Activity,
  Layers,
  Zap
} from 'lucide-react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

function App() {
  const [lang, setLang] = useState<'en' | 'cn'>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const data = lang === 'en' ? DATA_EN : DATA_CN;

  const toggleLang = () => setLang(prev => prev === 'en' ? 'cn' : 'en');

  // Modal Animation Variants
  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-tech-accent selection:text-black bg-tech-dark overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none opacity-40" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tech-accent/5 via-tech-dark to-tech-dark z-0 pointer-events-none" />
      <div className="laser-line"></div>
      <ParticleBackground />

      {/* Decorative Tech Borders - Fixed HUD Elements */}
      <div className="fixed inset-0 pointer-events-none z-50 p-6 hidden md:block">
         {/* Top Left Corner */}
         <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-tech-accent opacity-80"></div>
         <div className="absolute top-8 left-8 w-2 h-2 bg-tech-accent shadow-[0_0_10px_#FFD700]"></div>
         
         {/* Top Right Corner */}
         <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-tech-accent opacity-80"></div>
         <div className="absolute top-8 right-8 w-2 h-2 bg-tech-accent shadow-[0_0_10px_#FFD700]"></div>

         {/* Bottom Left Corner */}
         <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-tech-accent opacity-80"></div>
         <div className="absolute bottom-8 left-8 w-2 h-2 bg-tech-accent shadow-[0_0_10px_#FFD700]"></div>
         
         {/* Bottom Right Corner */}
         <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-tech-accent opacity-80"></div>
         <div className="absolute bottom-8 right-8 w-2 h-2 bg-tech-accent shadow-[0_0_10px_#FFD700]"></div>

         {/* Side Bars */}
         <div className="absolute top-1/2 left-6 transform -translate-y-1/2 w-0.5 h-32 bg-gradient-to-b from-transparent via-tech-accent to-transparent opacity-50"></div>
         <div className="absolute top-1/2 right-6 transform -translate-y-1/2 w-0.5 h-32 bg-gradient-to-b from-transparent via-tech-accent to-transparent opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-tech-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl font-mono font-bold tracking-tighter text-white group cursor-pointer">
            <div className="p-1 border border-tech-accent/50 rounded group-hover:bg-tech-accent/10 transition-colors">
               <Terminal size={20} className="text-tech-accent" />
            </div>
            <span className="group-hover:text-glow transition-all duration-300">
              CY<span className="text-tech-accent">.DEV</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="group flex items-center gap-2 px-4 py-1.5 rounded-sm bg-black border border-tech-border hover:border-tech-accent transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]"
            >
              <Globe size={14} className="text-gray-400 group-hover:text-tech-accent transition-colors" />
              <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
                {lang === 'en' ? 'EN' : '中文'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-20">
        <div className="grid md:grid-cols-3 gap-16 items-center">
          <div className="md:col-span-2 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-tech-accent/5 border border-tech-accent/40 text-tech-accent text-xs font-mono tracking-[0.2em] uppercase shadow-[0_0_10px_rgba(255,215,0,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent"></span>
              </span>
              {data.hero.status}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                <span className="block text-stroke-gold">{data.hero.name.split(' ')[0]}</span> 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tech-accent via-yellow-100 to-tech-accent animate-gradient-x text-glow">
                  {data.hero.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl text-gray-400 font-light flex items-center gap-4 font-mono">
              <span className="h-px w-12 bg-tech-accent"></span>
              <span className="text-white">{data.hero.role}</span>
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed border-l-2 border-tech-accent/30 pl-6">
              {data.hero.bio}
            </p>
            
            <div className="flex flex-wrap gap-8 pt-6 text-sm font-mono text-gray-400">
              <div className="flex items-center gap-2 group cursor-default">
                <MapPin size={16} className="text-tech-accent group-hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.8)] transition-all" />
                <span className="group-hover:text-white transition-colors">{data.hero.location}</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <Mail size={16} className="text-tech-accent group-hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.8)] transition-all" />
                <span className="group-hover:text-white transition-colors">contact@chenghuanyu.dev</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <SocialButton icon={<Github size={20} />} label="GITHUB" href="https://github.com" />
              <SocialButton icon={<Linkedin size={20} />} label="LINKEDIN" href="https://linkedin.com" />
            </div>
          </div>

          {/* Avatar Placeholder */}
          <div className="relative flex justify-center md:justify-end">
             <div className="w-72 h-72 md:w-96 md:h-96 relative group">
                {/* Rotating Tech Rings */}
                <div className="absolute inset-0 rounded-full border border-dotted border-tech-accent/40 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-tech-accent/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 rounded-full border border-tech-accent/10 scale-110"></div>
                
                {/* Main Avatar Container */}
                <div className="absolute inset-8 rounded-full bg-tech-panel border-4 border-tech-accent/20 shadow-[0_0_30px_rgba(255,215,0,0.2)] overflow-hidden flex items-center justify-center relative z-10 group-hover:border-tech-accent/60 transition-colors duration-500">
                    <div className="absolute inset-0 bg-white flex items-center justify-center text-gray-400 bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)]">
                         <span className="font-mono text-xs tracking-[0.2em] text-tech-accent/50 group-hover:text-tech-accent transition-colors">AVATAR.JPG</span>
                    </div>
                </div>
                
                {/* Decorative Tags */}
                <div className="absolute bottom-0 right-10 bg-black border border-tech-accent px-4 py-1 text-xs text-tech-accent font-mono z-20 shadow-[0_0_10px_rgba(255,215,0,0.3)] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-tech-accent rounded-full animate-pulse"></div>
                  ONLINE
                </div>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-40 pb-40 relative z-20">
        
        {/* Projects Grid */}
        <section>
            <SectionHeader title={data.sectionTitles.projects} icon={<Layers />} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={`card-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-tech-card/80 backdrop-blur-sm border border-tech-border rounded-sm overflow-hidden cursor-pointer hover:border-tech-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] hover:-translate-y-1"
                >
                   {/* Tech Corners on Card */}
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="w-3 h-3 border-t-2 border-r-2 border-tech-accent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="w-3 h-3 border-b-2 border-l-2 border-tech-accent"></div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="h-56 bg-black w-full flex items-center justify-center relative overflow-hidden border-b border-tech-border/50">
                     <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest flex flex-col items-center gap-3 group-hover:text-tech-accent transition-colors">
                       <div className="p-3 rounded-full border border-tech-border group-hover:border-tech-accent/50 group-hover:bg-tech-accent/10 transition-all">
                         <Activity size={24} />
                       </div>
                       System Preview
                     </div>
                     {/* Scan Effect on Hover */}
                     <div className="absolute inset-0 bg-gradient-to-t from-tech-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="absolute top-0 left-0 w-full h-1 bg-tech-accent/50 shadow-[0_0_10px_#FFD700] transform -translate-y-full group-hover:translate-y-[200px] transition-transform duration-1000 ease-in-out"></div>
                  </div>
                  
                  <div className="p-8 space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-tech-accent transition-colors font-mono tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-3 uppercase tracking-wide border-l-2 border-tech-accent/30 pl-3">
                        {project.institution}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-bold font-mono px-2 py-1 bg-black rounded-sm border border-tech-border text-gray-400 uppercase tracking-wider group-hover:border-tech-accent/30 transition-colors">
                          {t}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-mono px-2 py-1 text-tech-accent border border-transparent">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </section>

        {/* Experience */}
        <section>
          <SectionHeader title={data.sectionTitles.experience} icon={<Briefcase />} />
          <div className="space-y-16 border-l border-tech-border/40 ml-4 md:ml-8 pl-8 md:pl-16 relative">
            {data.experience.map((exp, i) => (
              <div key={i} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[41px] md:-left-[73px] top-0 h-6 w-6 bg-black border-2 border-tech-border group-hover:border-tech-accent group-hover:bg-tech-accent group-hover:shadow-[0_0_15px_#FFD700] transition-all duration-300 rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-tech-accent group-hover:bg-black transition-colors rounded-full"></div>
                </div>
                
                <div className="bg-tech-card/40 backdrop-blur-sm border-l-2 border-transparent hover:border-l-tech-accent p-8 rounded-r-sm hover:bg-white/5 transition-all duration-300 group-hover:shadow-[-20px_0_40px_-20px_rgba(255,215,0,0.1)]">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-tech-accent transition-colors">{exp.role}</h3>
                      <div className="text-tech-subtle font-mono text-sm mt-2 flex items-center gap-2">
                         <span className="text-tech-accent">@</span> {exp.company}
                      </div>
                    </div>
                    <div className="text-left md:text-right font-mono">
                       <div className="text-sm text-tech-accent bg-tech-accent/10 px-3 py-1 rounded-sm border border-tech-accent/20 inline-block md:block">{exp.period}</div>
                       <div className="text-[10px] text-gray-500 mt-2 uppercase tracking-[0.1em]">{exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-4 group/li hover:text-white transition-colors">
                        <span className="text-tech-accent mt-1.5 text-[10px] opacity-50 group-hover/li:opacity-100">///</span>
                        <span className="flex-1 leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 border-t border-white/5 pt-6">
                    {exp.techStack.map(t => (
                      <span key={t} className="text-xs px-3 py-1.5 bg-black border border-tech-border/60 rounded-sm text-gray-400 font-mono hover:text-tech-accent hover:border-tech-accent/50 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patents & Education Grid */}
        <div className="grid md:grid-cols-2 gap-16">
            <section>
               <SectionHeader title={data.sectionTitles.patents} icon={<Award />} />
               <div className="space-y-6">
                 {data.patents.map((pat, i) => (
                   <div key={i} className="group p-8 bg-gradient-to-br from-tech-card to-transparent border border-tech-border hover:border-tech-accent/60 transition-colors rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-tech-accent/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                      <h3 className="font-bold text-lg text-white mb-3 font-mono group-hover:text-glow transition-all">{pat.title}</h3>
                      <div className="font-mono text-xs text-tech-accent mb-6 flex items-center gap-3 opacity-80">
                        <Zap size={12} className="fill-tech-accent" />
                        {pat.number} 
                        <span className="text-gray-700">|</span> 
                        {pat.date}
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">{pat.description}</p>
                   </div>
                 ))}
               </div>
            </section>

            <section>
               <SectionHeader title={data.sectionTitles.education} icon={<BookOpen />} />
               <div className="space-y-6">
                 {data.education.map((edu, i) => (
                   <div key={i} className="group p-8 bg-tech-card/30 border border-tech-border hover:border-tech-accent/40 transition-colors rounded-sm relative">
                      <div className="absolute left-0 top-8 w-1 h-12 bg-tech-accent opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#FFD700]"></div>
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-lg text-white">{edu.school}</h3>
                         <span className="text-[10px] font-mono text-tech-accent bg-tech-accent/5 px-2 py-1 border border-tech-accent/20 rounded">{edu.period}</span>
                      </div>
                      <div className="text-sm text-gray-400 mb-6 font-light">{edu.degree}</div>
                      
                      <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                        {edu.gpa && <span className="text-tech-accent font-bold">GPA: {edu.gpa}</span>}
                      </div>
                      
                      {edu.achievements && (
                        <div className="text-xs text-gray-400 border-t border-dashed border-tech-border pt-4 mt-4 leading-relaxed">
                           <span className="text-tech-accent mr-2">FOCUS:</span>
                           {edu.achievements.join(" • ")}
                        </div>
                      )}
                   </div>
                 ))}
               </div>
            </section>
        </div>

        {/* Skills */}
        <section>
           <SectionHeader title={data.sectionTitles.skills} icon={<Cpu />} />
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.skills.map((skillGroup, i) => (
                <div key={i} className="bg-tech-card/20 border border-tech-border/50 p-6 hover:bg-tech-panel transition-colors hover:border-tech-accent/30 group">
                  <h4 className="font-mono font-bold text-white mb-6 text-xs uppercase tracking-[0.2em] flex items-center gap-3 border-b border-tech-accent/20 pb-4">
                    <span className="w-2 h-2 bg-tech-accent rotate-45 group-hover:rotate-90 transition-transform duration-500"></span>
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, j) => (
                      <li key={j} className="text-sm text-gray-400 hover:text-tech-accent transition-colors flex items-center justify-between group/item cursor-default">
                        <span>{skill}</span>
                        <span className="text-[8px] opacity-0 group-hover/item:opacity-100 text-tech-accent tracking-widest transition-opacity">[LOADED]</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-tech-border bg-tech-panel/50 py-16 text-center text-sm text-gray-600 font-mono relative z-20">
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-black border border-tech-border rounded-full opacity-70">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#00ff00]"></div>
                <span className="text-xs tracking-widest text-gray-400">SYSTEM OPERATIONAL // V.2.0.4</span>
            </div>
            <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Chenghuan Yu. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60]"
            />
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 md:inset-12 lg:inset-24 bg-tech-dark border border-tech-accent/50 rounded-sm z-[70] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(255,215,0,0.15)]"
            >
                {/* Tech Deco Lines on Modal */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-accent to-transparent z-50 shadow-[0_0_15px_#FFD700]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-accent to-transparent z-50 opacity-30"></div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                  className="absolute top-6 right-6 z-50 p-2 bg-black hover:bg-tech-accent hover:text-black border border-tech-accent rounded-full text-tech-accent transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                >
                  <X size={24} />
                </button>

                {/* Left: Media Gallery */}
                <div className="md:w-3/5 bg-black flex flex-col h-[40vh] md:h-full border-b md:border-b-0 md:border-r border-tech-border relative">
                   {/* Tech Grid Overlay on Image Area */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                   
                   <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 custom-scrollbar relative z-10">
                      {selectedProject.media.map((item, idx) => (
                        <div key={idx} className="space-y-3 group">
                           <div className="bg-tech-card aspect-video w-full rounded-sm flex items-center justify-center relative overflow-hidden border border-tech-border/50 group-hover:border-tech-accent/50 transition-colors">
                              <div className="text-gray-600 font-mono text-xs uppercase flex flex-col items-center gap-3">
                                <Activity className="text-tech-accent/20 group-hover:text-tech-accent/50 transition-colors" size={32} />
                                <span>{item.type === 'video' ? 'Video Signal Lost' : 'Image Data Missing'}</span>
                              </div>
                              {/* Overlay Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/90 via-transparent to-transparent pointer-events-none" />
                              {/* Scanline */}
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-accent/10 to-transparent h-[2px] w-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>
                           </div>
                           <div className="flex justify-between items-center px-1 border-l-2 border-tech-accent/30 pl-3">
                             <p className="text-xs text-tech-accent font-mono tracking-wider">
                               FIGURE_{idx + 1}.0 <span className="text-gray-500">//</span> {item.caption.toUpperCase()}
                             </p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto bg-tech-panel/95 relative backdrop-blur-md">
                   {/* Background Icon */}
                   <div className="absolute top-10 right-10 opacity-5 pointer-events-none text-tech-accent">
                      <Cpu size={200} />
                   </div>

                   <div className="mb-10 relative z-10">
                      <div className="text-tech-accent font-mono text-[10px] mb-3 tracking-[0.2em] border-b border-tech-accent/20 pb-3 inline-block">PROJECT DATA LOG</div>
                      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[0.9] tracking-tight uppercase">
                        {selectedProject.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 font-mono text-xs mb-8">
                        <span className="text-white bg-white/5 px-2 py-1 rounded-sm">{selectedProject.institution}</span>
                        <span className="text-tech-accent">///</span>
                        <span>{selectedProject.period}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light border-l-2 border-tech-accent/20 pl-4">
                        {selectedProject.description}
                      </p>
                   </div>

                   <div className="mb-auto relative z-10">
                      <h4 className="text-xs font-bold text-tech-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Terminal size={14} />
                        Tech Stack Initialization
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(t => (
                          <span key={t} className="px-3 py-1.5 bg-black border border-tech-border rounded-sm text-xs text-gray-300 font-mono hover:text-tech-accent hover:border-tech-accent transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                   </div>

                   {selectedProject.link && (
                     <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group flex items-center justify-between gap-4 w-full py-5 px-6 bg-tech-accent hover:bg-white text-black font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] clip-path-slant"
                        >
                          <div className="flex items-center gap-3">
                             <Github size={20} />
                             <span>Access Repository</span>
                          </div>
                          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                     </div>
                   )}
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helpers
const SocialButton = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
  <a 
    href={href}
    className="flex items-center gap-3 px-6 py-3 bg-black border border-tech-border hover:border-tech-accent rounded-sm text-gray-400 hover:text-white transition-all group hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]"
  >
    <span className="text-tech-subtle group-hover:text-tech-accent transition-colors">{icon}</span>
    <span className="text-xs font-bold tracking-widest">{label}</span>
  </a>
);

const SectionHeader = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div className="flex items-center gap-6 mb-16">
     <div className="relative">
        <div className="absolute inset-0 bg-tech-accent blur-md opacity-20"></div>
        <div className="relative p-4 bg-black border border-tech-accent text-tech-accent">
           {icon}
        </div>
     </div>
     <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{title}</span>
        </h2>
        <div className="h-0.5 w-full bg-gradient-to-r from-tech-accent via-tech-dark to-transparent opacity-50"></div>
     </div>
  </div>
);

export default App;