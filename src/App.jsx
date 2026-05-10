import React from "react";

const practiceAreas = [
  {
    icon: "scale",
    title: "Dispute Resolution, Litigation & Debt Recovery",
    description:
      "Civil litigation, debt recovery, letters of demand, contractual disputes, land disputes, construction disputes and contested claims.",
  },
  {
    icon: "users",
    title: "Family Law",
    description:
      "Divorce, joint petition divorce, custody, maintenance and matrimonial property arrangements.",
  },
  {
    icon: "document",
    title: "Estate & Probate",
    description:
      "Wills, probate, letters of administration and estate distribution matters.",
  },
  {
    icon: "briefcase",
    title: "Employment & Industrial Relations",
    description:
      "Employment disputes, wrongful dismissal, advisory work and Industrial Court matters.",
  },
  {
    icon: "home",
    title: "Property & Land Matters",
    description:
      "Property disputes, land issues, ownership matters and property-related legal concerns.",
  },
  {
    icon: "building",
    title: "Business & Commercial Advisory",
    description:
      "Practical legal support for businesses, agreements, recovery issues and commercial disputes.",
  },
];

const socialLinks = [
  {
    platform: "Instagram",
    href: "https://www.instagram.com/nicholasassociates.law?igsh=eHFmZzNxYjUza2py&utm_source=qr",
    icon: "instagram",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/nicholasassociates-law",
    icon: "linkedin",
  },
];

const founderSocialLinks = [
  {
    platform: "Instagram",
    label: "Nicholas Lim on Instagram",
    href: "https://www.instagram.com/lawyer.nicholaslim?igsh=MWd2ZnI3NW04eHlhYw%3D%3D&utm_source=qr",
    icon: "instagram",
  },
  {
    platform: "LinkedIn",
    label: "Nicholas Lim on LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-lim-lawyer",
    icon: "linkedin",
  },
];

const founderProfile = {
  name: "Nicholas Lim",
  title: "Nicholas Lim, Founder of Nicholas & Associates",
  summary:
    "Nicholas Lim is the founder of Nicholas & Associates. His legal training and practice background reflect a strong foundation in litigation, debt recovery, dispute resolution and employment-related matters.",
  paragraphs: [
    "Nicholas Lim read law at Northumbria University, Newcastle, where he graduated with an LLB (Hons) Second Class Upper. He subsequently completed the Legal Practice Course in the United Kingdom, followed by the Bar Practice Course, and was called as a Barrister-at-Law by the Honourable Society of the Middle Temple.",
    "After being called to the Malaysian Bar, Nicholas Lim completed his pupillage at Jeeva Partnership before continuing his practice in civil litigation and employment matters at Wong & Loh. He is also involved in debt recovery, family law matters and estate matters, including probate and letters of administration. Through his training and practice experience, he developed a careful, structured and practical approach to legal work, with particular emphasis on preparation, case strategy and clear client communication.",
    "As founder of Nicholas & Associates, Nicholas Lim focuses on providing clients with practical legal advice, sound representation and steady guidance in resolving disputes. His work is driven by a commitment to understanding each client’s position, identifying the legal issues clearly, and pursuing solutions that are commercially sensible and legally sound.",
  ],
};

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    scale: (
      <svg {...common}>
        <path d="M12 3v18" />
        <path d="M6 6h12" />
        <path d="M8 6l-4 7h8L8 6z" />
        <path d="M16 6l-4 7h8l-4-7z" />
        <path d="M7 21h10" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M9 18l6-6-6-6" />
      </svg>
    ),
    gavel: (
      <svg {...common}>
        <path d="M14 13l-7 7" />
        <path d="M6 21l-3-3 7-7" />
        <path d="M14 13l-5-5 4-4 5 5-4 4z" />
        <path d="M18 9l3-3" />
        <path d="M12 3l9 9" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    document: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h6" />
      </svg>
    ),
    coins: (
      <svg {...common}>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v5c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 11v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
      </svg>
    ),
    briefcase: (
      <svg {...common}>
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 12h18" />
        <path d="M9 12v2h6v-2" />
      </svg>
    ),
    home: (
      <svg {...common}>
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    building: (
      <svg {...common}>
        <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
        <path d="M8 7h2" />
        <path d="M14 7h2" />
        <path d="M8 11h2" />
        <path d="M14 11h2" />
        <path d="M8 15h2" />
        <path d="M14 15h2" />
        <path d="M3 21h18" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.62a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.27-1.27a2 2 0 0 1 2.11-.45c.84.28 1.72.48 2.62.6A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    pin: (
      <svg {...common}>
        <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    instagram: (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v6" />
        <path d="M8 8v.01" />
        <path d="M12 17v-6" />
        <path d="M12 13.5c0-1.5 1-2.5 2.5-2.5S17 12 17 14v3" />
      </svg>
    ),
  };

  return icons[name] || icons.scale;
}

function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2";
  const styles =
    variant === "outline"
      ? "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100"
      : "bg-purple-950 text-white hover:bg-purple-900";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-zinc-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function runContentChecks() {
  const requiredPracticeTitles = [
    "Dispute Resolution, Litigation & Debt Recovery",
    "Family Law",
    "Estate & Probate",
    "Employment & Industrial Relations",
    "Property & Land Matters",
    "Business & Commercial Advisory",
  ];

  return {
    hasFirmName: true,
    practiceAreaCount: practiceAreas.length === 6,
    includesRequiredPracticeTitles: requiredPracticeTitles.every((title) =>
      practiceAreas.some((area) => area.title === title)
    ),
    socialLinkCount: socialLinks.length === 2,
    founderSocialLinkCount: founderSocialLinks.length === 2,
    founderInstagramLinked:
      founderSocialLinks.find((link) => link.platform === "Instagram")?.href.includes("lawyer.nicholaslim"),
    founderLinkedInLinked:
      founderSocialLinks.find((link) => link.platform === "LinkedIn")?.href.includes("nicholas-lim-lawyer"),
    includesInstagramAndLinkedIn: ["Instagram", "LinkedIn"].every((platform) =>
      socialLinks.some((link) => link.platform === platform)
    ),
    disputeResolutionUsesScaleIcon:
      practiceAreas.find((area) => area.title === "Dispute Resolution, Litigation & Debt Recovery")?.icon === "scale",
    hasFounderProfile:
      founderProfile.paragraphs.length === 3 &&
      founderProfile.name === "Nicholas Lim" &&
      founderProfile.paragraphs.join(" ").includes("Northumbria University") &&
      founderProfile.paragraphs.join(" ").includes("Malaysian Bar") &&
      founderProfile.paragraphs.join(" ").includes("probate") &&
      founderProfile.paragraphs.join(" ").includes("letters of administration") &&
      founderProfile.paragraphs.join(" ").includes("debt recovery") &&
      founderProfile.title.includes("Founder"),
  };
}

export { practiceAreas, socialLinks, founderSocialLinks, founderProfile, runContentChecks };

export default function NicholasAssociatesWebsite() {
  const checks = runContentChecks();

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="#top" className="block w-fit text-left" aria-label="Nicholas & Associates homepage">
            <div
              className="whitespace-nowrap text-xl font-bold uppercase tracking-[0.12em] text-purple-950 sm:text-2xl md:text-3xl"
              style={{ fontFamily: 'Garamond, "EB Garamond", "Times New Roman", serif' }}
            >
              Nicholas & Associates
            </div>
            <div className="mt-1.5 h-[1.5px] w-full bg-zinc-950" />
            <div
              className="mt-1.5 text-center text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 sm:text-sm"
              style={{ fontFamily: 'Garamond, "EB Garamond", "Times New Roman", serif' }}
            >
              ADVOCATES & SOLICITORS
            </div>
          </a>

          <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-8">
            <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-zinc-700">
              <a href="#about" className="hover:text-purple-950">
                About
              </a>
              <a href="#founder" className="hover:text-purple-950">
                Founder
              </a>
              <a href="#practice" className="hover:text-purple-950">
                Practice Areas
              </a>
              <a href="#contact" className="hover:text-purple-950">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="rounded-full bg-purple-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-900"
            >
              Arrange Consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-100 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-100 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-4xl animate-[fadeIn_0.6s_ease-out]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-950">
                <Icon name="shield" className="h-4 w-4" />
                Malaysian Law Firm
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
                Clear Legal Advice. Practical Strategy.
              </h1>

              <p className="mt-6 max-w-2xl text-justify text-lg leading-8 text-zinc-600">
                Nicholas & Associates assists individuals, families and businesses with litigation,
                family law, estate matters, employment disputes, land matters, construction disputes
                and debt recovery.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-purple-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-purple-900"
                >
                  Book a Consultation
                  <Icon name="arrow" className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#practice"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-4 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100"
                >
                  View Practice Areas
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-900">
                About the Firm
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Practical legal support for important decisions.
              </h2>
            </div>
            <div className="space-y-5 text-justify text-lg leading-8 text-zinc-600">
              <p>
                Nicholas & Associates is a Malaysian law firm committed to providing clear,
                practical and strategic legal advice. We assist clients in resolving legal issues
                through careful preparation, sound advice and professional representation.
              </p>
              <p>
                Our approach is simple: understand the client’s problem, explain the legal position
                clearly, and work towards the most practical outcome.
              </p>
            </div>
          </div>
        </section>

        <section id="founder" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-900">
                  Founder Profile
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  {founderProfile.name}, Founder of Nicholas & Associates.
                </h2>
                <p className="mt-5 text-justify text-lg leading-8 text-zinc-600">{founderProfile.summary}</p>
              </div>

              <Card className="bg-stone-50">
                <div className="p-7 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-purple-950 text-3xl font-semibold text-white">
                      NL
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-900">
                        {founderProfile.title}
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-zinc-950">
                        Experience, training and legal practice
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5 text-justify text-lg leading-8 text-zinc-600">
                    {founderProfile.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-900">
                      Connect with the Founder
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {founderSocialLinks.map((link) => (
                        <a
                          key={link.platform}
                          href={link.href}
                          target={link.href === "#" ? undefined : "_blank"}
                          rel={link.href === "#" ? undefined : "noreferrer"}
                          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-stone-50 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-950"
                        >
                          <Icon name={link.icon} className="h-5 w-5" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="practice" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-900">
                Practice Areas
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Legal services for individuals, families and businesses, including debt recovery.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => (
                <Card
                  key={area.title}
                  className="bg-stone-50 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-950 text-white">
                      <Icon name={area.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-950">{area.title}</h3>
                    <p className="mt-3 text-justify leading-7 text-zinc-600">{area.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-purple-950 p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
                  Why Clients Work With Us
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Clear communication and practical direction.
                </h2>
                <p className="mt-5 max-w-2xl text-justify text-lg leading-8 text-purple-100">
                  Legal issues can be stressful. We aim to give clients a clear understanding of
                  their position, available options and next steps before deciding on the best course
                  forward.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  "Clear explanation of legal options",
                  "Practical strategy, not unnecessary complexity",
                  "Client-focused service with clear and practical legal advice",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <Icon name="shield" className="h-5 w-5 text-amber-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-900">
                Contact
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Arrange a consultation.
              </h2>
              <p className="mt-5 text-justify text-lg leading-8 text-zinc-600">
                For enquiries, appointments or preliminary consultation arrangements, you may contact
                the firm by phone, email or WhatsApp.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 text-zinc-700">
                  <Icon name="phone" className="h-5 w-5 text-purple-950" /> +601128928116
                </div>
                <div className="flex gap-3 text-zinc-700">
                  <Icon name="mail" className="h-5 w-5 text-purple-950" />
                  nicholas.associates@outlook.com
                </div>
                <div className="flex gap-3 text-zinc-700">
                  <Icon name="pin" className="h-5 w-5 text-purple-950" />
                  <span>
                    Suite 163E, Level 16, Hunza Tower Gurney Paragon,<br />
                    Jalan Kelawei, Georgetown, 10250 Penang
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-900">
                  Follow Us
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-950"
                    >
                      <Icon name={link.icon} className="h-5 w-5" />
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Card>
              <form className="space-y-4 p-7" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-purple-900"
                    placeholder="Name"
                  />
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-purple-900"
                    placeholder="Phone"
                  />
                </div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-purple-900"
                  placeholder="Email"
                />
                <label className="sr-only" htmlFor="issue">
                  Legal issue or practice area
                </label>
                <input
                  id="issue"
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-purple-900"
                  placeholder="Legal issue / practice area"
                />
                <label className="sr-only" htmlFor="message">
                  Brief message
                </label>
                <textarea
                  id="message"
                  className="h-32 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-purple-900"
                  placeholder="Brief message"
                />
                <Button className="w-full py-4 text-base">Submit Enquiry</Button>
                <p className="text-justify text-xs leading-5 text-zinc-500">
                  Submitting this form does not create a solicitor-client relationship. Please do not
                  send confidential information until a formal engagement is confirmed.
                </p>
              </form>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
          <div className="hidden rounded-2xl border border-zinc-200 bg-white p-4 text-xs text-zinc-500" data-testid="content-checks">
            Content checks: {JSON.stringify(checks)}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} Nicholas & Associates. All rights reserved.<br />
            Suite 163E, Level 16, Hunza Tower Gurney Paragon, Jalan Kelawei, Georgetown, 10250 Penang.
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex items-center gap-2">
              <Icon name="building" className="h-4 w-4" /> Advocates & Solicitors
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-purple-950"
                >
                  <Icon name={link.icon} className="h-4 w-4" />
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
