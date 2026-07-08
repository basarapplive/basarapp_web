/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Home, Shield, FileText, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { AppRoute } from '../types';
import { useLanguage } from './LanguageContext';

interface NavbarProps {
  currentRoute: AppRoute;
  onRouteChange: (route: AppRoute) => void;
}

export default function Navbar({ currentRoute, onRouteChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { id: 'home' as AppRoute, label: t('home'), icon: Home, path: '#/' },
    { id: 'privacy' as AppRoute, label: t('privacy'), icon: Shield, path: '#/privacy' },
    { id: 'terms' as AppRoute, label: t('terms'), icon: FileText, path: '#/terms' },
  ];

  const handleNavClick = (id: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onRouteChange(id);
    setIsOpen(false);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090D16]/85 backdrop-blur-md border-b border-[#1f293d] transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              onClick={(e) => handleNavClick('home', e)}
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="BasarApp Home Page"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center font-display font-extrabold text-white text-lg sm:text-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform duration-300">
                B
              </div>
              <div>
                <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                  Basar<span className="text-emerald-400 font-extrabold">App</span>
                </span>
                <span className="hidden sm:block text-[9px] font-mono text-gray-500 tracking-widest uppercase">
                  {lang === 'en' ? 'Shared Living OS' : 'মেস ম্যানেজমেন্ট ওএস'}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5">
            <ul className="flex items-center gap-1.5" role="menubar">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentRoute === item.id;
                return (
                  <li key={item.id} role="none">
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(item.id, e)}
                      role="menuitem"
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all focus:outline-none cursor-pointer ${
                        isActive 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm' 
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Language Toggle Button */}
            <div className="ml-2 pl-2 border-l border-slate-800/80 flex items-center">
              <button
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-mono tracking-wide bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 text-gray-200 transition-all cursor-pointer"
                title={lang === 'en' ? "Switch to Bangla" : "Switch to English"}
                aria-label={lang === 'en' ? "Switch to Bangla" : "Switch to English"}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
              </button>
            </div>

            {/* Premium CTA Button */}
            <div className="ml-2 pl-2 border-l border-slate-800">
              <a
                href="#simulator-container"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.35)] transition-all cursor-pointer focus:ring-2 focus:ring-emerald-500"
              >
                {t('launch_simulator')}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Quick Language button for Mobile Header */}
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold font-mono bg-slate-800/60 border border-slate-700/50 text-gray-200 transition-all cursor-pointer"
              aria-label={lang === 'en' ? "Switch to Bangla" : "Switch to English"}
            >
              <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{lang === 'en' ? 'বাং' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu panel */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 border-b border-[#1f293d] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-3 pt-2 pb-4 space-y-1.5 bg-[#090D16]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentRoute === item.id;
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium focus:outline-none cursor-pointer ${
                  isActive 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/40'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </a>
            );
          })}
          
          {/* Mobile Language Toggle row */}
          <div className="px-4 py-2 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">{t('language_name')}</span>
            <button
              onClick={() => {
                setLang(lang === 'en' ? 'bn' : 'en');
                setIsOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 shrink-0 animate-pulse" />
              {lang === 'en' ? 'বাংলা সংস্করণ' : 'English Edition'}
            </button>
          </div>

          <div className="pt-2.5 px-3">
            <a
              href="#simulator-container"
              onClick={() => setIsOpen(false)}
              className="w-full justify-center inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              {t('launch_simulator')}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
