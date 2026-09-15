/**
 * The values come from the "Card Hero - Full Bleed" artboard; the layout that renders
 * them is in src/components/CardHero.astro.
 */

export interface ProfileLink {
  label: string;
  /**
   * Anything starting with `http` is treated as an outbound link and opens in
   * a new tab; `/work`, `#resume` and `mailto:` targets stay in place.
   */
  href: string;
}

export interface Profile {
  /** Family name — rendered in caps, first, per Vietnamese name order. */
  familyName: string;
  /** Given name — rendered in small caps. */
  givenName: string;
  subtitle: string;
  phone: string;
  institution: string;
  faculty: string;
  location: string;
  links: ProfileLink[];
}

export const profile: Profile = {
  familyName: 'Nguyễn',
  givenName: 'Duy Thịnh',
  subtitle: 'B.Sc. Candidate, Software Engineering',
  phone: '+84 905 020 734',
  institution: 'VNUHCM, University of Science',
  faculty: 'Faculty of Information Technology',
  location: 'Ho Chi Minh City, Vietnam',
  links: [
    { label: 'Work', href: '/work' },
    // TODO: these three are still the artboard's placeholders.
    { label: 'GitHub', href: 'https://github.com/thinhduyng' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ndthinh23/' },
    { label: 'Résumé', href: '#resume' },
    { label: 'Email', href: 'mailto:duythinhnguyen1703@gmail.com' },
  ],
};

/** "Nguyễn Duy Thịnh" — for <title> and meta description. */
export const fullName = `${profile.familyName} ${profile.givenName}`;

/** Default meta description, kept in step with the profile above. */
export const siteDescription = `${fullName} — ${profile.subtitle}. ${profile.institution}.`;
