import { Home } from "../components/Home";
import { personJsonLd } from "../content/site";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Home />
    </>
  );
}
