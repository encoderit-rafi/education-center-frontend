import Image from "next/image";
import Link from "next/link";

export default function CourseList() {
  const exams = [
    {
      id: "ielts-excellence",
      name: "IELTS",
      desc: "The world's most popular English test for higher education and global migration.",
      image: "/images/exams/ielts.png",
    },
    {
      id: "pte-core",
      name: "Pearson PTE",
      desc: "Leading computer-based academic English test for study abroad and immigration.",
      image: "/images/exams/pte.png",
    },
    {
      id: "spoken-english",
      name: "CELPIP",
      desc: "Canada's leading general English language proficiency test for permanent residency.",
      image: "/images/exams/celpip.png",
    },
    {
      id: "academic-writing",
      name: "TOEFL",
      desc: "Preferred English-language test for students applying to international universities.",
      image: "/images/exams/toefl.png",
    },
    {
      id: "oet-healthcare",
      name: "OET",
      desc: "The English language test specifically designed for healthcare professionals.",
      image: "/images/exams/oet.png",
    },
    {
      id: "corporate-pro",
      name: "CAEL",
      desc: "Canadian Academic English Language test for study in Canada.",
      image: "/images/exams/cael.png",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white/50 border-y border-outline/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Exams
          </h2>
          <h3 className="text-3xl font-headline font-extrabold text-secondary">
            Explore all the exams
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, i) => (
            <Link
              key={i}
              href={`/courses/${exam.id}`}
              className="overflow-hidden rounded-2xl bg-white border border-outline/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer"
            >
              <Image
                alt={exam.name}
                className="w-full h-40 object-cover"
                src={exam.image}
                width={400}
                height={160}
              />
              <div className="p-6 text-center">
                <h4 className="font-headline font-bold text-secondary text-lg mb-2">
                  {exam.name}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {exam.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
