const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  "aria-hidden": true,
} as const;

export function MenuIcon() {
  return (
    <svg {...strokeProps}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true">
      <rect width="72" height="72" rx="8" fill="currentColor" />
      <path
        fill="#fff"
        d="M62 62H51.32V43.8c0-4.99-1.9-7.78-5.85-7.78-4.3 0-6.54 2.9-6.54 7.78V62H28.63V27.33h10.3V32s3.1-5.73 10.45-5.73C56.74 26.27 62 30.76 62 40.05V62zM16.35 22.8C12.84 22.8 10 19.93 10 16.4c0-3.53 2.84-6.4 6.35-6.4 3.5 0 6.35 2.87 6.35 6.4 0 3.53-2.85 6.4-6.35 6.4zM11.03 62h10.74V27.33H11.03V62z"
      />
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true">
      <rect width="72" height="72" rx="8" fill="currentColor" />
      <g fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <rect x="15" y="22" width="42" height="28" rx="3" />
        <path d="M17 25l19 14 19-14" />
      </g>
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg {...strokeProps}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
