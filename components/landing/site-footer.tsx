import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>&copy; 2026 · {SITE.name} · AI Data · Research · Technology</p>
      <p>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        &nbsp;·&nbsp;
        <Link href="/">Home</Link>
        &nbsp;·&nbsp;
        <Link href="/services">Services</Link>
        &nbsp;·&nbsp;
        <Link href="/#capabilities">Capabilities</Link>
      </p>
    </footer>
  );
}