import { z } from "zod";

export const IeltsFormSchema = z.object({
    testModule: z.string().min(1, "Please select a test module"),
    givenNames: z.string().min(1, "Given names are required"),
    surnames: z.string().min(1, "Surnames are required"),
    dobDay: z.string().min(1, "Day is required"),
    dobMonth: z.string().min(1, "Month is required"),
    dobYear: z.string().min(1, "Year is required"),
    gender: z.string().min(1, "Gender is required"),
    testTiming: z.string().min(1, "Test timing is required"),
    takenBefore: z.string().min(1, "Please select an option"),
    lessThan2Years: z.string().optional(),
    existingAccount: z.string().optional(),
    educationLevel: z.string().min(1, "Education level is required"),
    occupationLevel: z.string().min(1, "Occupation level is required"),
    occupationSector: z.string().min(1, "Occupation sector is required"),
    reasonForTest: z.string().min(1, "Reason for test is required"),
    destinationCountry: z.string().min(1, "Destination country is required"),
    firstLanguage: z.string().min(1, "First language is required"),
    yearsStudyingEnglish: z.string().min(1, "Years studying English is required"),
    countryOfBirth: z.string().min(1, "Country of birth is required"),
    countryOfCitizenship: z.string().min(1, "Country of citizenship is required"),
    specialRequirements: z.string().min(1, "Please select an option"),
    specialRequirementsDetails: z.string().optional(),
    firstPreferredDate: z.any(),
    secondPreferredDate: z.any(),
    selectedOneToOneCourse: z.boolean(),
    selectedGroupCourse: z.boolean(),
    selectedSemiPrivateCourse: z.boolean(),
    selectedPrivateCourse: z.boolean(),
    selectedWorkshop: z.boolean(),
    workshopHours: z.string(),
    termsAccepted: z.boolean(),
    permissionLogIntoAccount: z.boolean(),
    infoCorrect: z.boolean(),
});

export type TIeltsFormSchema = z.infer<typeof IeltsFormSchema>;

export const RefinedIeltsSchema = IeltsFormSchema.refine((data) => {
    if (data.takenBefore === "yes") {
        return !!data.lessThan2Years && !!data.existingAccount;
    }
    return true;
}, {
    message: "Required fields for previous test takers",
    path: ["lessThan2Years"],
}).refine((data) => {
    if (data.selectedWorkshop) {
        return !!data.workshopHours;
    }
    return true;
}, {
    message: "Please select workshop hours",
    path: ["workshopHours"],
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
