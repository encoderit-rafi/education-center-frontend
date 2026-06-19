const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));

const fallbackDetailsEn = {
  ielts: {
    sub_title: "IELTS",
    description: "The International English Language Testing System is heavily influenced by time pressure, question familiarity, and writing expectations. Mock tests help in ways that normal practice cannot.",
    notes: "By the time they enter the real test room, it feels like just another practice session. — The TEPTH Mock Test Experience",
    content: [
      {
        title: "Understanding the Exam Rhythm",
        icon: "Activity",
        description_list: [
          "In IELTS, the order of tasks matters. Listening flows into reading, and both require intense concentration. When students do full mock tests, they learn how to maintain focus for nearly three hours, which many first-time candidates underestimate."
        ]
      },
      {
        title: "Training Your Brain for Time Allocation",
        icon: "Clock",
        description_list: [
          "IELTS Reading is where many students lose marks. Through mock tests, students learn:",
          "This time awareness usually improves scores by 1-1.5 bands for many candidates.",
          "When to skip a difficult question",
          "How to scan instead of read every line",
          "How much time to spend on each passage"
        ]
      },
      {
        title: "Mastering Writing Task Expectations",
        icon: "PenTool",
        description_list: [
          "Many candidates think their English is good but still score Band 6 or 6.5 in Writing. Mock tests reveal:",
          "Real timed practice exposes weaknesses that normal writing practice hides.",
          "whether Task 2 arguments are strong enough",
          "if Task 1 reports are structured properly",
          "whether the writing fits 20 minutes and 40 minutes limits"
        ]
      },
      {
        title: "Reducing Test-Day Anxiety",
        icon: "ShieldCheck",
        description_list: [
          "Students who sit their first full IELTS test on exam day often panic because the environment feels unfamiliar. Mock tests simulate:",
          "By the time they enter the real test room, it feels like just another practice session.",
          "the pressure",
          "the strict timing",
          "the mental fatigue"
        ]
      },
      {
        title: "Identifying Score Patterns",
        icon: "TrendingUp",
        description_list: [
          "Through multiple mock tests, teachers can identify patterns such as:",
          "This helps create targeted improvement plans.",
          "strong listening but weak reading",
          "good vocabulary but poor essay structure",
          "careless mistakes due to rushing"
        ]
      }
    ]
  },
  toefl: {
    sub_title: "TOEFL iBT",
    description: "After teaching TOEFL preparation for many years, I always tell my students something very simple: the TOEFL exam is not only about English ability anymore — it is about how quickly and efficiently you can respond in a digital, adaptive test environment. With the updated TOEFL format being shorter, faster, and more adaptive, mock tests have become even more critical for test-takers.",
    notes: "Students who only study theory often struggle with these tasks because the challenge is not language difficulty but response efficiency. — Master the Shorter, Faster TOEFL iBT",
    content: [
      {
        title: "Preparing for the Adaptive Nature of the Test",
        icon: "Shuffle",
        description_list: [
          "One of the most significant changes in the updated TOEFL is the adaptive system in sections such as Reading and Listening. This means the difficulty of later questions can change depending on how well a student performs earlier. Mock tests help students understand how this adaptive structure feels in practice. When students experience this format several times, they learn two important habits:",
          "Without exposure to this format, many candidates become distracted when the difficulty shifts, which can affect performance in the remaining questions.",
          "maintaining accuracy from the beginning of the section",
          "staying calm even when questions suddenly become more challenging."
        ]
      },
      {
        title: "Training for the Faster Test Pace",
        icon: "Gauge",
        description_list: [
          "The updated TOEFL has reduced the overall test time to around 90 minutes, which means the pace is noticeably faster. Students now have less time to process information and respond. Mock tests help students develop:",
          "When students practice under real time limits, they learn to prioritize essential information instead of overthinking every detail, which is crucial in the new format.",
          "faster reading comprehension",
          "quick note-taking during listening tasks",
          "immediate response planning for speaking questions."
        ]
      },
      {
        title: "Practicing New Task Types",
        icon: "BookOpen",
        description_list: [
          "The latest TOEFL includes new task styles that focus more on practical communication. For example, some speaking and writing tasks resemble real academic interactions, such as responding to short prompts, summarizing information quickly, or composing brief written responses. Mock tests allow students to:",
          "Students who only study theory often struggle with these tasks because the challenge is not language difficulty but response efficiency.",
          "become familiar with the structure of these newer tasks",
          "understand the level of detail expected in short responses",
          "avoid spending too much time planning answers."
        ]
      },
      {
        title: "Strengthening Rapid Speaking Responses",
        icon: "Mic",
        description_list: [
          "In the updated format, speaking tasks require students to organize and deliver ideas quickly. There is very little preparation time before recording begins. Through mock tests, students gradually develop the ability to:",
          "This kind of fluency rarely develops through classroom practice alone. Timed mock testing is what builds real speaking confidence.",
          "structure responses within seconds",
          "speak clearly without long pauses",
          "maintain logical organization even under pressure."
        ]
      },
      {
        title: "Building Stamina for an Intensive Digital Test",
        icon: "Timer",
        description_list: [
          "Although the test is shorter, the updated TOEFL demands continuous concentration. Students must switch quickly between reading, listening, speaking, and writing without losing focus. Mock tests simulate this exact experience. After several full-length practices, students learn how to:",
          "This mental endurance often separates students scoring mid-range marks from those achieving top scores.",
          "manage mental fatigue",
          "maintain focus during rapid transitions between tasks",
          "remain consistent across all sections."
        ]
      },
      {
        title: "Providing Realistic Score Feedback",
        icon: "TrendingUp",
        description_list: [
          "Well-designed mock tests help both teachers and students evaluate readiness. They reveal patterns such as:",
          "Once these patterns are visible, preparation becomes far more focused and productive.",
          "strong listening but weak speaking organization",
          "slow reading speed under timed conditions",
          "unclear structure in short written responses."
        ]
      }
    ]
  },
  pte: {
    sub_title: "PTE",
    description: "The Pearson Test of English Academic is very different from traditional exams. It is fully computer-scored, and understanding the scoring logic is critical. Mock tests are therefore essential.",
    notes: "PTE mock tests are the only way to understand how the AI scoring system evaluates your performance in real-time. — The TEPTH Digital Experience",
    content: [
      {
        title: "Learning the Computer Interface",
        icon: "Monitor",
        description_list: [
          "Many students lose marks simply because they are unfamiliar with:",
          "Mock tests allow students to practice with the interface until it becomes automatic.",
          "microphone timing",
          "recording countdowns",
          "typing speed requirements",
          "highlighting tools"
        ]
      },
      {
        title: "Understanding the Integrated Scoring System",
        icon: "Brain",
        description_list: [
          "PTE tasks often contribute to multiple skills simultaneously. For example:",
          "Mock tests show students which tasks give the highest score impact, allowing smarter preparation.",
          "Repeat Sentence affects Listening and Speaking",
          "Reading & Writing Fill in the Blanks affects Reading and Writing"
        ]
      },
      {
        title: "Improving Response Speed",
        icon: "Zap",
        description_list: [
          "PTE is extremely fast-paced. In speaking tasks, you often have only 3–5 seconds to begin speaking. Mock testing trains students to:",
          "Without mock practice, many candidates freeze during these short preparation windows.",
          "start speaking immediately",
          "avoid long pauses",
          "maintain natural fluency"
        ]
      },
      {
        title: "Building Stamina for the Digital Format",
        icon: "Activity",
        description_list: [
          "The PTE exam can feel mentally exhausting because everything happens on a computer and requires constant attention. Mock tests prepare students for:",
          "",
          "long screen time",
          "rapid task switching",
          "Maintaining concentration without breaks."
        ]
      },
      {
        title: "Predicting Real Scores",
        icon: "TrendingUp",
        description_list: [
          "High-quality PTE mock tests often provide AI-based score estimates that closely resemble real exam scoring. This allows students to:",
          "",
          "measure readiness",
          "identify weak task types",
          "Adjust strategy before the real test."
        ]
      }
    ]
  }
};

const fallbackDetailsAr = {
  ielts: {
    sub_title: "آيلتس",
    description: "يتأثر نظام اختبار اللغة الإنجليزية الدولي بشكل كبير بضغط الوقت والتعود على الأسئلة وتوقعات الكتابة. تساعد الاختبارات التجريبية بطرق لا يمكن للممارسة العادية توفيرها.",
    notes: "بحلول الوقت الذي يدخلون فيه غرفة الاختبار الحقيقية، يبدو الأمر وكأنه مجرد جلسة تدريبية أخرى. — تجربة اختبار TEPTH التجريبي",
    content: [
      {
        title: "فهم إيقاع الامتحان",
        icon: "Activity",
        description_list: [
          "في اختبار الآيلتس، ترتيب المهام مهم. يتدفق الاستماع إلى القراءة، وكلاهما يتطلب تركيزًا مكثفًا. عندما يقوم الطلاب بإجراء اختبارات تجريبية كاملة، يتعلمون كيفية الحفاظ على التركيز لمدة ثلاث ساعات تقريبًا، وهو ما يقلل الكثير من المرشحين لأول مرة من أهميته."
        ]
      },
      {
        title: "تدريب عقلك على تخصيص الوقت",
        icon: "Clock",
        description_list: [
          "قراءة الآيلتس هي المكان الذي يفقد فيه العديد من الطلاب درجات. من خلال الاختبارات التجريبية، يتعلم الطلاب:",
          "وعادة ما يحسن هذا الوعي بالوقت الدرجات بمقدار 1-1.5 درجة للعديد من المرشحين.",
          "متى تتخطى سؤالاً صعباً",
          "كيفية المسح بدلاً من قراءة كل سطر",
          "مقدار الوقت الذي يجب قضاؤه في كل فقرة"
        ]
      },
      {
        title: "إتقان توقعات مهمة الكتابة",
        icon: "PenTool",
        description_list: [
          "يعتقد العديد من المرشحين أن لغتهم الإنجليزية جيدة ولكن لا يزالون يسجلون 6 أو 6.5 في الكتابة. تكشف الاختبارات التجريبية:",
          "الممارسة الحقيقية المحددة بوقت تكشف نقاط الضعف التي تخفيها ممارسة الكتابة العادية.",
          "ما إذا كانت حجج المهمة 2 قوية بما فيه الكفاية",
          "ما إذا كانت تقارير المهمة 1 منظمة بشكل صحيح",
          "ما إذا كانت الكتابة تتناسب مع حدود 20 دقيقة و 40 دقيقة"
        ]
      },
      {
        title: "تقليل قلق يوم الاختبار",
        icon: "ShieldCheck",
        description_list: [
          "غالبًا ما يصاب الطلاب الذين يجرون أول اختبار آيلتس كامل في يوم الامتحان بالذعر لأن البيئة تبدو غير مألوفة. الاختبارات التجريبية تحاكي:",
          "بحلول الوقت الذي يدخلون فيه غرفة الاختبار الحقيقية، يبدو الأمر وكأنه مجرد جلسة تدريبية أخرى.",
          "الضغط",
          "التوقيت الصارم",
          "التعب العقلي"
        ]
      },
      {
        title: "تحديد أنماط النتيجة",
        icon: "TrendingUp",
        description_list: [
          "من خلال الاختبارات التجريبية المتعددة، يمكن للمعلمين تحديد أنماط مثل:",
          "يساعد هذا في إنشاء خطط تحسين مستهدفة.",
          "استماع قوي ولكن قراءة ضعيفة",
          "مفردات جيدة ولكن بنية مقال سيئة",
          "أخطاء الإهمال بسبب التسرع"
        ]
      }
    ]
  },
  toefl: {
    sub_title: "توفل iBT",
    description: "بعد تدريس التحضير للتوفل لسنوات عديدة، أقول لطلابي دائمًا شيئًا بسيطًا جدًا: لم يعد اختبار التوفل يتعلق بقدرة اللغة الإنجليزية فقط - بل يتعلق بمدى سرعة وكفاءة الاستجابة في بيئة اختبار رقمية تكيفية. مع كون شكل التوفل المحدث أقصر وأسرع وأكثر تكيفًا، أصبحت الاختبارات التجريبية أكثر أهمية للممتحنين.",
    notes: "الطلاب الذين يدرسون النظرية فقط غالبًا ما يواجهون صعوبة في هذه المهام لأن التحدي لا يكمن في صعوبة اللغة ولكن في كفاءة الاستجابة. — إتقان التوفل iBT الأقصر والأسرع",
    content: [
      {
        title: "التحضير للطبيعة التكيفية للاختبار",
        icon: "Shuffle",
        description_list: [
          "أحد أهم التغييرات في التوفل المحدث هو النظام التكيفي في أقسام مثل القراءة والاستماع. وهذا يعني أن صعوبة الأسئلة اللاحقة يمكن أن تتغير بناءً على مدى جودة أداء الطالب في وقت سابق. تساعد الاختبارات التجريبية الطلاب على فهم كيف يبدو هذا الهيكل التكيفي في الممارسة العملية. عندما يجرب الطلاب هذا الشكل عدة مرات، يتعلمون عادتين مهمتين:",
          "بدون التعرض لهذا الشكل، يتشتت انتباه العديد من المرشحين عندما تتغير الصعوبة، مما قد يؤثر على الأداء في الأسئلة المتبقية.",
          "الحفاظ على الدقة من بداية القسم",
          "البقاء هادئًا حتى عندما تصبح الأسئلة أكثر تحديًا فجأة."
        ]
      },
      {
        title: "التدريب على وتيرة الاختبار الأسرع",
        icon: "Gauge",
        description_list: [
          "قلل التوفل المحدث إجمالي وقت الاختبار إلى حوالي 90 دقيقة، مما يعني أن الوتيرة أسرع بشكل ملحوظ. لدى الطلاب الآن وقت أقل لمعالجة المعلومات والاستجابة. تساعد الاختبارات التجريبية الطلاب على تطوير:",
          "عندما يتدرب الطلاب تحت حدود زمنية حقيقية، يتعلمون تحديد أولويات المعلومات الأساسية بدلاً من التفكير الزائد في كل التفاصيل، وهو أمر حاسم في الشكل الجديد.",
          "فهم القراءة بشكل أسرع",
          "تدوين الملاحظات السريع أثناء مهام الاستماع",
          "تخطيط الاستجابة الفورية لأسئلة التحدث."
        ]
      },
      {
        title: "ممارسة أنواع المهام الجديدة",
        icon: "BookOpen",
        description_list: [
          "يتضمن أحدث توفل أنماط مهام جديدة تركز بشكل أكبر على التواصل العملي. على سبيل المثال، تشبه بعض مهام التحدث والكتابة التفاعلات الأكاديمية الحقيقية، مثل الاستجابة للمطالبات القصيرة، أو تلخيص المعلومات بسرعة، أو تأليف ردود مكتوبة موجزة. تسمح الاختبارات التجريبية للطلاب بـ:",
          "الطلاب الذين يدرسون النظرية فقط غالبًا ما يواجهون صعوبة في هذه المهام لأن التحدي ليس في صعوبة اللغة ولكن في كفاءة الاستجابة.",
          "التعرف على هيكل هذه المهام الأحدث",
          "فهم مستوى التفاصيل المتوقع في الردود القصيرة",
          "تجنب قضاء الكثير من الوقت في التخطيط للإجابات."
        ]
      },
      {
        title: "تعزيز استجابات التحدث السريعة",
        icon: "Mic",
        description_list: [
          "في الشكل المحدث، تتطلب مهام التحدث من الطلاب تنظيم وتقديم الأفكار بسرعة. يوجد القليل جدًا من وقت التحضير قبل بدء التسجيل. من خلال الاختبارات التجريبية، يطور الطلاب تدريجياً القدرة على:",
          "نادرًا ما تتطور هذه الأنواع من الطلاقة من خلال الممارسة في الفصول الدراسية وحدها. الاختبار التجريبي المحدد بوقت هو ما يبني ثقة حقيقية في التحدث.",
          "تنظيم الردود في ثوانٍ",
          "التحدث بوضوح دون فترات توقف طويلة",
          "الحفاظ على التنظيم المنطقي حتى تحت الضغط."
        ]
      },
      {
        title: "بناء القدرة على التحمل لاختبار رقمي مكثف",
        icon: "Timer",
        description_list: [
          "على الرغم من أن الاختبار أقصر، إلا أن التوفل المحدث يتطلب تركيزًا مستمرًا. يجب على الطلاب التبديل بسرعة بين القراءة والاستماع والتحدث والكتابة دون فقدان التركيز. تحاكي الاختبارات التجريبية هذه التجربة بالضبط. بعد العديد من الممارسات الكاملة، يتعلم الطلاب كيفية:",
          "غالبًا ما يفصل هذا التحمل العقلي الطلاب الذين يسجلون درجات متوسطة عن أولئك الذين يحققون أعلى الدرجات.",
          "إدارة التعب العقلي",
          "الحفاظ على التركيز أثناء الانتقال السريع بين المهام",
          "البقاء متسقًا في جميع الأقسام."
        ]
      },
      {
        title: "تقديم ملاحظات واقعية عن النتيجة",
        icon: "TrendingUp",
        description_list: [
          "تساعد الاختبارات التجريبية المصممة جيدًا كلاً من المعلمين والطلاب على تقييم الاستعداد. فهي تكشف عن أنماط مثل:",
          "بمجرد أن تصبح هذه الأنماط مرئية، يصبح التحضير أكثر تركيزًا وإنتاجية.",
          "استماع قوي ولكن تنظيم ضعيف للتحدث",
          "سرعة قراءة بطيئة في ظل ظروف محددة بوقت",
          "بنية غير واضحة في الردود المكتوبة القصيرة."
        ]
      }
    ]
  },
  pte: {
    sub_title: "بي تي إي (PTE)",
    description: "يختلف اختبار بيرسون للغة الإنجليزية الأكاديمية (PTE) اختلافًا كبيرًا عن الاختبارات التقليدية. يتم تسجيل درجاته بالكامل بواسطة الكمبيوتر، وفهم منطق التسجيل أمر بالغ الأهمية. ولذلك فإن الاختبارات التجريبية ضرورية.",
    notes: "الاختبارات التجريبية لـ PTE هي الطريقة الوحيدة لفهم كيف يقوم نظام تسجيل الذكاء الاصطناعي بتقييم أدائك في الوقت الفعلي. — التجربة الرقمية لـ TEPTH",
    content: [
      {
        title: "تعلم واجهة الكمبيوتر",
        icon: "Monitor",
        description_list: [
          "يفقد العديد من الطلاب درجات لمجرد أنهم غير معتادين على:",
          "تسمح الاختبارات التجريبية للطلاب بالتدرب على الواجهة حتى تصبح تلقائية.",
          "توقيت الميكروفون",
          "عد تنازلي للتسجيل",
          "متطلبات سرعة الكتابة",
          "أدوات التمييز"
        ]
      },
      {
        title: "فهم نظام التسجيل المتكامل",
        icon: "Brain",
        description_list: [
          "غالبًا ما تساهم مهام PTE في مهارات متعددة في وقت واحد. على سبيل المثال:",
          "تُظهر الاختبارات التجريبية للطلاب المهام التي تعطي أعلى تأثير على النتيجة، مما يسمح بتحضير أكثر ذكاءً.",
          "تكرار الجملة يؤثر على الاستماع والتحدث",
          "القراءة والكتابة ملء الفراغات يؤثر على القراءة والكتابة"
        ]
      },
      {
        title: "تحسين سرعة الاستجابة",
        icon: "Zap",
        description_list: [
          "PTE سريع الوتيرة للغاية. في مهام التحدث، غالبًا ما يكون لديك 3-5 ثوانٍ فقط لبدء التحدث. تدرب الاختبارات التجريبية الطلاب على:",
          "بدون التدريب التجريبي، يتجمد العديد من المرشحين خلال نوافذ التحضير القصيرة هذه.",
          "البدء في التحدث على الفور",
          "تجنب فترات التوقف الطويلة",
          "الحفاظ على الطلاقة الطبيعية"
        ]
      },
      {
        title: "بناء القدرة على التحمل للصيغة الرقمية",
        icon: "Activity",
        description_list: [
          "قد يبدو اختبار PTE مرهقًا عقليًا لأن كل شيء يحدث على جهاز كمبيوتر ويتطلب اهتمامًا مستمرًا. تُعد الاختبارات التجريبية الطلاب لـ:",
          "",
          "وقت شاشة طويل",
          "التبديل السريع للمهام",
          "الحفاظ على التركيز بدون فترات راحة."
        ]
      },
      {
        title: "توقع النتائج الحقيقية",
        icon: "TrendingUp",
        description_list: [
          "غالبًا ما توفر الاختبارات التجريبية عالية الجودة لـ PTE تقديرات درجات تعتمد على الذكاء الاصطناعي والتي تشبه إلى حد كبير تسجيل الاختبار الحقيقي. هذا يسمح للطلاب بـ:",
          "",
          "قياس الجاهزية",
          "تحديد أنواع المهام الضعيفة",
          "تعديل الاستراتيجية قبل الاختبار الحقيقي."
        ]
      }
    ]
  }
};

en.PaidMockTestsPage = en.PaidMockTestsPage || {};
en.PaidMockTestsPage.fallbackDetails = fallbackDetailsEn;

ar.PaidMockTestsPage = ar.PaidMockTestsPage || {};
ar.PaidMockTestsPage.fallbackDetails = fallbackDetailsAr;

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2) + '\n');
fs.writeFileSync('messages/ar.json', JSON.stringify(ar, null, 2) + '\n');

console.log("Successfully updated en.json and ar.json");
