import React, { useState } from 'react';
import { Dumbbell, Menu, X, Star, MessageSquare } from 'lucide-react';
import { GYM_CONTACT } from '../data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Trainer Showcase', href: '#trainers' },
    { label: 'Membership Plans', href: '#plans' },
    { label: 'Student Offer', href: '#student-discount' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-[#1f2937]/50" id="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#welcome" className="flex items-center gap-2 group cursor-pointer" id="logo-link">
            <div className="bg-red-600 p-2 rounded-lg text-white font-bold transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <Dumbbell className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-display text-2xl font-black tracking-wider text-white">
                SITE <span className="text-red-500">CART</span>
              </span>
              <p className="text-[9px] font-mono tracking-widest text-zinc-400 -mt-1 uppercase">Pattabiram Elite Hub</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" id="desktop-menu">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-zinc-300 hover:text-red-500 font-medium text-sm tracking-wide transition-colors duration-200 uppercase relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-red-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Rating Indicator */}
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full" id="rating-badge">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-mono text-xs font-bold text-white">4.9/5.0</span>
              <span className="text-[10px] text-zinc-400 border-l border-zinc-800 pl-2">Elite Rating</span>
            </div>

            {/* Quick Contact Line */}
            <a
              href={`tel:${GYM_CONTACT.phone}`}
              className="text-zinc-300 hover:text-red-500 text-sm font-semibold transition-colors duration-200"
              id="top-phone-link"
            >
              Call: {GYM_CONTACT.phone}
            </a>

            {/* Quick Enquiry CTA */}
            <a
              href={GYM_CONTACT.whatsappUrl('Hi! I want to enquire about Site Cart Gym memberships and student discounts.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center gap-1.5"
              id="top-enquiry-btn"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Enquiry
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={GYM_CONTACT.whatsappUrl('Hi! I am looking for more details on Site Cart Gym.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white p-2 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none p-1 bg-zinc-900 border border-zinc-800 rounded-lg"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b] border-b border-[#1f2937] px-4 pt-2 pb-6 space-y-3" id="mobile-drawer">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-red-500 font-semibold text-base py-2 uppercase tracking-wider border-b border-zinc-900"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm py-1 border-b border-zinc-900 text-zinc-400">
              <span>RATING</span>
              <span className="text-white font-bold flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                4.9 Stars (Elite Level)
              </span>
            </div>
            <a
              href={`tel:${GYM_CONTACT.phone}`}
              className="flex justify-between text-base font-bold text-red-500 py-1"
            >
              <span>Call Us Direct</span>
              <span>{GYM_CONTACT.phone}</span>
            </a>
            <a
              href={GYM_CONTACT.whatsappUrl('Hi! I am messaging from the mobile site. I want to join Site Cart Gym.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-center py-3 rounded-lg text-sm uppercase tracking-widest transition-transform duration-200"
            >
              ⚡ Message via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
