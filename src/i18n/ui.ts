import type { Locale } from './config';

export interface NavItem {
  key: 'home' | 'work' | 'now' | 'research' | 'notes' | 'about';
  path: string;
}

export const navItems: NavItem[] = [
  { key: 'home', path: '/' },
  { key: 'work', path: '/work' },
  { key: 'now', path: '/now' },
  { key: 'research', path: '/research' },
  { key: 'notes', path: '/notes' },
  { key: 'about', path: '/about' },
];

export const ui: Record<Locale, {
  nav: Record<NavItem['key'], string>;
  menu: string;
}> = {
  'zh-CN': {
    nav: {
      home: '首页',
      work: '项目',
      now: '此刻',
      research: '研究',
      notes: '笔记',
      about: '关于',
    },
    menu: '菜单',
  },
  en: {
    nav: {
      home: 'FIELD',
      work: 'WORK',
      now: 'NOW',
      research: 'RESEARCH',
      notes: 'NOTES',
      about: 'ABOUT',
    },
    menu: 'MENU',
  },
};
