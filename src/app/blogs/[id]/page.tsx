import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const blogs = [
  {
    id: 0,
    tag: "IELTS",
    date: "June 09, 2021",
    readTime: "8 min read",
    author: "Sarah Mitchell",
    authorRole: "Senior IELTS Instructor",
    title: "Mastering the IELTS Speaking Section: Expert Tips",
    desc: "Discover the key strategies used by top scorers to articulate their thoughts clearly and confidently during the IELTS interview.",
    image: "/images/blogs/ielts-speaking.png",
    content: [
      {
        type: "paragraph",
        text: "The IELTS Speaking test is a face-to-face interview with a certified examiner that lasts between 11 and 14 minutes. It is divided into three parts, each designed to assess a different aspect of your spoken English. Many candidates feel nervous going in, but with the right preparation, you can walk out with a band score you're proud of.",
      },
      {
        type: "heading",
        text: "Understanding the Three Parts",
      },
      {
        type: "paragraph",
        text: "Part 1 involves answering questions about familiar topics such as your home, family, work, and interests. Part 2 gives you a task card with a topic you must speak about for one to two minutes after one minute of preparation. Part 3 is a deeper discussion on abstract themes connected to the Part 2 topic.",
      },
      {
        type: "quote",
        text: "Fluency is not about speaking fast — it is about speaking smoothly without unnecessary hesitation. Focus on coherence over speed.",
      },
      {
        type: "heading",
        text: "Top Strategies from Band 9 Scorers",
      },
      {
        type: "list",
        items: [
          "Extend your answers naturally using the PEEL method (Point, Explain, Example, Link).",
          "Use a variety of grammatical structures including conditionals, passives, and perfect tenses.",
          "Demonstrate a wide lexical range — paraphrase when you cannot recall an exact word.",
          "Maintain natural eye contact and appropriate body language throughout the interview.",
          "Practice recording yourself to identify filler words and unnatural pauses.",
        ],
      },
      {
        type: "paragraph",
        text: "One of the most common mistakes candidates make is memorising scripted answers. Examiners are trained to spot rehearsed responses and will redirect the conversation. Instead, practice flexible, topic-based conversations that allow you to adapt naturally.",
      },
      {
        type: "heading",
        text: "Vocabulary Strategies That Work",
      },
      {
        type: "paragraph",
        text: "Lexical resource accounts for 25% of your Speaking score. Read widely — newspapers, academic journals, and opinion pieces — and note down collocations and idiomatic phrases in context. A strong candidate does not just use big words; they use the right words in the right contexts.",
      },
      {
        type: "paragraph",
        text: "At TEPTH, our certified instructors run mock Speaking sessions that mirror real exam conditions. Students receive detailed feedback on fluency, coherence, lexical resource, and grammatical range — the exact four criteria used by IELTS examiners.",
      },
    ],
  },
  {
    id: 1,
    tag: "PTE",
    date: "June 15, 2021",
    readTime: "6 min read",
    author: "David Chen",
    authorRole: "PTE Academic Specialist",
    title: "Why Pearson PTE is the Future of English Testing",
    desc: "An in-depth look at the computer-based testing methodology and why it's becoming the preferred choice for students.",
    image: "/images/blogs/pte-future.png",
    content: [
      {
        type: "paragraph",
        text: "Pearson's PTE Academic has rapidly gained recognition among universities and immigration authorities worldwide. Its AI-driven scoring system eliminates human bias and delivers results within 48 hours — a stark contrast to IELTS's typical 13-day wait.",
      },
      {
        type: "heading",
        text: "What Makes PTE Different?",
      },
      {
        type: "paragraph",
        text: "Unlike traditional paper-based or semi-computerised tests, the PTE Academic is fully computerised. Every skill — Speaking, Writing, Reading, and Listening — is tested in integrated tasks that closely resemble real-world academic activities.",
      },
      {
        type: "quote",
        text: "The AI scoring engine analyses over 200 linguistic features per response, making it one of the most objective measures of English proficiency available today.",
      },
      {
        type: "heading",
        text: "Key Advantages for Test-Takers",
      },
      {
        type: "list",
        items: [
          "Scores available within 48 hours of the test.",
          "Unlimited score sending to institutions at no extra charge.",
          "Accepted by thousands of universities in Australia, UK, USA, and Canada.",
          "Flexible scheduling with tests available nearly every day of the year.",
          "AI scoring removes examiner inconsistency.",
        ],
      },
      {
        type: "paragraph",
        text: "The PTE Academic is particularly popular among students targeting Australian and New Zealand visas, as nearly all universities and immigration bodies in those countries accept PTE scores. TEPTH offers structured PTE preparation courses that focus on the unique scoring algorithm to help you maximise your score.",
      },
    ],
  },
  {
    id: 2,
    tag: "TOEFL",
    date: "July 02, 2021",
    readTime: "7 min read",
    author: "Emma Rodriguez",
    authorRole: "TOEFL & Academic English Coach",
    title: "TOEFL iBT Home Edition: What You Need to Know",
    desc: "Everything from technical requirements to proctoring protocols for taking your TOEFL exam from the comfort of home.",
    image: "/images/blogs/toefl-home.png",
    content: [
      {
        type: "paragraph",
        text: "ETS introduced the TOEFL iBT Home Edition as a response to global disruptions in test-centre access — and it has become a permanent fixture. The Home Edition is identical in format, scoring, and content to the test-centre version, but taken from your own home under live remote proctoring.",
      },
      {
        type: "heading",
        text: "Technical Requirements",
      },
      {
        type: "list",
        items: [
          "A Windows or Mac computer (tablets and Chromebooks are not accepted).",
          "A stable internet connection with at least 1 Mbps upload and download speed.",
          "A built-in or external webcam (minimum 320x240 resolution).",
          "A working microphone and speakers.",
          "The ProctorU Guardian Browser installed before the test date.",
        ],
      },
      {
        type: "heading",
        text: "What to Expect on Test Day",
      },
      {
        type: "paragraph",
        text: "You must check in up to 30 minutes before your scheduled start time. A live proctor will verify your identity using a government-issued photo ID, inspect your testing environment via your webcam, and monitor you throughout the entire test.",
      },
      {
        type: "quote",
        text: "Treat your home testing environment exactly as you would a formal test centre. Clear desk, silent room, no secondary screens, and no other people present.",
      },
      {
        type: "paragraph",
        text: "TEPTH runs full-length TOEFL iBT mock tests under realistic conditions and provides detailed score breakdowns by skill area, helping you pinpoint exactly where to focus your preparation energy.",
      },
    ],
  },
  {
    id: 3,
    tag: "OET",
    date: "August 12, 2021",
    readTime: "9 min read",
    author: "Dr. Priya Nair",
    authorRole: "OET Preparation Lead",
    title: "How Nurses Can Excel in the OET Writing Subset",
    desc: "Practical guidance on writing referral letters and discharge summaries that meet professional clinical standards.",
    image: "/images/blogs/oet-nurses.png",
    content: [
      {
        type: "paragraph",
        text: "The OET Writing sub-test requires healthcare professionals to produce a letter — most commonly a referral letter or discharge summary — based on case notes provided. For nurses in particular, demonstrating clinical accuracy alongside clear professional communication is what separates a B from an A.",
      },
      {
        type: "heading",
        text: "Understanding the Assessment Criteria",
      },
      {
        type: "paragraph",
        text: "OET Writing is assessed on five criteria: Purpose, Content, Conciseness and Clarity, Genre and Style, and Language. Each criterion is scored on a scale of 0 to 5. A score of B (equivalent to 350 points) is the minimum required by most nursing registration boards globally.",
      },
      {
        type: "quote",
        text: "Clinical accuracy is non-negotiable. An incorrect medication name or dosage in your letter will cost you marks under Content — and could cost a patient their safety in real life.",
      },
      {
        type: "heading",
        text: "Practical Tips for the Writing Subset",
      },
      {
        type: "list",
        items: [
          "Read the case notes carefully and identify only the relevant information for the letter purpose.",
          "Write in a professional clinical register — avoid informal language or abbreviations.",
          "Organise information logically: reason for referral, relevant history, current status, specific request.",
          "Be concise — OET letters should be 180–200 words. Padding is penalised.",
          "Practise transforming bullet-pointed notes into coherent prose sentences.",
        ],
      },
      {
        type: "paragraph",
        text: "TEPTH offers profession-specific OET preparation for nurses, doctors, and allied health professionals. Our instructors provide annotated feedback on your writing sample using the actual OET scoring rubric so you know precisely what to improve.",
      },
    ],
  },
  {
    id: 4,
    tag: "CELPIP",
    date: "September 05, 2021",
    readTime: "7 min read",
    author: "James Okonkwo",
    authorRole: "Canadian Immigration Advisor & CELPIP Trainer",
    title: "The Complete Roadmap to Canadian PR via CELPIP",
    desc: "Step-by-step instructions on how to leverage your CELPIP scores for a successful immigration application to Canada.",
    image: "/images/blogs/celpip-roadmap.png",
    content: [
      {
        type: "paragraph",
        text: "Canada's Express Entry system is the primary pathway to Permanent Residency for skilled workers. Your Comprehensive Ranking System (CRS) score determines whether you receive an Invitation to Apply (ITA). Language proficiency accounts for a significant portion of your CRS points — and CELPIP is one of the two approved English tests for Express Entry (the other being IELTS General Training).",
      },
      {
        type: "heading",
        text: "CELPIP Score Requirements for Express Entry",
      },
      {
        type: "paragraph",
        text: "To qualify for the Federal Skilled Worker Program, you need a Canadian Language Benchmark (CLB) of at least 7 in all four skills. Under CELPIP, a CLB 7 requires a score of at least 7 in Listening, Reading, Writing, and Speaking.",
      },
      {
        type: "quote",
        text: "Moving from a CLB 9 to a CLB 10 in all four skills can add over 30 points to your CRS score — the difference between waiting years and receiving an ITA within months.",
      },
      {
        type: "heading",
        text: "Why Choose CELPIP Over IELTS General?",
      },
      {
        type: "list",
        items: [
          "CELPIP is fully computer-based, which many candidates find more comfortable.",
          "The test is completed in one sitting — no return visits for speaking.",
          "Results are available within 4–8 business days.",
          "The Canadian-accented content may feel more natural for candidates planning to settle in Canada.",
          "CELPIP-General LS is available for citizenship applicants at a lower cost.",
        ],
      },
      {
        type: "paragraph",
        text: "TEPTH's CELPIP preparation programme includes detailed score diagnostics, targeted skill workshops, and full-length computer-based practice tests scored against the official marking rubrics.",
      },
    ],
  },
  {
    id: 5,
    tag: "CAEL",
    date: "October 22, 2021",
    readTime: "6 min read",
    author: "Dr. Anne Thornton",
    authorRole: "Academic English & CAEL Specialist",
    title: "Understanding the Integrated Nature of CAEL Tasks",
    desc: "Learn how CAEL simulates the real-world university experience by integrating reading, listening, and writing into single tasks.",
    image: "/images/blogs/cael-integrated.png",
    content: [
      {
        type: "paragraph",
        text: "The Canadian Academic English Language (CAEL) Assessment is designed specifically for students seeking entry to Canadian post-secondary institutions. Unlike IELTS or TOEFL, CAEL explicitly mirrors the type of academic tasks students will encounter in their first year of university study.",
      },
      {
        type: "heading",
        text: "What Makes CAEL Unique?",
      },
      {
        type: "paragraph",
        text: "CAEL tasks are integrated — meaning a single task draws on multiple skills simultaneously. For instance, the Writing On Demand section requires you to write in response to an academic text you have just read. This reflects real university assignments where you synthesise information from sources into your own analysis.",
      },
      {
        type: "quote",
        text: "CAEL does not just test your English — it tests your ability to function academically in English. That distinction makes preparation fundamentally different from other exams.",
      },
      {
        type: "heading",
        text: "Accepted at 180+ Canadian Institutions",
      },
      {
        type: "list",
        items: [
          "Most Canadian universities require a score of 60–70 for undergraduate admission.",
          "Graduate programmes typically require 70 or above.",
          "Scores are valid for two years from the test date.",
          "The CAEL CE (Computerised Edition) offers flexible scheduling at over 150 test centres.",
          "Scores are reported on a unified 10–90 scale across all four skills.",
        ],
      },
      {
        type: "paragraph",
        text: "TEPTH offers focused CAEL preparation that trains you in the integrated task format, teaches academic synthesising techniques, and provides timed practice under realistic conditions. Our students consistently achieve scores above the 70 threshold required by leading Canadian universities.",
      },
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = blogs[parseInt(id, 10)];
  if (!blog) return { title: "Blog Not Found | TEPTH" };
  return {
    title: `${blog.title} | TEPTH Blog`,
    description: blog.desc,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  const blog = blogs[numericId];

  if (!blog || isNaN(numericId)) {
    notFound();
  }

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <main className="pt-24 bg-background">
      {/* ── Hero Banner ── */}
      <section className="relative crimson-gradient overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Home
            </Link>
            <span className="material-symbols-outlined text-white/40 text-sm">
              chevron_right
            </span>
            <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
              Blogs
            </span>
            <span className="material-symbols-outlined text-white/40 text-sm">
              chevron_right
            </span>
            <span className="text-white text-xs font-semibold tracking-widest uppercase truncate max-w-xs">
              {blog.tag}
            </span>
          </nav>

          {/* Tag + date row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-white/20 text-white text-[10px] font-extrabold tracking-widest uppercase rounded-full border border-white/30">
              {blog.tag}
            </span>
            <span className="text-white/60 text-xs font-medium">{blog.date}</span>
            <span className="text-white/40 text-xs">·</span>
            <span className="text-white/60 text-xs font-medium">{blog.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-8">
            {blog.title}
          </h1>

          {/* Author chip */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person
              </span>
            </div>
            <div>
              <p className="text-white text-sm font-bold">{blog.author}</p>
              <p className="text-white/60 text-xs">{blog.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
          {/* ── Article ── */}
          <article>
            {/* Featured Image */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 border border-outline/10">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lead paragraph */}
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 font-medium border-l-4 border-primary pl-6">
              {blog.desc}
            </p>

            {/* Content blocks */}
            <div className="space-y-7 text-on-surface leading-relaxed">
              {blog.content.map((block, idx) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={idx} className="text-base text-on-surface-variant leading-[1.85]">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "heading") {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl font-headline font-extrabold text-secondary mt-12 mb-2"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={idx}
                      className="relative my-10 pl-8 pr-6 py-6 bg-red-50 rounded-2xl border-l-4 border-primary"
                    >
                      <span
                        className="material-symbols-outlined text-primary text-4xl absolute -top-4 left-4 opacity-30"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        aria-hidden
                      >
                        format_quote
                      </span>
                      <p className="text-lg font-headline font-semibold text-primary leading-relaxed italic">
                        {block.text}
                      </p>
                    </blockquote>
                  );
                }
                if (block.type === "list" && block.items) {
                  return (
                    <ul key={idx} className="space-y-3 mt-2">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-3 text-on-surface-variant text-base">
                          <span
                            className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check_circle
                          </span>
                          <span className="leading-[1.75]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* Back link */}
            <div className="mt-14 pt-8 border-t border-outline/30">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary font-extrabold text-[11px] tracking-widest uppercase hover:gap-3 transition-all"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to All Blogs
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="space-y-8">
            {/* Tag Badge */}
            <div className="bg-white rounded-2xl shadow-sm border border-outline/10 p-6">
              <p className="text-xs font-extrabold text-primary tracking-widest uppercase mb-3">
                Category
              </p>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-primary text-sm font-bold rounded-full border border-red-100">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  label
                </span>
                {blog.tag}
              </span>
            </div>

            {/* Author Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-outline/10 p-6 space-y-4">
              <p className="text-xs font-extrabold text-primary tracking-widest uppercase">
                Written By
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full crimson-gradient flex items-center justify-center shadow-lg shrink-0">
                  <span
                    className="material-symbols-outlined text-white text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    person
                  </span>
                </div>
                <div>
                  <p className="font-headline font-bold text-secondary text-base">{blog.author}</p>
                  <p className="text-on-surface-variant text-xs mt-0.5">{blog.authorRole}</p>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl shadow-sm border border-outline/10 p-6">
              <p className="text-xs font-extrabold text-primary tracking-widest uppercase mb-4">
                Share Article
              </p>
              <div className="flex gap-3">
                {[
                  { icon: "share", label: "Copy link" },
                  { icon: "mail", label: "Email" },
                  { icon: "forum", label: "Message" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    title={label}
                    className="flex-1 flex flex-col items-center gap-1 px-3 py-3 rounded-xl bg-surface-container-low hover:bg-red-50 hover:text-primary text-on-surface-variant transition-colors border border-outline/10 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                    <span className="text-[9px] font-semibold tracking-wider uppercase">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Sidebar Widget */}
            <div className="crimson-gradient rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  school
                </span>
                <h3 className="font-headline font-extrabold text-lg leading-tight">
                  Start your {blog.tag} preparation today
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Expert instructors. Proven methods. Real results.
                </p>
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center gap-2 bg-white text-primary font-headline font-bold px-5 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Book Free Consultation
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Related Blogs ── */}
      {related.length > 0 && (
        <section className="py-20 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
                Keep Reading
              </h2>
              <h3 className="text-3xl font-headline font-extrabold text-secondary">
                Related Articles
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((b) => (
                <Link
                  key={b.id}
                  href={`/blogs/${b.id}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-outline/10"
                >
                  <div className="w-full aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={b.image}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-extrabold text-primary tracking-widest uppercase bg-red-50 px-2 py-0.5 rounded">
                        {b.tag}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase">
                        {b.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-headline font-bold text-secondary leading-tight group-hover:text-primary transition-colors">
                      {b.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
                      {b.desc}
                    </p>
                    <div className="pt-2 mt-auto">
                      <span className="inline-flex items-center gap-2 text-primary font-extrabold text-[11px] tracking-widest group-hover:gap-3 transition-all uppercase">
                        Read More
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto crimson-gradient rounded-3xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">
              Ready to begin your journey?
            </h3>
            <p className="text-xl max-w-2xl mx-auto font-medium opacity-90">
              Join over 50,000 students who have achieved their dreams with our guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/free-consultation"
                className="bg-white text-primary font-headline font-bold px-10 py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-50"
              >
                Get Started Now{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/contact-us"
                className="bg-transparent text-white font-headline font-bold px-10 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors shadow-sm border-solid"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
