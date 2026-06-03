'use client';

import React from 'react';
import Link from 'next/link';
import { FiTv, FiLayers, FiActivity, FiTag, FiClock, FiHome, FiAward, FiBookOpen, FiGrid } from 'react-icons/fi';

const categories = [
  {
    name: 'Electronics',
    id: 'electronics',
    icon: FiTv,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=80',
    itemCount: '2,400+ items',
    overlayColor: 'bg-blue-600/30',
  },
  {
    name: 'Fashion',
    id: 'fashion',
    icon: FiLayers,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=80',
    itemCount: '4,800+ items',
    overlayColor: 'bg-purple-600/30',
  },
  {
    name: 'Shoes',
    id: 'shoes',
    icon: FiActivity,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=80',
    itemCount: '1,200+ items',
    overlayColor: 'bg-orange-600/30',
  },
  {
    name: 'Watches',
    id: 'watches',
    icon: FiClock,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=80',
    itemCount: '800+ items',
    overlayColor: 'bg-emerald-600/30',
  },
  {
    name: 'Accessories',
    id: 'accessories',
    icon: FiTag,
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=500&auto=format&fit=crop&q=80',
    itemCount: '1,900+ items',
    overlayColor: 'bg-pink-600/30',
  },
  {
    name: 'Home & Decor',
    id: 'home-decor',
    icon: FiHome,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80',
    itemCount: '3,100+ items',
    overlayColor: 'bg-amber-600/30',
  },
  {
    name: 'Sports & Fitness',
    id: 'sports-fitness',
    icon: FiAward,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80',
    itemCount: '1,500+ items',
    overlayColor: 'bg-cyan-600/30',
  },
  {
    name: 'Books & Stationery',
    id: 'books-stationery',
    icon: FiBookOpen,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80',
    itemCount: '950+ items',
    overlayColor: 'bg-rose-600/30',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-background transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Simple Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Collections</span>
            <h2 className="text-3xl font-extrabold text-text tracking-tight">Shop by Category</h2>
          </div>
          <p className="max-w-xs text-zinc-500 dark:text-zinc-400 text-sm">
            Select a collection to browse premium goods tailored for your lifestyle.
          </p>
        </div>

        {/* Categories Grid - Clean uniform layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.slice(0, 4).map((cat) => {
            const Icon = cat.icon;
            
            return (
              <Link 
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-sm h-60 cursor-pointer"
              >
                {/* Image underlay with simple zoom transition */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Color tint and dark gradient overlays */}
                  <div className={`absolute inset-0 ${cat.overlayColor} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-white">
                  
                  {/* Category icon frame */}
                  <div className="self-start rounded-xl bg-white/10 backdrop-blur-md p-2.5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Icon className="text-lg text-white" />
                  </div>

                  {/* Name and count */}
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-white/70 block">
                      {cat.itemCount}
                    </span>
                    <h3 className="text-lg font-bold">{cat.name}</h3>
                  </div>

                </div>
              </Link>
            );
          })}

          {/* Explore More Categories Card */}
          <Link 
            href="/categories"
            className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-sm h-60 cursor-pointer"
          >
            {/* Dark gradient pattern background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-800 to-zinc-950 dark:from-zinc-900 dark:to-black">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200 via-zinc-400 to-zinc-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-white">
              
              {/* Icon frame */}
              <div className="self-start rounded-xl bg-white/10 backdrop-blur-md p-2.5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-colors">
                <FiGrid className="text-lg text-white" />
              </div>

              {/* Text info */}
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-white/70 block">
                  4+ other collections
                </span>
                <h3 className="text-lg font-bold">Explore More</h3>
              </div>

            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
