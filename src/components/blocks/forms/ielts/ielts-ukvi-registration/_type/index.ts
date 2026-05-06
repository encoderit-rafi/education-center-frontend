import { z } from "zod";

export const IeltsUkviSchema = z.object({
    // Step 1: Personal Details
    testModule: z.enum(["Academic", "General Training"]).or(z.literal("")),
    bookingFor: z.enum(["myself", "child"], {
        message: "Please select who you are booking for",
    }).or(z.literal("")),
    givenNames: z.string().min(1, "Given names are required"),
    surnames: z.string().optional(),
    noSurname: z.boolean(),
    dateOfBirth: z.any().refine((val) => !!val, "Date of birth is required"),
    sex: z.enum(["female", "male"], {
        message: "Please select your sex",
    }).or(z.literal("")),
    email: z.string().email("Invalid email address"),
    confirmEmail: z.string().email("Invalid email address"),
    mobileNumber: z.string().min(1, "Mobile number is required"),
    smsConsent: z.boolean(),
    residenceCountry: z.string().min(1, "Country of residence is required"),
    postalAddress1: z.string().min(1, "Address is required"),
    postalAddress2: z.string().optional(),
    postalAddress3: z.string().optional(),
    city: z.string().min(1, "Town / City is required"),
    postcode: z.string().min(1, "Postcode / ZIP is required"),
    marketingPreference: z.enum(["all", "some", "none"], {
        message: "Please select a marketing preference",
    }).or(z.literal("")),

    // Step 2: Identification Details
    idType: z.enum(["passport", "emirates_id"]).or(z.literal("")),
    idNumber: z.string().optional(),
    idExpiryDate: z.any().optional(),
    issuingAuthority: z.string().optional(),
    nationality: z.string().optional(),

    // Step 3: Your Profile
    takenBefore: z.enum(["Yes", "No"]).or(z.literal("")),
    lessThanTwoYears: z.enum(["Yes", "No", "I do not know"]).or(z.literal("")),
    existingAccount: z.enum(["Yes", "No", "I forgot my IELTS account details"]).or(z.literal("")),
    specialRequirements: z.enum(["Yes", "No"]).or(z.literal("")),
    specialRequirementsMention: z.string().optional(),
    firstLanguage: z.string().optional(),
    yearsStudyingEnglish: z.string().optional(),
    educationLevel: z.string().optional(),
    occupationLevel: z.string().optional(),
    occupationSector: z.string().optional(),
    reasonForTakingTest: z.string().optional(),
    destinationCountry: z.string().optional(),

    // Step 4: Add-ons (Courses & Workshops)
    selectedCourse: z.string().optional(),
    selectedWorkshop: z.string().optional(),

    // Step 5: Review & Payment
    confirmationRecipient: z.enum(["myself", "other", "company"]).or(z.literal("")),
    vatNumber: z.string().optional(),
    paymentMethod: z.enum(["online", "bank_transfer", "at_center"]).or(z.literal("")),
    termsAgreed: z.boolean().optional(),
    examDate: z.any().refine((val) => !!val, "Please select an exam date"),
    examTime: z.string().min(1, "Please select an exam time"),
}).refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
});

export type TIeltsUkviSchema = z.infer<typeof IeltsUkviSchema>;
