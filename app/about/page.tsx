import PagePhoto, { PhotoColumn, type Photo } from "../_components/PagePhoto";
import AlumniCompanies from "./AlumniCompanies";
import styles from "./about.module.css";

const photos: Photo[] = [
  { src: "/photos/about-1.jpg", alt: "" },
  { src: "/photos/about-2.jpg", alt: "" },
  { src: "/photos/about-3.jpg", alt: "" },
  { src: "/photos/about-4.jpg", alt: "" },
];

// AKPsi's core values. The descriptions are placeholders: edit them to match how the chapter describes each one.
const values = [
  { name: "Brotherhood", description: "Making lifelong friendships that last well beyond our time in college." },
  { name: "Knowledge", description: "Learning from each other's strengths and growing professionally." },
  { name: "Integrity", description: "Holding ourselves to the highest ethical standards in business and life." },
  { name: "Service", description: "Leading and giving back to the Stanford community and beyond." },
  { name: "Unity", description: "Coming together across diverse backgrounds, majors, and interests." },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <PagePhoto {...photos[0]} />
      <PhotoColumn photos={photos} />
      <h1>About</h1>

      {/* Placeholder text: replace the headings and paragraphs below. */}
      <section>
        <h2>Our Chapter</h2>
        <p>
          The Pi Tau chapter of Alpha Kappa Psi was chartered at Stanford University in 1999.
          Since then, we have inducted hundreds of members across dozens of classes, and we continue to grow.
          While we may be a professional organization, we are so much more than just that:
          the people we meet in AKPsi become a true family of our closest friends, mentors, and supporters.
          We love to go out to eat together, study together, work out together, go to concerts and ski retreats
          and spontaneous beach trips together, and simply spend lots of time together.
        </p>
      </section>

      <section>
        <PagePhoto {...photos[1]} />
        <h2>Our Values</h2>
        <div className={styles.values}>
          {values.map(({ name, description }) => (
            <p key={name}>
              <b>{name}</b> · {description}
            </p>
          ))}
        </div>
      </section>

      <section>
        <PagePhoto {...photos[2]} />
        <AlumniCompanies />
      </section>

      <section>
        <PagePhoto {...photos[3]} />
      </section>
    </main>
  );
}
