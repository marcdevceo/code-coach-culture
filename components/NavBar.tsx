import Link from "next/link";

export default function NavBar() {
    return (
      <nav className="w-full p-4 md:py-4 md:px-6 bg-slate-900 shadow-md flex justify-between items-center">
        <div className="text-sm md:text-xl font-bold text-gray-200">
          <Link href="/">
            Code.Coach.Culture.
          </Link>
        </div>
        <div className="space-x-3 md:space-x-6">
          <Link href="/"
            className="text-gray-200 text-sm md:text-xl hover:text-green-600 transition">Home
          </Link>
          <Link href="/about-me"
             className="text-gray-200 text-sm md:text-xl hover:text-green-600 transition">AboutMe
          </Link>
          <Link href="/contact"
            className="text-gray-200 text-sm md:text-xl hover:text-green-600 transition">Contact
          </Link>
        </div>
      </nav>
    );
  }