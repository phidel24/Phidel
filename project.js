const data = {
  'metrics-dashboard': {
    title: 'Metrics Dashboard',
    kicker: 'Professional project · Chatdesk',
    intro: 'Turning operational data into something teams could actually use.',
    role: 'Software Engineer',
    tags: ['React', 'Groovy', 'REST APIs'],
    visual: 'metrics',
    note: 'This was professional work completed at Chatdesk. The case study intentionally excludes proprietary information, internal screenshots, customer data and private implementation details.',
    sections: [
      [
        'The problem',
        'Support activity can be difficult to understand when information is spread across different product verticals. The dashboard was designed to make operational metrics easier to see and reason about.',
      ],
      [
        'My contribution',
        'I worked across the frontend and backend pieces of the feature, including the React interface, REST API integration and backend controller/service work.',
      ],
      [
        'Engineering decisions',
        'The work gave me practical experience thinking about how data should be shaped for a UI, how API responses affect component design, and how to keep responsibilities separated between the frontend and backend.',
      ],
      [
        'What I learned',
        'Professional engineering is not only about writing code. It is also about understanding the product context, communicating with teammates and making decisions that another engineer can maintain later.',
      ],
    ],
  },
  'expense-tracker': {
    title: 'Expense Tracker',
    kicker: 'Personal project · Full-stack',
    intro:
      'A small application that became a surprisingly useful lesson in data, APIs and application structure.',
    role: 'Designer · Developer',
    tags: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'EJS'],
    visual: 'expense',
    sections: [
      [
        'The problem',
        'I wanted a practical project where I could work through the full lifecycle of storing, retrieving, editing and deleting real data rather than stopping at a frontend mockup.',
      ],
      [
        'What I built',
        'A full-stack expense tracker with CRUD workflows, server-rendered views, PostgreSQL persistence and Sequelize migrations.',
      ],
      [
        'Engineering decisions',
        'I used Express for the HTTP layer, Sequelize for database access and migrations, and PostgreSQL for relational persistence. The project helped me understand where validation, business logic and persistence concerns should live.',
      ],
      [
        'What I learned',
        'A “simple CRUD app” quickly exposes real engineering questions: schema changes, environment variables, validation, error handling and what happens when the data does not behave like your happy-path example.',
      ],
    ],
    demo: '#',
  },
  neurotrack: {
    title: 'NeuroTrack',
    kicker: 'Currently building · Product concept',
    intro:
      'Exploring how software could make complex chronic-condition management feel more coherent and human.',
    role: 'Product Engineer · Founder mindset',
    tags: ['React', 'NestJS', 'PostgreSQL', 'AI'],
    visual: 'neuro',
    sections: [
      [
        'The idea',
        'NeuroTrack is an upcoming AI-powered chronic disease management platform. I am approaching it as a real product rather than a simple final-year CRUD project.',
      ],
      [
        'Where it is now',
        'Concept → requirements → architecture → implementation. This page will evolve as the product moves forward, so it is intentionally transparent about what is planned versus what has actually been built.',
      ],
      [
        'What I am exploring',
        'Longitudinal data modelling, patient-facing dashboards, useful AI-assisted insights, privacy-conscious architecture and a product experience that does not overwhelm users with information.',
      ],
      [
        'What I want to learn',
        'How to take a complex domain problem from requirements gathering through system design, implementation, testing, deployment and documentation — while keeping the product useful and understandable.',
      ],
    ],
  },
};
const id =
  new URLSearchParams(location.search).get('id') || 'metrics-dashboard';
const p = data[id] || data['metrics-dashboard'];
document.title = `${p.title} — Fidelia Oko`;
const art =
  p.visual === 'metrics'
    ? '<div class="metric-bars"><i></i><i></i><i></i><i></i><i></i></div><div class="metric-chart"></div>'
    : p.visual === 'expense'
      ? '<div class="receipt"><b>EXPENSES</b><span>€ 2,482.00</span><hr><i></i><i></i><i></i></div>'
      : '<div class="dashboard"><div class="dash-top"></div><div class="dash-grid"><i></i><i></i><i></i><i></i></div></div>';
document.getElementById('projectPage').innerHTML =
  `<section class="case-hero section"><div class="container"><a class="back-link" href="projects.html">← Back to projects</a><div class="case-hero-grid"><div><p class="eyebrow">${p.kicker}</p><h1>${p.title}</h1><p class="case-intro">${p.intro}</p><div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div><div class="case-actions"><a class="button" href="#case-study">Explore case study ↓</a>${p.demo ? '<a class="button button-ghost" href="#" data-demo="expense">Live demo ↗</a>' : ''}</div></div><div class="case-art ${p.visual}"><span class="visual-badge">${p.visual === 'neuro' ? 'IN PROGRESS' : p.visual === 'metrics' ? 'PROFESSIONAL' : 'PERSONAL'}</span>${art}</div></div></div></section><section class="section case-content" id="case-study"><div class="container case-layout"><aside class="case-nav"><span>ON THIS PAGE</span><a href="#overview">Overview</a>${p.sections.map((s, i) => `<a href="#section-${i}">${s[0]}</a>`).join('')}<a href="projects.html">All projects</a></aside><article class="case-story"><div id="overview" class="story-block"><p class="eyebrow">OVERVIEW</p><h2>${p.role}</h2><p>${p.sections[0][1]}</p>${p.note ? `<div class="confidential-note"><strong>Professional work note</strong><span>${p.note}</span></div>` : ''}</div>${p.sections
    .slice(1)
    .map(
      (s, i) =>
        `<div class="story-block" id="section-${i + 1}"><p class="eyebrow">0${i + 2}</p><h2>${s[0]}</h2><p>${s[1]}</p><div class="story-visual ${p.visual}">${art}</div></div>`
    )
    .join(
      ''
    )}<div class="next-project"><span>NEXT</span><a href="projects.html">Explore the rest of the project archive →</a></div></article></div></section>`;
document.querySelectorAll('[data-demo]').forEach((el) =>
  el.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Add your real hosted demo URL to project.js when it is ready.');
  })
);
