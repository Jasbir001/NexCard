'use client';

import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import BestSellers from '../components/BestSellers';

const PromoBanner = lazy(() => import('../components/PromoBanner'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));


export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
   
      <Hero />
      
      <Categories />

      <Suspense fallback={<div className="py-12 text-center text-xs font-semibold text-zinc-400">Loading Products...</div>}>
        <FeaturedProducts />
      </Suspense>

      <BestSellers />

      <Suspense fallback={<div className="py-12 text-center text-xs font-semibold text-zinc-400">Loading Offer...</div>}>
        <PromoBanner />
      </Suspense>

      <Suspense fallback={<div className="py-12 text-center text-xs font-semibold text-zinc-400">Loading Features...</div>}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<div className="py-12 text-center text-xs font-semibold text-zinc-400">Loading Reviews...</div>}>
        <Testimonials />
      </Suspense>
    </div>
  );
}
