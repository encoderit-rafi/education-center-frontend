import { z } from "zod";

export const PteHomeSchema = z.object({
    givenNames: z.string().min(1, "Given names are required"),
    surnames: z.string().min(1, "Surnames are required"),
    dobDay: z.string().min(1, "Day is required"),
    dobMonth: z.string().min(1, "Month is required"),
    dobYear: z.string().min(1, "Year is required"),
    gender: z.string().min(1, "Gender is required"),
    countryOfIssue: z.string().min(1, "Country of issue is required"),
    countryOfBirth: z.string().min(1, "Country of birth is required"),
    countryOfCitizenship: z.string().min(1, "Country of citizenship is required"),
    countryOfResidence: z.string().min(1, "Country of residence is required"),
    languageSpoken: z.string().min(1, "Language spoken is required"),
    idType: z.string().min(1, "ID type is required"),
    documentNumber: z.string().min(1, "Document number is required"),
    fullAddress: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    countryCode: z.string().min(1, "Code is required"),
    telephone: z.string().min(1, "Telephone is required"),
    email: z.string().email("Invalid email address"),
    referralSource: z.string().min(1, "Referral source is required"),
    receiveUpdates: z.string().min(1, "Please select an option"),
    workshop: z.string(),
    termsAccepted: z.boolean(),
    permissionLogIntoAccount: z.boolean(),
    infoCorrect: z.boolean(),
});

export type TPteHomeFormSchema = z.infer<typeof PteHomeSchema>;

export const RefinedPteHomeSchema = PteHomeSchema.refine(data => data.termsAccepted === true, {
    message: "You must accept terms",
    path: ["termsAccepted"],
}).refine(data => data.permissionLogIntoAccount === true, {
    message: "Permission is required",
    path: ["permissionLogIntoAccount"],
}).refine(data => data.infoCorrect === true, {
    message: "Please confirm info is correct",
    path: ["infoCorrect"],
});
