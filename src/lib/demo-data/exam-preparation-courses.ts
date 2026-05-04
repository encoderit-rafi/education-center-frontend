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
        courses: [],
      },
      {
        course_type_id: "online",
        title: "IELTS Online Training",
        description: `IELTS offers two distinct tests to suit different purposes.`,
        courses: [],
      },
    ],
  },
];

export default exam_preparation_courses;
