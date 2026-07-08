export type ArtifactStatus = 'AVAILABLE' | 'NEEDED' | 'PLACEHOLDER';

export interface ArtifactInventoryItem {
  project: 'ProQuote' | 'Vulcan' | 'TRACE-Cover' | 'Ossa';
  label: string;
  status: ArtifactStatus;
  note: string;
}

export const artifactInventory: ArtifactInventoryItem[] = [
  {
    project: 'ProQuote',
    label: 'Landing/product screenshot',
    status: 'NEEDED',
    note: 'Use real product surface when available.',
  },
  {
    project: 'ProQuote',
    label: 'Quote editor screenshot',
    status: 'NEEDED',
    note: 'Primary artifact for Field Record 001.',
  },
  {
    project: 'Vulcan',
    label: 'Signal -> Forge -> Yield diagram',
    status: 'PLACEHOLDER',
    note: 'Use deliberate technical placeholder until real artifact is selected.',
  },
  {
    project: 'TRACE-Cover',
    label: 'Evidence coverage visualization',
    status: 'PLACEHOLDER',
    note: 'Do not invent benchmark results.',
  },
  {
    project: 'Ossa',
    label: 'Station -> Event -> Evidence -> Opportunity model',
    status: 'PLACEHOLDER',
    note: 'Use real model diagram in Phase 3.',
  },
];
