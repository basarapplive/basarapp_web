/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, FileText, Home, ArrowUp, Building2, Smartphone, HelpCircle, Facebook, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
import { AppRoute } from '../types';
import { useLanguage } from './LanguageContext';

interface FooterProps {
  onRouteChange: (route: AppRoute) => void;
}

export default function Footer({ onRouteChange }: FooterProps) {
  const { t } = useLanguage();

  const handleLinkClick = (route: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-[#1f293d] text-gray-400 text-xs mt-auto relative z-10" aria-label="Footer Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand & Intro */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-display font-black text-white text-base">
                B
              </div>
              <span className="font-display font-bold text-white text-base">
                Basar<span className="text-emerald-400">App</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-xs">
              {t('foot_desc')}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <a href="https://facebook.com/basarapp.social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-[#1877f2]/10 border border-[#1f293d] hover:border-[#1877f2]/50 flex items-center justify-center text-gray-400 hover:text-[#1877f2] transition-all duration-300" title="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://x.com/basarapp.social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-white/10 border border-[#1f293d] hover:border-white/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300" title="X (Twitter)">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/company/basarapp.social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-[#0a66c2]/10 border border-[#1f293d] hover:border-[#0a66c2]/50 flex items-center justify-center text-gray-400 hover:text-[#0a66c2] transition-all duration-300" title="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com/basarapp.social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-[#e1306c]/10 border border-[#1f293d] hover:border-[#e1306c]/50 flex items-center justify-center text-gray-400 hover:text-[#e1306c] transition-all duration-300" title="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com/@basarapp.social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-[#ff0000]/10 border border-[#1f293d] hover:border-[#ff0000]/50 flex items-center justify-center text-gray-400 hover:text-[#ff0000] transition-all duration-300" title="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="https://tiktok.com/@basarapp.social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-black/10 border border-[#1f293d] hover:border-cyan-400/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300" title="TikTok">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12.53.07C13.82.02 15.11 0 16.4 0c.08 1.57.76 3.11 1.91 4.19 1.15.99 2.68 1.49 4.19 1.53v3.7c-1.74-.03-3.46-.72-4.72-1.92-.12-.11-.22-.24-.33-.35v8.3c.02 2.64-1.12 5.21-3.15 6.9-2.2 1.83-5.26 2.37-7.95 1.4-2.7-.97-4.78-3.37-5.38-6.19-.7-3.23.4-6.72 2.87-8.83 2.14-1.83 5.13-2.31 7.74-1.27.06.02.13.06.19.09V9.66c-.73-.24-1.52-.31-2.28-.19-1.8.29-3.29 1.81-3.46 3.63-.23 2.45 1.77 4.67 4.22 4.45 2.13-.2 3.69-2.12 3.62-4.25V.07z"/></svg>
              </a>
              <a href="https://github.com/basarapplive" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-white/10 border border-[#1f293d] hover:border-white/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300" title="GitHub">
                <Github className="w-3.5 h-3.5" />
              </a>
              <a href="https://t.me/basarapp_social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-[#229ED9]/10 border border-[#1f293d] hover:border-[#229ED9]/50 flex items-center justify-center text-gray-400 hover:text-[#229ED9] transition-all duration-300" title="Telegram">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.94-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/></svg>
              </a>
              <a href="https://discord.gg/basarapp" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-[#5865F2]/10 border border-[#1f293d] hover:border-[#5865F2]/50 flex items-center justify-center text-gray-400 hover:text-[#5865F2] transition-all duration-300" title="Discord">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>
              </a>
              <a href="https://threads.net/@basarapp.social" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-[#0e1322] hover:bg-white/10 border border-[#1f293d] hover:border-white/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300" title="Threads">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.42 12.87c-.24.78-.66 1.43-1.26 1.95s-1.37.78-2.31.78c-.89 0-1.63-.26-2.23-.78s-.93-1.25-.99-2.19h5.44c.03-.17.04-.37.04-.59 0-.96-.25-1.74-.75-2.33s-1.17-.89-2.01-.89c-.83 0-1.52.28-2.07.84s-.85 1.32-.9 2.29c-.06 1.03.22 1.87.84 2.5s1.46.95 2.53.95c1.23 0 2.18-.38 2.85-1.14s1.02-1.79 1.04-3.1h-1.92v-.95h2.89v.95c-.01 1.91-.45 3.39-1.32 4.43z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: App Modules */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4 flex items-center gap-1.5 font-mono">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              {t('foot_ecosystem')}
            </h4>
            <ul className="space-y-2.5">
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_ecosystem_1')}</span></li>
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_ecosystem_2')}</span></li>
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_ecosystem_3')}</span></li>
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_ecosystem_4')}</span></li>
            </ul>
          </div>

          {/* Column 3: Platform Features */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4 flex items-center gap-1.5 font-mono">
              <Smartphone className="w-3.5 h-3.5 text-blue-400" />
              {t('foot_spaces')}
            </h4>
            <ul className="space-y-2.5">
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_spaces_1')}</span></li>
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_spaces_2')}</span></li>
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_spaces_3')}</span></li>
              <li><span className="hover:text-emerald-400 transition-colors text-[11px]">{t('foot_spaces_4')}</span></li>
            </ul>
          </div>

          {/* Column 4: Legal / Documentation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4 flex items-center gap-1.5 font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              {t('foot_trust')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#/"
                  onClick={(e) => handleLinkClick('home', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-medium"
                >
                  <Home className="w-3.5 h-3.5" />
                  {t('foot_home_portal')}
                </a>
              </li>
              <li>
                <a
                  href="#/privacy"
                  onClick={(e) => handleLinkClick('privacy', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-medium"
                >
                  <Shield className="w-3.5 h-3.5" />
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#/terms"
                  onClick={(e) => handleLinkClick('terms', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  {t('terms')}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f293d] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-gray-500 leading-normal">
              &copy; {new Date().getFullYear()} {t('foot_rights')}
            </p>
            <p className="text-[10px] text-gray-600 mt-1 font-mono">
              {t('foot_compliance')}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-[#111827] hover:bg-[#1f2937] text-[11px] font-medium text-gray-300 py-2 px-3.5 rounded-lg border border-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            aria-label="Scroll back to top of the page"
          >
            {t('foot_back_to_top')}
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
