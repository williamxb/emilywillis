import Link from "next/link";
import { Container } from "./components/container";
import Image from "next/image";
import logo from "./assets/logo.svg";

export default function NotFound() {
  return (
    <Container className="my-32 flex flex-col items-center text-center">
      <Link href="/">
        <Image src={logo} alt="Emily Willis" className="w-32 mb-12 hover:opacity-80 transition-opacity" />
      </Link>
      <h1 className="text-7xl mb-4 lowercase">Uh oh!</h1>
      <h2 className="text-3xl font-semibold uppercase tracking-widest leading-snug text-balance mb-8">
        404 - Page not found
      </h2>
      <div className="prose max-w-md">
        <p className="text-lg mb-8">The page you are looking for does not exist or has moved.</p>
        <Link 
          href="/" 
          className="inline-flex justify-center rounded-full text-base font-semibold no-underline! py-4 px-10 border border-brand-raisin text-brand-raisin hover:bg-brand-raisin hover:text-brand-off-white transition-colors"
        >
          Return Home
        </Link>      </div>
    </Container>
  )
}
