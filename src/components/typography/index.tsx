'use client';

import { tv } from 'tailwind-variants';
import { Table as TableType, List as ListType, labelType } from './types';

const label = tv({
  variants: {
    type: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 [&:not(:first-child)]:mt-10',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-8',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      'inline-code':
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muthed: 'text-sm text-muted-foreground',
    },
    border: {
      true: 'border-b pb-2',
    },
  },
});

interface LabelProps {
  children?: React.ReactNode;
  className?: string;
  type?: labelType;
  border?: boolean;
}

export default function Label({
  children,
  className,
  type = 'p',
  border,
}: LabelProps) {
  const Tag =
    type === 'blockquote' ||
    type === 'inline-code' ||
    type === 'lead' ||
    type === 'large' ||
    type === 'small' ||
    type === 'muthed'
      ? 'span'
      : (type as keyof JSX.IntrinsicElements);

  // If no border is specified and it is an h2, a border is automatically added
  if (typeof border === 'undefined') border = type === 'h2' ? true : false;

  return <Tag className={label({ className, type, border })}>{children}</Tag>;
}

export function H1({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="h1" className={className} border={border}>
      {children}
    </Label>
  );
}

export function H2({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = true;
  return (
    <Label type="h2" className={className} border={border}>
      {children}
    </Label>
  );
}

export function H3({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="h3" className={className} border={border}>
      {children}
    </Label>
  );
}

export function H4({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="h4" className={className} border={border}>
      {children}
    </Label>
  );
}

export function P({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="p" className={className} border={border}>
      {children}
    </Label>
  );
}

export function Blockquote({ children, className }: LabelProps) {
  return (
    <Label type="blockquote" className={className}>
      {children}
    </Label>
  );
}

export function Table({ options }: { options: TableType }) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            {options?.head.map((head, index) => (
              <th
                key={index}
                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {options?.body.map((row, index) => (
            <tr key={index} className="m-0 border-t p-0 even:bg-muted">
              {row.map((cell, index) => (
                <td
                  key={index}
                  className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function List({ options }: { options: ListType }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {options?.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export function InlineCode({ children, className }: LabelProps) {
  return (
    <Label type="inline-code" className={className}>
      {children}
    </Label>
  );
}

export function Lead({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="lead" className={className} border={border}>
      {children}
    </Label>
  );
}

export function Large({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="large" className={className} border={border}>
      {children}
    </Label>
  );
}

export function Small({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="small" className={className} border={border}>
      {children}
    </Label>
  );
}

export function Muthed({ children, className, border }: LabelProps) {
  if (typeof border === 'undefined') border = false;
  return (
    <Label type="muthed" className={className} border={border}>
      {children}
    </Label>
  );
}
