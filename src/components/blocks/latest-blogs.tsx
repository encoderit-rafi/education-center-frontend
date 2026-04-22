import Image from "next/image";

import { BLOGS } from "@/lib/blogs-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LatestBlogs() {

  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-[#A11D1D] tracking-widest uppercase mb-4">
            Latest from TEPTH
          </h2>
          <h3 className="text-4xl font-headline font-extrabold text-slate-900 tracking-tight">
            Blogs
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-outline/10"
            >
              <div className="w-full aspect-video overflow-hidden rounded-t-2xl">
                <Image
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={blog.image}
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-extrabold text-primary tracking-widest uppercase bg-red-50 px-2 py-0.5 rounded">
                    {blog.tag}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 uppercase">
                    {blog.date}
                  </span>
                </div>
                <h4 className="text-lg font-headline font-bold text-secondary leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
                  {blog.desc}
                </p>
                <div className="pt-2 mt-auto">
                  <Link
                    className="inline-flex items-center gap-2 text-primary font-extrabold text-sm tracking-widest hover:gap-3 transition-all uppercase"
                    href="/blogs"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary font-extrabold text-lg tracking-widest hover:gap-3 transition-all uppercase"
          >View All Blogs</Link>
        </div>
      </div>
    </section>
  );
}
