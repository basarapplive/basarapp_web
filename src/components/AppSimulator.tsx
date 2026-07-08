/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  ShoppingBag, 
  DollarSign, 
  Utensils, 
  RotateCcw, 
  TrendingDown, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { MemberBalance, TimelineEvent } from '../types';
import { useLanguage } from './LanguageContext';

// Pre-seeded initial data
const INITIAL_MEMBERS: MemberBalance[] = [
  { name: 'Masum', role: 'admin', avatar: '👨‍💼', meals: 42, groceryCost: 3500, utilityPaid: 1500, paymentPaid: 0, balance: 0 },
  { name: 'Raihan', role: 'flatmate', avatar: '🧑‍💻', meals: 38, groceryCost: 2200, utilityPaid: 0, paymentPaid: 5000, balance: 0 },
  { name: 'Pranto', role: 'flatmate', avatar: '🧑‍🎨', meals: 45, groceryCost: 800, utilityPaid: 1200, paymentPaid: 4500, balance: 0 },
  { name: 'Momena Begum', role: 'cook', avatar: '👩‍🍳', meals: 0, groceryCost: 0, utilityPaid: 0, paymentPaid: 0, balance: 0 },
];

const INITIAL_TIMELINE: TimelineEvent[] = [
  { id: '1', time: '09:15 AM', user: 'Pranto', avatar: '🧑‍🎨', action: 'added Utility Expense', detail: 'Internet Bill', amount: 1200, category: 'utility' },
  { id: '2', time: '10:30 AM', user: 'Raihan', avatar: '🧑‍💻', action: 'added Grocery', detail: 'Bought Farm Chicken & Eggs', amount: 850, category: 'grocery' },
  { id: '3', time: '11:00 AM', user: 'Masum', avatar: '👨‍💼', action: 'recorded Payment', detail: 'Advanced Rent Paid', amount: 5000, category: 'payment' },
  { id: '4', time: '01:30 PM', user: 'Momena Begum', avatar: '👩‍🍳', action: 'marked Lunch Meals', detail: '8 total meals marked', category: 'meal' },
];

// Room rent per head and fixed costs
const ROOM_RENT = 3500; 
const FIXED_COSTS_PER_HEAD = 650; // Internet, Water, Gas, Cleaning

export default function AppSimulator() {
  const { t, lang } = useLanguage();
  const [members, setMembers] = useState<MemberBalance[]>(INITIAL_MEMBERS);
  const [timeline, setTimeline] = useState<TimelineEvent[]>(INITIAL_TIMELINE);
  const [notification, setNotification] = useState<string | null>(null);

  // Set initial localized notification on language change or mount
  useEffect(() => {
    setNotification(t('sim_initial_alert'));
  }, [lang]);

  // Calculate global values based on active state
  const totalGrocery = members.reduce((acc, m) => acc + m.groceryCost, 0);
  const totalMeals = members.reduce((acc, m) => acc + m.meals, 0);
  const mealRate = totalMeals > 0 ? Number((totalGrocery / totalMeals).toFixed(2)) : 0;

  // Dynamic calculations for each member's personal balance
  const getMemberFinancials = (member: MemberBalance) => {
    if (member.role === 'cook') {
      return { cost: 0, paid: 0, balance: 0, due: 0 };
    }
    const cost = Number((member.meals * mealRate).toFixed(2)) + ROOM_RENT + FIXED_COSTS_PER_HEAD;
    const paid = member.groceryCost + member.utilityPaid + member.paymentPaid;
    const balance = Number((paid - cost).toFixed(0));
    const due = balance < 0 ? Math.abs(balance) : 0;
    return { cost, paid, balance, due };
  };

  const addEvent = (user: string, avatar: string, action: string, detail: string, category: 'grocery' | 'meal' | 'utility' | 'payment', amount?: number) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newEvent: TimelineEvent = {
      id: Date.now().toString(),
      time: timeStr,
      user,
      avatar,
      action,
      detail,
      amount,
      category,
    };
    setTimeline(prev => [newEvent, ...prev.slice(0, 8)]); // keep last 9 items
  };

  const handleAddGrocery = () => {
    const cost = 1250;
    setMembers(prev => prev.map(m => {
      if (m.name === 'Raihan') {
        return { ...m, groceryCost: m.groceryCost + cost };
      }
      return m;
    }));
    addEvent('Raihan', '🧑‍💻', 'added Grocery', 'Bought Fresh Rohu Fish & Spices', 'grocery', cost);
    triggerNotification(
      lang === 'en' 
        ? 'Raihan added ৳1,250 grocery. Meal Rate dynamically updated for everyone!' 
        : 'রায়হান ৳১,২৫০ বাজার যুক্ত করেছেন। মিল রেট সবার জন্য স্বয়ংক্রিয়ভাবে আপডেট হয়েছে!'
    );
  };

  const handleAddUtility = () => {
    const cost = 1500;
    setMembers(prev => prev.map(m => {
      if (m.name === 'Pranto') {
        return { ...m, utilityPaid: m.utilityPaid + cost };
      }
      return m;
    }));
    addEvent('Pranto', '🧑‍🎨', 'paid Utility Expense', 'Electricity Bill Paid', 'utility', cost);
    triggerNotification(
      lang === 'en' 
        ? 'Pranto paid ৳1,500 electricity. Shared utilities calculated instantly.' 
        : 'প্রান্ত ৳১,৫০০ বিদ্যুৎ বিল পরিশোধ করেছেন। ইউটিলিটি খরচ লাইভ ক্যালকুলেট করা হয়েছে।'
    );
  };

  const handleRecordPayment = () => {
    const amt = 4000;
    setMembers(prev => prev.map(m => {
      if (m.name === 'Masum') {
        return { ...m, paymentPaid: m.paymentPaid + amt };
      }
      return m;
    }));
    addEvent('Masum', '👨‍💼', 'recorded Payment', 'Cash paid to manager wallet', 'payment', amt);
    triggerNotification(
      lang === 'en' 
        ? 'Masum recorded a payment of ৳4,000. Personal outstanding due decreased.' 
        : 'মাসুম ৳৪,০০০ পেমেন্ট করেছেন। তার ব্যক্তিগত মেস বকেয়া হ্রাস পেয়েছে।'
    );
  };

  const handleMarkMeals = () => {
    setMembers(prev => prev.map(m => {
      if (m.role !== 'cook') {
        return { ...m, meals: m.meals + 1 }; // add 1 meal to each flatmate
      }
      return m;
    }));
    addEvent('Momena Begum', '👩‍🍳', 'marked Meals', 'Dinner attendance recorded', 'meal');
    triggerNotification(
      lang === 'en' 
        ? 'Cook marked dinner for all flatmates. Meal counts updated.' 
        : 'রান্নার খালা সবার রাতের মিল মার্ক করেছেন। সর্বমোট মিল আপডেট হয়েছে।'
    );
  };

  const handleReset = () => {
    setMembers(INITIAL_MEMBERS);
    setTimeline(INITIAL_TIMELINE);
    triggerNotification(
      lang === 'en' 
        ? 'Simulator reset to default test configuration.' 
        : 'সিমুলেটর রিসেট করা হয়েছে।'
    );
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(prev => prev === msg ? null : prev);
    }, 6000);
  };

  // Helper to translate timeline feed actions on the fly
  const getLocalizedEvent = (item: TimelineEvent) => {
    let action = item.action;
    let detail = item.detail;

    if (lang === 'bn') {
      if (item.action === 'added Utility Expense' || item.action === 'paid Utility Expense') {
        action = 'ইউটিলিটি বিল পরিশোধ করেছেন';
      } else if (item.action === 'added Grocery') {
        action = 'বাজার খরচ যুক্ত করেছেন';
      } else if (item.action === 'recorded Payment') {
        action = 'পেমেন্ট পরিশোধ করেছেন';
      } else if (item.action === 'marked Lunch Meals') {
        action = 'দুপুরের মিল এন্ট্রি করেছেন';
      } else if (item.action === 'marked Meals') {
        action = 'রাতের মিল এন্ট্রি করেছেন';
      }

      if (item.detail === 'Internet Bill') {
        detail = 'ওয়াইফাই ইন্টারনেট বিল';
      } else if (item.detail === 'Bought Farm Chicken & Eggs') {
        detail = 'ফার্মের মুরগি ও ডিম ক্রয়';
      } else if (item.detail === 'Advanced Rent Paid') {
        detail = 'অগ্রিম মেস ভাড়া পরিশোধ';
      } else if (item.detail === '8 total meals marked') {
        detail = '৮টি মিল এন্ট্রি করা হয়েছে';
      } else if (item.detail === 'Bought Fresh Rohu Fish & Spices') {
        detail = 'তাজা রুই মাছ ও মশলা ক্রয়';
      } else if (item.detail === 'Electricity Bill Paid') {
        detail = 'বিদ্যুৎ বিল পরিশোধ';
      } else if (item.detail === 'Cash paid to manager wallet') {
        detail = 'ম্যানেজার ওয়ালেটে ক্যাশ প্রদান';
      } else if (item.detail === 'Dinner attendance recorded') {
        detail = 'রাতের মিল মার্ক করা হয়েছে';
      }
    }

    // Convert numbers to Bangla digits if Bangla is active
    let formattedAmount = item.amount ? `৳${item.amount.toLocaleString()}` : undefined;
    if (lang === 'bn' && item.amount) {
      const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      const str = item.amount.toString();
      const bnStr = str.split('').map(char => {
        const num = parseInt(char, 10);
        return isNaN(num) ? char : bnDigits[num];
      }).join('');
      formattedAmount = `৳${bnStr}`;
    }

    return { action, detail, formattedAmount };
  };

  // Helper to convert arbitrary number to Bangla string if needed
  const formatValue = (num: number, isCurrency = false) => {
    if (lang === 'en') {
      return isCurrency ? `৳${num.toLocaleString()}` : num.toString();
    }
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const str = num.toString();
    const bnStr = str.split('').map(char => {
      if (char === '.') return '.';
      const digit = parseInt(char, 10);
      return isNaN(digit) ? char : bnDigits[digit];
    }).join('');
    return isCurrency ? `৳${bnStr}` : bnStr;
  };

  return (
    <div id="simulator-container" className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1f293d]">
        <div>
          <span className="text-xs font-mono text-[#10b981] font-semibold uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-full">
            {t('sim_widget_badge')}
          </span>
          <h3 className="text-xl font-display font-bold text-white mt-2">
            {t('sim_widget_title')}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {t('sim_widget_desc')}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 self-start sm:self-center bg-[#1e293b] hover:bg-[#334155] text-xs text-gray-300 font-medium py-1.5 px-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          aria-label="Reset Simulator"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t('sim_reset')}
        </button>
      </div>

      {/* Dynamic Alert Panel */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-5 p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-2.5"
            role="alert"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs text-emerald-300 leading-relaxed font-medium">
              {notification}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid: Stats on top */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0b0f19] p-3.5 rounded-xl border border-[#1f293d]">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500">{t('sim_total_grocery')}</span>
          <div className="text-lg font-display font-bold text-white mt-1">{formatValue(totalGrocery, true)}</div>
          <span className="text-[9px] text-gray-400 block mt-0.5">{t('sim_total_grocery_sub')}</span>
        </div>
        <div className="bg-[#0b0f19] p-3.5 rounded-xl border border-[#1f293d]">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500">{t('sim_total_meals')}</span>
          <div className="text-lg font-display font-bold text-[#3b82f6] mt-1">
            {formatValue(totalMeals)} {lang === 'en' ? 'Meals' : 'টি মিল'}
          </div>
          <span className="text-[9px] text-gray-400 block mt-0.5">{t('sim_total_meals_sub')}</span>
        </div>
        <div className="bg-[#0b0f19] p-3.5 rounded-xl border border-[#1f293d]">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500">{t('sim_active_rate')}</span>
          <div className="text-lg font-display font-bold text-emerald-400 mt-1">{formatValue(mealRate, true)}</div>
          <span className="text-[9px] text-gray-400 block mt-0.5">{t('sim_active_rate_sub')}</span>
        </div>
        <div className="bg-[#0b0f19] p-3.5 rounded-xl border border-[#1f293d]">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500">{t('sim_fixed_cost')}</span>
          <div className="text-lg font-display font-bold text-amber-500 mt-1">{formatValue(FIXED_COSTS_PER_HEAD, true)}</div>
          <span className="text-[9px] text-gray-400 block mt-0.5">{t('sim_fixed_cost_sub')}</span>
        </div>
      </div>

      {/* Grid: Actions & Balances / Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Actions & Balances (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-display font-bold text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t('sim_live_actions')}
            </h4>
            
            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={handleAddGrocery}
                className="flex items-center gap-2 justify-center bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl p-3 text-xs font-semibold tracking-wide transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                {t('sim_action_grocery')}
              </button>
              <button
                onClick={handleAddUtility}
                className="flex items-center gap-2 justify-center bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-xl p-3 text-xs font-semibold tracking-wide transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Plus className="w-4 h-4 shrink-0" />
                {t('sim_action_utility')}
              </button>
              <button
                onClick={handleRecordPayment}
                className="flex items-center gap-2 justify-center bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl p-3 text-xs font-semibold tracking-wide transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <DollarSign className="w-4 h-4 shrink-0" />
                {t('sim_action_rent')}
              </button>
              <button
                onClick={handleMarkMeals}
                className="flex items-center gap-2 justify-center bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-xl p-3 text-xs font-semibold tracking-wide transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Utensils className="w-4 h-4 shrink-0" />
                {t('sim_action_meals')}
              </button>
            </div>

            {/* Financial Ledger */}
            <h4 className="text-sm font-display font-bold text-white mb-3">
              {t('sim_ledger_title')}
            </h4>
            
            <div className="space-y-2.5">
              {members.map((member) => {
                const { cost, paid, balance, due } = getMemberFinancials(member);
                return (
                  <div
                    key={member.name}
                    className="bg-[#0b0f19] p-3 rounded-xl border border-[#1f293d] flex items-center justify-between gap-3 text-xs transition-all hover:bg-[#0e1422]"
                  >
                    <div className="flex items-center gap-2.5">
                      <dotlottie-wc
                        src="./profile.lottie"
                        background="transparent"
                        speed="1"
                        style={{ width: '48px', height: '48px' }}
                        loop
                        autoplay
                      />
                      <div>
                        <div className="font-semibold text-white flex items-center gap-1.5">
                          {member.name}
                          {member.role === 'admin' && (
                            <span className="text-[9px] bg-emerald-500/15 text-emerald-400 font-mono px-1.5 py-0.2 rounded font-medium uppercase">
                              {t('sim_admin_badge')}
                            </span>
                          )}
                          {member.role === 'cook' && (
                            <span className="text-[9px] bg-purple-500/15 text-purple-400 font-mono px-1.5 py-0.2 rounded font-medium uppercase">
                              {t('sim_cook_badge')}
                            </span>
                          )}
                        </div>
                        {member.role !== 'cook' && (
                          <div className="text-gray-400 text-[10px] mt-0.5">
                            {formatValue(member.meals)} {lang === 'en' ? 'Meals' : 'টি মিল'} | {lang === 'en' ? 'Paid' : 'পরিশোধ করেছেন'}: {formatValue(paid, true)}
                          </div>
                        )}
                        {member.role === 'cook' && (
                          <div className="text-gray-400 text-[10px] mt-0.5">
                            {t('sim_cook_log')}
                          </div>
                        )}
                      </div>
                    </div>

                    {member.role !== 'cook' && (
                      <div className="text-right">
                        <div className="font-mono text-[10px] text-gray-400">
                          {t('sim_total_cost_label')}: {formatValue(Math.round(cost), true)}
                        </div>
                        {balance >= 0 ? (
                          <div className="flex items-center gap-1 justify-end text-emerald-400 font-bold font-mono mt-0.5">
                            <TrendingUp className="w-3 h-3" />
                            +{formatValue(balance, true)}
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 justify-end text-rose-400 font-bold font-mono mt-0.5">
                            <TrendingDown className="w-3 h-3" />
                            {t('sim_due_label')}: {formatValue(due, true)}
                          </div>
                        )}
                      </div>
                    )}

                    {member.role === 'cook' && (
                      <div className="text-right text-gray-500 font-mono text-[11px] font-medium flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                        {t('sim_verified')}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 p-3.5 bg-slate-900/40 rounded-xl border border-slate-800 text-[11px] text-gray-400 leading-relaxed text-balance">
            💡 {t('sim_excel_slayer_tip')}
          </div>
        </div>

        {/* Live Timeline (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0b0f19] p-4 rounded-xl border border-[#1f293d] flex flex-col">
          <h4 className="text-sm font-display font-bold text-white mb-3.5 flex items-center justify-between">
            <span>{t('sim_timeline_title')}</span>
            <span className="text-[10px] font-mono text-gray-500 font-normal">{t('sim_timeline_sub')}</span>
          </h4>
          
          <div className="flex-1 space-y-3 max-h-[380px] overflow-y-auto pr-1">
            <AnimatePresence initial={false}>
              {timeline.map((item) => {
                const { action, detail, formattedAmount } = getLocalizedEvent(item);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, x: -20, height: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="border-l-2 border-[#1e293b] pl-3.5 py-1 relative text-xs"
                  >
                    {/* Category dot/icon decorator */}
                    <span className={`absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full border border-[#0b0f19] ${
                      item.category === 'grocery' ? 'bg-emerald-400' :
                      item.category === 'utility' ? 'bg-blue-400' :
                      item.category === 'payment' ? 'bg-amber-400' : 'bg-purple-400'
                    }`} />
                    
                    <div className="flex items-center justify-between gap-1 text-[10px] text-gray-500 font-mono">
                      <span>{item.time}</span>
                      <span className="font-semibold">{item.avatar} {item.user}</span>
                    </div>

                    <div className="text-white font-medium mt-1">
                      {action} <span className="text-gray-400 font-normal">({detail})</span>
                    </div>

                    {formattedAmount && (
                      <div className="mt-1 font-mono text-[10px] text-emerald-400 font-bold bg-emerald-400/5 py-0.5 px-1.5 rounded-md inline-block">
                        {formattedAmount}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-3 border-t border-[#1f293d] flex justify-end">
            <a
              href="#pricing"
              className="text-[11px] text-[#10b981] font-semibold flex items-center gap-1 hover:underline"
            >
              {t('sim_timeline_footer')}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
