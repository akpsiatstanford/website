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
  { name: "Company 1", logo: "/logos/company-1.svg" },
  { name: "Company 2", logo: "/logos/company-2.svg" },
  { name: "Company 3", logo: "/logos/company-3.svg" },
  { name: "Company 4", logo: "/logos/company-4.svg" },
  { name: "Company 5", logo: "/logos/company-5.svg" },
  { name: "Company 6", logo: "/logos/company-6.svg" },
  { name: "Company 7", logo: "/logos/company-7.svg" },
  { name: "Company 8", logo: "/logos/company-8.svg" },
  { name: "Company 9", logo: "/logos/company-9.svg" },
  { name: "Company 10", logo: "/logos/company-10.svg" },
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
