/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, FileText, Home, ArrowUp, Building2, Smartphone, HelpCircle } from 'lucide-react';
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
