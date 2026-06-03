'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import { useRouter } from 'next/navigation';
import { FiX, FiLock } from 'react-icons/fi';

export default function AuthModal() {
  const { isAuthModalOpen, setAuthModalOpen } = useStore();
  const router = useRouter();

  if (!isAuthModalOpen) return null;

  const handleRedirect = (tab: 'login' | 'register') => {
    setAuthModalOpen(false);
    router.push(`/auth?tab=${tab}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setAuthModalOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1.5 hover:bg-background text-zinc-400 hover:text-text transition-colors cursor-pointer border-none bg-transparent outline-none"
          aria-label="Close modal"
        >
          <FiX className="text-xl" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center text-center mt-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
            <FiLock className="text-3xl" />
          </div>

          <h3 className="text-xl font-bold tracking-tight text-text mb-2">
            Authentication Required
          </h3>
          
          <p className="text-sm text-zinc-400 max-w-xs mb-8 leading-relaxed">
            Please login or create an account to continue shopping.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={() => handleRedirect('login')}
              className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-white hover:bg-primary/95 transition-all shadow-md hover:shadow-lg cursor-pointer border-none outline-none"
            >
              Login
            </button>
            <button
              onClick={() => handleRedirect('register')}
              className="flex-1 rounded-full bg-background border border-border py-3 text-sm font-bold text-text hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer outline-none"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
