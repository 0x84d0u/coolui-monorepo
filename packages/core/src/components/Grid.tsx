import React from 'react';
import { cn } from '../utils/cn';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  rows?: number | string;
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns, rows, gap, columnGap, rowGap, className, style, children, ...props }, ref) => {
    const computedStyle: React.CSSProperties = {
      display: 'grid',
      ...style,
      ...(columns && {
        gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
      }),
      ...(rows && {
        gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
      }),
      ...(gap && { gap: typeof gap === 'number' ? `${gap}px` : gap }),
      ...(columnGap && { columnGap: typeof columnGap === 'number' ? `${columnGap}px` : columnGap }),
      ...(rowGap && { rowGap: typeof rowGap === 'number' ? `${rowGap}px` : rowGap }),
    };

    return (
      <div ref={ref} className={cn(className)} style={computedStyle} {...props}>
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';