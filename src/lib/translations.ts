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

export function useRegistrationTitle(slug: string) {
  const locale = useLocale();
  const isAr = locale === "ar";

  const cleanSlug = (slug || "").toLowerCase();

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
      main: isAr ? "التسجيل في اختبار توفل" : "TOEFL iBT",
      highlight: isAr ? "iBT" : "Registration",
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
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT A1",
      highlight: isAr ? "A1" : "Registration",
    },
    "ukvi-speaking-and-listening-at-level-a1": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT A1 (Speaking & Listening)",
      highlight: isAr ? "A1 (التحدث والاستماع)" : "Registration",
    },
    "selt-a2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT A2",
      highlight: isAr ? "A2" : "Registration",
    },
    "ukvi-speaking-and-listening-at-level-a2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT A2 (Speaking & Listening)",
      highlight: isAr ? "A2 (التحدث والاستماع)" : "Registration",
    },
    "selt-b1": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT B1",
      highlight: isAr ? "B1" : "Registration",
    },
    "ukvi-speaking-and-listening-at-level-b1": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT B1 (Speaking & Listening)",
      highlight: isAr ? "B1 (التحدث والاستماع)" : "Registration",
    },
    "selt-b1-r-w": {
      main: isAr ? "التسجيل في اختبار سيلت بي 1" : "SELT B1 R&W",
      highlight: isAr ? "القراءة والكتابة" : "Registration",
    },
    "ukvi-speaking-and-listening-at-level-b1-r-w": {
      main: isAr ? "التسجيل في اختبار سيلت بي 1" : "SELT B1 (Speaking, Listening, Reading & Writing)",
      highlight: isAr ? "(التحدث والاستماع والقراءة والكتابة)" : "Registration",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-b1": {
      main: isAr ? "التسجيل في اختبار سيلت بي 1" : "SELT B1 (Speaking, Listening, Reading & Writing)",
      highlight: isAr ? "(التحدث والاستماع والقراءة والكتابة)" : "Registration",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-b1-1": {
      main: isAr ? "التسجيل في اختبار سيلت بي 1" : "SELT B1 (Speaking, Listening, Reading & Writing)",
      highlight: isAr ? "(التحدث والاستماع والقراءة والكتابة)" : "Registration",
    },
    "selt-b2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT B2",
      highlight: isAr ? "B2" : "Registration",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-b2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT B2",
      highlight: isAr ? "B2" : "Registration",
    },
    "ukvi-speaking-and-listening-at-level-b2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT B2",
      highlight: isAr ? "B2" : "Registration",
    },
    "selt-c1": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT C1",
      highlight: isAr ? "C1" : "Registration",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-c1": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT C1",
      highlight: isAr ? "C1" : "Registration",
    },
    "ukvi-speaking-and-listening-at-level-c1": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT C1",
      highlight: isAr ? "C1" : "Registration",
    },
    "selt-c2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT C2",
      highlight: isAr ? "C2" : "Registration",
    },
    "ukvi-speaking-listening-reading-and-writing-at-level-c2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT C2",
      highlight: isAr ? "C2" : "Registration",
    },
    "ukvi-speaking-and-listening-at-level-c2": {
      main: isAr ? "التسجيل في اختبار سيلت" : "SELT C2",
      highlight: isAr ? "C2" : "Registration",
    }
  };

  return mapping[cleanSlug] || {
    main: isAr ? "تسجيل" : "Exam",
    highlight: isAr ? "الاختبار" : "Registration",
  };
}
