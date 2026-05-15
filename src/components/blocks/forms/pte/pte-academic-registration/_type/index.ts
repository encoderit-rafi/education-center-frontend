import { z } from "zod";

const stringOrObject = z.union([z.string(), z.any(), z.null(), z.undefined()]).transform(val => {
    if (typeof val === 'string') return val;
    if (val && typeof val === 'object') {
        return val.name || val.value || val.label || "";
    }
    return "";
});

export const PteAcademicSchema = z.object({
    // Step 1: Personal Details
    givenNames: z.string().optional(),
    noGivenNames: z.boolean(),
    middleName: z.string().optional(),
    surnames: z.string().optional(),
    noSurname: z.boolean(),
    emailUsername: z.string().email("Invalid email address"),
    confirmEmail: z.string().email("Please confirm your email address"),
    dateOfBirth: z.any().refine((val) => !!val, "Date of birth is required"),
    gender: z.enum(["male", "female", "other"], {
        message: "Please select your gender"
    }).or(z.literal("")),
    placeOfBirth: z.string().min(1, "Place of birth is required"),
    countryOfBirth: stringOrObject.refine(val => val.length > 0, "Country of birth is required"),
    countryOfCitizenship: stringOrObject.refine(val => val.length > 0, "Country of citizenship is required"),
    countryOfResidence: stringOrObject.refine(val => val.length > 0, "Country of residence is required"),
    
    postalAddress1: z.string().min(1, "Address Line 1 is required"),
    postalAddress2: z.string().optional(),
    poBox: z.string().optional(),
    postcode: z.string().optional(),
    city: z.string().min(1, "Emirate / City is required"),
    mobileNumber: z.string().min(1, "Mobile number is required"),

    // Exam Date & Time
    examDate: z.any().refine((val) => !!val, "Exam date is required"),
    examTime: z.string().min(1, "Exam time is required"),

    // Step 2: Identification Details
    idType: z.enum(["passport", "national_id"], {
        message: "Please select your identification type"
    }).or(z.literal("")),
    documentNumber: z.string().min(1, "ID number is required"),
    idCountryOfIssue: stringOrObject.optional(),
    passportCopy: z.any().refine((val) => !!val, "Passport copy is required"),

    // Step 3: Your Profile
    homeLanguage: stringOrObject.refine(val => val.length > 0, "Please select your language"),
    planningCountry: stringOrObject.refine(val => val.length > 0, "Please select a destination country"),
    currentSituation: stringOrObject.refine(val => val.length > 0, "Please select your current situation"),
    reasonForTaking: z.string().min(1, "Please select why you are taking the test"),
    studyLevel: z.string().optional(),
    occupationSector: stringOrObject.refine(val => val.length > 0, "Please select your occupation sector"),
    referralSource: stringOrObject.refine(val => val.length > 0, "Please select how you heard about us"),
    
    takenBefore: z.enum(["yes", "no"]).or(z.literal("")),
    takenWithinTwoYears: z.enum(["yes", "no"]).or(z.literal("")),
    hasExistingAccount: z.enum(["yes", "no"]).or(z.literal("")),

    marketingPreference: z.string().optional().or(z.literal("")),

    // Step 4: Add-on Services
    selectedCourse: z.string().optional(),
    selectedWorkshop: z.string().optional(),

    // Step 5: Review & Payment
    infoCorrect: z.boolean().optional(),
})
.refine((data) => data.noGivenNames || (data.givenNames && data.givenNames.trim() !== ""), {
    message: "Given names are required",
    path: ["givenNames"],
})
.refine((data) => data.noSurname || (data.surnames && data.surnames.trim() !== ""), {
    message: "Surname is required",
    path: ["surnames"],
})
.refine((data) => data.emailUsername === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
})
.refine((data) => data.reasonForTaking !== "study" || (data.studyLevel && data.studyLevel !== ""), {
    message: "Please select your study level",
    path: ["studyLevel"],
})
.refine((data) => data.takenBefore !== "yes" || !!data.takenWithinTwoYears, {
    message: "Please select an option",
    path: ["takenWithinTwoYears"],
})
.refine((data) => data.takenBefore !== "yes" || !!data.hasExistingAccount, {
    message: "Please select an option",
    path: ["hasExistingAccount"],
});

export type TPteAcademicSchema = z.infer<typeof PteAcademicSchema>;
