import { format } from "date-fns";
import { EXAM_DETAILE_DATA } from "@/data";
import { getIdTypeLabel } from "@/lib/utils";

export interface BookingPayloadInput {
  userId?: string | null;
  examId: string;
  courseId?: string | null;
  packageId?: string | null;
  workshopId?: string | null;
  workshopPackageId?: string | null;
  paymentId?: string | null;
  paymentMethod: string;
  firstName: string;
  middleName?: string | null;
  lastName?: string | null;
  dateOfBirth?: string | Date | null;
  gender?: string | null;
  nationality?: string | null;
  email: string;
  phone: string;
  address?: string | null;
  country?: string | null;
  idType?: string | null;
  idNumber?: string | null;
  sessionDate?: string | Date | null;
  sessionTime?: string | null;
  examFee: number;
  courseFee?: number;
  workshopFee?: number;
  additionalFee?: number;
  discountAmount?: number;
  vatAmount?: number;
  totalAmount: number;
  allFormData: Record<string, any>;
}

export function formatAddonWithExamPrefix(
  addonName?: string | null,
  examId?: string | null,
  levelName?: string | null
): string | undefined {
  if (!addonName || typeof addonName !== "string" || !addonName.trim()) return undefined;
  let name = addonName.trim();

  let prefix = (levelName || "").trim();
  const id = (examId || "").trim();

  if (!prefix && id) {
    const staticMeta = EXAM_DETAILE_DATA.find(
      (e: any) => e.id === id || e.slug === id
    );
    if (staticMeta?.name) {
      prefix = staticMeta.name;
    } else if (id.includes("-")) {
      prefix = id
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    } else {
      prefix = id.toUpperCase();
    }
  }

  if (!prefix) return name;

  if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
    return name;
  }

  const basePrefixMatch = name.match(/^(PTE|IELTS|TOEFL|SELT|OET|CELPIP|CAEL|PSI)\s+/i);
  if (basePrefixMatch) {
    name = name.slice(basePrefixMatch[0].length).trim();
  }

  if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
    return name;
  }

  return `${prefix} ${name}`;
}

export function compileBookingPayload(input: BookingPayloadInput) {
  const formatDate = (d: any) => {
    if (!d) return undefined;
    try {
      return format(new Date(d), "yyyy-MM-dd");
    } catch {
      return undefined;
    }
  };

  const mapIdType = (type?: string | null) => {
    if (!type) return undefined;
    const lower = type.toLowerCase();
    if (lower.includes("passport")) return "passport";
    if (lower.includes("emirate")) return "emirates";
    if (lower.includes("visa")) return "visa";
    return "others";
  };

  const formatSessionTime = (timeStr?: string | null) => {
    if (!timeStr) return undefined;
    const trimmed = timeStr.trim().toUpperCase();

    if (input.examId?.toLowerCase().includes("toefl")) {
      const dateObj = input.sessionDate ? new Date(input.sessionDate) : null;
      if (dateObj && !isNaN(dateObj.getTime())) {
        const day =
          typeof input.sessionDate === "string" &&
            input.sessionDate.includes("-")
            ? dateObj.getUTCDay()
            : dateObj.getDay();
        if (day === 3 && trimmed === "PM") {
          return "18:00";
        } else if (day === 6 && trimmed === "AM") {
          return "10:00";
        }
      }
    }

    if (trimmed === "AM") return "09:00";
    if (trimmed === "PM") return "13:00";

    const match12 = trimmed.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/);
    if (match12) {
      let hours = parseInt(match12[1], 10);
      const minutes = match12[2];
      const ampm = match12[3];
      if (ampm === "PM" && hours < 12) {
        hours += 12;
      } else if (ampm === "AM" && hours === 12) {
        hours = 0;
      }
      return `${hours.toString().padStart(2, "0")}:${minutes}`;
    }

    const match24 = trimmed.match(/^(\d{1,2}):(\d{2})$/);
    if (match24) {
      return `${parseInt(match24[1], 10).toString().padStart(2, "0")}:${match24[2]}`;
    }

    return timeStr;
  };

  const rawCourseName =
    input.allFormData.selected_course_name ||
    input.allFormData.selectedCourseName ||
    input.allFormData.selectedCourseObj?.name ||
    input.allFormData.selectedCourseData?.name ||
    (typeof input.allFormData.selectedCourse === "string" && !input.allFormData.selectedCourse.includes("-") ? input.allFormData.selectedCourse : undefined);

  const rawWorkshopName =
    input.allFormData.selected_workshop_name ||
    input.allFormData.selectedWorkshopName ||
    input.allFormData.selectedWorkshopObj?.name ||
    input.allFormData.selectedWorkshopData?.name ||
    (typeof input.allFormData.selectedWorkshop === "string" && !input.allFormData.selectedWorkshop.includes("-") ? input.allFormData.selectedWorkshop : undefined);

  const formattedCourseName = formatAddonWithExamPrefix(
    rawCourseName,
    input.examId,
    input.allFormData.level_name
  );

  const formattedWorkshopName = formatAddonWithExamPrefix(
    rawWorkshopName,
    input.examId,
    input.allFormData.level_name
  );

  if (formattedCourseName) {
    input.allFormData.selected_course_name = formattedCourseName;
  }
  if (formattedWorkshopName) {
    input.allFormData.selected_workshop_name = formattedWorkshopName;
  }

  const payload: Record<string, any> = {
    user_id: input.userId || undefined,
    exam_id: input.examId,
    course_id: input.courseId || null,
    package_id:
      input.packageId || input.allFormData.selectedCourse || undefined,
    workshop_id:
      input.workshopId || input.allFormData.selectedWorkshop || undefined,
    workshop_package_id: input.workshopPackageId || undefined,
    payment_id: input.paymentId || undefined,
    payment_methods: input.paymentMethod || "stripe",
    first_name: input.firstName,
    middle_name: input.middleName || undefined,
    last_name: input.lastName || undefined,
    date_of_birth: formatDate(input.dateOfBirth),
    gender: input.gender || undefined,
    nationality: input.nationality || undefined,
    email: input.email,
    phone: input.phone,
    address: input.address || null,
    country: input.country || null,
    id_type: mapIdType(input.idType),
    id_number: input.idNumber || undefined,
    session_date: formatDate(input.sessionDate),
    session_time: formatSessionTime(input.sessionTime),
    exam_fee: input.examFee,
    course_fee: input.courseFee || 0,
    workshop_fee: input.workshopFee || 0,
    additional_fee: input.additionalFee || 0,
    discount_amount: input.discountAmount || 0,
    vat_amount: input.vatAmount || 0,
    total_amount: input.totalAmount,
    selected_course_name: formattedCourseName || input.allFormData.selected_course_name || undefined,
    selected_workshop_name: formattedWorkshopName || input.allFormData.selected_workshop_name || undefined,
  };

  const coreKeys = [
    "examId",
    "exam_id",
    "paymentMethod",
    "payment_methods",
    "firstName",
    "first_name",
    "middleName",
    "middle_name",
    "lastName",
    "last_name",
    "dateOfBirth",
    "date_of_birth",
    "gender",
    "sex",
    "nationality",
    "email",
    "emailUsername",
    "phone",
    "mobileNumber",
    "address",
    "country",
    "idType",
    "id_type",
    "idNumber",
    "id_number",
    "sessionDate",
    "session_date",
    "examDate",
    "exam_date",
    "sessionTime",
    "session_time",
    "examTimeSlot",
    "examTime",
    "examFee",
    "exam_fee",
    "courseFee",
    "course_fee",
    "workshopFee",
    "workshop_fee",
    "additionalFee",
    "additional_fee",
    "discountAmount",
    "discount_amount",
    "vatAmount",
    "vat_amount",
    "totalAmount",
    "total_amount",
    "userId",
    "user_id",
    "courseId",
    "course_id",
    "packageId",
    "package_id",
    "workshopId",
    "workshop_id",
    "workshopPackageId",
    "workshop_package_id",
    "paymentId",
    "payment_id",
  ];

  const keyToLabelMap: Record<string, string> = {
    testModule: "Test Module",
    givenNames: "Given Names",
    middleName: "Middle Name",
    surnames: "Surnames",
    noSurname: "No Surname",
    birthCity: "City of Birth",
    birthCountry: "Country of Birth",
    postcode: "Post Code",
    poBox: "P.O. Box",
    dateOfBirth: "Date of Birth",
    sex: "Gender",
    gender: "Gender",
    email: "Email",
    mobileNumber: "Phone Number",
    phoneNumber: "Phone Number",
    smsConsent: "SMS Consent",
    residenceCountry: "Country of Residence",
    postalAddress1: "Address Line 1",
    postalAddress2: "Address Line 2",
    postalAddress3: "Address Line 3",
    streetAddress1: "Street Address 1",
    streetAddress2: "Street Address 2",
    city: "Town / City",
    marketingPreference: "Marketing Preference",
    idType: "ID Type",
    idNumber: "ID Number",
    idExpiryDate: "ID Expiry Date",
    issuingAuthority: "Issuing Authority",
    nationality: "Country of Nationality",
    takenBefore: "Taken Before",
    lessThanTwoYears: "Less Than Two Years",
    existingAccount: "Existing Account",
    firstLanguage: "First Language",
    firstLanguageOther: "First Language (Other)",
    yearsStudyingEnglish: "Years Studying English",
    educationLevel: "Education Level",
    occupationLevel: "Occupation Level",
    occupationLevelOther: "Occupation Level (Other)",
    occupationSector: "Occupation Sector",
    occupationSectorOther: "Occupation Sector (Other)",
    reasonForTakingTest: "Reason for Taking Test",
    reasonForTakingTestOther: "Reason for Taking Test (Other)",
    destinationCountry: "Destination Country",
    selectedCourse: "Selected Course",
    selectedWorkshop: "Selected Workshop",
    vatNumber: "VAT Number",
    paymentMethod: "Payment Method",
    examDate: "Exam Date",
    examTimeSlot: "Exam Time Slot",
    speakingSlot: "Speaking Slot",
    level_name: "Selected Level",
  };

  const getLabel = (key: string) => {
    if (keyToLabelMap[key]) return keyToLabelMap[key];
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const examInfoList: Array<{ name: string; label: string; value: string }> =
    [];
  const documentsList: Array<{ name: string; label: string; value: string }> =
    [];

  for (const [key, value] of Object.entries(input.allFormData)) {
    if (
      key === "idDocument" ||
      key === "confirmEmail" ||
      key === "passportCopy" ||
      (typeof File !== "undefined" && value instanceof File)
    ) {
      continue;
    }

    let valueStr = "";
    if (value instanceof Date) {
      valueStr = format(value, "yyyy-MM-dd");
    } else if (typeof value === "boolean") {
      valueStr = value ? "Yes" : "No";
    } else if (value !== null && value !== undefined && value !== "") {
      valueStr = String(value);
    }

    if (key === "examTimeSlot" || key === "sessionTime" || key === "examTime") {
      if (input.examId?.toLowerCase().includes("toefl")) {
        const dateObj = input.sessionDate ? new Date(input.sessionDate) : null;
        if (dateObj && !isNaN(dateObj.getTime())) {
          const day =
            typeof input.sessionDate === "string" &&
              input.sessionDate.includes("-")
              ? dateObj.getUTCDay()
              : dateObj.getDay();
          if (day === 3) {
            valueStr = "6:00 PM";
          } else if (day === 6) {
            valueStr = "10:00 AM";
          }
        }
      }
    }

    if (key === "idDocumentUrl") {
      if (valueStr !== "") {
        documentsList.push({
          name: "id_document_url",
          label: "ID Document",
          value: valueStr,
        });
      }
    } else {
      if (valueStr !== "") {
        let mappedValue = valueStr;
        if (key === "referralSource") {
          const referralSourceMap: Record<string, string> = {
            dha: "Australian Department of Home Affairs (DHA)",
            board_of_nursing: "Board of Nursing",
            education_agent: "Education Agent Advisor - specify below",
            education_event: "Education event - specify below",
            emgs: "Education Malaysia Global Services (EMGS)",
            friend_family: "Friend or family",
            inz: "Immigration New Zealand (INZ)",
            internet_search: "Internet search",
            language_school: "Language School",
            migration_agent: "Migration agent / lawyer - specify below",
            social_media: "Social Media (e.g. Facebook, Twitter, Weibo etc)",
            university_college: "University or College - specify below",
            Other: "Other - specify below",
            other: "Other - specify below",
            agent_advisor: "Agent advisor - Specify below",
            event: "Event - Specify below",
            ircc: "Immigration, Refugees and Citizenship Canada (IRCC)",
            outdoor_advert: "Outdoor Advert",
            radio_advert: "Radio Advert",
            ukvi: "UK Visas and Immigration (UKVI)",
          };
          if (referralSourceMap[valueStr]) {
            mappedValue = referralSourceMap[valueStr];
          }
        } else if (key === "reasonForTaking") {
          const reasonMap: Record<string, string> = {
            // pte-academic
            study: "Study",
            nursing: "Nursing registration or licensing",
            au_mates: "Australia - MATES visa (India only)",
            au_485: "Australia - Post Study Work (485) visa",
            au_temp_work: "Australia - Temporary Work visa",
            nz_temp_work: "New Zealand - Temporary Work visa",
            skilled_migration: "Skilled migration / Permanent Residency",
            family_visa: "Spouse / Family visa",
            working_holiday: "Working Holiday visa",

            // pte-academic-ukvi & pte-home
            settlement: "Settlement (Indefinite Leave to Remain)",
            citizenship: "Citizenship",
            sportsperson_visa: "Sportsperson visa (Tier 2)",
            student_visa: "Student visa (formerly known as the Tier 4 General student visa)",
            skilled_worker_visa: "Skilled Worker visa (formerly known as the Tier 2 General work visa)",
            startup_innovator_visa: "Start Up or Innovator Visa",
            domestic_worker: "Domestic Worker in a Private Household",
            minister_religion_visa: "Minister of Religion visa (Tier 2)",
            representative_visa: "Representative of an Overseas Business visa",

            // pte-core
            canadian_immigration: "Canadian Immigration (Permanent Residence)",
            canadian_citizenship: "Canadian Citizenship",
            temporary_foreign_worker: "Canada Temporary Foreign Worker",
            pgwp: "Post Graduation Work Permit (PGWP)",

            // general / fallback
            other: "Other - specify below",
            Other: "Other - specify below",
          };
          if (reasonMap[valueStr]) {
            mappedValue = reasonMap[valueStr];
          }
        } else if (key === "idType" || key === "id_type") {
          mappedValue = getIdTypeLabel(valueStr);
        } else if (key === "gender" || key === "sex") {
          const lowerVal = valueStr.toLowerCase();
          if (lowerVal === "male") mappedValue = "Male";
          else if (lowerVal === "female") mappedValue = "Female";
          else if (lowerVal === "other") mappedValue = "Other";
        }

        examInfoList.push({
          name: key,
          label: getLabel(key),
          value: mappedValue,
        });
      }
    }
  }

  // Fallback if idDocument is a relative file path and idDocumentUrl is missing
  if (
    documentsList.length === 0 &&
    input.allFormData.idDocument &&
    typeof input.allFormData.idDocument === "string"
  ) {
    documentsList.push({
      name: "id_document_url",
      label: "ID Document",
      value: input.allFormData.idDocument,
    });
  }

  if (!examInfoList.some((item) => item.name === "level_name")) {
    const staticMeta = EXAM_DETAILE_DATA.find(
      (item: any) => item.id === input.examId || item.slug === input.examId,
    );
    if (staticMeta) {
      examInfoList.unshift({
        name: "level_name",
        label: "Selected Level",
        value: staticMeta.name,
      });
    }
  }

  const feesList: Array<{ name: string; label: string; value: string }> = [
    { name: "exam_fee", label: "Exam Fee", value: String(input.examFee) },
    input.additionalFee
      ? {
        name: "additional_fee",
        label: "Registration Service Fee",
        value: String(input.additionalFee),
      }
      : null,
    input.courseFee
      ? {
        name: "course_fee",
        label: input.allFormData?.selected_course_name
          ? `${input.allFormData.selected_course_name}`
          : "Course Fee",
        value: String(input.courseFee),
      }
      : null,
    input.workshopFee
      ? {
        name: "workshop_fee",
        label: input.allFormData?.selected_workshop_name
          ? `${input.allFormData.selected_workshop_name}`
          : "Workshop Fee",
        value: String(input.workshopFee),
      }
      : null,
    input.vatAmount
      ? {
        name: "vat_amount",
        label: "VAT",
        value: String(input.vatAmount),
      }
      : null,
    {
      name: "total_amount",
      label: "Total Amount",
      value: String(input.totalAmount),
    },
  ].filter((item): item is { name: string; label: string; value: string } => item !== null);

  payload.form_data = {
    fees: feesList,
    exam_info: examInfoList,
    documents: documentsList,
  };

  return Object.fromEntries(
    Object.entries(payload).filter(([_, v]) => v !== undefined),
  );
}
