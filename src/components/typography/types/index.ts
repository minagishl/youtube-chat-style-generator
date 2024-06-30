export type Table = {
  head: string[];
  body: string[][];
};

export type List = {
  items: string[];
};

export type labelType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'blockquote'
  | 'inline-code'
  | 'lead'
  | 'large'
  | 'small'
  | 'muthed';
