// $lib/globals.ts

type TagColor = 'blue' | 'green' | 'red' | 'gray' | string;

export const tagColors: Record<string, TagColor> = {
  reflections: 'blue',
  satire: 'green',
  culture: 'red',
  // Add more tags and their corresponding colors here
};

export function getTagColor(tag: string): TagColor {
  return tagColors[tag.toLowerCase()] || 'gray';
}