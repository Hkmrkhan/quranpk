import Link from "next/link";
import { FiCheck, FiStar } from "react-icons/fi";

export interface PricingPlan {
  id: string;
  name: string;
  priceUSD: number;
  billingPeriod: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
}

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between ${
        plan.popular
          ? "bg-sage-900 text-cream-100 shadow-2xl scale-105 border-2 border-gold-400 z-10"
          : "bg-cream-50 text-sage-900 shadow-sm hover:shadow-xl border border-sage-200/80"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-400 text-sage-900 font-bold text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
          <FiStar className="w-3.5 h-3.5 fill-sage-900" />
          Most Popular
        </span>
      )}

      <div>
        {/* Header */}
        <div className="mb-6">
          <h3
            className={`font-serif text-2xl font-bold mb-2 ${
              plan.popular ? "text-cream-50" : "text-sage-900"
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`text-xs leading-relaxed ${
              plan.popular ? "text-sage-200/80" : "text-sage-600"
            }`}
          >
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8 pb-6 border-b border-sage-200/30">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-gold-500">$</span>
            <span
              className={`font-serif text-5xl font-extrabold tracking-tight ${
                plan.popular ? "text-cream-50" : "text-sage-900"
              }`}
            >
              {plan.priceUSD}
            </span>
            <span
              className={`text-sm ${
                plan.popular ? "text-sage-300" : "text-sage-600"
              }`}
            >
              /{plan.billingPeriod}
            </span>
          </div>
          <span className="text-[11px] text-gold-500 font-medium block mt-1">
            USD billed monthly • No setup fees
          </span>
        </div>

        {/* Feature List */}
        <ul className="space-y-3.5 mb-8 text-sm">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div
                className={`p-1 rounded-full mt-0.5 flex-shrink-0 ${
                  plan.popular
                    ? "bg-gold-500/20 text-gold-400"
                    : "bg-sage-100 text-sage-700"
                }`}
              >
                <FiCheck className="w-3.5 h-3.5" />
              </div>
              <span
                className={
                  plan.popular ? "text-sage-100/90" : "text-sage-800"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div>
        <Link
          href="/contact"
          className={`block w-full text-center py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 shadow-md ${
            plan.popular
              ? "bg-gold-400 text-sage-900 hover:bg-gold-300 hover:shadow-lg"
              : "bg-sage-700 text-cream-50 hover:bg-sage-800"
          }`}
        >
          {plan.ctaText || "Start 3-Day Free Trial"}
        </Link>
        <p className="text-[11px] text-center mt-2.5 opacity-60">
          Cancel anytime. Satisfaction guaranteed.
        </p>
      </div>
    </div>
  );
}
