import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    wrap: 'nowrap',
  },
});

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  gap?: number | string;
  children: React.ReactNode;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, align, justify, wrap, gap, className, style, children, ...props }, ref) => {
    const computedStyle = {
      ...style,
      ...(gap && { gap: typeof gap === 'number' ? `${gap}px` : gap }),
    };

    return (
      <div
        ref={ref}
        className={cn(flexVariants({ direction, align, justify, wrap, className }))}
        style={computedStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';