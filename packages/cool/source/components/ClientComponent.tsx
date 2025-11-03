'use client';

import { useState } from 'react';

export interface ClientComponentProps {
  initialCount?: number;
  label?: string;
}

export function ClientComponent({
  initialCount = 0,
  label = 'Count'
}: ClientComponentProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="client-component">
      <p>{label}: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}