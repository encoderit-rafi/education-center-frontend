import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LatestBlogs() {
  const blogs = [
    {
      tag: "IELTS",
      date: "June 09, 2021",
      title: "Mastering the IELTS Speaking Section: Expert Tips",
      desc: "Discover the key strategies used by top scorers to articulate their thoughts clearly and confidently during the IELTS interview.",
      image: "/images/blogs/ielts-speaking.png",
    },
    {
      tag: "PTE",
      date: "June 15, 2021",
      title: "Why Pearson PTE is the Future of English Testing",
      desc: "An in-depth look at the computer-based testing methodology and why it's becoming the preferred choice for students.",
      image: "/images/blogs/pte-future.png",
    },
    {
      tag: "TOEFL",
      date: "July 02, 2021",
      title: "TOEFL iBT Home Edition: What You Need to Know",
      desc: "Everything from technical requirements to proctoring protocols for taking your TOEFL exam from the comfort of home.",
      image: "/images/blogs/toefl-home.png",
    },
    {
      tag: "OET",
      date: "August 12, 2021",
      title: "How Nurses Can Excel in the OET Writing Subset",
      desc: "Practical guidance on writing referral letters and discharge summaries that meet professional clinical standards.",
      image: "/images/blogs/oet-nurses.png",
    },
    {
      tag: "CELPIP",
      date: "September 05, 2021",
      title: "The Complete Roadmap to Canadian PR via CELPIP",
      desc: "Step-by-step instructions on how to leverage your CELPIP scores for a successful immigration application to Canada.",
      image: "/images/blogs/celpip-roadmap.png",
    },
    {
      tag: "CAEL",
      date: "October 22, 2021",
      title: "Understanding the Integrated Nature of CAEL Tasks",
      desc: "Learn how CAEL simulates the real-world university experience by integrating reading, listening, and writing into single tasks.",
      image: "/images/blogs/cael-integrated.png",
    },
  ];

  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Latest from TEPTH
          </h2>
          <h3 className="text-3xl font-headline font-extrabold text-secondary">
            Blogs
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <Link
              key={i}
              href={`/blogs/${i}`}
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
                  <a
                    className="inline-flex items-center gap-2 text-primary font-extrabold text-[11px] tracking-widest hover:gap-3 transition-all uppercase"
                    href="#"
                  >
                    Read More
                    <ChevronRight />
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
