import { atom } from 'recoil';

export const skillsState = atom({
  key: 'skillsState',
  default: [
    {
      title: 'Frontend Development',
      icon: [
        { image: '/icon/skills/html.svg', title: 'HTML' },
        { image: '/icon/skills/css.svg', title: 'CSS' },
        { image: '/icon/skills/sass.svg', title: 'SASS' },
        { image: '/icon/skills/tailwind.svg', title: 'Tailwind' },
        { image: '/icon/skills/javascript.svg', title: 'JavaScript' },
        { image: '/icon/skills/typescript.svg', title: 'TypeScript' },
        { image: '/icon/skills/react.svg', title: 'React' },
        { image: '/icon/skills/nextjs.svg', title: 'Next.js' },
        { image: '/icon/skills/reactquery.svg', title: 'React-Query' },
        { image: '/icon/skills/recoil.svg', title: 'Recoil' },
      ],
    },
    {
      title: 'Design Tools',
      icon: [
        { image: '/icon/skills/photoshop.svg', title: 'Photoshop' },
        { image: '/icon/skills/figma.svg', title: 'Figma' },
      ],
    },
    {
      title: 'Version Control & Collaboration',
      icon: [
        { image: '/icon/skills/git.svg', title: 'Git' },
        { image: '/icon/skills/github.svg', title: 'Github' },
        { image: '/icon/skills/notion.svg', title: 'Notion' },
        { image: '/icon/skills/discord.svg', title: 'Discord' },
      ],
    },
  ],
});
