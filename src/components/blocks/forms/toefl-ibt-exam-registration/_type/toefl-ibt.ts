import { z } from "zod";

export const ToeflIbtSchema = z
    .object({
        // Step 0: Date & Time
        examDate: z.any().refine((val) => !!val, "Please select an exam date"),
        examTimeSlot: z
            .enum(["AM", "PM"], {
                message: "Please select a time slot",
            })
            .or(z.literal("")),

        // Step 1: Personal Details
        givenNames: z.string().min(1, "Given names are required"),
        middleName: z.string().optional(),
        surnames: z.string().optional(),
        noSurname: z.boolean(),
        dateOfBirth: z.any().refine((val) => !!val, "Date of birth is required"),
        gender: z
            .enum(["female", "male", "other"], {
                message: "Please select your gender",
            })
            .or(z.literal("")),
        email: z.string().email("Invalid email address"),
        confirmEmail: z.string().email("Invalid email address"),
        phoneNumber: z.string().min(1, "Mobile number is required"),
        smsConsent: z.boolean(),
        country: z.string().min(1, "Country of residence is required"),
        streetAddress1: z.string().min(1, "Address is required"),
        streetAddress2: z.string().optional(),
        moreAddressLines: z.boolean(),
        city: z.string().min(1, "Town / City is required"),
        state: z.string().optional(),
        postalCode: z.string().optional(),
        agentCode: z.string().optional(),

        // Step 2: Identification Details
        idType: z.enum(["passport", "emirates_id"]).or(z.literal("")),
        idNumber: z.string().optional(),
        idExpiryDate: z.any().optional(),
        issuingAuthority: z.string().optional(),
        nationality: z.string().optional(),
        idDocument: z.any().refine((val) => !!val, "Please upload your ID document"),

        // Step 3: Your Profile
        takenBefore: z.enum(["Yes", "No"]).or(z.literal("")),
        lessThanTwoYears: z.enum(["Yes", "No", "I do not know"]).or(z.literal("")),
        existingAccount: z
            .enum(["Yes", "No", "I forgot my TOEFL account details"])
            .or(z.literal("")),
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
        marketingPreference: z
            .enum(["all", "some", "none"], {
                message: "Please select a marketing preference",
            })
            .or(z.literal("")),
        paymentMethod: z
            .enum(["online", "bank_transfer", "at_center"], {
                message: "Please select a payment method",
            })
            .or(z.literal("")),
        termsAgreed: z.boolean().optional(),
    })
    .refine((data) => data.email === data.confirmEmail, {
        message: "Emails do not match",
        path: ["confirmEmail"],
    })
    .superRefine((data, ctx) => {
        // Conditional logic for Step 3: Your Profile
        if (data.takenBefore === "Yes") {
            if (!data.lessThanTwoYears) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Please specify if it was less than 2 years",
                    path: ["lessThanTwoYears"],
                });
            }
            if (!data.existingAccount) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Please specify if you have an existing account",
                    path: ["existingAccount"],
                });
            }
        }

    });

export type TToeflIbtSchema = z.infer<typeof ToeflIbtSchema>;
