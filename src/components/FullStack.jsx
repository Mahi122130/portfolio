import React, { useState, useEffect } from 'react';
import Certificates from './Certificates.jsx';

const projects = [
  {
    name: 'Csec-bootcamp-jobspher',
    desc: 'A comprehensive job search platform with advanced filtering and application tracking features.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    url: 'https://github.com/mahi122130/Csec-bootcamp-jobspher',
  },
  {
    name: 'simple-chat-bot',
    desc: 'An AI-powered chatbot with natural language processing capabilities.',
    tech: ['Python', 'Flask', 'HTML/CSS/JS'],
    url: 'https://github.com/mahi122130/simple-chat-bot',
  },
  {
    name: 'socket-project',
    desc: 'A secure online chatting platform with proctoring features built with Java.',
    tech: ['Java', 'Socket Programming'],
    url: 'https://github.com/mahi122130/socket-project',
  },
  {
    name: 'network-scanner-tool',
    desc: 'A security tool for network analysis and vulnerability assessment.',
    tech: ['Python', 'Scapy', 'Network Security'],
    url: 'https://github.com/mahi122130/network-scanner-tool',
  },
];

const skills = [
  'React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript',
  'Python', 'Java', 'HTML/CSS', 'Tailwind CSS', 'Git',
  'REST APIs', 'Flask', 'Socket.IO',
];

export default function FullStack() {
  const [repos, setRepos] = useState([]);
  const [typedText, setTypedText] = useState('');
  const profileText = 'Mahelet Yared\nFifth-year Software Engineering student\nAdama Science and Technology University';

  useEffect(() => {
    fetch('https://api.github.com/users/mahi122130/repos?per_page=10&sort=updated')
      .then((r) => r.json())
      .then(setRepos)
      .catch(console.error);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(profileText.slice(0, index));
      if (index >= profileText.length) clearInterval(timer);
    }, 38);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#edf2ee] dark:bg-[#0b100e]">
        <div className="absolute inset-0 opacity-40 dark:opacity-20" aria-hidden="true"
          style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-5 flex items-center gap-2 font-mono text-sm text-emerald-700 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AVAILABLE TO BUILD
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-tight text-gray-950 dark:text-white sm:text-5xl">
              Full-Stack Developer<span className="text-emerald-600 dark:text-emerald-400">.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I build useful web applications from interface to database, and enjoy making the pieces work cleanly together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/mahi122130" target="_blank" rel="noopener noreferrer"
                className="rounded-md bg-emerald-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-600 dark:bg-emerald-500 dark:text-gray-950 dark:hover:bg-emerald-400">
                GitHub Profile
              </a>
              <a href="mailto:mahelet2130@gmail.com"
                className="rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-emerald-600 hover:text-emerald-700 dark:border-gray-700 dark:text-gray-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300">
                Contact Me
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-300 bg-[#101714] font-mono shadow-2xl shadow-emerald-950/20 dark:border-emerald-900/70">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-gray-400">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2">profile.py</span>
            </div>
            <div className="min-h-64 px-5 py-6 text-sm leading-7 sm:px-7 sm:text-base">
              <p className="text-gray-500"><span className="text-emerald-400">$</span> python profile.py</p>
              <p className="mt-4 text-cyan-300">&gt;&gt;&gt; print(profile)</p>
              <pre className="mt-3 whitespace-pre-wrap break-words text-emerald-300">{typedText}<span className="animate-pulse text-emerald-100">▋</span></pre>
            </div>
            <div className="border-t border-white/10 px-5 py-3 text-xs text-gray-500 sm:px-7">
              {'{'} React · Node.js · Python · APIs {'}'}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a fifth-year Software Engineering student at Adama Science and Technology University.
            I enjoy developing modern web applications, solving complex problems, and learning new technologies.
            Active member at ASTu CSEC and ASTu Dev Club. Contributor at Thanatos Coders.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill}
              className="px-4 py-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg font-medium text-sm border border-blue-200 dark:border-blue-500/20 hover:shadow-md transition-shadow">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-4">
          {[
            { title: 'INSA Cyber Talent Center', role: 'Summer Camp — Penetration Testing / Cybersecurity Division' },
            { title: 'CSEC ASTU DEV Club', role: 'Active member — Fullstack web development bootcamp' },
            { title: 'Thanatos Coders', role: 'Contributor — Open-source projects and tools' },
          ].map((exp) => (
            <div key={exp.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 card-hover">
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{exp.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.name}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 card-hover group">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                {proj.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <a href={proj.url} target="_blank" rel="noopener"
                className="text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Certificates</h2>
        <Certificates mode="fullstack" />
      </section>

      {/* GitHub Repos */}
      {repos.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Latest GitHub Repos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.slice(0, 6).map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener"
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 card-hover block">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">{repo.name}</h3>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">{repo.description || 'No description'}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                  {repo.language && <span>🔵 {repo.language}</span>}
                  <span>⭐ {repo.stargazers_count}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Profiles */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Profiles</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'GitHub', url: 'https://github.com/mahi122130', icon: '🐙' },
            { name: 'Codeforces', url: 'https://codeforces.com/profile/mahelet2130', icon: '🏆' },
            { name: 'LeetCode', url: 'https://leetcode.com/mahizshaa/', icon: '💡' },
            { name: 'TryHackMe', url: 'https://tryhackme.com/p/mahelet2130', icon: '🔐' },
          ].map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener"
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 text-center card-hover block">
              <div className="text-2xl mb-2">{p.icon}</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{p.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-400 text-sm">
        <p>© 2024 Mahelet Yared. All rights reserved.</p>
      </footer>
    </div>
  );
}
