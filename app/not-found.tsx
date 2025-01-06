import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="my-32">
        <div>
          <h1 className="glow glow-title text-5xl font-serif mb-4 lowercase">Uh oh!</h1>
          <h2 className="text-3xl font-semibold uppercase tracking-wide leading-snug text-balance mb-6">404 - Page not found</h2>
          <div className="prose">
            <p>The page you are looking for does not exist or has moved.</p>
            <p><Link href="/" className="inline-flex justify-center rounded-lg text-sm font-semibold no-underline! py-3 px-4 bg-brand-blue text-brand-off-white hover:bg-brand-blue/75">Go home?</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}