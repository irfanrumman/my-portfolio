// Maps a skill name to an icon URL.
// Most icons come from Devicon (https://devicon.dev) — a free CDN of tech logos.

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const skillIconMap: Record<string, string> = {
  'React': `${DEVICON_BASE}/react/react-original.svg`,
  'Next.js': `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  'TypeScript': `${DEVICON_BASE}/typescript/typescript-original.svg`,
  'JavaScript': `${DEVICON_BASE}/javascript/javascript-original.svg`,
  'Tailwind CSS': `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  'HTML5': `${DEVICON_BASE}/html5/html5-original.svg`,
  'CSS3': `${DEVICON_BASE}/css3/css3-original.svg`,
  'Node.js': `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  'Express.js': `${DEVICON_BASE}/express/express-original.svg`,
  'REST APIs': `${DEVICON_BASE}/postman/postman-original.svg`,
  'PostgreSQL': `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  'MongoDB': `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  'Prisma ORM': `${DEVICON_BASE}/prisma/prisma-original.svg`,
  'Database Design / ERD': `${DEVICON_BASE}/mysql/mysql-original.svg`,
  'Git & GitHub': `${DEVICON_BASE}/git/git-original.svg`,
  'VS Code': `${DEVICON_BASE}/vscode/vscode-original.svg`,
  'Draw.io': 'https://api.iconify.design/simple-icons:diagramsdotnet.svg?color=%23000000',
  'Vercel': `${DEVICON_BASE}/vercel/vercel-original.svg`,
}