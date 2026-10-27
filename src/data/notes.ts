export type NoteKind = 'sticky' | 'scrap' | 'contact' | 'stack';

export interface DeskNote {
  id: string;
  kind: NoteKind;
  label: string;
  body: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
}

export const notes: DeskNote[] = [
  {
    id: 'currently',
    kind: 'sticky',
    label: 'Currently',
    body: 'Shipping AI tools and full-stack products from Bangkok.',
    x: 2080,
    y: 1060,
    width: 230,
    rotate: 5,
  },
  {
    id: 'rejected',
    kind: 'scrap',
    label: 'v1 had too many arrows',
    body: 'First prompt wizard looked like a flowchart. Kept the sketch so I remember what polite over-design looks like.',
    x: 230,
    y: 420,
    width: 250,
    rotate: -4,
  },
  {
    id: 'rule',
    kind: 'sticky',
    label: 'Rule on the wall',
    body: 'Delete code before you write it.',
    x: 1960,
    y: 1980,
    width: 220,
    rotate: -3,
  },
  {
    id: 'stack',
    kind: 'stack',
    label: 'stack.txt',
    body: '',
    x: 2860,
    y: 360,
    width: 280,
    rotate: 1.5,
  },
  {
    id: 'contact',
    kind: 'contact',
    label: 'Available now',
    body: 'Have something that should exist?',
    x: 2860,
    y: 1080,
    width: 300,
    rotate: -2,
  },
];
