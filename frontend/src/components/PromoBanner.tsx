'use client';

import React from 'react';
import { FiTag, FiChevronRight } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function PromoBanner() {
  const handleCopyCode = () => {
    // Basic beginner clipboard alert
    navigator.clipboard.writeText('FLASH30');
    toast.success('Promo Code "FLASH30" copied to clipboard!', { icon: '🏷️' });
  };

  return (
    <section className="py-16 bg-background transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner container with simple primary gradient */}
        <div className="relative rounded-3xl bg-gradient-to-r from-primary to-indigo-600 px-8 py-10 sm:p-14 shadow-md text-white overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Promotion descriptions */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
                <FiTag /> Limited Time Offer
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Upgrade Your Space. Get Up To 30% OFF!
              </h2>
              
              <p className="text-white/80 text-sm max-w-md mx-auto lg:mx-0">
                Unlock major seasonal savings on all premium electronics, watches, and accessories. Valid this week only.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
                <button 
                  onClick={handleCopyCode}
                  className="rounded-full bg-white px-6 py-2.5 font-bold text-zinc-950 shadow-sm hover:scale-103 active:scale-97 transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Claim 30% discount</span>
                  <FiChevronRight />
                </button>
              </div>
            </div>

            {/* Right side: Static Voucher Box */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 w-full max-w-xs text-center space-y-4">
                <p className="text-xs font-bold text-white/70 uppercase tracking-widest">
                  Copy Promo Code
                </p>

                {/* Styled static voucher code box */}
                <div 
                  onClick={handleCopyCode}
                  className="cursor-pointer rounded-xl border border-dashed border-white/40 bg-black/20 px-4 py-3 font-black text-xl tracking-widest text-center hover:bg-black/30 hover:border-white/60 transition-all uppercase"
                >
                  FLASH30
                </div>

                <p className="text-[10px] text-white/50">
                  * Click above code to copy & apply at checkout
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
