/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, AlertTriangle, Users, BookOpen, ShieldCheck } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function TermsView() {
  const { lang } = useLanguage();

  return (
    <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="main-content">
      <article className="bg-[#121824] border border-[#1f293d] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Glow Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {lang === 'bn' ? (
          <>
            {/* Header (Bangla) */}
            <header className="pb-8 border-b border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold mb-4">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                ব্যাসারঅ্যাপ সার্ভিস চুক্তি
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                টার্মস অফ সার্ভিস (ব্যবহারের শর্তাবলী)
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                সর্বশেষ আপডেট: ৮ জুলাই, ২০২৬ • ভার্সন ১.১.০ • ইউজার লাইসেন্সিং চুক্তি
              </p>
            </header>

            {/* Executive Summary (Bangla) */}
            <div className="my-8 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-200 leading-relaxed font-medium">
                <strong>প্ল্যাটফর্মের উদ্দেশ্য</strong>: ব্যাসারঅ্যাপ রুমমেটদের নিজেদের মধ্যকার মেস বা বাসার হিসাব-নিকাশ সহজ ও স্বচ্ছভাবে পরিচালনা করার একটি কোলাবোরেটিভ টুল। এটি কোনো ব্যাংক, ঋণদানকারী প্রতিষ্ঠান বা লাইসেন্সকৃত বাণিজ্যিক হিসাবরক্ষণ সফটওয়্যার নয়।
              </p>
            </div>

            {/* Content body (Bangla) */}
            <div className="space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
              
              <section aria-labelledby="section-licensing">
                <h2 id="section-licensing" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  ১. গ্রহণযোগ্য ব্যবহারের লাইসেন্স
                </h2>
                <p className="mb-3">
                  ব্যাসারঅ্যাপ ব্যবহারের মাধ্যমে আপনি সম্মতি দিচ্ছেন যে, আপনি এটি কেবল বৈধ পারিবারিক বা হোস্টেল রুমমেটদের কোলাবোরেশনের জন্য ব্যবহার করবেন। নিম্নোক্ত কাজগুলো করা থেকে বিরত থাকতে হবে:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>রুমমেটদের দেনা-পাওনার হিসাব পরিবর্তন করার উদ্দেশ্যে কোনো ভুয়া বা কাল্পনিক ফাইন্যান্সিয়াল এন্ট্রি দেওয়া।</li>
                  <li>কমার্শিয়াল বা বাণিজ্যিক প্রচার, সম্পর্কহীন কোনো ঘোষণা বা অযাচিত বিজ্ঞাপন দিয়ে প্ল্যাটফর্মে কোনো প্রকার স্প্যামিং করা।</li>
                  <li>আমাদের এপিআই সার্ভার স্ক্র্যাপ করার চেষ্টা, রিভার্স-ইঞ্জিনিয়ারিং করা বা সার্ভারে লোড-টেস্ট করা।</li>
                </ul>
              </section>

              <section aria-labelledby="section-roles">
                <h2 id="section-roles" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  ২. ইউজারের ভূমিকা ও দায়বদ্ধতা
                </h2>
                <p className="mb-2">
                  রুমের তথ্যের নির্ভরযোগ্যতা বজায় রাখতে আমাদের সিস্টেমে রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল ব্যবহার করা হয়েছে:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>
                    <strong>বাসার এডমিন</strong>: সঠিক রুম ভাড়া এন্ট্রি করা, মাসিক ফিক্সড কস্ট সেট করা এবং মাস শেষে হিসাব বন্ধ করার জন্য “Close Month” ট্রানজেকশন সিল করার সম্পূর্ণ দায়িত্ব এডমিনের।
                  </li>
                  <li>
                    <strong>রুমমেটগণ</strong>: নিজেদের ব্যক্তিগত বাজার খরচ, ইউটিলিটি বিল এবং পেমেন্টের হিসাব নির্ভুলভাবে রেকর্ড করার জন্য রুমমেটগণ দায়ী থাকবেন।
                  </li>
                  <li>
                    <strong>মেস কুক (রান্নার বুয়া)</strong>: রান্নার কুককে শুধুমাত্র দৈনিক মিলের সংখ্যা মার্ক করার অনুমতি দেওয়া হয়েছে। কুক অ্যাকাউন্ট থেকে কোনো আর্থিক হিসাব পরিবর্তন করা যাবে না।
                  </li>
                </ul>
              </section>

              <section aria-labelledby="section-settlements">
                <h2 id="section-settlements" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  ৩. পেমেন্ট সেটেলমেন্ট এবং বিকাশ এপিআই
                </h2>
                <p>
                  স্থানান্তর প্রক্রিয়া সহজ করতে ব্যাসারঅ্যাপে বিভিন্ন লোকাল মোবাইল ওয়ালেট (যেমন: বিকাশ, নগদ, রকেট) ইউটিলিটি ব্যবহারের সুযোগ রয়েছে। তবে ব্যাসারঅ্যাপ কোনো টাকা নিজের কাছে গচ্ছিত বা এসক্রো (escrow) করে রাখে না। সমস্ত পেমেন্ট সরাসরি রুমমেটদের নিজেদের মোবাইল নম্বর বা ব্যাংক অ্যাকাউন্টে সম্পন্ন হয়। যেকোনো ভুল নম্বর, ভুল পেমেন্ট বা হিসাবের গড়মিলের জন্য ব্যাসারঅ্যাপ কোনোভাবেই দায়ী থাকবে না।
                </p>
              </section>

              <section aria-labelledby="section-liability">
                <h2 id="section-liability" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  ৪. ওয়ারেন্টি এবং দায়ের অস্বীকৃতি
                </h2>
                <p className="mb-3">
                  প্ল্যাটফর্মটি সম্পূর্ণ “AS IS” এবং “AS AVAILABLE” ভিত্তিতে প্রদান করা হয়েছে। প্রচলিত আইন অনুযায়ী, ব্যাসারঅ্যাপ কোনো প্রকার প্রত্যক্ষ বা পরোক্ষ ওয়ারেন্টি প্রদান করে না:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>আমরা do not guarantee শতভাগ নিরবচ্ছিন্ন সার্ভার অ্যাক্সেস বা অফলাইন সিঙ্কের নিশ্চয়তা প্রদান করতে পারি না।</li>
                  <li>কোনো ভুল হিসাব-নিকাশ, হারিয়ে যাওয়া ডায়রি লগ বা মেম্বারদের ভুল তথ্যের কারণে রুমমেটদের মধ্যে সৃষ্ট যেকোনো মানসিক অস্থিরতা বা পারস্পরিক ঝগড়া-বিবাদের জন্য ব্যাসারঅ্যাপ দায়ী নয়।</li>
                  <li>আপনার ভাড়া বাসার কোনো ক্ষয়ক্ষতি, রান্নার কুকের চাকরি ছেড়ে চলে যাওয়া, বাড়িওয়ালার ভাড়া বৃদ্ধি বা বাসা ছেড়ে দেওয়ার মতো ঘটনার ক্ষেত্রে ব্যাসারঅ্যাপকে সম্পূর্ণ দায়মুক্ত রাখতে আপনি সম্মতি দিচ্ছেন।</li>
                </ul>
              </section>

              <section aria-labelledby="section-governing">
                <h2 id="section-governing" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  ৫. পরিচালনা সংক্রান্ত আইন এবং বিরোধ নিষ্পত্তি
                </h2>
                <p>
                  এই টার্মস অফ সার্ভিস গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন অনুযায়ী পরিচালিত হবে। এই চুক্তি সংক্রান্ত যেকোনো আইনি বিরোধ বা দাবি আদালতে যাওয়ার পূর্বে ঢাকা, বাংলাদেশে সালিশের (arbitration) মাধ্যমে সমঝোতার চেষ্টা করা হবে।
                </p>
                <p className="mt-3">
                  আমাদের সার্ভিস কন্ট্রাক্ট বা ব্যবহারের শর্তাবলী নিয়ে কোনো প্রশ্ন থাকলে সরাসরি ইমেইল করতে পারেন: <span className="text-white underline">legal@basarapp.com</span>।
                </p>
              </section>

            </div>
          </>
        ) : (
          <>
            {/* Header (English) */}
            <header className="pb-8 border-b border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold mb-4">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                BASARAPP SERVICE CONTRACT
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Terms of Service
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Last Updated: July 08, 2026 • Version 1.1.0 • User Licensing Agreement
              </p>
            </header>

            {/* Executive Summary (English) */}
            <div className="my-8 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-200 leading-relaxed font-medium">
                <strong>Platform Purpose</strong>: BasarApp is designed as a collaborative, transparency-focused tool for flatmates to self-manage room ledgers. It is not an officially licensed financial deposit bank, lending service, or commercial accounting software.
              </p>
            </div>

            {/* Content body (English) */}
            <div className="space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
              
              <section aria-labelledby="section-licensing">
                <h2 id="section-licensing" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  1. Acceptable Use License
                </h2>
                <p className="mb-3">
                  By accessing BasarApp, you agree to utilize the platform exclusively for legitimate home and dormitory roommate collaboration. You must not:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>Input fraudulent, imaginary, or deceptive financial entries to manipulate roommate debts.</li>
                  <li>Spam co-living rooms with commercial solicitations, unrelated announcements, or unsolicited ads.</li>
                  <li>Attempt to scrape, reverse-engineer, or load-test the API servers or index structures.</li>
                </ul>
              </section>

              <section aria-labelledby="section-roles">
                <h2 id="section-roles" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  2. User Roles & Accountability
                </h2>
                <p className="mb-2">
                  Our system enforces a strict role-based permission architecture to ensure room integrity:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>
                    <strong>Basar Admin</strong>: Has complete responsibility for entering correct room rent values, setting monthly fixed costs, and executing the &ldquo;Close Month&rdquo; transaction seal.
                  </li>
                  <li>
                    <strong>Flatmates</strong>: Are accountable for accurately logging personal grocery purchases, utility bills, and payment records.
                  </li>
                  <li>
                    <strong>Cook</strong>: Is granted access solely to check-off meal counts. Cook accounts cannot perform financial modifications.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="section-settlements">
                <h2 id="section-settlements" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  3. Payment Settlements & bKash API
                </h2>
                <p>
                  BasarApp offers interactive localized wallet utilities (bKash, Nagad, Rocket) to simplify transfers. However, BasarApp does not hold, secure, or escrow funds. All cash payments, bank wires, or mobile money transfers are executed directly between roommates. BasarApp is not liable for errors, transfers to incorrect numbers, or cash discrepancies.
                </p>
              </section>

              <section aria-labelledby="section-liability">
                <h2 id="section-liability" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  4. Disclaimer of Warranties & Liability
                </h2>
                <p className="mb-3">
                  THE PLATFORM IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, BASARAPP DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>We do not guarantee 100% uninterrupted server runtime or offline sync synchronization.</li>
                  <li>We are not responsible for any mental anguish or roommate disputes arising from incorrect calculations, lost diary logs, or unverified entries.</li>
                  <li>You agree to hold BasarApp harmless from any physical property damage, cook departures, rent hikes, or lease terminations in your co-living flat.</li>
                </ul>
              </section>

              <section aria-labelledby="section-governing">
                <h2 id="section-governing" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  5. Governing Law & Dispute Resolution
                </h2>
                <p>
                  These Terms of Service are governed by the laws of the People&apos;s Republic of Bangladesh. Any legal disputes or claims arising out of this agreement will be settled amicably through arbitration in Dhaka, Bangladesh, before resorting to courts.
                </p>
                <p className="mt-3">
                  If you have any queries about our service contract, feel free to email our legal council team at <span className="text-white underline">legal@basarapp.com</span>.
                </p>
              </section>

            </div>
          </>
        )}

      </article>
    </main>
  );
}
