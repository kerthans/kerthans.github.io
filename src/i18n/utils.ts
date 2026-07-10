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
      display: ['我构建系统，', '再看它们在真实使用里站不站得住。'],
      ariaLabel: '我构建系统，再看它们在真实使用里站不站得住。',
      spectralText: '再看它们在真实使用里站不站得住。',
      support: 'AI 系统、检索基础设施、Agent 运行时，还有几个自己在跑的商业项目。',
      action: '查看项目 ↘',
    },
    activeSignal: {
      label: '目前重点',
      headline: '最近主要在做这些。',
      primary: '做一套不止停在 Demo 的企业检索系统。',
      terms: ['证据路径', '覆盖率', '可追溯性', '评估', '部署约束'],
      secondary: [
        ['PROQUOTE', '商业系统'],
        ['TRACE-COVER', '检索研究'],
        ['AGENT RUNTIME', '系统基础设施'],
      ],
    },
    systemMap: {
      label: '关注领域',
      headline: '几个方向<br />一直在互相交叉。',
      territories: ['检索', 'Agent\n系统', '机会\n智能', '商业\n验证'],
      bridge: '横跨多个方向',
    },
  },
  en: {
    title: 'Yiyang Yue — Systems, Signals, Experiments',
    description: 'AI systems, retrieval infrastructure, agent runtimes and commercial experiments by Yiyang Yue.',
    hero: {
      display: ['I build systems,', 'then see how they hold up in real use.'],
      ariaLabel: 'I build systems, then see how they hold up in real use.',
      spectralText: 'then see how they hold up in real use.',
      support: 'AI systems, retrieval infrastructure, agent runtimes, and a few commercial projects I run myself.',
      action: 'VIEW PROJECTS ↘',
    },
    activeSignal: {
      label: 'CURRENT FOCUS',
      headline: "WHAT I'M<br />FOCUSED ON.",
      primary: 'Building enterprise retrieval that goes past the demo.',
      terms: ['Evidence paths', 'Coverage', 'Traceability', 'Evaluation', 'Deployment constraints'],
      secondary: [
        ['PROQUOTE', 'COMMERCIAL SYSTEM'],
        ['TRACE-COVER', 'RETRIEVAL RESEARCH'],
        ['AGENT RUNTIME', 'SYSTEM INFRASTRUCTURE'],
      ],
    },
    systemMap: {
      label: 'FOCUS AREAS',
      headline: 'A FEW AREAS<br />THAT KEEP OVERLAPPING.',
      territories: ['RETRIEVAL', 'AGENT\nSYSTEMS', 'OPPORTUNITY\nINTELLIGENCE', 'COMMERCIAL\nVALIDATION'],
      bridge: 'spans several areas',
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
