import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-24 text-center">
      <h1 className="text-5xl font-semibold text-slate-950">404</h1>
      <p className="mt-4 text-lg text-slate-600">We couldn’t find the page you’re looking for.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">
        Return home
      </Link>
    </div>
  );
}
