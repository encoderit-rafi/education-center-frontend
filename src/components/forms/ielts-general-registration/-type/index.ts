import { z } from "zod";

export const IeltsGeneralSchema = z.object({
    // Step 1: Personal Details
    bookingFor: z.enum(["myself", "child"], {
        message: "Please select who you are booking for",
    }).or(z.literal("")),
    givenNames: z.string().min(1, "First / given names are required"),
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
    idNumber: z.string().min(1, "ID number is required"),
    idExpiryDate: z.any().refine((val) => !!val, "ID expiry date is required"),
    issuingAuthority: z.string().min(1, "Issuing authority is required"),
    nationality: z.string().min(1, "Nationality is required"),

    // Step 3: Profile & Interests
    firstLanguage: z.string().min(1, "First language is required"),
    yearsStudyingEnglish: z.string().min(1, "Years studying English is required"),
    educationLevel: z.string().min(1, "Education level is required"),
    occupationLevel: z.string().min(1, "Occupation level is required"),
    occupationSector: z.string().min(1, "Occupation sector is required"),
    reasonForTakingTest: z.string().min(1, "Reason for taking test is required"),
    destinationCountry: z.string().min(1, "Destination country is required"),

    // Step 4: Review (no specific fields, just display)
    
    // Step 5: Final
    confirmationRecipient: z.enum(["myself", "other", "company"]).or(z.literal("")),
    vatNumber: z.string().optional(),
    termsAgreed: z.boolean().refine((val) => val === true, "You must agree to terms"),
}).refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
});

export type TIeltsGeneralSchema = z.infer<typeof IeltsGeneralSchema>;
