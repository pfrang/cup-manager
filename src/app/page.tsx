import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/studio" className="mb-4 underline">
        Go to Studio
      </Link>
    </div>
  );
}
