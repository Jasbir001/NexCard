'use client';

import React from 'react';
import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from 'react-icons/fi';

const features = [
  {
    icon: FiTruck,
    title: 'Express Delivery',
    description: 'Enjoy fast and safe home delivery on selected items, packed with absolute care and safety.',
    iconBg: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: FiShield,
    title: 'Secure Payments',
    description: 'Shop with confidence. Your details are safe with bank-grade SSL transaction security.',
    iconBg: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: FiRefreshCw,
    title: 'Easy Returns',
    description: 'Not entirely satisfied with your purchase? Return it easily within our 30-day window.',
    iconBg: 'bg-amber-500/10 text-amber-500',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Live Support',
    description: 'Our customer support experts are online round-the-clock to guide you through any query.',
    iconBg: 'bg-purple-500/10 text-purple-500',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-card/25 border-y border-border/50 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-md mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Why NexCart</span>
          <h2 className="text-3xl font-extrabold text-text tracking-tight">Our Core Services</h2>
          <div className="h-0.5 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;

            return (
              <div
                key={feat.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className={`inline-flex rounded-xl p-3 ${feat.iconBg}`}>
                    <Icon className="text-xl" />
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-text group-hover:text-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
