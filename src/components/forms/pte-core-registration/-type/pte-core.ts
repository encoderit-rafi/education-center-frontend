import { z } from "zod";

export const PteCoreSchema = z.object({
    givenNames: z.string().min(1, "Given names are required"),
    surnames: z.string().min(1, "Surnames are required"),
    dobDay: z.string().min(1, "Day is required"),
    dobMonth: z.string().min(1, "Month is required"),
    dobYear: z.string().min(1, "Year is required"),
    gender: z.string().min(1, "Gender is required"),
    testTiming: z.string().min(1, "Test timing is required"),
    countryOfBirth: z.string().min(1, "Country of birth is required"),
    countryOfCitizenship: z.string().min(1, "Country of citizenship is required"),
    countryOfResidence: z.string().min(1, "Country of residence is required"),
    languageSpoken: z.string().min(1, "Language spoken is required"),
    idType: z.string().min(1, "ID type is required"),
    documentNumber: z.string().min(1, "Document number is required"),
    purposeOfTest: z.string().min(1, "Purpose of test is required"),
    occupation: z.string().min(1, "Occupation is required"),
    fullAddress: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    countryCode: z.string().min(1, "Code is required"),
    telephone: z.string().min(1, "Telephone is required"),
    email: z.string().email("Invalid email address"),
    selectedCourse: z.string(),
    termsAccepted: z.boolean(),
    permissionLogIntoAccount: z.boolean(),
    infoCorrect: z.boolean(),
});

export type TPteCoreFormSchema = z.infer<typeof PteCoreSchema>;

export const RefinedPteCoreSchema = PteCoreSchema.refine(data => data.termsAccepted === true, {
    message: "You must accept terms",
    path: ["termsAccepted"],
}).refine(data => data.permissionLogIntoAccount === true, {
    message: "Permission is required",
    path: ["permissionLogIntoAccount"],
}).refine(data => data.infoCorrect === true, {
    message: "Please confirm info is correct",
    path: ["infoCorrect"],
});
