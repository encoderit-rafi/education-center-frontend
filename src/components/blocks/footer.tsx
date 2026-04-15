import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="text-lg font-bold text-white mb-4 font-headline flex items-center gap-2">
              <Link href="/" className="flex items-center bg-white rounded-md px-2 py-1.5">
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
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="text-slate-400 text-sm hover:text-red-400 transition-colors" href="/about-us">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-slate-400 text-sm hover:text-red-400 transition-colors" href="#">
                  Our Experts
                </a>
              </li>
              <li>
                <a className="text-slate-400 text-sm hover:text-red-400 transition-colors" href="/about-us/accreditation">
                  Accreditation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="text-slate-400 text-sm hover:text-red-400 transition-colors" href="/contact-us">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-slate-400 text-sm hover:text-red-400 transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-slate-400 text-sm hover:text-red-400 transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 TEPTH Academic Atelier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-slate-400 text-sm hover:text-red-400 font-semibold" href="#">
              Privacy
            </a>
            <a className="text-slate-400 text-sm hover:text-red-400 font-semibold" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
