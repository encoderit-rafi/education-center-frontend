import { z } from "zod";

// Helper to handle both strings and objects from dropdowns
const stringOrObject = z.union([z.string(), z.any()]).transform(val => {
    if (typeof val === 'string') return val;
    if (val && typeof val === 'object') {
        return val.name || val.value || val.label || "";
    }
    return "";
});

export const PteCoreSchema = z.object({
    // Step 1: Personal Information
    givenNames: z.string().optional(),
    noGivenNames: z.boolean(),
    surnames: z.string().optional(),
    noSurname: z.boolean(),
    emailUsername: z.string().email("Invalid email/username"),
    dateOfBirth: z.any().refine((val) => !!val, "Date of birth is required"),
    gender: z.string().min(1, "Gender is required"),
    placeOfBirth: z.string().min(1, "Place of birth is required"),
    countryOfBirth: stringOrObject.refine(val => val.length > 0, "Country of birth is required"),
    countryOfCitizenship: stringOrObject.refine(val => val.length > 0, "Country of citizenship is required"),
    countryOfResidence: stringOrObject.refine(val => val.length > 0, "Country of residence is required"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    mobileNumber: z.string().min(1, "Mobile number is required"),
    readyToBook: z.string().min(1, "Please select an option"),

    // Step 2: Booking Questions & Preferences
    homeLanguage: stringOrObject.refine(val => val.length > 0, "Please select your language"),
    planningCountry: stringOrObject.refine(val => val.length > 0, "Please select a destination country"),
    currentSituation: stringOrObject.refine(val => val.length > 0, "Please select your current situation"),
    reasonForTaking: stringOrObject.refine(val => val.length > 0, "Please select why you are taking the test"),
    studyLevel: stringOrObject.optional(),
    occupationSector: stringOrObject.refine(val => val.length > 0, "Please select your occupation sector"),
    referralSource: stringOrObject.refine(val => val.length > 0, "Please select how you heard about us"),
    
    // Score Allocation (Checkboxes)
    scoreAllocationAU: z.boolean(),
    scoreAllocationNZ: z.boolean(),

    // Consents
    dataSharingAgreed: z.boolean().refine(val => val === true, "You must agree to data sharing"),
    bookingTermsAgreed: z.boolean().refine(val => val === true, "You must agree to the terms and conditions"),
    marketingConsent: z.string().min(1, "Please select an option"),

    // Step 3: Final Details & Documents
    testTiming: z.string().optional(),
    idType: z.string().optional(),
    idCountryOfIssue: stringOrObject.optional(),
    documentNumber: z.string().optional(),
    selectedCourse: z.string().optional(),
    
    // Document Uploads
    passportCopy: z.any().refine((val) => !!val, "Passport copy is required"),
    userPhoto: z.any().optional(),
    
    // Final Confirmation
    infoCorrect: z.boolean(),
});

export const RefinedPteCoreSchema = PteCoreSchema.refine((data) => {
    if (!data.noGivenNames && !data.givenNames) return false;
    return true;
}, {
    message: "Given names are required",
    path: ["givenNames"],
}).refine((data) => {
    if (!data.noSurname && !data.surnames) return false;
    return true;
}, {
    message: "Surname is required",
    path: ["surnames"],
}).refine(data => data.infoCorrect === true, {
    message: "Please confirm info is correct",
    path: ["infoCorrect"],
}).refine((data) => {
    if (data.reasonForTaking === "study" && !data.studyLevel) return false;
    return true;
}, {
    message: "Please select your study level",
    path: ["studyLevel"],
});

export type TPteCoreFormSchema = z.infer<typeof RefinedPteCoreSchema>;
