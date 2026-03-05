import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-card">
        <h1>Page not found</h1>
        <p>The URL does not map to a route in this site.</p>
        <Link href="/" className="btn-solid">
          Back to home
        </Link>
      </div>
    </main>
  );
}
