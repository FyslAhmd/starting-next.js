import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <h1 className="text-2xl">Page Not Found</h1>
      <button>
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  );
}
