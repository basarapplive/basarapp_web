/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import PrivacyView from './components/PrivacyView';
import TermsView from './components/TermsView';
import ThreeCanvas from './components/ThreeCanvas';
import { AppRoute } from './types';
import { LanguageProvider } from './components/LanguageContext';

function AppContent() {
  const [route, setRoute] = useState<AppRoute>('home');

  // Sync client-side route with URL hash (supports static environments like GitHub Pages)
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/privacy' || hash === '#privacy') {
        setRoute('privacy');
      } else if (hash === '#/terms' || hash === '#terms') {
        setRoute('terms');
      } else {
        setRoute('home');
      }
    };

    // Initial check on load
    handleLocationChange();

    // Listen to hash change
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update route state and update window history URL hash
  const handleRouteChange = (newRoute: AppRoute) => {
    setRoute(newRoute);
    let targetHash = '#/';
    if (newRoute === 'privacy') {
      targetHash = '#/privacy';
    } else if (newRoute === 'terms') {
      targetHash = '#/terms';
    }
    
    // Update hash
    window.location.hash = targetHash;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-gray-200 selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      
      {/* WCAG Skip to Main Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-500 text-white font-bold py-2.5 px-5 rounded-lg z-[100] outline-none shadow-lg focus:ring-4 focus:ring-emerald-400"
      >
        Skip to Main Content
      </a>

      {/* Interactive 3D WebGL Parallax Backdrop */}
      <ThreeCanvas />

      {/* Decorative Top Ambient Light Orb */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-emerald-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Navigation Header */}
      <Navbar currentRoute={route} onRouteChange={handleRouteChange} />

      {/* Active Route Wrapper with Animated Transitions */}
      <div className="flex-1 flex flex-col justify-start relative z-10">
        <AnimatePresence mode="wait">
          {route === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="flex-1"
            >
              <HomeView onRouteChange={handleRouteChange} />
            </motion.div>
          )}

          {route === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex-1"
            >
              <PrivacyView />
            </motion.div>
          )}

          {route === 'terms' && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex-1"
            >
              <TermsView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Element */}
      <Footer onRouteChange={handleRouteChange} />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
