import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import styles from "./PagePhoto.module.css";

export type Photo = {
  // Path under public/, e.g. "/photos/home-1.jpg".
  src: string;
  alt: string;
};

// Mobile: sits between sections. Put it before the heading it belongs with.
export default function PagePhoto(photo: Photo) {
  return <Frame photo={photo} className={styles.inline} sizes="100vw" />;
}

// Desktop: stacks every photo in one column to the right of the text, evenly spaced.
// Put it before the title in <main>, which needs `display: flow-root`.
export function PhotoColumn({ photos }: { photos: Photo[] }) {
  return (
    <div className={styles.column}>
      {photos.map((photo) => (
        <Frame key={photo.src} photo={photo} sizes="416px" />
      ))}
    </div>
  );
}

function Frame({ photo, className, sizes }: { photo: Photo; className?: string; sizes: string }) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", photo.src));

  return (
    <figure className={`${styles.photo} ${className ?? ""}`}>
      {exists ? (
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} />
      ) : (
        <span className={styles.missing}>Add public{photo.src}</span>
      )}
    </figure>
  );
}
