import { resultOf } from '@/utils/result-of';
import { HeadingWithRelation, Heading } from './type';

const mockHeadings = [
  {
    id: '1',
    level: 1,
    title: '1',
  },
  {
    id: '2',
    level: 2,
    title: '2',
  },
  {
    id: '3',
    level: 1,
    title: '3',
  },
  {
    id: '4',
    level: 2,
    title: '4',
  },
  {
    id: '5',
    level: 3,
    title: '5',
  },
  {
    id: '6',
    level: 2,
    title: '6',
  },
];

export function getHeadingWithState(headings: Heading[]) {
  const result: HeadingWithRelation[] = [];
  headings.forEach((heading, index) => {
    const element = heading;
    result.push({
      ...element,
      hasChild: resultOf(() => {
        if (index === result.length - 1) {
          return false;
        }
        return headings[index + 1]?.level > element.level;
      }),
      parentId: resultOf(() => {
        if (index === 0) {
          return undefined;
        }
        const pre = result[index - 1];
        if (pre.level < element.level) {
          return pre.id;
        }
        if (pre.level === element.level) {
          return pre.parentId;
        }
        if (pre.level > element.level) {
          return [...result].reverse().find((h) => h.level === element.level)
            ?.parentId;
        }
      }),
      path: resultOf(() => {
        if (index === 0) {
          return [];
        }
        const pre = result[index - 1];
        if (pre.level < element.level) {
          return [...pre.path, pre.id];
        }
        if (pre.level === element.level) {
          return [...pre.path];
        }
        if (pre.level > element.level) {
          return [
            ...([...result].reverse().find((h) => h.level === element.level)
              ?.path || []),
          ];
        }
        return [];
      }),
    });
  });

  return result;
}
