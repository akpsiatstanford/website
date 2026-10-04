import ExternalLink from "../_components/ExternalLink";

export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>

      <p>
        If you would like to learn more about Stanford AKPsi,
        you can email us at <a href={`mailto:akpsiatstanford@gmail.com`}>akpsiatstanford@gmail.com</a> or
        follow us on Instagram at <ExternalLink href="https://www.instagram.com/stanford.akpsi/">@stanford.akpsi</ExternalLink>.
      </p>
    </main>
  );
}
