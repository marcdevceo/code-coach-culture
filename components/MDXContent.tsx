'use client';

import React, { useEffect, useState } from 'react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { MDXProvider } from '@mdx-js/react';

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const run = async () => {
      const result = await evaluate(source, {
        ...runtime,
        baseUrl: import.meta.url, // required by @mdx-js/mdx v3+
      });
      setContent(() => result.default);
    };
    run();
  }, [source]);

  if (!Content) return <p>Loading content...</p>;

  return (
    <MDXProvider>
      <Content />
    </MDXProvider>
  );
}



