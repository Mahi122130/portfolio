import React, { useState, useEffect } from 'react';
import Certificates from './Certificates.jsx';

const projects = [
  {
    name: 'network-scanner-tool',
    desc: 'A security tool for network analysis and vulnerability assessment.',
    tech: ['Python', 'Scapy', 'Network Security'],
    url: 'https://github.com/mahi122130/network-scanner-tool',
  },
  {
    name: 'simple-chat-bot',
    desc: 'An AI-powered chatbot with natural language processing capabilities.',
    tech: ['Python', 'Flask', 'HTML/CSS/JS'],
    url: 'https://github.com/mahi122130/simple-chat-bot',
  },
  {
    name: 'socket-project',
    desc: 'A secure online chatting platform with proctoring features.',
    tech: ['Java', 'Socket Programming'],
    url: 'https://github.com/mahi122130/socket-project',
  },
  {
    name: 'Csec-bootcamp-jobspher',
    desc: 'Comprehensive job search platform with advanced filtering.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    url: 'https://github.com/mahi122130/Csec-bootcamp-jobspher',
  },
];

const skills = [
  'Penetration Testing', 'Network Security', 'Python', 'Scapy',
  'Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP',
  'CTF Challenges', 'Reverse Engineering', 'Web Security',
];

export default function CyberSecurity() {
  const [typedText, setTypedText] = useState('');
  const fullText = '> whoami\n  Mahelet Yared — Cybersecurity Enthusiast & Penetration Tester';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 min-h-screen font-mono relative">
      {/* Scanline overlay */}
      <div className="scanline fixed inset-0 z-10" />

      {/* Hero */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="cyber-border rounded-lg p-8 bg-gray-950">
          <pre className="text-green-400 text-lg sm:text-xl whitespace-pre-wrap leading-relaxed">
            {typedText}
            <span className="animate-pulse">█</span>
          </pre>
          <div className="mt-6 text-green-300/70 text-sm">
            <p>3rd Year Software Engineering Student</p>
            <p>INSA Cyber Talent Center | ASTu CSEC | ASTu Dev Club</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://github.com/mahi122130" target="_blank" rel="noopener"
              className="px-4 py-2 border border-green-500/50 rounded hover:bg-green-500/10 transition-colors text-sm">
              [GitHub]
            </a>
            <a href="https://tryhackme.com/p/mahelet2130" target="_blank" rel="noopener"
              className="px-4 py-2 border border-green-500/50 rounded hover:bg-green-500/10 transition-colors text-sm">
              [TryHackMe]
            </a>
            <a href="mailto:mahelet2130@gmail.com"
              className="px-4 py-2 border border-green-500/50 rounded hover:bg-green-500/10 transition-colors text-sm">
              [Contact]
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-green-500">$</span> cat about.txt
        </h2>
        <div className="cyber-border rounded-lg p-6 bg-gray-950 space-y-3 text-green-300/80">
          <p>I am currently in my 3rd year, specializing in Penetration Testing and Cybersecurity at the INSA Cyber Talent Center.</p>
          <p>Active member at ASTu CSEC and ASTu Dev Club. Contributor at Thanatos Coders.</p>
          <p>I enjoy solving challenging security problems, developing secure applications, and learning new technologies.</p>
        </div>
      </section>

      {/* Skills */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-green-500">$</span> ls skills/
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 border border-green-500/30 rounded bg-green-500/5 text-sm text-green-300 hover:bg-green-500/10 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-green-500">$</span> cat experience.log
        </h2>
        <div className="space-y-4">
          {[
            { title: 'INSA Cyber Talent Center', role: 'Summer Camp — Penetration Testing / Cybersecurity Division' },
            { title: 'CSEC ASTU DEV Club', role: 'Active member — Fullstack web development bootcamp' },
            { title: 'Thanatos Coders', role: 'Contributor — Open-source projects and tools' },
          ].map((exp) => (
            <div key={exp.title} className="cyber-border rounded-lg p-4 bg-gray-950">
              <h3 className="text-green-400 font-semibold">{exp.title}</h3>
              <p className="text-green-300/60 text-sm mt-1">{exp.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-green-500">$</span> ls projects/
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.name} className="cyber-border rounded-lg p-6 bg-gray-950 card-hover group">
              <h3 className="text-green-400 font-semibold text-lg mb-2">
                ./{proj.name}
              </h3>
              <p className="text-green-300/60 text-sm mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-green-500/10 border border-green-500/20 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a href={proj.url} target="_blank" rel="noopener"
                className="text-sm text-green-400 hover:text-green-300 transition-colors">
                → View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-green-500">$</span> ls certificates/
        </h2>
        <Certificates mode="cyber" />
      </section>

      {/* Profiles */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-green-500">$</span> cat profiles.conf
        </h2>
        <div className="cyber-border rounded-lg p-6 bg-gray-950 space-y-2 text-sm">
          <p><span className="text-green-500">GitHub</span>    → <a href="https://github.com/mahi122130" className="text-green-300 hover:underline" target="_blank">mahi122130</a></p>
          <p><span className="text-green-500">Codeforces</span> → <a href="https://codeforces.com/profile/mahelet2130" className="text-green-300 hover:underline" target="_blank">mahelet2130</a></p>
          <p><span className="text-green-500">LeetCode</span>   → <a href="https://leetcode.com/mahizshaa/" className="text-green-300 hover:underline" target="_blank">mahizshaa</a></p>
          <p><span className="text-green-500">TryHackMe</span>  → <a href="https://tryhackme.com/p/mahelet2130" className="text-green-300 hover:underline" target="_blank">mahelet2130</a></p>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-green-500">$</span> ./contact.sh
        </h2>
        <div className="cyber-border rounded-lg p-6 bg-gray-950">
          <p className="text-green-300/80 mb-2">📧 <a href="mailto:mahelet2130@gmail.com" className="hover:underline">mahelet2130@gmail.com</a></p>
          <p className="text-green-300/80">🔗 <a href="https://github.com/mahi122130" className="hover:underline" target="_blank">github.com/mahi122130</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-green-500/20 py-6 text-center text-green-500/40 text-sm">
        <p>© 2024 Mahelet Yared. All rights reserved.</p>
      </footer>
    </div>
  );
}
