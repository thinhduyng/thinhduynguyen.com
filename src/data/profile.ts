/**
 * The values come from the "Card Hero - Full Bleed" artboard; the layout that renders
 * them is in src/components/CardHero.astro.
 */

export interface ProfileLink {
  label: string;
  /** HTTP links open in a new tab. */
  href: string;
}

export const contact = {
  phone: '+84 905 020 734',
  email: 'duythinhnguyen1703@gmail.com',
  github: 'https://github.com/thinhduyng',
  linkedin: 'https://www.linkedin.com/in/ndthinh23/',
  location: 'Ho Chi Minh City, Vietnam',
};

export interface Profile {
  /** Family name — rendered in caps, first, per Vietnamese name order. */
  familyName: string;
  /** Middle name — rendered between the family and first names. */
  middleName: string;
  /** First name — rendered last, per Vietnamese name order. */
  firstName: string;
  subtitle: string;
  phone: string;
  institution: string;
  faculty: string;
  location: string;
  links: ProfileLink[];
}

export const profile: Profile = {
  familyName: 'Nguyễn',
  middleName: 'Duy',
  firstName: 'Thịnh',
  subtitle: 'B.Sc. Candidate, Software Engineering',
  phone: contact.phone,
  institution: 'VNUHCM, University of Science',
  faculty: 'Faculty of Information Technology',
  location: contact.location,
  links: [
    { label: 'Work', href: '/work' },
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'Résumé', href: '/resume' },
    { label: 'Email', href: `mailto:${contact.email}` },
  ],
};

/** "Nguyễn Duy Thịnh" — for <title> and meta description. */
export const fullName = `${profile.familyName} ${profile.middleName} ${profile.firstName}`;

/** Default meta description, kept in step with the profile above. */
export const siteDescription = `${fullName} — ${profile.subtitle}. ${profile.institution}.`;

/** Strips Vietnamese diacritics (including đ/Đ, which NFD doesn't decompose) for filenames. */
const toAsciiSlug = (value: string) =>
  value
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
    .split(/\s+/)
    .join('-');

/** "Nguyen-Duy-Thinh-Resume.pdf" — the filename offered when downloading the résumé PDF. */
export const resumeFileName = `${toAsciiSlug(fullName)}-Resume.pdf`;
