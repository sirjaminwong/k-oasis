export interface Heading {
  id: string;
  level: number;
  title: string;
}

export interface HeadingWithRelation extends Heading {
  hasChild: boolean;
  parentId: string | undefined;
  path: string[];
  collapsed?: boolean;
}
