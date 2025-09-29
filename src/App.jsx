import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Calculator,
  FileSpreadsheet,
  Receipt,
  CreditCard,
  Phone,
  Mail,
  Calendar,
  Star,
  Building2,
} from "lucide-react";

const BOOK_URL = "/book/"; // single source of truth

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>{children}</section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
    {children}
  </span>
);

const Feature = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm leading-6 text-gray-600">{children}</p>
  </div>
);

const PriceCard = ({ name, price, period, highlights = [], cta = "Get Started", featured = false, note }) => (
  <div className={`flex flex-col rounded-2xl border ${featured ? "border-indigo-600" : "border-gray-200"} bg-white p-6 shadow-sm transition hover:shadow-md`}>
    <div className="flex items-baseline justify-between">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      {featured && <Pill>Most Popular</Pill>}
    </div>
    <div className="mt-4 flex items-end gap-1">
      <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
      <span className="text-sm text-gray-500">/{period}</span>
    </div>
    {note && <p className="mt-2 text-xs text-gray-500">{note}</p>}
    <ul className="mt-6 space-y-3">
      {highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
    <a
      href={BOOK_URL}
      className={`mt-6 inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition ${
        featured
          ? "border-indigo-700 bg-indigo-600 text-white hover:bg-indigo-700"
          : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
      }`}
      aria-label={`${cta} — Free Consult`}
    >
      {cta}
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white via-white to-slate-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
        <Container className="flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">SB</div>
            <div className="text-lg font-semibold tracking-tight">SBTaxPros</div>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#why-us" className="hover:text-indigo-600">Why Us</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={BOOK_URL} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50">
              <Phone className="h-4 w-4" /> Contact
            </a>
            <a href={BOOK_URL} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
              Free Consult <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </header>

      <Section id="home" className="pt-12 sm:pt-16">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Pill>Bookkeeping • Payroll • Taxes • Catch-Up</Pill>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Stay compliant. Grow faster.
              </h1>
              <p className="mt-4 text-lg leading-7 text-gray-700">
                SBTaxPros handles your books, payroll, and tax filings—so you can focus on revenue. The cost of staying ahead is about the same as IRS and state penalties—only without the stress.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BOOK_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                  aria-label="Start Your Free Consult"
                >
                  Start Your Free Consult <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={BOOK_URL}
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-gray-50"
                  aria-label="See Pricing and Book"
                >
                  See Pricing
                </a>
              </div>
              <div className="mt-6 flex items-center gap-5 text-xs text-gray-600">
                <div className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-500" /> Trusted by SMB owners</div>
                <div className="flex items-center gap-1"><Shield className="h-4 w-4 text-emerald-600" /> Secure & compliant</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 blur-2xl" />
              <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <Feature icon={FileSpreadsheet} title="Full Bookkeeping">
                    Monthly categorization, reconciliations, P&L, balance sheet, and KPI snapshots.
                  </Feature>
                  <Feature icon={Calculator} title="Tax Filing & Catch-Up">
                    Sales & payroll tax, federal/state income returns, and penalty-proof planning.
                  </Feature>
                  <Feature icon={CreditCard} title="Payroll & 1099s">
                    Accurate payroll runs, filings, and year-end forms without headaches.
                  </Feature>
                  <Feature icon={Shield} title="Compliance Plans">
                    Proactive reminders, quarterly reviews, and audit-ready documentation.
                  </Feature>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">What we do</h2>
            <p className="mt-3 text-gray-600">Practical, done-for-you support for small and growing businesses.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Feature icon={FileSpreadsheet} title="Monthly Bookkeeping">
              Clean, current books with bank/credit-card reconciliations, P&L and balance sheet delivered monthly.
            </Feature>
            <Feature icon={CreditCard} title="Payroll Administration">
              Setup and run payroll, file payroll taxes, manage deductions and year-end W-2/1099 forms.
            </Feature>
            <Feature icon={Calculator} title="Tax Prep & Filing">
              Federal & state returns, sales/use tax, estimated payments, and strategic tax planning.
            </Feature>
            <Feature icon={Receipt} title="Catch-Up & Clean-Up">
              Behind on books or filings? We restore order fast and align you to a compliance plan.
            </Feature>
            <Feature icon={Shield} title="Compliance & Advisory">
              Quarterly reviews, entity guidance, and audit-ready documentation so you’re never surprised.
            </Feature>
            <Feature icon={Building2} title="Back-Office Outsourcing">
              AP/AR, invoicing, and document workflows that scale without hiring a full finance team.
            </Feature>
          </div>
        </Container>
      </Section>

      <Section id="pricing" className="bg-gradient-to-b from-white to-indigo-50/60">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-gray-600">Plans sized for where you are—upgrade anytime. Catch-Up priced separately after a quick assessment.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <PriceCard
              name="Starter"
              price="$349"
              period="mo"
              note="Up to 2 accounts, ≤ 100 txns/mo"
              highlights={[
                "Monthly bookkeeping",
                "Basic payroll (up to 5 employees)",
                "Monthly financial statements",
                "Email support",
              ]}
            />
            <PriceCard
              name="Growth"
              price="$649"
              period="mo"
              featured
              note="Up to 4 accounts, ≤ 300 txns/mo"
              highlights={[
                "Full bookkeeping & payroll",
                "Quarterly tax estimates",
                "Monthly KPI dashboard",
                "Priority support + review call",
              ]}
            />
            <PriceCard
              name="Scale"
              price="Custom"
              period="quote"
              note="Complex ops, multi-entity, or higher volume"
              highlights={[
                "Advanced workflows (AP/AR)",
                "Sales tax & multi-state",
                "Quarterly advisory + planning",
                "Dedicated account manager",
              ]}
              cta="Request a Quote"
            />
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            <strong>Heads-up:</strong> The cost of staying current is often comparable to penalties and interest for falling behind. Choose certainty—choose a plan.
          </p>
          <div className="mt-6 text-center">
            <a
              href={BOOK_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              aria-label="Book from pricing section"
            >
              Book Your Free Consult <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>

      <Section id="why-us">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Why SBTaxPros</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Zero-drama compliance",
                  "Owner-friendly dashboards",
                  "Fast catch-up with clear milestones",
                  "Proactive reminders & quarterly reviews",
                  "Seamless tools: QuickBooks, Gusto, Stripe, more",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href={BOOK_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                >
                  Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800">
                <p className="text-lg font-medium">
                  “We were 18 months behind. SBTaxPros cleaned up our books, filed everything, and set us on a plan—we’ve been stress-free ever since.”
                </p>
                <footer className="mt-4 text-sm text-gray-600">— A real small-business owner</footer>
              </blockquote>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs text-gray-600">On-time filings</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-2xl font-bold"><span className="align-text-top">$</span>0</div>
                  <div className="text-xs text-gray-600">Surprise fees</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-2xl font-bold">24-48h</div>
                  <div className="text-xs text-gray-600">Support response</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq" className="bg-white">
        <Container>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            <p className="mt-3 text-gray-600">Answers to common questions.</p>
          </div>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {[
              {
                q: "Do you handle prior-year catch-ups?",
                a: "Yes. We assess the scope, fix the books, file missing returns, and move you onto a monthly plan so you stay current.",
              },
              {
                q: "Which software do you support?",
                a: "QuickBooks Online is our default. We also work with Gusto, Stripe, Shopify, and common POS systems.",
              },
              {
                q: "Can you file in multiple states?",
                a: "Yes—sales tax and payroll across multiple states. We'll confirm requirements during onboarding.",
              },
              {
                q: "What does onboarding look like?",
                a: "Kickoff call, secure document handoff, accounting file cleanup (if needed), then monthly cadence with clear deliverables.",
              },
            ].map((item, i) => (
              <details key={i} className="group p-6 open:bg-indigo-50/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900">
                  <span>{item.q}</span>
                  <ArrowRight className="h-4 w-4 transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact" className="bg-gradient-to-b from-indigo-50/60 to-white">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Let’s make compliance boring.</h2>
              <p className="mt-3 text-gray-600">
                Tell us about your business and get a free, no-pressure assessment. We’ll propose a plan and timeline—often with immediate quick wins.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-600" /> (240) 422-1679</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600" /> hello@sbtaxpros.net</p>
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-600" />
                  <a className="underline decoration-indigo-300 underline-offset-4 hover:text-indigo-700" href={BOOK_URL}>
                    Book a Calendly call
                  </a>
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Secure, private onboarding</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Month-to-month—no long contracts</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Clear deliverables & response times</li>
              </ul>
            </div>

            {/* Replaced form submit with a strong CTA to booking */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Ready to move forward?</h3>
              <p className="mb-4 text-sm text-gray-700">
                Skip the form—book your free 30-minute consult now. We’ll review your situation and outline your Growth-Focused Compliance Plan.
              </p>
              <a
                href={BOOK_URL}
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                aria-label="Book from contact section"
              >
                Book Your Free Consult <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-gray-500">Prefer email? Reach us at hello@sbtaxpros.net</p>
            </div>
          </div>
        </Container>
      </Section>

      <footer className="border-t border-gray-100 bg-white py-10 text-sm">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">SB</div>
            <span className="font-semibold">SBTaxPros</span>
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} SBTaxPros. All rights reserved.</p>
          <div className="flex gap-5 text-gray-600">
            <a href="#privacy" className="hover:text-indigo-600">Privacy</a>
            <a href="#terms" className="hover:text-indigo-600">Terms</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
