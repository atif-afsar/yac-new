import { useEffect } from "react";
import { getStructuredDataGraph } from "../../seo/schemas";

const SCRIPT_ID = "yac-structured-data";

/**
 * Injects JSON-LD structured data for crawlers and AI search engines.
 * No visible UI — schema only.
 */
export default function StructuredData() {
  useEffect(() => {
    let script = document.getElementById(SCRIPT_ID);

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(getStructuredDataGraph());

    return () => {
      script?.remove();
    };
  }, []);

  return null;
}
