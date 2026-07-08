/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Lock, Eye, Server, RefreshCw, FileText } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function PrivacyView() {
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
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                ব্যাসারঅ্যাপ কমপ্লায়েন্স রেগুলেশন
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                প্রাইভেসী পলিসি (গোপনীয়তা নীতি)
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                সর্বশেষ আপডেট: ৮ জুলাই, ২০২৬ • ভার্সন ১.১.২ • জিডিপিআর ও সিসিপিএ কমপ্লায়েন্স
              </p>
            </header>

            {/* Executive Summary (Bangla) */}
            <div className="my-8 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-200 leading-relaxed font-medium">
                <strong>আমাদের অঙ্গীকার</strong>: আমরা বিশ্বাস করি মেস বা শেয়ার্ড হোম অ্যাকাউন্ট আপনার সম্পূর্ণ ব্যক্তিগত বিষয়। ব্যাসারঅ্যাপ কখনোই আপনার রুমের বাজেট টেবিল, ব্যক্তিগত লেনদেন, বা রান্নাঘরের মিল এন্ট্রি লকগুলো বিজ্ঞাপনদাতাদের কাছে বিক্রি, লিজ বা অন্য কোনো মাধ্যমে বাণিজ্যিক উদ্দেশ্যে প্রকাশ করবে না। আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং কেবল আপনাদের মধ্যেই সীমাবদ্ধ থাকবে।
              </p>
            </div>

            {/* Content body (Bangla) */}
            <div className="space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
              
              <section aria-labelledby="section-info">
                <h2 id="section-info" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  ১. আমরা যে সকল তথ্য সংগ্রহ করি
                </h2>
                <p className="mb-3">
                  শেয়ার্ড লিভিং প্ল্যাটফর্মটি সঠিকভাবে পরিচালনার জন্য ব্যাসারঅ্যাপ রুমের বিল সমন্বয় করতে এবং অ্যাক্টিভ ফুড ক্যালেন্ডার ট্র্যাক করার জন্য প্রয়োজনীয় সর্বনিম্ন তথ্যগুলো প্রসেস করে থাকে:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>
                    <strong>ইউজার অ্যাকাউন্ট ডিটেইলস</strong>: সম্পূর্ণ নাম, ইমেইল এড্রেস, পাসওয়ার্ড হ্যাশ এবং ঐচ্ছিক প্রোফাইল ইমেজ বা মোবাইল ব্যাংকিং নম্বর (যেমন: বিকাশ ওয়ালেট নম্বর)।
                  </li>
                  <li>
                    <strong>বাসার রুম কনফিগারেশন</strong>: বাসার নাম, রুম ভাড়ার পরিমাণ এবং অন্যান্য শেয়ার্ড ফিক্সড কস্ট (ওয়াইফাই, গ্যাস, পানি, সিকিউরিটি, বুয়ার বেতন ইত্যাদি)।
                  </li>
                  <li>
                    <strong>দৈনিক অ্যাক্টিভিটি লেজার</strong>: বাজার খরচ (জিনিসপত্রের নাম, ওজন, দাম), ইউটিলিটি খরচ, মেম্বারদের ক্যাশ ট্রানজেকশন এন্ট্রি এবং ঐচ্ছিক স্ক্রিনশট ইউআরএল।
                  </li>
                  <li>
                    <strong>মিল ক্যালেন্ডার</strong>: রুমমেটদের দৈনিক সকালের নাস্তা, দুপুরের খাবার এবং রাতের খাবারের উপস্থিতি এন্ট্রি, যা ইউজার বা ভেরিফাইড কুক সরাসরি এন্ট্রি করে থাকেন।
                  </li>
                </ul>
              </section>

              <section aria-labelledby="section-usage">
                <h2 id="section-usage" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-400" />
                  ২. আমরা যেভাবে আপনার তথ্য ব্যবহার করি
                </h2>
                <p className="mb-2">
                  ব্যাসারঅ্যাপ সংগৃহীত তথ্যগুলো শুধুমাত্র অ্যাপের স্বাভাবিক হিসাব-নিকাশ পরিচালনা এবং স্বচ্ছতা বজায় রাখার জন্য ব্যবহার করে:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>মোট বাজার খরচকে মোট মিলের সংখ্যা দিয়ে ভাগ করে লাইভ মিল রেট বের করা।</li>
                  <li>বকেয়া বা জমার হিসাব করার জন্য ডায়নামিক মাসিক ফাইন্যান্সিয়াল লেজার তৈরি করা।</li>
                  <li>এডমিনের চাহিদা অনুযায়ী রুমের সম্পূর্ণ ডাটার সুরক্ষিত এক্সপোর্টেবল ফাইল (PDF, Excel, এবং CSV) তৈরি করা।</li>
                  <li>অ্যাপের মধ্যকার অটোমেটেড অ্যালার্ট পাঠানো (যেমন: কুক মিল মার্ক করলে বা নতুন বাজার খরচ যুক্ত করা হলে)।</li>
                </ul>
              </section>

              <section aria-labelledby="section-cookies">
                <h2 id="section-cookies" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-purple-400" />
                  ৩. লোকাল স্টোরেজ এবং কুকিজ
                </h2>
                <p>
                  ইন্টারনেট সংযোগ না থাকলেও সেশন সচল রাখার জন্য ব্যাসারঅ্যাপ অফলাইন-ফার্স্ট আর্কিটেকচার এবং নেটিভ লোকাল স্টোরেজ (যেমন: indexDB) ব্যবহার করে। আপনাকে নিরাপদে সাইন-ইন রাখার জন্য আমরা প্রয়োজনীয় কুকিজ ব্যবহার করি। আমরা কোনো ট্র্যাকিং কুকি বা থার্ড-পার্টি মার্কেটিং ট্যাগ ব্যবহার করি না।
                </p>
              </section>

              <section aria-labelledby="section-sharing">
                <h2 id="section-sharing" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  ৪. ডাটা শেয়ারিং এবং নিরাপত্তা
                </h2>
                <p className="mb-3">
                  গোপনীয়তা নিশ্চিত করতে আমরা সর্বোচ্চ মানের এনক্রিপশন স্ট্যান্ডার্ড (ডাটা স্টোরেজের জন্য AES-256 এবং ডাটা আদান-প্রদানের জন্য HTTPS/TLS) ব্যবহার করি:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li><strong>কোনো বাহ্যিক বিজ্ঞাপন নেই</strong>: বিজ্ঞাপন দেখানোর জন্য আপনার তথ্য কখনো অ্যানালাইসিস বা ব্যবহার করা হয় না।</li>
                  <li><strong>রোল-ভিত্তিক সুরক্ষা</strong>: প্রতিটি বাসার ডাটা আলাদা এবং সুরক্ষিত থাকে। অন্য কোনো রুম বা বাসার সদস্যরা আপনার বাসার ফাইন্যান্সিয়াল সেটিংস বা পেমেন্ট হিস্ট্রি দেখতে পারে না।</li>
                  <li><strong>সুরক্ষিত থার্ড-পার্টি এপিআই প্রক্সি</strong>: সকল পেমেন্ট ইন্টারঅ্যাকশন বা এপিআই কল সুরক্ষিত ও এনক্রিপ্টেড ব্যাকএন্ড চ্যানেলের মাধ্যমে সম্পন্ন হয়, যা ব্রাউজার লেভেলে সিকিউরিটি নিশ্চিত করে।</li>
                </ul>
              </section>

              <section aria-labelledby="section-rights">
                <h2 id="section-rights" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  ৫. আপনার অধিকার এবং ডাটা এক্সপোর্ট
                </h2>
                <p>
                  আপনার সমস্ত ডাটার সম্পূর্ণ মালিকানা কেবলই আপনার। আপনি যেকোনো সময় আপনার ব্যক্তিগত ইউজার অ্যাকাউন্ট ডিলিট করতে পারেন, যেকোনো বাসা থেকে নিজেকে রিমুভ করতে পারেন অথবা বাসার সমস্ত লগ ইনস্ট্যান্ট মুছে ফেলতে পারেন। এডমিনগণ যেকোনো সময় বাসার সমস্ত লেজার হিস্ট্রির সম্পূর্ণ আর্কাইভ ডাউনলোড করে রাখতে পারেন।
                </p>
                <p className="mt-3">
                  আপনার যদি কোনো প্রশ্ন থাকে বা জিডিপিআর অনুযায়ী ডাটা মুছে ফেলার অনুরোধ করতে চান, তবে আমাদের কমপ্লায়েন্স অপারেশন ডেস্কের সাথে ইমেইলে যোগাযোগ করুন: <span className="text-white underline">privacy@basarapp.com</span>।
                </p>
              </section>

            </div>
          </>
        ) : (
          <>
            {/* Header (English) */}
            <header className="pb-8 border-b border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold mb-4">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                BASARAPP COMPLIANCE REGULATION
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Last Updated: July 08, 2026 • Version 1.1.2 • Regulatory GDPR & CCPA Compliance
              </p>
            </header>

            {/* Executive Summary (English) */}
            <div className="my-8 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-200 leading-relaxed font-medium">
                <strong>Our Commitment</strong>: We believe shared home accounts are personal. BasarApp will never sell, lease, or monetize your room budget tables, individual transactions, or kitchen meal attendance logs to advertisers. Your data remains strictly sandboxed.
              </p>
            </div>

            {/* Content body (English) */}
            <div className="space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
              
              <section aria-labelledby="section-info">
                <h2 id="section-info" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  1. Information We Collect
                </h2>
                <p className="mb-3">
                  To operate the shared living platform effectively, BasarApp processes minimal information necessary to balance room bills and track active food calendars:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>
                    <strong>User Account Details</strong>: Full Name, email address, password hash, and optional profile image or local banking handle (e.g., bKash wallet number).
                  </li>
                  <li>
                    <strong>Basar Room Configuration</strong>: Basar Name, room rent pricing parameters, and shared fixed costs (WiFi, gas, water, security, cook salary).
                  </li>
                  <li>
                    <strong>Daily Activity Ledger</strong>: Grocery logs (item names, weights, prices), utility expense files, member cash settlement entries, and optional screenshot URLs.
                  </li>
                  <li>
                    <strong>Meal Calendar</strong>: Breakfast, lunch, and dinner attendance metrics per roommate per day, logged directly by users or verified cooks.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="section-usage">
                <h2 id="section-usage" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-400" />
                  2. How We Use Your Data
                </h2>
                <p className="mb-2">
                  BasarApp uses the collected information exclusively to power standard in-app calculations and ensure transparency:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>Generating live meal rates by dividing active room grocery investments by meal counts.</li>
                  <li>Compiling dynamic monthly financial ledgers to compute outstanding dues and credits.</li>
                  <li>Generating secure exportable room archives (PDF, Excel, and CSV) upon Admin demand.</li>
                  <li>Sending automated in-app alerts (e.g., Cook marking meals, newly added grocery purchases).</li>
                </ul>
              </section>

              <section aria-labelledby="section-cookies">
                <h2 id="section-cookies" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-purple-400" />
                  3. Local Persistence & Cookies
                </h2>
                <p>
                  BasarApp operates an offline-first architecture utilizing native local storage (MMKV, SQLite, and indexDB) to preserve active session state during connectivity dropouts. We employ essential cookies to keep you signed in safely. We strictly avoid tracking cookies or third-party marketing tags.
                </p>
              </section>

              <section aria-labelledby="section-sharing">
                <h2 id="section-sharing" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  4. Data Sharing & Security
                </h2>
                <p className="mb-3">
                  We employ military-grade encryption standards (AES-256 for data at rest, HTTPS/TLS for transmission) to guarantee privacy:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li><strong>Zero External Ads</strong>: Your data is never analyzed to serve ads.</li>
                  <li><strong>Role-Based Shielding</strong>: Flatmates cannot view the direct financial settings or payment histories of other rooms, ensuring strict logical separation.</li>
                  <li><strong>Secure Third-Party API Proxies</strong>: All payment interactions (bKash/Nagad APIs) route through secure, encrypted backend tunnels. Your keys never touch client browsers.</li>
                </ul>
              </section>

              <section aria-labelledby="section-rights">
                <h2 id="section-rights" className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  5. Your Rights & Data Exportation
                </h2>
                <p>
                  You maintain absolute ownership of your data. You can delete your personal user account, withdraw from any Basar, or wipe room logs instantly. Admins can download a full archive of the room&apos;s ledger history at any time.
                </p>
                <p className="mt-3">
                  If you have any questions or require GDPR data erasure requests, contact our Compliance Operations Desk at <span className="text-white underline">privacy@basarapp.com</span>.
                </p>
              </section>

            </div>
          </>
        )}

      </article>
    </main>
  );
}
