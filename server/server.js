import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (frontend) if needed
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Endpoint to serve certificates JSON
app.get('/api/certificates', (req, res) => {
  const certPath = path.join(__dirname, '..', 'src', 'data', 'certificates.json');
  fs.readFile(certPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading certificates file', err);
      return res.status(500).json({ error: 'Failed to read certificates' });
    }
    try {
      const json = JSON.parse(data);
      res.json(json);
    } catch (e) {
      res.status(500).json({ error: 'Invalid JSON in certificates file' });
    }
  });
});

// Proxy GitHub repos for a user (public only)
app.get('/api/github/:user', async (req, res) => {
  const { user } = req.params;
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    console.error('GitHub fetch error', e);
    res.status(500).json({ error: 'Failed to fetch GitHub repos' });
  }
});

const portfolioDocuments = [
  {
    source: 'Profile',
    text: 'Mahelet Yared is a full-stack developer and software engineering student who builds web applications.',
  },
  {
    source: 'Education',
    text: 'Mahelet is a fifth-year Software Engineering student at Adama Science and Technology University.',
  },
  {
    source: 'Skills',
    text: 'Skills and technologies include React, Node.js, Express.js, MongoDB, JavaScript, Python, Java, HTML, CSS, Tailwind CSS, REST APIs, Flask, and Socket.IO.',
  },
  {
    source: 'Projects',
    text: 'Projects include Csec-bootcamp-jobspher, a job search platform; simple-chat-bot, an AI chatbot; socket-project, an online chat platform; and network-scanner-tool, a network analysis tool.',
  },
  {
    source: 'Experience',
    text: 'Mahelet is a member of ASTu CSEC and ASTu Dev Club, participated in the INSA Cyber Talent Center summer camp, and contributes to Thanatos Coders.',
  },
  {
    source: 'Profiles and contact',
    text: 'GitHub username is mahi122130. Codeforces and TryHackMe username is mahelet2130. LeetCode username is mahizshaa. Contact email is mahelet2130@gmail.com.',
  },
  {
    source: 'Certificates',
    text: 'No certificates have been added to the portfolio yet.',
  },
];

const ignoredQueryTerms = new Set([
  'about', 'and', 'are', 'can', 'could', 'do', 'does', 'for', 'from', 'give',
  'her', 'his', 'how', 'i', 'is', 'me', 'of', 'please', 'tell', 'that', 'the',
  'their', 'them', 'there', 'these', 'this', 'to', 'what', 'when', 'where',
  'which', 'who', 'with', 'would', 'you', 'your',
]);

function retrievePortfolioFacts(query) {
  const terms = [...new Set(
    query.toLowerCase().match(/[a-z0-9]+/g)?.filter((term) => term.length > 2 && !ignoredQueryTerms.has(term)) || [],
  )];
  const results = portfolioDocuments
    .map((document) => {
      const content = `${document.source} ${document.text}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (content.includes(term) ? 1 : 0), 0);
      return { ...document, score };
    })
    .filter((document) => document.score > 0)
    .sort((first, second) => second.score - first.score)
    .slice(0, 3);

  if (results.length === 0) {
    return 'I could not find that detail in the portfolio information I have. Try asking about education, skills, projects, experience, certificates, or contact profiles.';
  }

  return results.map(({ source, text }) => `${source}: ${text}`).join('\n\n');
}

app.post('/api/rag', async (req, res) => {
  const { query } = req.body;
  if (typeof query !== 'string' || !query.trim()) {
    return res.status(400).json({ error: 'Enter a question to search the portfolio.' });
  }

  if (query.length > 500) {
    return res.status(400).json({ error: 'Questions must be 500 characters or fewer.' });
  }

  res.json({ answer: retrievePortfolioFacts(query.trim()) });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Express server listening on http://localhost:${PORT}`);
});
