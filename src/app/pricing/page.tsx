import SectionHeading from "@/components/SectionHeading";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { FiCheck, FiX, FiShield, FiArrowRight } from "react-icons/fi";

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    priceUSD: 10,
    billingPeriod: "month",
    description: "Ideal for kids & beginners starting Norani Qaida & foundation reading.",
    features: [
      "2 Classes per Week (8/mo)",
      "30-Minute 1-on-1 Sessions",
      "Norani Qaida & Foundation Track",
      "Certified Native Arab Tutor",
      "Flexible Class Rescheduling",
      "Monthly Progress Reports",
    ],
    ctaText: "Choose Starter Plan ($10)",
  },
  {
    id: "standard",
    name: "Standard Plan",
    priceUSD: 20,
    billingPeriod: "month",
    description: "Our most popular track for steady Tajweed progression & fluent recitation.",
    features: [
      "3 Classes per Week (12/mo)",
      "30 to 45 Min Sessions",
      "Choice of Male or Female Tutor",
      "Tajweed & Recitation Assessment",
      "Free Learning Materials & PDFs",
      "Full Student Portal Access",
    ],
    popular: true,
    ctaText: "Choose Standard Plan ($20)",
  },
  {
    id: "intensive",
    name: "Intensive Hifz",
    priceUSD: 50,
    billingPeriod: "month",
    description: "Comprehensive daily memorization and Ijazah preparation.",
    features: [
      "5 Classes per Week (20/mo)",
      "45-Minute Intensive Sessions",
      "Senior Al-Azhar Certified Scholar",
      "Dedicated Revision Schedule",
      "Official Ijazah Certification Track",
      "Priority WhatsApp Tutor Access",
    ],
    ctaText: "Choose Intensive Track ($50)",
  },
];

const comparisonMatrix = [
  { feature: "Monthly Tuition Fee", starter: "$10 / mo", standard: "$20 / mo", intensive: "$50 / mo" },
  { feature: "Classes per Month", starter: "8 Classes", standard: "12 Classes", intensive: "20 Classes" },
  { feature: "Session Duration", starter: "30 Mins", standard: "30 - 45 Mins", intensive: "45 - 60 Mins" },
  { feature: "Norani Qaida Included", starter: true, standard: true, intensive: true },
  { feature: "Tutor Type", starter: "Certified Tutor", standard: "Native Scholar", intensive: "Senior Al-Azhar Scholar" },
  { feature: "1-on-1 Private Classroom", starter: true, standard: true, intensive: true },
  { feature: "Free PDF Worksheets", starter: true, standard: true, intensive: true },
  { feature: "Ijazah Sanad Track", starter: false, standard: "Add-on", intensive: true },
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-sage-900 text-cream-100 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <ScrollReveal direction="down">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30">
              Simple & Transparent
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
              Tuition Plans in US Dollars ($10, $20, $50)
            </h1>
            <p className="text-sage-200/80 text-base max-w-2xl mx-auto font-sans mt-2">
              Invest in your spiritual growth. No hidden enrollment fees, no contracts. Pause or switch plans anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, idx) => (
            <ScrollReveal key={plan.id} direction="up" delay={idx * 0.15}>
              <PricingCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Money Back Guarantee Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-cream-50 p-8 rounded-3xl border border-gold-400/60 shadow-md flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-gold-400/20 text-gold-600 border border-gold-400/40 flex items-center justify-center text-3xl flex-shrink-0">
              <FiShield />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl text-sage-900">
                100% Satisfaction & Money-Back Guarantee
              </h3>
              <p className="text-sage-700/80 text-sm leading-relaxed">
                If within your first 7 days of paid enrollment you are not completely satisfied with your tutor or course progression, we will refund your tuition in full with no questions asked.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Detailed Comparison"
          title="Plan Features Matrix"
          subtitle="Compare all features side-by-side to choose the right learning intensity."
        />

        <ScrollReveal direction="up">
          <div className="bg-cream-50 rounded-3xl border border-sage-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-sage-900 text-cream-50 font-serif border-b border-sage-800">
                    <th className="p-5 font-bold text-base">Plan Feature</th>
                    <th className="p-5 text-center font-bold">Starter ($10/mo)</th>
                    <th className="p-5 text-center font-bold text-gold-400">Standard ($20/mo)</th>
                    <th className="p-5 text-center font-bold">Intensive ($50/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-200/60 text-sage-800">
                  {comparisonMatrix.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-cream-50" : "bg-cream-100/60"}
                    >
                      <td className="p-5 font-medium">{row.feature}</td>
                      <td className="p-5 text-center font-semibold text-sage-900">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <FiCheck className="mx-auto text-sage-700 w-5 h-5" />
                          ) : (
                            <FiX className="mx-auto text-sage-400 w-4 h-4" />
                          )
                        ) : (
                          <span className="text-xs font-semibold">{row.starter}</span>
                        )}
                      </td>
                      <td className="p-5 text-center font-semibold text-sage-900 bg-gold-400/5">
                        {typeof row.standard === "boolean" ? (
                          row.standard ? (
                            <FiCheck className="mx-auto text-gold-600 w-5 h-5" />
                          ) : (
                            <FiX className="mx-auto text-sage-400 w-4 h-4" />
                          )
                        ) : (
                          <span className="text-xs font-bold text-sage-900">{row.standard}</span>
                        )}
                      </td>
                      <td className="p-5 text-center font-semibold text-sage-900">
                        {typeof row.intensive === "boolean" ? (
                          row.intensive ? (
                            <FiCheck className="mx-auto text-sage-700 w-5 h-5" />
                          ) : (
                            <FiX className="mx-auto text-sage-400 w-4 h-4" />
                          )
                        ) : (
                          <span className="text-xs font-semibold">{row.intensive}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-sage-900 text-cream-50 p-10 rounded-3xl space-y-4 shadow-xl border border-sage-800">
          <h3 className="font-serif font-bold text-2xl">Start With a Free Trial First</h3>
          <p className="text-sage-200/80 text-sm max-w-lg mx-auto">
            Try 3 full trial classes before picking any paid tuition plan. No credit card details required.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact-section"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 text-sage-900 font-bold text-sm hover:bg-gold-300 transition-colors shadow-md"
            >
              <span>Schedule Free Trial Now</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
