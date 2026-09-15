export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  dateRange: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  dateRange: string;
  highlights: string[];
}

export interface ProjectEntry {
  name: string;
  href: string;
  stack: string;
  team: string;
  dateRange: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string;
}

export const resumeSummary =
  'Software engineering student at HCMUS with hands-on experience across several kinds of projects, web apps chief among them. Curious, adaptable, and keen to deepen my technical skills through practical work.';

export const education: EducationEntry[] = [
  {
    institution: 'University of Science, VNUHCM',
    degree: 'Bachelor of Information Technology, GPA 8.41 / 10.00',
    location: 'Ho Chi Minh City, Vietnam',
    dateRange: 'Sep. 2023 – Aug. 2027 (expected)',
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Salesforce Developer Intern',
    organization: 'Gimasys Co., Ltd',
    location: 'Ho Chi Minh City, Vietnam',
    dateRange: 'Apr. 2026 – Jul. 2026',
    highlights: [
      'Developed an agentic AI workflow that accelerates Salesforce Org setup from design documents (URD, DB schema), automating repetitive configuration: custom fields, flows, validation rules.',
      'Studied real implementation docs to understand how business requirements translate into technical configuration.',
      'Worked hands-on with the Salesforce CRM platform and wrote Apex to integrate with external services.',
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'YumRecipe',
    href: 'https://github.com',
    stack: 'Java, Android, Spring Boot, PostgreSQL',
    team: 'team of 4',
    dateRange: 'Feb. 2026 – May 2026',
    highlights: [
      'Built a full-stack Android social app for sharing recipes and articles, with a feed, following, and cooking challenges, backed by a Spring Boot REST API.',
      'Shipped the cooking-challenge feature end to end on Android and server: submissions, voting, server-side search, and a points and leaderboard system with auto-awarded badges.',
      'Developed the social feed and follow system (like and follow toggles, follower-first ordering, discovery flag) and integrated Firebase Cloud Messaging push notifications.',
    ],
  },
  {
    name: 'WP-Myshop',
    href: 'https://github.com',
    stack: 'C#, WinUI 3, .NET, GraphQL, PostgreSQL',
    team: 'team of 2',
    dateRange: 'Apr. 2026 – May 2026',
    highlights: [
      'Built a WinUI 3 desktop shop-management app (MVVM) on a .NET GraphQL API with EF Core and PostgreSQL, covering products, orders, customers, and reporting.',
      'Built the reports and dashboard pages end to end: revenue and product-detail tabs, line charts, date and category filters, live stats, and a timezone fix in the dashboard queries.',
      'Implemented order management (paginated history, order details, refunds, phone search), a discount-program feature, receipt printing, and product sale pricing.',
    ],
  },
  {
    name: 'Online Bidding Platform',
    href: 'https://github.com',
    stack: 'TypeScript, Next.js, React, Supabase',
    team: 'team of 2',
    dateRange: 'Dec. 2025 – Jan. 2026',
    highlights: [
      'Built a full-stack auction and trading web app with Next.js (App Router), React 19, and Supabase, supporting listing, bidding, and checkout end to end.',
      'Developed the payment flow with email notifications over Nodemailer and SMTP, plus winner highlighting with masked names and a dedicated winning-bid card.',
      'Fixed critical data-integrity bugs (duplicated and expired products surfacing in the trading list) and contributed UI work on the hero, product cards, and featured listings.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'Programming',
    items: 'C++, Java, TypeScript, SQL (PostgreSQL), HTML and CSS',
  },
  { category: 'Frameworks', items: 'Next.js, Spring Boot' },
  { category: 'Tools', items: 'Git, Docker, Linux (Debian), Salesforce' },
  {
    category: 'Languages',
    items:
      'English, C1 listening and reading (Oxford Placement Test). Vietnamese, native.',
  },
];
