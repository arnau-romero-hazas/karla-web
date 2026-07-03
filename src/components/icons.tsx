type IconProps = { className?: string };

export function EmailIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 3c.3 2.4 1.9 4.2 4.3 4.5v2.8c-1.5.1-2.9-.3-4.3-1.1v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.9a2.7 2.7 0 1 0 1.9 2.6V3H14z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5v8.5H4.5V8.5h2.44zM5.72 4.5a1.42 1.42 0 1 1 0 2.84 1.42 1.42 0 0 1 0-2.84zM9 8.5h2.34v1.16h.03c.33-.6 1.13-1.24 2.32-1.24 2.48 0 2.94 1.56 2.94 3.6V17h-2.44v-3.5c0-.83-.02-1.9-1.18-1.9-1.18 0-1.36.9-1.36 1.84V17H9V8.5z" />
    </svg>
  );
}

export function WebIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 22" fill="currentColor">
      <path d="M2 2 L18 11 L2 20 Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 15V4" />
      <path d="M8 8l4-4 4 4" />
      <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
    </svg>
  );
}

export function DotsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}

export function HowArrow({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="72"
      height="80"
      viewBox="0 0 72 80"
      fill="none"
      stroke="currentColor"
      strokeWidth={4.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8 C54 14 58 46 40 68" />
      <path d="M26 54 L40 70 L54 52" />
    </svg>
  );
}

export function ImagePlaceholderIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
