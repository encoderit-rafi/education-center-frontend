export interface Blog {
  id: string;
  tag: string;
  date: string;
  title: string;
  desc: string;
  image: string;
}

export const BLOGS: Blog[] = [
  {
    id: "mastering-ielts-speaking",
    tag: "IELTS",
    date: "June 09, 2021",
    title: "Mastering the IELTS Speaking Section: Expert Tips",
    desc: "Discover the key strategies used by top scorers to articulate their thoughts clearly and confidently during the IELTS interview.",
    image: "/images/blogs/ielts-speaking.png",
  },
  {
    id: "why-pte-is-future",
    tag: "PTE",
    date: "June 15, 2021",
    title: "Why Pearson PTE is the Future of English Testing",
    desc: "An in-depth look at the computer-based testing methodology and why it's becoming the preferred choice for students.",
    image: "/images/blogs/pte-future.png",
  },
  {
    id: "toefl-ibt-home-edition",
    tag: "TOEFL",
    date: "July 02, 2021",
    title: "TOEFL iBT Home Edition: What You Need to Know",
    desc: "Everything from technical requirements to proctoring protocols for taking your TOEFL exam from the comfort of home.",
    image: "/images/blogs/toefl-home.png",
  },
  {
    id: "oet-writing-for-nurses",
    tag: "OET",
    date: "August 12, 2021",
    title: "How Nurses Can Excel in the OET Writing Subset",
    desc: "Practical guidance on writing referral letters and discharge summaries that meet professional clinical standards.",
    image: "/images/blogs/oet-nurses.png",
  },
  {
    id: "celpip-roadmap-canada-pr",
    tag: "CELPIP",
    date: "September 05, 2021",
    title: "The Complete Roadmap to Canadian PR via CELPIP",
    desc: "Step-by-step instructions on how to leverage your CELPIP scores for a successful immigration application to Canada.",
    image: "/images/blogs/celpip-roadmap.png",
  },
  {
    id: "cael-integrated-tasks",
    tag: "CAEL",
    date: "October 22, 2021",
    title: "Understanding the Integrated Nature of CAEL Tasks",
    desc: "Learn how CAEL simulates the real-world university experience by integrating reading, listening, and writing into single tasks.",
    image: "/images/blogs/cael-integrated.png",
  },
];
