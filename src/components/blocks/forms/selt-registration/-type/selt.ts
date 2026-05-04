import { z } from "zod";

const stringOrObject = z.union([z.string(), z.any()]).transform(val => {
    if (typeof val === 'string') return val;
    if (val && typeof val === 'object') {
        return val.name || val.value || val.label || "";
    }
    return "";
});

export const SeltSchema = z.object({
    // Step 1: Identity
    idLastName: z.string().min(1, "Last name is required"),
    idFirstNames: z.string().min(1, "First names are required"),
    idMiddleName: z.string().optional(),
    dobDay: z.string().min(1, "Day is required"),
    dobMonth: z.string().min(1, "Month is required"),
    dobYear: z.string().min(1, "Year is required"),
    repeatDobDay: z.string().min(1, "Please repeat day"),
    repeatDobMonth: z.string().min(1, "Please repeat month"),
    repeatDobYear: z.string().min(1, "Please repeat year"),
    nationality: stringOrObject.refine(val => val.length > 0, "Nationality is required"),
    countryOfBirth: stringOrObject.refine(val => val.length > 0, "Country of birth is required"),
    townCityOfBirth: z.string().min(1, "Town or city of birth is required"),
    gender: z.string().min(1, "Gender is required"),

    // Step 2: ID & Reason
    idType: z.string().min(1, "ID type is required"),
    idNumber: z.string().min(1, "ID number is required"),
    repeatIdNumber: z.string().min(1, "Please repeat ID number"),
    idExpiryDay: z.string().optional(),
    idExpiryMonth: z.string().optional(),
    idExpiryYear: z.string().optional(),
    reason: z.enum(["ukvi", "other"]),
    reasonOther: z.string().optional(),
    
    // New fields from images
    passportCopy: z.any().optional(),
    marketingConsent: z.string().min(1, "Please select an option"),
    takenBefore: z.string().min(1, "Please select if you have taken the test before"),
    takenWithinTwoYears: z.string().optional(),
    hasExistingAccount: z.string().optional(),

    // Step 3: English Equivalent & Address
    englishLastName: z.string().min(1, "English last name is required"),
    englishFirstNames: z.string().min(1, "English first names are required"),
    englishMiddleName: z.string().optional(),
    addressLine1: z.string().min(1, "Address is required"),
    addressLine2: z.string().optional(),
    addressLine3: z.string().optional(),
    townCity: z.string().min(1, "Town or City is required"),
    country: stringOrObject.refine(val => val.length > 0, "Country is required"),
    postcode: z.string().min(1, "Postcode is required"),
    telephone: z.string().min(1, "Telephone is required"),
});

export const RefinedSeltSchema = SeltSchema.refine(data => {
    return data.dobDay === data.repeatDobDay && 
           data.dobMonth === data.repeatDobMonth && 
           data.dobYear === data.repeatDobYear;
}, {
    message: "Date of birth must match",
    path: ["repeatDobDay"]
}).refine(data => data.idNumber === data.repeatIdNumber, {
    message: "ID number must match",
    path: ["repeatIdNumber"]
}).refine(data => {
    if (data.reason === "other" && !data.reasonOther) return false;
    return true;
}, {
    message: "Please specify other reason",
    path: ["reasonOther"]
}).refine((data) => {
    if (data.takenBefore === "yes" && !data.takenWithinTwoYears) return false;
    return true;
}, {
    message: "Please select an option",
    path: ["takenWithinTwoYears"],
}).refine((data) => {
    if (data.takenBefore === "yes" && !data.hasExistingAccount) return false;
    return true;
}, {
    message: "Please select an option",
    path: ["hasExistingAccount"],
});

export type TSeltFormSchema = z.infer<typeof RefinedSeltSchema>;
