import { z } from "zod";

export const IeltsAcademicSchema = z.object({
    // Step 1: Personal Details
    bookingFor: z.enum(["myself", "child"], {
        required_error: "Please select who you are booking for",
    }),
    givenNames: z.string().min(1, "Given names are required"),
    surnames: z.string().optional(),
    noSurname: z.boolean(),
    dateOfBirth: z.any().refine((val) => !!val, "Date of birth is required"),
    sex: z.enum(["female", "male"], {
        required_error: "Please select your sex",
    }),
    mobileNumber: z.string().min(1, "Mobile number is required"),
    smsConsent: z.boolean(),
    residenceCountry: z.string().min(1, "Country of residence is required"),
    postalAddress1: z.string().min(1, "Address is required"),
    postalAddress2: z.string().optional(),
    postalAddress3: z.string().optional(),
    city: z.string().min(1, "Town / City is required"),
    postcode: z.string().min(1, "Postcode / ZIP is required"),
    marketingPreference: z.enum(["all", "some", "none"], {
        required_error: "Please select a marketing preference",
    }),

    // Step 2: Identification Details
    idType: z.enum(["passport", "emirates_id"]).optional(),
    idNumber: z.string().optional(),
    idExpiryDate: z.any().optional(),
    issuingAuthority: z.string().optional(),
    nationality: z.string().optional(),

    // Step 3: Your Profile
    firstLanguage: z.string().optional(),
    yearsStudyingEnglish: z.string().optional(),
    educationLevel: z.string().optional(),
    occupationLevel: z.string().optional(),
    occupationSector: z.string().optional(),
    reasonForTakingTest: z.string().optional(),
    destinationCountry: z.string().optional(),

    // Step 4: Review & Payment
    confirmationRecipient: z.enum(["myself", "other", "company"]).optional(),
    vatNumber: z.string().optional(),
    termsAgreed: z.boolean().optional(),
});

export type TIeltsAcademicSchema = z.infer<typeof IeltsAcademicSchema>;
