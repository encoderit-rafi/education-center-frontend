import { useLocale } from "next-intl";

export function useCalendarTranslations() {
  const locale = useLocale();
  const isAr = locale === "ar";
  return {
    selectExamDateTime: isAr ? "تحديد تاريخ ووقت الاختبار" : "Select Exam Date & Time",
    selectExamDate: isAr ? "اختر تاريخ الامتحان" : "Select Exam Date",
    selectDate: isAr ? "اختر التاريخ" : "Select Date",
    availableTimeSlots: isAr ? "الفترات الزمنية المتاحة" : "Available Time Slots",
    pleaseSelectDateFirst: isAr ? "يرجى اختيار التاريخ أولاً" : "Please select a date first",
    back: isAr ? "السابق" : "Back",
    next: isAr ? "التالي" : "Next",
  };
}

export function useRegistrationTitle(slug: string, dbExam?: any) {
  const locale = useLocale();
  const isAr = locale === "ar";
  const cleanSlug = (slug || "").toLowerCase();
  const isSelt = cleanSlug.startsWith("selt") || cleanSlug.startsWith("ukvi-") || cleanSlug.includes("speaking-and-listening") || cleanSlug.includes("speaking-listening");

  // If we have an Arabic name in the database translations and locale is Arabic
  if (isAr && dbExam?.translations?.[locale]?.name) {
    const dbName = dbExam.translations[locale].name;
    // Split into prefix and suffix if possible, to keep design aesthetics
    if (dbName.startsWith("التسجيل في اختبار")) {
      return {
        main: "التسجيل في اختبار",
        highlight: dbName.replace("التسجيل في اختبار", "").trim(),
      };
    }
    if (dbName.startsWith("التسجيل في")) {
      return {
        main: "التسجيل في",
        highlight: dbName.replace("التسجيل في", "").trim(),
      };
    }
    return {
      main: dbName,
      highlight: "",
    };
  }

  // If we have a dynamic name in the database and locale is English
  if (!isAr && dbExam?.name) {
    const dbName = dbExam.name;
    return {
      main: dbName,
      highlight: isSelt ? "" : "Registration",
    };
  }

  const mapping: Record<string, { main: string; highlight: string }> = {
    "ielts-academic": {
      main: isAr ? "التسجيل في اختبار آيلتس" : "IELTS Academic",
      highlight: isAr ? "الأكاديمي" : "Registration",
    },
    "ielts-general": {
      main: isAr ? "التسجيل في اختبار آيلتس" : "IELTS General",
      highlight: isAr ? "العام" : "Registration",
    },
    "toefl-ibt": {
      main: isAr ? "التوفل أي بي تي (TOEFL iBT)" : "TOEFL iBT",
      highlight: isAr ? "" : "Registration",
    },
    "pte-academic": {
      main: isAr ? "التسجيل في اختبار بي تي إي" : "PTE Academic",
      highlight: isAr ? "الأكاديمي" : "Registration",
    },
    "pte-academic-ukvi": {
      main: isAr ? "التسجيل في اختبار بي تي إي الأكاديمي" : "PTE Academic UKVI",
      highlight: isAr ? "UKVI" : "Registration",
    },
    "pte-ukvi": {
      main: isAr ? "التسجيل في اختبار بي تي إي الأكاديمي" : "PTE Academic UKVI",
      highlight: isAr ? "UKVI" : "Registration",
    },
    "pte-core": {
      main: isAr ? "التسجيل في اختبار بي تي إي" : "PTE Core",
      highlight: isAr ? "الأساسي" : "Registration",
    },
    "pte-home-a1": {
      main: isAr ? "التسجيل في اختبار بي تي إي هوم" : "PTE Home A1",
      highlight: isAr ? "A1" : "Registration",
    },
    "pte-home-a2": {
      main: isAr ? "التسجيل في اختبار بي تي إي هوم" : "PTE Home A2",
      highlight: isAr ? "A2" : "Registration",
    },
    "pte-home-b1": {
      main: isAr ? "التسجيل في اختبار بي تي إي هوم" : "PTE Home B1",
      highlight: isAr ? "B1" : "Registration",
    },
    "selt-a1": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى A1" : "UKVI Speaking and Listening at Level A1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-at-level-a1": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى A1" : "UKVI Speaking and Listening at Level A1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-level-a1": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى A1" : "UKVI Speaking and Listening at Level A1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "selt-a2": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى A2" : "UKVI Speaking and Listening at Level A2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-at-level-a2": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى A2" : "UKVI Speaking and Listening at Level A2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-level-a2": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى A2" : "UKVI Speaking and Listening at Level A2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "selt-b1": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى B1" : "UKVI Speaking and Listening at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-at-level-b1": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى B1" : "UKVI Speaking and Listening at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-level-b1": {
      main: isAr ? "التحدث والاستماع لـ UKVI - المستوى B1" : "UKVI Speaking and Listening at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "selt-b1-r-w": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B1" : "UKVI Speaking, Listening, Reading and Writing at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-at-level-b1-r-w": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B1" : "UKVI Speaking, Listening, Reading and Writing at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-b1": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B1" : "UKVI Speaking, Listening, Reading and Writing at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-b1-1": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B1" : "UKVI Speaking, Listening, Reading and Writing at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-b1": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B1" : "UKVI Speaking, Listening, Reading and Writing at Level B1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "selt-b2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B2" : "UKVI Speaking, Listening, Reading and Writing at Level B2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-b2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B2" : "UKVI Speaking, Listening, Reading and Writing at Level B2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-at-level-b2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B2" : "UKVI Speaking, Listening, Reading and Writing at Level B2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-b2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI B2" : "UKVI Speaking, Listening, Reading and Writing at Level B2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "selt-c1": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C1" : "UKVI Speaking, Listening, Reading and Writing at Level C1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-c1": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C1" : "UKVI Speaking, Listening, Reading and Writing at Level C1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-at-level-c1": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C1" : "UKVI Speaking, Listening, Reading and Writing at Level C1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-c1": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C1" : "UKVI Speaking, Listening, Reading and Writing at Level C1",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "selt-c2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C2" : "UKVI Speaking, Listening, Reading and Writing at Level C2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-c2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C2" : "UKVI Speaking, Listening, Reading and Writing at Level C2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-and-listening-at-level-c2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C2" : "UKVI Speaking, Listening, Reading and Writing at Level C2",
      highlight: isAr ? "إجراءات" : "Procedures",
    },
    "ukvi-speaking-listening-reading-and-writing-c2": {
      main: isAr ? "التحدث والاستماع والقراءة والكتابة لـ UKVI C2" : "UKVI Speaking, Listening, Reading and Writing at Level C2",
      highlight: isAr ? "إجراءات" : "Procedures",
    }
  };

  const result = mapping[cleanSlug] || {
    main: isAr ? "تسجيل" : "Exam",
    highlight: isAr ? "الاختبار" : "Registration",
  };

  if (isSelt && (result.highlight === "إجراءات" || result.highlight === "Procedures")) {
    return {
      ...result,
      highlight: "",
    };
  }

  return result;
}
