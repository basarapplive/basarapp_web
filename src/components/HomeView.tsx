/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Building2, 
  Utensils, 
  Receipt, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  BarChart3, 
  Globe, 
  UserCircle2,
  FileSpreadsheet
} from 'lucide-react';
import AppSimulator from './AppSimulator';
import { AppRoute } from '../types';
import { useLanguage } from './LanguageContext';

interface HomeViewProps {
  onRouteChange: (route: AppRoute) => void;
}

export default function HomeView({ onRouteChange }: HomeViewProps) {
  const { t, lang } = useLanguage();
  
  // Animation presets for stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <main className="relative z-10" id="main-content">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Ambient Accent Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold tracking-wide mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              {t('intro_badge')}
            </motion.div>
 
            {/* Main Headline */}
            <motion.h1 
              id="hero-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight"
            >
              {t('title_main')} <br />
              <span className="text-gradient">{t('title_accent')}</span>
            </motion.h1>
 
            {/* Subheading Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-balance"
            >
              {t('subtitle')}
            </motion.p>
 
            {/* Primary & Secondary Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#simulator-container"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
                aria-label="Navigate down to the interactive simulator"
              >
                {t('start_simulator')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1e293b]/70 hover:bg-[#334155]/70 text-gray-200 font-bold px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer text-sm"
              >
                {t('explore_features')}
              </a>
            </motion.div>
 
            {/* Trust Stats Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-16 pt-10 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center"
            >
              <div>
                <div className="text-2xl md:text-3xl font-display font-extrabold text-white">
                  {lang === 'en' ? '100,000+' : '১০০,০০০+'}
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-gray-500 mt-1">{t('stats_rooms')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-extrabold text-emerald-400">
                  {lang === 'en' ? '৳45M+' : '৳৪.৫ কোটি+'}
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-gray-500 mt-1">{t('stats_expenses')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-extrabold text-blue-400">
                  {lang === 'en' ? '1.2M+' : '১.২ মিলিয়ন+'}
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-gray-500 mt-1">{t('stats_meals')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-extrabold text-amber-500">
                  {lang === 'en' ? '99.9%' : '৯৯.৯%'}
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-gray-500 mt-1">{t('stats_excel')}</div>
              </div>
            </motion.div>
 
          </div>
        </div>
      </section>
 
      {/* 2. VALUE COMPARISON - THE EXCEL SLAYER */}
      <section className="py-16 bg-[#0b0f19]/70 border-y border-slate-800/80 relative overflow-hidden" aria-labelledby="comparison-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="comparison-heading" className="text-2xl sm:text-3xl font-display font-bold text-white">
              {t('comparison_heading')}
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              {t('comparison_subheading')}
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* The Old Way */}
            <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <h3 className="text-lg font-display font-bold text-white">{t('old_title')}</h3>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  {t('old_sub')}
                </p>
                <ul className="space-y-4 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                    <span><strong>{t('old_p1_title')}</strong>: {t('old_p1_desc')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                    <span><strong>{t('old_p2_title')}</strong>: {t('old_p2_desc')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                    <span><strong>{t('old_p3_title')}</strong>: {t('old_p3_desc')}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-red-500/10 flex items-center gap-2 text-xs text-red-300 font-mono">
                <FileSpreadsheet className="w-4 h-4" />
                {t('old_footer')}
              </div>
            </div>
 
            {/* The BasarApp Way */}
            <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <h3 className="text-lg font-display font-bold text-white">{t('new_title')}</h3>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  {t('new_sub')}
                </p>
                <ul className="space-y-4 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span><strong>{t('new_p1_title')}</strong>: {t('new_p1_desc')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span><strong>{t('new_p2_title')}</strong>: {t('new_p2_desc')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span><strong>{t('new_p3_title')}</strong>: {t('new_p3_desc')}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-emerald-500/10 flex items-center gap-2 text-xs text-emerald-300 font-mono">
                <Building2 className="w-4 h-4" />
                {t('new_footer')}
              </div>
            </div>
 
          </div>
 
        </div>
      </section>
 
      {/* 3. CORE SIMULATOR PREVIEW */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Interactive Simulator Sandbox">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono text-emerald-400 font-semibold tracking-widest uppercase bg-emerald-500/10 px-2 py-0.5 rounded-md">
            {t('sandbox_badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-3">
            {t('sim_title')}
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            {t('sim_sub')}
          </p>
        </div>
 
        <AppSimulator />
      </section>
 
      {/* 4. KEY BENTO FEATURE CARDS */}
      <section id="features" className="py-16 bg-[#070b13] border-t border-slate-800/80" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="features-heading" className="text-3xl font-display font-bold text-white">
              {t('bento_main_title')}
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              {t('bento_main_sub')}
            </p>
          </div>
 
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            
            {/* Feature 1: Role Based Portals */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 transition-all hover:border-slate-700 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                  <UserCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{t('feat1_title')}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t('feat1_desc')}
                </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase mt-6 tracking-wider">
                {t('feat1_foot')}
              </div>
            </motion.div>
 
            {/* Feature 2: Smart Meal Rate */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 transition-all hover:border-slate-700 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  <Utensils className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{t('feat2_title')}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t('feat2_desc')}
                </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase mt-6 tracking-wider">
                {t('feat2_foot')}
              </div>
            </motion.div>
 
            {/* Feature 3: Expense Timelines */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 transition-all hover:border-slate-700 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  <Receipt className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{t('feat3_title')}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t('feat3_desc')}
                </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase mt-6 tracking-wider">
                {t('feat3_foot')}
              </div>
            </motion.div>
 
            {/* Feature 4: Automated Dues & Recurring Costs */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 transition-all hover:border-slate-700 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{t('feat4_title')}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t('feat4_desc')}
                </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase mt-6 tracking-wider">
                {t('feat4_foot')}
              </div>
            </motion.div>
 
            {/* Feature 5: Rich Exports */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 transition-all hover:border-slate-700 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{t('feat5_title')}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t('feat5_desc')}
                </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase mt-6 tracking-wider">
                {t('feat5_foot')}
              </div>
            </motion.div>
 
            {/* Feature 6: Localized Integrations */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 transition-all hover:border-slate-700 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-5">
                  <Globe className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{t('feat6_title')}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t('feat6_desc')}
                </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase mt-6 tracking-wider">
                {t('feat6_foot')}
              </div>
            </motion.div>
 
          </motion.div>
        </div>
      </section>
 
      {/* 5. USER TESTIMONIAL / CASE SCENARIOS */}
      <section className="py-20 bg-[#090d16] border-t border-slate-800/80" aria-label="Roommate testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2.5 py-1 rounded">
                {t('tm_badge')}
              </span>
              <h2 className="text-3xl font-display font-extrabold text-white">
                {t('tm_title')}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-balance">
                {t('tm_desc1')}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed text-balance">
                {t('tm_desc2')}
              </p>
              <div>
                <div className="font-bold text-white text-sm">{t('tm_author')}</div>
                <div className="text-xs text-gray-500">{t('tm_author_sub')}</div>
              </div>
            </div>
 
            {/* Visual Phone Frame Mockup (Tailwind CSS styled high-fidelity UI layout) */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-lg h-[540px] sm:h-[600px] relative flex items-center justify-center overflow-visible">
                
                {/* Backlighting effect to make it pop like a high-fidelity rendering */}
                <div className="absolute w-[300px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full top-1/4 left-1/4 pointer-events-none" />
                <div className="absolute w-[250px] h-[250px] bg-blue-500/10 blur-[100px] rounded-full bottom-1/4 right-1/4 pointer-events-none" />

                {/* PHONE 1: LEFT / PRIMARY VIEW (Flatmate/Admin Dashboard) */}
                <motion.div 
                  id="phone-mockup-1"
                  className="absolute z-20 cursor-grab active:cursor-grabbing origin-center select-none"
                  style={{
                    perspective: 1200,
                    transformStyle: 'preserve-3d',
                  }}
                  initial={{ 
                    x: -50, 
                    y: -20, 
                    rotateY: -16, 
                    rotateX: 12, 
                    rotateZ: -6, 
                    scale: 0.95 
                  }}
                  whileHover={{ 
                    z: 30,
                    x: -60,
                    y: -25,
                    rotateY: -10,
                    rotateX: 8,
                    rotateZ: -3,
                    scale: 1.02,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  {/* Outer Bezel */}
                  <div className="w-[230px] sm:w-[250px] h-[450px] sm:h-[490px] bg-[#1a2333] rounded-[36px] p-2.5 shadow-[25px_25px_60px_rgba(0,0,0,0.85),-5px_-5px_15px_rgba(255,255,255,0.03)] border-2 border-slate-700/60 relative">
                    
                    {/* Metal Edge Highlights */}
                    <div className="absolute inset-[1px] rounded-[34px] border border-slate-600/30 pointer-events-none" />
                    <div className="absolute left-[-2px] top-12 w-[2px] h-8 bg-slate-500 rounded-l pointer-events-none" />
                    <div className="absolute left-[-2px] top-24 w-[2px] h-12 bg-slate-500 rounded-l pointer-events-none" />
                    <div className="absolute right-[-2px] top-16 w-[2px] h-12 bg-slate-500 rounded-r pointer-events-none" />

                    {/* Notch/Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                      <div className="w-6 h-0.5 bg-slate-800 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full ml-1 border border-slate-800" />
                    </div>

                    {/* Screen content area */}
                    <div className="w-full h-full bg-[#0b0f19] rounded-[28px] overflow-hidden relative border border-slate-850 p-3 flex flex-col justify-between pt-7">
                      
                      {/* Top Bar (battery, wifi, time) */}
                      <div className="flex items-center justify-between px-2 text-[9px] text-gray-500 font-mono tracking-wider">
                        <span>09:41</span>
                        <div className="flex items-center gap-1">
                          <span>5G</span>
                          <span className="w-3.5 h-2 border border-gray-600 rounded-sm inline-block relative bg-gray-500/20">
                            <span className="absolute top-[1px] left-[1px] bottom-[1px] right-1 bg-gray-400 rounded-2xs" />
                          </span>
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-900 mt-1">
                        <div className="flex items-center gap-1">
                          <span className="text-sm">👋</span>
                          <div>
                            <div className="text-[8px] text-gray-500 leading-none">{t('phone_hello')}</div>
                            <div className="text-[10px] font-bold text-white leading-tight truncate max-w-[90px]">{t('phone_flat')}</div>
                          </div>
                        </div>
                        <span className="text-[8px] font-mono bg-emerald-500/15 text-emerald-400 px-1 py-0.2 rounded uppercase font-semibold scale-90 origin-right">
                          {t('phone_verified')}
                        </span>
                      </div>

                      {/* Ledger summary */}
                      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2.5 rounded-lg text-white shadow-sm space-y-0.5">
                        <div className="text-[8px] uppercase font-mono tracking-wider opacity-80">{t('phone_due_label')}</div>
                        <div className="text-lg font-display font-black leading-none">৳২,৩৫০</div>
                        <div className="text-[7.5px] opacity-90 flex justify-between items-center pt-0.5">
                          <span>{t('phone_due_sub')}</span>
                        </div>
                      </div>

                      {/* Grid actions */}
                      <div className="grid grid-cols-3 gap-1">
                        <div className="bg-[#121824]/80 border border-slate-800/60 rounded p-1.5 text-center flex flex-col items-center justify-center">
                          <span className="text-[12px]">🍲</span>
                          <span className="text-[8px] font-bold text-white mt-0.5 leading-none">{t('phone_meal_btn')}</span>
                          <span className="text-[7px] text-gray-500 mt-0.2 leading-none">{t('phone_meal_btn_sub')}</span>
                        </div>
                        <div className="bg-[#121824]/80 border border-slate-800/60 rounded p-1.5 text-center flex flex-col items-center justify-center">
                          <span className="text-[12px]">🛒</span>
                          <span className="text-[8px] font-bold text-white mt-0.5 leading-none">{t('phone_grocery_btn')}</span>
                          <span className="text-[7px] text-gray-500 mt-0.2 leading-none">{t('phone_grocery_btn_sub')}</span>
                        </div>
                        <div className="bg-[#121824]/80 border border-slate-800/60 rounded p-1.5 text-center flex flex-col items-center justify-center">
                          <span className="text-[12px]">💸</span>
                          <span className="text-[8px] font-bold text-white mt-0.5 leading-none">{t('phone_payment_btn')}</span>
                          <span className="text-[7px] text-gray-500 mt-0.2 leading-none">{t('phone_payment_btn_sub')}</span>
                        </div>
                      </div>

                      {/* Daily checkbox tracker */}
                      <div className="bg-[#121824]/40 border border-slate-800/50 rounded p-2 space-y-1">
                        <span className="text-[7.5px] font-mono text-gray-500 uppercase tracking-wider block">{t('phone_sched')}</span>
                        <div className="flex items-center justify-between text-[9px] text-white">
                          <div className="flex items-center gap-1">
                            <input type="checkbox" defaultChecked className="accent-emerald-400 w-2.5 h-2.5" disabled />
                            <span>{t('phone_b')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <input type="checkbox" defaultChecked className="accent-emerald-400 w-2.5 h-2.5" disabled />
                            <span>{t('phone_l')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <input type="checkbox" defaultChecked={false} className="accent-emerald-400 w-2.5 h-2.5" disabled />
                            <span className="text-gray-500">{t('phone_d')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer spacer/indicator bar */}
                      <div className="w-16 h-1 bg-slate-800 rounded-full mx-auto" />
                    </div>
                  </div>
                </motion.div>

                {/* PHONE 2: RIGHT / SECONDARY VIEW (Momena Begum - Cook Portal) */}
                <motion.div 
                  id="phone-mockup-2"
                  className="absolute z-10 cursor-grab active:cursor-grabbing origin-center select-none"
                  style={{
                    perspective: 1200,
                    transformStyle: 'preserve-3d',
                  }}
                  initial={{ 
                    x: 60, 
                    y: 40, 
                    rotateY: -16, 
                    rotateX: 12, 
                    rotateZ: -6, 
                    scale: 0.95 
                  }}
                  whileHover={{ 
                    z: 40,
                    x: 70,
                    y: 35,
                    rotateY: -10,
                    rotateX: 8,
                    rotateZ: -3,
                    scale: 1.02,
                    zIndex: 30,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  {/* Outer Bezel */}
                  <div className="w-[230px] sm:w-[250px] h-[450px] sm:h-[490px] bg-[#1a2333] rounded-[36px] p-2.5 shadow-[20px_20px_50px_rgba(0,0,0,0.8),-5px_-5px_15px_rgba(255,255,255,0.03)] border-2 border-slate-700/60 relative">
                    
                    {/* Metal Edge Highlights */}
                    <div className="absolute inset-[1px] rounded-[34px] border border-slate-600/30 pointer-events-none" />
                    <div className="absolute left-[-2px] top-12 w-[2px] h-8 bg-slate-500 rounded-l pointer-events-none" />
                    <div className="absolute left-[-2px] top-24 w-[2px] h-12 bg-slate-500 rounded-l pointer-events-none" />
                    <div className="absolute right-[-2px] top-16 w-[2px] h-12 bg-slate-500 rounded-r pointer-events-none" />

                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                      <div className="w-6 h-0.5 bg-slate-800 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full ml-1 border border-slate-800" />
                    </div>

                    {/* Screen Content area */}
                    <div className="w-full h-full bg-[#0b0f19] rounded-[28px] overflow-hidden relative border border-slate-850 p-3 flex flex-col justify-between pt-7">
                      
                      {/* Top Bar */}
                      <div className="flex items-center justify-between px-2 text-[9px] text-gray-500 font-mono tracking-wider">
                        <span>09:41</span>
                        <div className="flex items-center gap-1">
                          <span>5G</span>
                          <span className="w-3.5 h-2 border border-gray-600 rounded-sm inline-block relative bg-gray-500/20">
                            <span className="absolute top-[1px] left-[1px] bottom-[1px] right-1 bg-gray-400 rounded-2xs" />
                          </span>
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-900 mt-1">
                        <div className="flex items-center gap-1">
                          <span className="text-sm">👩‍🍳</span>
                          <div>
                            <div className="text-[8px] text-gray-500 leading-none">{t('phone2_subtitle')}</div>
                            <div className="text-[10px] font-bold text-purple-400 leading-tight truncate max-w-[90px]">{t('phone2_title')}</div>
                          </div>
                        </div>
                        <span className="text-[8px] font-mono bg-purple-500/15 text-purple-400 px-1 py-0.2 rounded uppercase font-semibold scale-90 origin-right">
                          {t('phone2_saved')}
                        </span>
                      </div>

                      {/* Cook descriptive banner */}
                      <div className="bg-[#121824] p-2 rounded-lg border border-purple-500/20">
                        <div className="text-[7px] text-purple-400 font-mono uppercase tracking-wider">{t('phone2_desc')}</div>
                        <div className="text-[10px] text-gray-300 font-bold mt-0.5 leading-tight">{lang === 'en' ? 'Quick Touch Meals' : 'সহজ স্পর্শে মিল এন্টি'}</div>
                      </div>

                      {/* Large Checkboxes Roommate List */}
                      <div className="space-y-1.5 flex-1 py-2 overflow-y-auto max-h-[180px] no-scrollbar">
                        
                        {/* Member 1 */}
                        <div className="bg-[#121824]/60 p-1.5 rounded border border-slate-800/80 flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm">👨‍💼</span>
                            <span className="text-white font-medium">Masum</span>
                          </div>
                          <div className="flex gap-1.5">
                            <span className="bg-emerald-500/10 border border-emerald-500/30 text-[8px] text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">L: ✓</span>
                            <span className="bg-emerald-500/10 border border-emerald-500/30 text-[8px] text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">D: ✓</span>
                          </div>
                        </div>

                        {/* Member 2 */}
                        <div className="bg-[#121824]/60 p-1.5 rounded border border-slate-800/80 flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm">🧑‍💻</span>
                            <span className="text-white font-medium">Raihan</span>
                          </div>
                          <div className="flex gap-1.5">
                            <span className="bg-emerald-500/10 border border-emerald-500/30 text-[8px] text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">L: ✓</span>
                            <span className="bg-slate-800 border border-slate-700 text-[8px] text-gray-500 px-1.5 py-0.5 rounded font-mono">D: ✗</span>
                          </div>
                        </div>

                        {/* Member 3 */}
                        <div className="bg-[#121824]/60 p-1.5 rounded border border-slate-800/80 flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm">🧑‍🎨</span>
                            <span className="text-white font-medium">Pranto</span>
                          </div>
                          <div className="flex gap-1.5">
                            <span className="bg-emerald-500/10 border border-emerald-500/30 text-[8px] text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">L: ✓</span>
                            <span className="bg-emerald-500/10 border border-emerald-500/30 text-[8px] text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">D: ✓</span>
                          </div>
                        </div>

                      </div>

                      {/* Bottom syncer info */}
                      <div className="bg-purple-950/20 p-1.5 rounded border border-purple-500/10 text-[7px] text-gray-400 flex items-center justify-between font-mono mt-1">
                        <span>📡 Cloud Sync</span>
                        <span>v1.4.2</span>
                      </div>

                      {/* Footer indicator bar */}
                      <div className="w-16 h-1 bg-slate-800 rounded-full mx-auto" />
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
 
          </div>
        </div>
      </section>
 
      {/* 6. CALL TO ACTION (CTA) BAR */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-[#090d16] to-[#04060b] relative overflow-hidden text-center" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-emerald-500/5 mix-blend-color animate-pulse" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <span className="text-xs font-mono text-[#10b981] font-semibold bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
            {t('cta_badge')}
          </span>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mt-4 tracking-tight">
            {lang === 'en' ? 'Ready to slay the ' : ''}
            <span className="text-gradient">{t('cta_title')}</span>
          </h2>
          <p className="text-gray-300 mt-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-balance">
            {t('cta_desc')}
          </p>
 
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#simulator-container"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              {t('cta_btn')}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Terms"
              onClick={(e) => {
                e.preventDefault();
                onRouteChange('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900/80 hover:bg-slate-800 text-gray-300 font-bold px-8 py-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all text-sm"
            >
              {t('cta_terms')}
            </a>
          </div>
 
          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-gray-500 font-mono">
            <span>{t('cta_secure')}</span>
            <span>•</span>
            <span>{t('cta_platforms')}</span>
            <span>•</span>
            <span>{t('cta_offline')}</span>
          </div>
 
        </div>
      </section>
 
    </main>
  );
}
