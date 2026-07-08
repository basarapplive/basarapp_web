/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppRoute = 'home' | 'privacy' | 'terms';
export type Language = 'en' | 'bn';

export interface TimelineEvent {
  id: string;
  time: string;
  user: string;
  avatar: string;
  action: string;
  detail?: string;
  amount?: number;
  category: 'grocery' | 'meal' | 'utility' | 'payment';
}

export interface MemberBalance {
  name: string;
  role: 'admin' | 'flatmate' | 'cook';
  avatar: string;
  meals: number;
  groceryCost: number;
  utilityPaid: number;
  paymentPaid: number;
  balance: number; // calculated dynamically
}

export interface BasarConfig {
  name: string;
  roomRent: number;
  wifi: number;
  gas: number;
  waste: number;
  water: number;
  cleaning: number;
  cookSalary: number;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        background?: string;
        speed?: string;
        loop?: boolean;
        autoplay?: boolean;
      }, HTMLElement>;
    }
  }
}
