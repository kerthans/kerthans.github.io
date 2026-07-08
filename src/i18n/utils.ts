export { defaultLocale, locales } from './config';
export type { Locale } from './config';
import type { Locale } from './config';

export const labels: Record<Locale, {
  title: string
  description: string
  hero: {
    display: string[]
    ariaLabel: string
    spectralText: string
    support: string
    action: string
  }
  activeSignal: {
    label: string
    headline: string
    primary: string
    terms: string[]
    secondary: Array<[string, string]>
  }
  systemMap: {
    label: string
    headline: string
    territories: string[]
    bridge: string
  }
}> = {
  'zh-CN': {
    title: '岳一扬 — 系统、信号与实验',
    description: 'AI 系统、检索基础设施、代理运行时与商业实验。',
    hero: {
      display: ['我构建系统。', '把它交给现实。', '看什么活下来。'],
      ariaLabel: '我构建系统。把它交给现实。看什么活下来。',
      spectralText: '看什么活下来。',
      support: 'AI 系统、检索基础设施、Agent 运行时，以及商业实验。',
      action: '进入现场记录 ↘',
    },
    activeSignal: {
      label: '当前信号',
      headline: '什么正在<br />占据我的注意力。',
      primary: '构建不止停在 Demo 的企业检索系统。',
      terms: ['证据路径。', '覆盖率。', '可追溯性。', '评估。', '部署约束。'],
      secondary: [
        ['PROQUOTE', '商业系统'],
        ['TRACE-COVER', '检索研究'],
        ['AGENT RUNTIME', '系统基础设施'],
      ],
    },
    systemMap: {
      label: '系统地图',
      headline: '这些问题<br />一直在连接。',
      territories: ['检索', 'Agent\n系统', '机会\n智能', '商业\n验证'],
      bridge: '连接多个区域',
    },
  },
  en: {
    title: 'Yiyang Yue — Systems, Signals, Experiments',
    description: 'AI systems, retrieval infrastructure, agent runtimes and commercial experiments by Yiyang Yue.',
    hero: {
      display: ['I BUILD SYSTEMS.', 'THEN I ASK REALITY', 'WHAT SURVIVES.'],
      ariaLabel: 'I build systems. Then I ask reality what survives.',
      spectralText: 'WHAT SURVIVES.',
      support: 'AI systems, retrieval infrastructure, agent runtimes and commercial experiments.',
      action: 'ENTER THE FIELD LOG ↘',
    },
    activeSignal: {
      label: 'LIVE FIELD STATUS',
      headline: 'WHAT HAS MY<br />ATTENTION NOW.',
      primary: 'Building retrieval systems beyond the demo.',
      terms: ['Evidence paths.', 'Coverage.', 'Traceability.', 'Evaluation.', 'Deployment constraints.'],
      secondary: [
        ['PROQUOTE', 'COMMERCIAL SYSTEM'],
        ['TRACE-COVER', 'RETRIEVAL RESEARCH'],
        ['AGENT RUNTIME', 'SYSTEM INFRASTRUCTURE'],
      ],
    },
    systemMap: {
      label: 'RECURRING TERRITORIES',
      headline: 'THE QUESTIONS<br />KEEP CONNECTING.',
      territories: ['RETRIEVAL', 'AGENT\nSYSTEMS', 'OPPORTUNITY\nINTELLIGENCE', 'COMMERCIAL\nVALIDATION'],
      bridge: 'bridges multiple territories',
    },
  },
}

export function getLocale(pathname: string): Locale {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en'
  return 'zh-CN'
}

export function localizedPath(locale: Locale, path: string): string {
  if (locale === 'zh-CN') return path
  return path === '/' ? '/en' : `/en${path}`
}

export function counterpartHref(targetLocale: Locale, currentPath: string): string {
  const base = currentPath.replace(/^\/en(\/|$)/, '/')
  if (targetLocale === 'zh-CN') return base
  return base === '/' ? '/en' : `/en${base}`
}

export function alternateHref(locale: Locale, currentPath: string): string {
  return counterpartHref(locale, currentPath)
}
