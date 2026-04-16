import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="text-lg font-bold text-white mb-4 font-headline flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center bg-white rounded-md px-2 py-1.5"
              >
                <Image
                  alt="TEPTH Logo"
                  height={80}
                  width={80}
                  src="/images/tepth-logo.png"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Providing high-end digital editorialism and test preparation for
              the global academic elite.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-slate-400 text-sm hover:text-red-400 transition-colors"
                  href="/services/preparation"
                >
                  Exam Preparation Courses
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 text-sm hover:text-red-400 transition-colors"
                  href="/assessment-solutions"
                >
                  Assessment Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 text-sm hover:text-red-400 transition-colors"
                  href="/services/delivery"
                >
                  Exam Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-slate-400 text-sm hover:text-red-400 transition-colors"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 text-sm hover:text-red-400 transition-colors"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 text-sm hover:text-red-400 transition-colors"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <Link
                className="text-slate-400 hover:text-red-400 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </Link>
              <Link
                className="text-slate-400 hover:text-red-400 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 TEPTH Academic Atelier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              className="text-slate-400 text-sm hover:text-red-400 font-semibold"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-slate-400 text-sm hover:text-red-400 font-semibold"
              href="#"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
