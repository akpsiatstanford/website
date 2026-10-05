import ExternalLink from "../_components/ExternalLink";
import PagePhoto, { PhotoColumn, type Photo } from "../_components/PagePhoto";
import styles from "./contact.module.css";

const photos: Photo[] = [{ src: "/photos/contact-1.jpg", alt: "" }];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <PagePhoto {...photos[0]} />
      <PhotoColumn photos={photos} />
      <h1>Contact</h1>

      <p>
        If you would like to learn more about Stanford AKPsi,
        you can email us at <a href={`mailto:akpsiatstanford@gmail.com`}>akpsiatstanford@gmail.com</a> or
        follow us on Instagram at <ExternalLink href="https://www.instagram.com/stanford.akpsi/">@stanford.akpsi</ExternalLink>.
      </p>
    </main>
  );
}
