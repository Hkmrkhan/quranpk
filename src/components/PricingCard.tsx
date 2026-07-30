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
      className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
        plan.popular
          ? "bg-sage-900 text-cream-50 shadow-2xl scale-105 border-2 border-gold-400 z-10 ring-2 ring-gold-400/30"
          : "bg-cream-50 text-sage-900 shadow-sm hover:shadow-xl border border-sage-300"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-400 text-sage-900 font-extrabold text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
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
            className={`text-sm font-medium leading-relaxed ${
              plan.popular ? "text-sage-100" : "text-sage-900"
            }`}
          >
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8 pb-6 border-b border-sage-200/50">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-gold-500">$</span>
            <span
              className={`font-serif text-5xl font-extrabold tracking-tight ${
                plan.popular ? "text-cream-50" : "text-sage-900"
              }`}
            >
              {plan.priceUSD}
            </span>
            <span
              className={`text-sm font-bold ${
                plan.popular ? "text-gold-300" : "text-sage-800"
              }`}
            >
              /{plan.billingPeriod}
            </span>
          </div>
          <span
            className={`text-xs font-bold block mt-1.5 ${
              plan.popular ? "text-gold-400" : "text-gold-600"
            }`}
          >
            USD billed monthly • No setup fees
          </span>
        </div>

        {/* Feature List */}
        <ul className="space-y-3.5 mb-8 text-sm sm:text-base font-semibold">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div
                className={`p-1 rounded-full mt-0.5 flex-shrink-0 ${
                  plan.popular
                    ? "bg-gold-500/25 text-gold-400"
                    : "bg-sage-100 text-sage-900 border border-sage-300"
                }`}
              >
                <FiCheck className="w-4 h-4" />
              </div>
              <span
                className={
                  plan.popular ? "text-cream-50 font-medium" : "text-sage-900 font-semibold"
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
        <a
          href="/#contact-section"
          className={`block w-full text-center py-3.5 px-6 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 shadow-md ${
            plan.popular
              ? "bg-gold-400 text-sage-900 hover:bg-gold-300 hover:shadow-lg"
              : "bg-sage-700 text-cream-50 hover:bg-sage-800"
          }`}
        >
          {plan.ctaText || "Start 3-Day Free Trial"}
        </a>
        <p
          className={`text-xs font-semibold text-center mt-3 ${
            plan.popular ? "text-sage-200" : "text-sage-800"
          }`}
        >
          Cancel anytime. Satisfaction guaranteed.
        </p>
      </div>
    </div>
  );
}
