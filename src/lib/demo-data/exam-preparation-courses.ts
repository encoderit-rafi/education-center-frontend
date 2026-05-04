/*

TOEFL iBT Preparation Course
 TOEFL iBT Classroom-based Course
 TOEFL iBT Online Course
- IELTS Preparation Course (IELTS Academic & IELTS General Training)
 IELTS Classroom-based Course
 IELTS Online Course
- PTE Preparation Course (PTE Academic & PTE Core)
 PTE Classroom-based Course
 PTE Online Course
- CELPIP Preparation Course
 CELPIP General Classroom-based Course
 CELPIP General Online Course
- CAEL Preparation Course
 CAEL Classroom-based Course
 CAEL Online Course
- Skills for English (SELT) Preparation Course
 Skills for English (SELT) Classroom-based Course
 Skills for English (SELT) Online Course
- OET Preparation Course
 OET Classroom-based Course
 OET Online Course
*/

const exam_preparation_courses = [
  {
    id: "ielts",
    name: "IELTS (Academic & General Training)",

    description: `The IELTS is one of the most widely recognized English proficiency exams in the world. It is accepted by
over 11,000 universities, immigration authorities, and organizations across more than 140 countries.
IELTS is commonly required for immigration to countries such as Canada, the UK, Australia, and New
Zealand, as well as for university admission and professional registration.
There are two main types of IELTS:
• IELTS Academic – for university admission and higher education
• IELTS General Training – mainly for immigration and work purposes
Because of its global recognition and reliability, IELTS remains one of the most trusted English language
assessments worldwide.`,
    course_formats: [
      {
        course_type_id: "classroom",
        title: "IELTS Classroom Training",
        description: `IELTS offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_classroom",
            title: "Private One-to-One Course",
            subtitle: "VIP Preparation Program",

            overview:
              "The most personalized and intensive exam preparation program at TEPTH, designed for focused attention, faster progress, and a fully customized learning plan.",

            description: {
              intro:
                "Every session is tailored to the candidate’s current level, target score, and exam deadline.",
              learningApproach:
                "Candidates are evaluated before starting to identify strengths and weaknesses, followed by a structured preparation plan.",
              methodology:
                "Training adapts continuously based on progress instead of following a fixed syllabus.",
            },

            benefits: [
              "Fully personalized learning",
              "Maximum instructor attention",
              "Fast-track improvement",
              "Flexible pacing",
            ],

            focusAreas: [
              "Writing correction",
              "Speaking practice",
              "Reading strategies",
              "Listening accuracy",
            ],

            trainingIncludes: [
              "Realistic exam tasks",
              "Section-wise strategies",
              "Detailed writing feedback",
              "Intensive speaking practice",
              "Time-management techniques",
            ],

            suitableFor: [
              "High band score seekers",
              "Limited time candidates",
              "One-to-one learners",
              "Fast improvement needs",
            ],

            courseDetails: {
              totalDurationHours: 24,
              completionTime: "6 Weeks",
              schedule: "Flexible",
              classSize: "1",
              format: "Offline",
              location: {
                name: "TEPTH",
                address: "Suite 703, Apricot Tower, Dubai Silicon Oasis",
              },
            },

            tags: ["premium", "personalized", "fast-track"],
            outcome:
              "Maximizes efficiency with personalized guidance to achieve target scores.",
          },
          {
            course_id: "semi_private_classroom",
            title: "Semi-Private Course",
            subtitle: "Two Students Only",

            overview:
              "A small-group course combining personalized instruction with collaborative learning.",

            description: {
              intro:
                "Designed for candidates who want focused learning with peer interaction.",
              learningApproach:
                "Instructor provides detailed guidance while encouraging discussion and collaboration.",
              methodology:
                "Enhances speaking practice and idea exchange through peer interaction.",
            },

            benefits: [
              "Focused instructor attention",
              "Peer learning",
              "Better speaking practice",
              "Different perspectives",
            ],

            focusAreas: [
              "Speaking collaboration",
              "Idea development",
              "Writing feedback",
              "Listening & reading",
            ],

            trainingIncludes: [
              "Structured section training",
              "Speaking practice",
              "Writing correction",
              "Reading & listening strategies",
              "Exam simulations",
            ],

            suitableFor: [
              "Friends/colleagues",
              "Family members",
              "Small group learners",
            ],

            courseDetails: {
              totalDurationHours: 24,
              completionTime: "6 Weeks",
              schedule: "Flexible",
              classSize: "2",
              format: "Offline",
              location: {
                name: "TEPTH",
                address: "Suite 703, Apricot Tower, Dubai Silicon Oasis",
              },
            },

            tags: ["collaborative", "balanced", "interactive"],
            outcome:
              "Balances personalized learning with collaboration for effective progress.",
          },
          {
            course_id: "group_classroom",
            title: "Group Course",
            subtitle: "Minimum Three Students",

            overview:
              "A dynamic classroom program designed for collaborative and structured learning.",

            description: {
              intro:
                "Small group classes ensure active participation and engagement.",
              learningApproach:
                "Encourages discussion, speaking practice, and interaction.",
              methodology:
                "Peer learning builds motivation and accountability.",
            },

            benefits: [
              "Interactive environment",
              "Peer motivation",
              "Regular speaking practice",
              "Structured guidance",
            ],

            focusAreas: [
              "Reading strategies",
              "Listening techniques",
              "Writing structures",
              "Speaking fluency",
            ],

            trainingIncludes: [
              "Reading strategies",
              "Listening techniques",
              "Writing structures",
              "Speaking fluency practice",
              "Exam-style questions",
              "Expert strategies",
            ],

            suitableFor: [
              "Group learners",
              "Motivation seekers",
              "Structured preparation candidates",
            ],

            courseDetails: {
              totalDurationHours: 24,
              completionTime: "6 Weeks",
              schedule: "Flexible",
              classSize: "3+",
              format: "Offline",
              location: {
                name: "TEPTH",
                address: "Suite 703, Apricot Tower, Dubai Silicon Oasis",
              },
            },

            tags: ["popular", "interactive", "structured"],
            outcome:
              "Combines structured learning with collaboration and expert guidance.",
          },
        ],
      },
      {
        course_type_id: "online",
        title: "IELTS Online Training",
        description: `IELTS offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_online",
            title: "Online Preparation Course",
            subtitle: "Live Interactive Training",

            overview:
              "A flexible online program delivering classroom-quality training through live sessions.",

            description: {
              intro: "Ideal for students who prefer learning from home.",
              learningApproach:
                "Live sessions with instructors allow real-time interaction and feedback.",
              methodology:
                "Focus on real exam tasks and performance improvement.",
            },

            benefits: [
              "Learn from anywhere",
              "Flexible schedule",
              "Live interaction",
              "Same quality as offline",
            ],

            focusAreas: [
              "Full exam coverage",
              "Speaking practice",
              "Writing improvement",
              "Strategy building",
            ],

            trainingIncludes: [
              "Live classes",
              "Full exam training",
              "Speaking practice",
              "Writing feedback",
              "Strategy development",
            ],

            suitableFor: [
              "Remote learners",
              "Busy professionals",
              "Flexible schedule seekers",
            ],

            courseDetails: {
              totalDurationHours: 20,
              completionTime: "Flexible",
              schedule: "Flexible",
              classSize: "Varies",
              format: "Online",
              location: {
                name: "Online",
                address: "Remote",
              },
            },

            tags: ["online", "flexible", "remote"],
            outcome:
              "Enables effective preparation from anywhere with structured guidance.",
          },
        ],
      },
    ],
  },
];

export default exam_preparation_courses;
