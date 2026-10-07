import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import styles from "./about.module.css";

type Company = {
  // Not shown on the page; used as the logo's alt text for screen readers.
  name: string;
  // Path under public/, e.g. "/logos/acme.svg". Until the file exists, an empty box shows instead.
  logo: string;
};

// Placeholders: replace with real companies and add their logos to public/logos/.
const companies: Company[] = [
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Bain & Company", logo: "/logos/bain.svg" },
  { name: "Citadel", logo: "/logos/citadel.svg" },
  { name: "Cognition", logo: "/logos/cognition.png" },
  { name: "Deloitte", logo: "/logos/deloitte.svg" },
  { name: "Evercore", logo: "/logos/evercore.svg" },
  { name: "Jane Street", logo: "/logos/janestreet.svg" },
  { name: "J.P. Morgan", logo: "/logos/jpmorgan.svg" },
  { name: "McKinsey & Company", logo: "/logos/mckinsey.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Modal", logo: "/logos/modal.png" },
  { name: "Morgan Stanley", logo: "/logos/morganstanley.svg" },
  { name: "NVIDIA", logo: "/logos/nvidia.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Qatalyst Partners", logo: "/logos/qatalyst.png" },
  { name: "Rhodes Scholarship", logo: "/logos/rhodes.png" },
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "Y Combinator", logo: "/logos/yc.png" },
];

export default function AlumniCompanies() {
  return (
    <section>
      <h2>Our Alumni</h2>
      <p>
        The lasting connections that we make through AKPsi do not end after graduation.
        Our brothers now live all around the world and work at top firms across a variety of fields,
        including finance, consulting, technology, and much more.
        No matter what city or country you're in, you can find a Pi Tau near you — and we always
        look forward to welcoming our alumni back to campus during our annual Homecoming Reunion. Go Card!
      </p>
      <ul className={styles.logos}>
        {companies.map((company) => (
          <li key={company.name} className={styles.logo}>
            {fs.existsSync(path.join(process.cwd(), "public", company.logo)) ? (
              <Image src={company.logo} alt={company.name} fill sizes="10rem" />
            ) : (
              <span className={styles.logoMissing} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
