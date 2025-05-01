import React from 'react';
import Hero from '@/components/Hero';
import CategoryLinks from '@/components/CategoryLinks';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 to-gray-700 text-gray-200 font-sans">
      <Hero />
      <CategoryLinks />
    </main>
  );
}
