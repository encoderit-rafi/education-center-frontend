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
            description: `The Private One-to-One Course, also known as our VIP preparation program, offers the most
personalized and intensive exam preparation available at TEPTH.
This course is designed for candidates who want focused attention, faster progress, and a preparation
plan built entirely around their individual needs. Every session is tailored to the candidate’s current
level, target score, and exam deadline.
Before the course begins, we evaluate the candidate’s strengths and weaknesses across the exam
sections. Based on this analysis, the instructor develops a structured preparation plan that targets the
specific areas that need improvement.
Instead of following a fixed classroom syllabus, the training evolves according to the candidate’s
progress. More time can be dedicated to writing correction, speaking practice, reading strategies, or
listening accuracy, depending on what will have the greatest impact on the final score.
During the course, candidates work on:
• Realistic exam tasks from previous and simulated test materials
• Proven strategies for each section of the exam
• Detailed feedback on writing tasks, including structure, coherence, grammar, and vocabulary
• Intensive speaking practice with professional evaluation and improvement strategies
• Time-management techniques that help candidates perform confidently under exam conditions
Because of its personalized nature, this course is particularly suitable for candidates who:
• Need to achieve a high band score
• Have a limited preparation timeframe
• Prefer learning with individual attention and continuous feedback
• Want to improve specific exam sections quickly
Course Details
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Schedule: Flexible
This format allows candidates to maximize every hour of preparation and move toward their target
score with clear direction and expert guidance.`,
          },
          {
            course_id: "semi_private_classroom",
            title: "Semi-Private Course",
            description: `The Semi-Private Course is designed for candidates who prefer a small learning environment while still
benefiting from collaboration with another student.
With only two students in the class, the instructor can provide detailed guidance and feedback while
also creating opportunities for interaction, discussion, and peer learning. Many students find this format
both productive and motivating.
The presence of a second learner creates a natural environment for speaking practice, idea exchange,
and collaborative problem-solving, especially for exam sections that require communication and
discussion.
Both students receive focused attention from the instructor while also benefiting from hearing different
perspectives and approaches to exam tasks.
During the course, students work on:
• Structured training for each exam section
• Guided speaking practice and feedback
• Writing task analysis and correction
• Reading and listening strategies to improve accuracy and speed
• Exam simulations that build familiarity and confidence
This format is often chosen by friends, colleagues, or family members preparing for the same exam,
but it also works very well for students who simply prefer learning in a small, supportive environment.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: 2 Students Only
Schedule: Flexible
The semi-private format offers an excellent balance between personalized instruction and interactive
learning.`,
          },
          {
            course_id: "group_classroom",
            title: "Group Course",
            description: `he Group Course is designed for candidates who benefit from a dynamic classroom environment while
still receiving meaningful instructor support.
Group classes are intentionally kept small, starting from a minimum of three candidates, so that every
student remains actively involved throughout the training. The classroom atmosphere encourages
discussion, participation, and regular speaking practice, which are essential for exam success.
Many candidates find that learning alongside others with similar goals creates a sense of motivation and
accountability that keeps them focused throughout the preparation process.
The course follows a carefully structured program that covers all exam sections, including:
• Reading strategies that improve speed and comprehension
• Listening techniques for identifying key information under time pressure
• Writing structures that meet official exam scoring criteria
• Speaking practice that develops fluency, coherence, and confidence
Students regularly work with authentic exam-style questions, helping them become familiar with the
format, timing, and expectations of the test.
Instructors also provide practical strategies and insights gained from extensive experience in exam
preparation, allowing students to avoid common mistakes and approach the exam more strategically.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: Small Groups
Schedule: Flexible
For many candidates, this format offers the perfect combination of structured learning, collaborative
practice, and professional guidance.`,
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
            description: `Our Online Preparation Course provides the same high-quality exam training as our classroom
programs, delivered through live interactive sessions.
This option is ideal for candidates who prefer studying from home or have demanding work schedules
that make commuting difficult.
Lessons are conducted in real time with experienced instructors, allowing students to ask questions,
participate in discussions, and receive feedback just as they would in a physical classroom.
Despite being delivered online, the course maintains a strong practical focus. Students work on real
exam tasks, strategy development, and performance improvement, ensuring that each session
contributes directly to exam readiness.
Participants benefit from:
• Live instructor-led sessions
• Structured training across all exam sections
• Speaking practice with feedback
• Writing evaluation and improvement guidance
• Flexible scheduling options
Course Details:
Total Duration: 20 Hours
Format: Live Online Classes
Schedule: Flexible
This format allows candidates to prepare effectively from anywhere while maintaining the structure
and discipline of a guided course.`,
          },
        ],
      },
    ],
  },
  {
    id: "toefl",
    name:"TOEFL iBT",

    description: `TOEFL iBT (Test of English as a Foreign Language)
The TOEFL iBT is one of the oldest and most respected English proficiency exams, widely used for
university admission, especially in the United States and Canada.
It is accepted by more than 11,500 universities and institutions in over 160 countries. The exam
measures academic English skills needed for studying in an English-speaking environment.
TOEFL iBT focuses strongly on academic communication, making it a common requirement for students
planning to pursue undergraduate or postgraduate studies abroad.`,
    course_formats: [
      {
        course_type_id: "classroom",
        title: "TOEFL iBT Classroom Training",
        description: `TOEFL iBT offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_classroom",
            title: "Private One-to-One Course",
            description: `The TOEFL iBT Private One-to-One Course, also known as our VIP preparation program, offers the most personalized and intensive exam preparation available at TEPTH.
This course is designed for candidates who want focused attention, faster progress, and a preparation plan built entirely around their individual needs. Every session is tailored to the candidate’s current level, target score, and exam deadline.
Before the course begins, we evaluate the candidate’s strengths and weaknesses across the exam sections. Based on this analysis, the instructor develops a structured preparation plan that targets the specific areas that need improvement.
Instead of following a fixed classroom syllabus, the training evolves according to the candidate’s progress. More time can be dedicated to writing correction, speaking practice, reading strategies, or listening accuracy, depending on what will have the greatest impact on the final score.

During the course, candidates work on:
• Realistic TOEFL iBT exam tasks from previous and simulated test materials
• Proven strategies for each section and each question type
• Detailed feedback on writing tasks, including structure, coherence, grammar, and vocabulary
• Intensive speaking practice with professional evaluation and improvement strategies
• Time-management techniques that help candidates perform confidently under exam conditions
Because of its personalized nature, this course is particularly suitable for candidates who:
• Need to achieve a high score 4+ scale   
• Have a limited preparation timeframe
• Prefer learning with individual attention and continuous feedback
• Want to improve specific exam sections quickly
Course Details
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Schedule: Flexible
This format allows candidates to maximize every hour of preparation and move toward their target score with clear direction and expert guidance.`,
          },
          {
            course_id: "semi_private_classroom",
            title: "Semi-Private Course",
            description: `The TOEFL iBT Semi-Private Course is designed for candidates who prefer a small learning environment while still benefiting from collaboration with another student.
With only two students in the class, the instructor can provide detailed guidance and feedback while also creating opportunities for interaction, discussion, and peer learning. Many students find this format both productive and motivating.
The presence of a second learner creates a natural environment for speaking practice, idea exchange, and collaborative problem-solving, especially for exam sections that require communication and discussion.
Both students receive focused attention from the instructor while also benefiting from hearing different perspectives and approaches to exam tasks.
During the course, students work on:
• Structured training for each exam section and question type
• Guided speaking practice and feedback
• Writing tasks analysis and correction
• Reading and listening strategies to improve accuracy and speed
• Exam simulations that build familiarity and confidence
This format is often chosen by friends, colleagues, or family members preparing for the same exam, but it also works very well for students who simply prefer learning in a small, supportive environment.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: 2 Students Only
Schedule: Flexible
The semi-private format offers an excellent balance between personalized instruction and interactive learning.`,
          },
          {
            course_id: "group_classroom",
            title: "Group Course",
            description: `The TOEFL iBT Group Course is designed for candidates who benefit from a dynamic classroom environment while still receiving meaningful instructor support.
Group classes are intentionally kept small, starting from a minimum of three candidates, so that every student remains actively involved throughout the training. The classroom atmosphere encourages discussion, participation, and regular speaking practice, which are essential for exam success.
Many candidates find that learning alongside others with similar goals creates a sense of motivation and accountability that keeps them focused throughout the preparation process.
The course follows a carefully structured program that covers all exam sections, including:
• Reading strategies that improve speed and comprehension
• Listening techniques for identifying key information under time pressure
• Writing structures that meet official exam scoring criteria
• Speaking practice that develops fluency, coherence, and confidence
Students regularly work with authentic exam-style questions, helping them become familiar with the format, timing, and expectations of the test.
Instructors also provide practical strategies and insights gained from extensive experience in exam preparation, allowing students to avoid common mistakes and approach the exam more strategically.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: Small Groups
Schedule: Flexible
For many candidates, this format offers the perfect combination of structured learning, collaborative practice, and professional guidance.`,
          },
        ],
      },
      {
        course_type_id: "online",
        title: "TOEFL Online Training",
        description: `TOEFL offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_online",
            title: "Online Preparation Course",
            description: `Our TOEFL iBT Online Preparation Course provides the same high-quality exam training as our classroom programs, delivered through live interactive sessions.
This option is ideal for candidates who prefer studying from home or have demanding work schedules that make commuting difficult.
Lessons are conducted in real time with experienced instructors, allowing students to ask questions, participate in discussions, and receive feedback just as they would in a physical classroom.
Despite being delivered online, the course maintains a strong practical focus. Students work on real exam tasks, strategy development, and performance improvement, ensuring that each session contributes directly to exam readiness.
Participants benefit from:
• Live instructor-led sessions
• Structured training across all exam sections
• Speaking practice with feedback
• Writing evaluation and improvement guidance
• Flexible scheduling options
Course Details: 
Total Duration: 20 Hours
Format: Live Online Classes
Schedule: Flexible
This format allows candidates to prepare effectively from anywhere while maintaining the structure and discipline of a guided course.`,
          },
        ],
      },
    ],
  },
  {
    id: "pte",
    name:"PTE",

    description: `The PTE Academic is a fully computer-based English proficiency exam developed by Pearson. It
is widely accepted by thousands of universities and governments around the world, including
immigration authorities in countries such as Australia, Canada and New Zealand.
One of the biggest advantages of PTE is its fast results, which are typically available within 48
hours. The test uses advanced AI scoring technology to evaluate speaking, writing, listening,
and reading skills objectively.
PTE is particularly popular among candidates who prefer computer-based testing and quicker
result turnaround times`,
    course_formats: [
      {
        course_type_id: "classroom",
        title: "PTE Classroom Training",
        description: `PTE offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_classroom",
            title: "Private One-to-One Course",
            description: `The PTE Private One-to-One Course, also known as our VIP preparation program, offers the most
personalized and intensive exam preparation available at TEPTH.
This course is designed for candidates who want focused attention, faster progress, and a preparation
plan built entirely around their individual needs. Every session is tailored to the candidate’s current
level, target score, and exam deadline.
Before the course begins, we evaluate the candidate’s strengths and weaknesses across the exam
sections. Based on this analysis, the instructor develops a structured preparation plan that targets the
specific areas that need improvement.
Instead of following a fixed classroom syllabus, the training evolves according to the candidate’s
progress. More time can be dedicated to writing correction, speaking practice, reading strategies, or
listening accuracy, depending on what will have the greatest impact on the final score.
During the course, candidates work on:
• Realistic PTE exam tasks from previous and simulated test materials
• Proven strategies for each section and each question type
• Detailed feedback on writing tasks, including structure, coherence, grammar, and vocabulary
• Intensive speaking practice with professional evaluation and improvement strategies
• Time-management techniques that help candidates perform confidently under exam conditions
Because of its personalized nature, this course is particularly suitable for candidates who:
• Need to achieve a high score 79+
• Have a limited preparation timeframe
• Prefer learning with individual attention and continuous feedback
• Want to improve specific exam sections quickly
Course Details
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Schedule: Flexible
This format allows candidates to maximize every hour of preparation and move toward their target
score with clear direction and expert guidance.`,
          },
          {
            course_id: "semi_private_classroom",
            title: "Semi-Private Course",
            description: `The PTE Semi-Private Course is designed for candidates who prefer a small learning environment while
still benefiting from collaboration with another student.
With only two students in the class, the instructor can provide detailed guidance and feedback while
also creating opportunities for interaction, discussion, and peer learning. Many students find this format
both productive and motivating.
The presence of a second learner creates a natural environment for speaking practice, idea exchange,
and collaborative problem-solving, especially for exam sections that require communication and
discussion.
Both students receive focused attention from the instructor while also benefiting from hearing different
perspectives and approaches to exam tasks.
During the course, students work on:
• Structured training for each exam section and question type
• Guided speaking practice and feedback
• Writing tasks analysis and correction
• Reading and listening strategies to improve accuracy and speed
• Exam simulations that build familiarity and confidence
This format is often chosen by friends, colleagues, or family members preparing for the same exam,
but it also works very well for students who simply prefer learning in a small, supportive environment.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: 2 Students Only
Schedule: Flexible
The semi-private format offers an excellent balance between personalized instruction and interactive
learning.`,
          },
          {
            course_id: "group_classroom",
            title: "Group Course",
            description: `The PTE Group Course is designed for candidates who benefit from a dynamic classroom environment
while still receiving meaningful instructor support.
Group classes are intentionally kept small, starting from a minimum of three candidates, so that every
student remains actively involved throughout the training. The classroom atmosphere encourages
discussion, participation, and regular speaking practice, which are essential for exam success.
Many candidates find that learning alongside others with similar goals creates a sense of motivation and
accountability that keeps them focused throughout the preparation process.
The course follows a carefully structured program that covers all exam sections, including:
• Reading strategies that improve speed and comprehension
• Listening techniques for identifying key information under time pressure
• Writing structures that meet official exam scoring criteria
• Speaking practice that develops fluency, coherence, and confidence
Students regularly work with authentic exam-style questions, helping them become familiar with the
format, timing, and expectations of the test.
Instructors also provide practical strategies and insights gained from extensive experience in exam
preparation, allowing students to avoid common mistakes and approach the exam more strategically.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: Small Groups
Schedule: Flexible
For many candidates, this format offers the perfect combination of structured learning, collaborative
practice, and professional guidance.`,
          },
        ],
      },
      {
        course_type_id: "online",
        title: "PTE Online Training",
        description: `PTE offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_online",
            title: "Online Preparation Course",
            description: `Our PTE Online Preparation Course provides the same high-quality exam training as our classroom
programs, delivered through live interactive sessions.
This option is ideal for candidates who prefer studying from home or have demanding work schedules
that make commuting difficult.
Lessons are conducted in real time with experienced instructors, allowing students to ask questions,
participate in discussions, and receive feedback just as they would in a physical classroom.
Despite being delivered online, the course maintains a strong practical focus. Students work on real
exam tasks, strategy development, and performance improvement, ensuring that each session
contributes directly to exam readiness.
Participants benefit from:
• Live instructor-led sessions
• Structured training across all exam sections
• Speaking practice with feedback
• Writing evaluation and improvement guidance
• Flexible scheduling options
Course Details:
Total Duration: 20 Hours
Format: Live Online Classes
Schedule: Flexible
This format allows candidates to prepare effectively from anywhere while maintaining the structure
and discipline of a guided course.`,
          },
        ],
      },
    ],
  },
  {
    id: "celpip",
    name:"CELPIP GENERAL",

    description: `CELPIP (Canadian English Language Proficiency Index Program)
The CELPIP test is specifically designed for Canadian immigration and citizenship applications. It is
approved by Immigration, Refugees and Citizenship Canada (IRCC) and is widely used for permanent
residency and citizenship processes.
Unlike some other exams, CELPIP uses Canadian English accents and real-life scenarios, making it highly
practical for candidates planning to live and work in Canada.
The most commonly taken version is CELPIP-General, which evaluates listening, reading, writing, and
speaking skills.`,
    course_formats: [
      {
        course_type_id: "classroom",
        title: "CELPIP Classroom Training",
        description: `The CELPIP Private One-to-One Course, also known as our VIP preparation program, offers the most
personalized and intensive exam preparation available at TEPTH.
This course is designed for candidates who want focused attention, faster progress, and a preparation
plan built entirely around their individual needs. Every session is tailored to the candidate’s current
level, target score, and exam deadline.
Before the course begins, we evaluate the candidate’s strengths and weaknesses across the exam
sections. Based on this analysis, the instructor develops a structured preparation plan that targets the
specific areas that need improvement.
Instead of following a fixed classroom syllabus, the training evolves according to the candidate’s
progress. More time can be dedicated to writing correction, speaking practice, reading strategies, or
listening accuracy, depending on what will have the greatest impact on the final score.
During the course, candidates work on:
• Realistic CELPIP exam tasks from previous and simulated test materials
• Proven strategies for each section and each question type
• Detailed feedback on writing tasks, including structure, coherence, grammar, and vocabulary
• Intensive speaking practice with professional evaluation and improvement strategies
• Time-management techniques that help candidates perform confidently under exam conditions
Because of its personalized nature, this course is particularly suitable for candidates who:
• Need to achieve a high score CLB 8+
• Have a limited preparation timeframe
• Prefer learning with individual attention and continuous feedback
• Want to improve specific exam sections quickly
Course Details
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Schedule: Flexible
This format allows candidates to maximize every hour of preparation and move toward their target
score with clear direction and expert guidance.`,
        courses: [
          {
            course_id: "vip_classroom",
            title: "Private One-to-One Course",
            description: `The CELPIP Private One-to-One Course, also known as our VIP preparation program, offers the most
personalized and intensive exam preparation available at TEPTH.
This course is designed for candidates who want focused attention, faster progress, and a preparation
plan built entirely around their individual needs. Every session is tailored to the candidate’s current
level, target score, and exam deadline.
Before the course begins, we evaluate the candidate’s strengths and weaknesses across the exam
sections. Based on this analysis, the instructor develops a structured preparation plan that targets the
specific areas that need improvement.
Instead of following a fixed classroom syllabus, the training evolves according to the candidate’s
progress. More time can be dedicated to writing correction, speaking practice, reading strategies, or
listening accuracy, depending on what will have the greatest impact on the final score.
During the course, candidates work on:
• Realistic CELPIP exam tasks from previous and simulated test materials
• Proven strategies for each section and each question type
• Detailed feedback on writing tasks, including structure, coherence, grammar, and vocabulary
• Intensive speaking practice with professional evaluation and improvement strategies
• Time-management techniques that help candidates perform confidently under exam conditions
Because of its personalized nature, this course is particularly suitable for candidates who:
• Need to achieve a high score CLB 8+
• Have a limited preparation timeframe
• Prefer learning with individual attention and continuous feedback
• Want to improve specific exam sections quickly
Course Details
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Schedule: Flexible
This format allows candidates to maximize every hour of preparation and move toward their target
score with clear direction and expert guidance.`,
          },
          {
            course_id: "semi_private_classroom",
            title: "Semi-Private Course",
            description: `The CELPIP Semi-Private Course is designed for candidates who prefer a small learning environment
while still benefiting from collaboration with another student.
With only two students in the class, the instructor can provide detailed guidance and feedback while
also creating opportunities for interaction, discussion, and peer learning. Many students find this format
both productive and motivating.
The presence of a second learner creates a natural environment for speaking practice, idea exchange,
and collaborative problem-solving, especially for exam sections that require communication and
discussion.
Both students receive focused attention from the instructor while also benefiting from hearing different
perspectives and approaches to exam tasks.
During the course, students work on:
• Structured training for each exam section and question type
• Guided speaking practice and feedback
• Writing tasks analysis and correction
• Reading and listening strategies to improve accuracy and speed
• Exam simulations that build familiarity and confidence
This format is often chosen by friends, colleagues, or family members preparing for the same exam,
but it also works very well for students who simply prefer learning in a small, supportive environment.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: 2 Students Only
Schedule: Flexible
The semi-private format offers an excellent balance between personalized instruction and interactive
learning.`,
          },
          {
            course_id: "group_classroom",
            title: "Group Course",
            description: `The CELPIP Group Course is designed for candidates who benefit from a dynamic classroom
environment while still receiving meaningful instructor support.
Group classes are intentionally kept small, starting from a minimum of three candidates, so that every
student remains actively involved throughout the training. The classroom atmosphere encourages
discussion, participation, and regular speaking practice, which are essential for exam success.
Many candidates find that learning alongside others with similar goals creates a sense of motivation and
accountability that keeps them focused throughout the preparation process.
The course follows a carefully structured program that covers all exam sections, including:
• Reading strategies that improve speed and comprehension
• Listening techniques for identifying key information under time pressure
• Writing structures that meet official exam scoring criteria
• Speaking practice that develops fluency, coherence, and confidence
Students regularly work with authentic exam-style questions, helping them become familiar with the
format, timing, and expectations of the test.
Instructors also provide practical strategies and insights gained from extensive experience in exam
preparation, allowing students to avoid common mistakes and approach the exam more strategically.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: Small Groups
Schedule: Flexible
For many candidates, this format offers the perfect combination of structured learning, collaborative
practice, and professional guidance.`,
          },
        ],
      },
      {
        course_type_id: "online",
        title: "IELTS Online Training",
        description: `CELPIP offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_online",
            title: "Online Preparation Course",
            description: `Our CELPIP Online Preparation Course provides the same high-quality exam training as our classroom
programs, delivered through live interactive sessions.
This option is ideal for candidates who prefer studying from home or have demanding work schedules
that make commuting difficult.
Lessons are conducted in real time with experienced instructors, allowing students to ask questions,
participate in discussions, and receive feedback just as they would in a physical classroom.
Despite being delivered online, the course maintains a strong practical focus. Students work on real
exam tasks, strategy development, and performance improvement, ensuring that each session
contributes directly to exam readiness.
Participants benefit from:
• Live instructor-led sessions
• Structured training across all exam sections
• Speaking practice with feedback
• Writing evaluation and improvement guidance
• Flexible scheduling options
Course Details:
Total Duration: 20 Hours
Format: Live Online Classes
Schedule: Flexible
This format allows candidates to prepare effectively from anywhere while maintaining the structure
and discipline of a guided course.`,
          },
        ],
      },
    ],
  },
  {
    id: "cael",
    name:"CAEL",

    description: `CAEL offers two distinct tests to suit different purposes.`,
    course_formats: [
      {
        course_type_id: "classroom",
        title: "CAEL Classroom Training",
        description: ``,
        courses: [
          {
            course_id: "vip_classroom",
            title: "Private One-to-One Course",
            description: ``,
          },
          {
            course_id: "semi_private_classroom",
            title: "Semi-Private Course",
            description: ``,
          },
          {
            course_id: "group_classroom",
            title: "Group Course",
            description: ``,
          },
        ],
      },
      {
        course_type_id: "online",
        title: "IELTS Online Training",
        description: ``,
        courses: [
          {
            course_id: "vip_online",
            title: "Online Preparation Course",
            description: ``,
          },
        ],
      },
    ],
  },
  {
    id: "selt",
    name:"SELT (Skills for English)",

    description: `SELT offers two distinct tests to suit different purposes.`,
    course_formats: [
      {
        course_type_id: "classroom",
        title: "SELT Classroom Training",
        description: `Skills for English (SELT) is an English test approved by the UK Home Office for visa and
immigration applications to the United Kingdom.
It is required for various UK visa categories, including work visas, family visas, and settlement
applications. Only specific approved exams fall under the SELT category, such as certain versions of
IELTS or language tests provided by authorized testing providers.
Candidates applying for UK visas must take a SELT-approved exam at an authorized test center.`,
        courses: [
          {
            course_id: "vip_classroom",
            title: "Private One-to-One Course",
            description: `The Skills for English (SELT) Private One-to-One Course, also known as our VIP preparation program,
offers the most personalized and intensive exam preparation available at TEPTH.
This course is designed for candidates who want focused attention, faster progress, and a preparation
plan built entirely around their individual needs. Every session is tailored to the candidate’s current
level, target score, and exam deadline.
Before the course begins, we evaluate the candidate’s strengths and weaknesses across the exam
sections. Based on this analysis, the instructor develops a structured preparation plan that targets the
specific areas that need improvement.
Instead of following a fixed classroom syllabus, the training evolves according to the candidate’s
progress. More time can be dedicated to writing correction, speaking practice, reading strategies, or
listening accuracy, depending on what will have the greatest impact on the final score.
During the course, candidates work on:
• Realistic SELT exam tasks from previous and simulated test materials
• Proven strategies for each section and each question type
• Detailed feedback on writing tasks, including structure, coherence, grammar, and vocabulary
• Intensive speaking practice with professional evaluation and improvement strategies
• Time-management techniques that help candidates perform confidently under exam conditions
Because of its personalized nature, this course is particularly suitable for candidates who:
• Need to achieve a high score CLB 8+
• Have a limited preparation timeframe
• Prefer learning with individual attention and continuous feedback
• Want to improve specific exam sections quickly
Course Details
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Schedule: Flexible
This format allows candidates to maximize every hour of preparation and move toward their target
score with clear direction and expert guidance.`,
          },
          {
            course_id: "semi_private_classroom",
            title: "Semi-Private Course",
            description: `The Skills for English (SELT) Semi-Private Course is designed for candidates who prefer a small learning
environment while still benefiting from collaboration with another student.
With only two students in the class, the instructor can provide detailed guidance and feedback while
also creating opportunities for interaction, discussion, and peer learning. Many students find this format
both productive and motivating.
The presence of a second learner creates a natural environment for speaking practice, idea exchange,
and collaborative problem-solving, especially for exam sections that require communication and
discussion.
Both students receive focused attention from the instructor while also benefiting from hearing different
perspectives and approaches to exam tasks.
During the course, students work on:
• Structured training for each exam section and question type
• Guided speaking practice and feedback
• Writing tasks analysis and correction
• Reading and listening strategies to improve accuracy and speed
• Exam simulations that build familiarity and confidence
This format is often chosen by friends, colleagues, or family members preparing for the same exam,
but it also works very well for students who simply prefer learning in a small, supportive environment.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: 2 Students Only
Schedule: Flexible
The semi-private format offers an excellent balance between personalized instruction and interactive
learning`,
          },
          {
            course_id: "group_classroom",
            title: "Group Course",
            description: `The Skills for English (SELT) Group Course is designed for candidates who benefit from a dynamic
classroom environment while still receiving meaningful instructor support.
Group classes are intentionally kept small, starting from a minimum of three candidates, so that every
student remains actively involved throughout the training. The classroom atmosphere encourages
discussion, participation, and regular speaking practice, which are essential for exam success.
Many candidates find that learning alongside others with similar goals creates a sense of motivation and
accountability that keeps them focused throughout the preparation process.
The course follows a carefully structured program that covers all exam sections, including:
• Reading strategies that improve speed and comprehension
• Listening techniques for identifying key information under time pressure
• Writing structures that meet official exam scoring criteria
• Speaking practice that develops fluency, coherence, and confidence
Students regularly work with authentic exam-style questions, helping them become familiar with the
format, timing, and expectations of the test.
Instructors also provide practical strategies and insights gained from extensive experience in exam
preparation, allowing students to avoid common mistakes and approach the exam more strategically.
Course Details:
Total Duration: 24 Hours
Typical Completion Time: 6 Weeks
Location: TEPTH – Suite 703, Apricot Tower, Dubai Silicon Oasis
Class Size: Small Groups
Schedule: Flexible
For many candidates, this format offers the perfect combination of structured learning, collaborative
practice, and professional guidance.`,
          },
        ],
      },
      {
        course_type_id: "online",
        title: "IELTS Online Training",
        description: `SELT offers two distinct tests to suit different purposes.`,
        courses: [
          {
            course_id: "vip_online",
            title: "Online Preparation Course",
            description: `The Skills for English (SELT) Online Preparation Course provides the same high-quality exam training as
our classroom programs, delivered through live interactive sessions.
This option is ideal for candidates who prefer studying from home or have demanding work schedules
that make commuting difficult.
Lessons are conducted in real time with experienced instructors, allowing students to ask questions,
participate in discussions, and receive feedback just as they would in a physical classroom.
Despite being delivered online, the course maintains a strong practical focus. Students work on real
exam tasks, strategy development, and performance improvement, ensuring that each session
contributes directly to exam readiness.
Participants benefit from:
• Live instructor-led sessions
• Structured training across all exam sections
• Speaking practice with feedback
• Writing evaluation and improvement guidance
• Flexible scheduling options
Course Details:
Total Duration: 20 Hours
Format: Live Online Classes
Schedule: Flexible
This format allows candidates to prepare effectively from anywhere while maintaining the structure
and discipline of a guided course.`,
          },
        ],
      },
    ],
  },
];

export default exam_preparation_courses;
