import { z } from "zod";

export const ToeflFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
    gender: z.string().min(1, "Gender is required"),
    dobDay: z.string().min(1, "Day is required"),
    dobMonth: z.string().min(1, "Month is required"),
    dobYear: z.string().min(1, "Year is required"),
    countryOfBirth: z.string().min(1, "Country of birth is required"),
    nationality: z.string().min(1, "Nationality is required"),
    idType: z.string().min(1, "ID type is required"),
    idNumber: z.string().min(1, "ID number is required"),
    countryOfResidence: z.string().min(1, "Country of residence is required"),
    residentialAddress: z.string().min(1, "Address is required"),
    country: z.string().min(1, "Country is required"),
    province: z.string().optional(),
    city: z.string().min(1, "City is required"),
    poBox: z.string().optional(),
    postalCode: z.string().optional(),
    countryCode: z.string().min(1, "Code is required"),
    mobileNo: z.string().min(1, "Mobile number is required"),
    email: z.string().email("Invalid email address"),
    confirmEmail: z.string().email("Invalid email address"),
    studyCountry: z.string().min(1, "Study country is required"),
    testDate1: z.string().min(1, "Preferred date is required"),
    testDate2: z.string().optional(),
    nativeLanguage: z.string().min(1, "Native language is required"),
    studyLevel: z.string().min(1, "Study level is required"),
    studyField: z.string().min(1, "Study field is required"),
    hasTakenBefore: z.string().min(1, "Please select an option"),
    lessThan2Years: z.string().optional(),
    existingETSAccount: z.string().optional(),
    selectedOneToOne: z.boolean(),
    selectedWorkshop: z.boolean(),
    selectedExpressDelivery: z.boolean(),
    termsAccepted: z.boolean(),
    permissionLogIntoAccount: z.boolean(),
    infoCorrect: z.boolean(),
});

export type TToeflFormSchema = z.infer<typeof ToeflFormSchema>;

export const RefinedToeflSchema = ToeflFormSchema.refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
}).refine((data) => {
    if (data.hasTakenBefore === "yes") {
        return !!data.lessThan2Years && !!data.existingETSAccount;
    }
    return true;
}, {
    message: "Required fields for previous test takers",
    path: ["lessThan2Years"],
}).refine(data => data.termsAccepted === true, {
    message: "You must accept terms",
    path: ["termsAccepted"],
}).refine(data => data.permissionLogIntoAccount === true, {
    message: "Permission is required",
    path: ["permissionLogIntoAccount"],
}).refine(data => data.infoCorrect === true, {
    message: "Please confirm info is correct",
    path: ["infoCorrect"],
});
