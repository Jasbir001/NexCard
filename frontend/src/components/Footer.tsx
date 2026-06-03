'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube, 
  FiGithub,
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronRight,
  FiTruck,
  FiShield,
  FiRotateCcw,
  FiHeadphones
} from 'react-icons/fi';


const footerLinks = {
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Security & Trust', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Order Tracking', href: '#' },
    { label: 'Shipping & Delivery', href: '#' },
    { label: 'Easy Returns Policy', href: '#' },
  ],
};

const categories = [
  { label: 'Smart Electronics', href: '/categories/electronics' },
  { label: 'Bespoke Fashion', href: '/categories/fashion' },
  { label: 'Urban Shoes', href: '/categories/shoes' },
  { label: 'Chrono Watches', href: '/categories/watches' },
  { label: 'Curated Accessories', href: '/categories/accessories' },
  { label: 'Home & Decor', href: '/categories/home-decor' },
  { label: 'Sports & Fitness', href: '/categories/sports-fitness' },
  { label: 'Books & Stationery', href: '/categories/books-stationery' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/80 transition-colors duration-200 text-text/85">
      
      {/* Top Row: Trust / Features Badges */}
      <div className="border-b border-border/50 bg-background/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                <FiTruck className="text-xl" />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-text">Free Delivery</h5>
                <p className="text-xs text-zinc-400 font-medium mt-0.5">On all orders above ₹999</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                <FiShield className="text-xl" />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-text">Secure Payments</h5>
                <p className="text-xs text-zinc-400 font-medium mt-0.5">100% protected checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                <FiRotateCcw className="text-xl" />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-text">Easy Returns</h5>
                <p className="text-xs text-zinc-400 font-medium mt-0.5">30-day money-back policy</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                <FiHeadphones className="text-xl" />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-text">24/7 Help Center</h5>
                <p className="text-xs text-zinc-400 font-medium mt-0.5">Dedicated client support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          
          {/* Logo & Description */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-6">
            <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tight text-primary">
              <span>Nex</span>
              <span className="text-text">Cart</span>
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              NexCart is a premium e-commerce platform curated for creative professionals, smart homeowners, and style enthusiasts who value design excellence.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: FiFacebook, href: '#' },
                { Icon: FiTwitter, href: '#' },
                { Icon: FiInstagram, href: '#' },
                { Icon: FiYoutube, href: '#' },
                { Icon: FiGithub, href: '#' }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  className="h-10 w-10 flex items-center justify-center rounded-xl border border-border bg-background hover:bg-primary hover:border-primary hover:text-white shadow-xs hover:scale-105 active:scale-95 transition-all text-base cursor-pointer"
                >
                  <item.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 space-y-5">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text">
              Shop
            </h4>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <FiChevronRight className="text-xs text-zinc-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 space-y-5">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <FiChevronRight className="text-xs text-zinc-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 space-y-5">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <FiChevronRight className="text-xs text-zinc-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-5">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text">
              Contact Info
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-base text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 leading-normal">
                  1823 Greater Noida, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-base text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  <p>+1 123 456 7890</p>
                  <p className="text-[10px] text-zinc-400 font-bold mt-0.5">Mon - Fri, 9Am - 5Pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-base text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  <p>support@nexcart.com</p>
                  <p className="text-[10px] text-zinc-400 font-bold mt-0.5">Response within 24 hours</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border/60 bg-background/25 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          
          <p className="text-xs font-semibold text-zinc-400 text-center">
            © {currentYear} NexCart Inc. All rights reserved. Built with design excellence.
          </p>

        </div>
      </div>

    </footer>
  );
}
