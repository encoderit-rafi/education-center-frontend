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
        middleName: z.string().optional().nullable().or(z.literal("")),
        surnames: z.string().optional(),
        noSurname: z.boolean(),
        dateOfBirth: z.any().refine((val) => !!val, "Date of birth is required"),
        birthCity: z.string().min(1, "City of birth is required"),
        birthCountry: z.string().min(1, "Country of birth is required"),
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
        poBox: z.string().optional(),
        moreAddressLines: z.boolean(),
        city: z.string().min(1, "Town / City is required"),
        state: z.string().optional(),
        postalCode: z.string().optional(),
        agentCode: z.string().optional(),

        // Step 2: Identification Details
        idType: z.enum(["passport", "emirates_id"]).or(z.literal("")),
        idNumber: z.string().optional(),
        idExpiryDate: z.any().optional(),
        nationality: z.string().min(1, "Country of nationality is required"),
        idDocument: z.any()
        .refine((val) => !!val, "Please upload your ID document")
        .refine((val) => !(val instanceof File) || val.size <= 5 * 1024 * 1024, "File size must be less than 5MB"),

        // Step 3: Your Profile
        takenBefore: z.enum(["Yes", "No"]).or(z.literal("")),
        lessThanTwoYears: z.enum(["Yes", "No", "I do not know"]).or(z.literal("")),
        existingAccount: z
            .enum(["Yes", "No", "I forgot my TOEFL account details"])
            .or(z.literal("")),
        firstLanguage: z.string().optional(),
        firstLanguageOther: z.string().optional(),
        yearsStudyingEnglish: z.string().optional(),
        educationLevel: z.string().optional(),
        nextLevelOfStudy: z.string().min(1, "Next level of study is required"),
        nextLevelOfStudyOther: z.string().optional(),
        desiredFieldOfStudy: z.string().min(1, "Desired field of study is required"),
        desiredFieldOfStudyOther: z.string().optional(),
        reasonsForTakingToefl: z.string().min(1, "Please select a reason"),
        occupationLevel: z.string().optional(),
        occupationLevelOther: z.string().optional(),
        occupationSector: z.string().optional(),
        occupationSectorOther: z.string().optional(),
        reasonForTakingTest: z.string().optional(),
        reasonForTakingTestOther: z.string().optional(),
        destinationCountry: z.string().optional(),
        intendedEnrollmentDate: z.any().refine((val) => !!val, "Please select an intended date of enrollment"),

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
            .enum(["online", "bank_transfer", "at_center", "stripe", "paypal"], {
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
        // Gender required
        if (!data.gender) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select your gender",
                path: ["gender"],
            });
        }

        // ID type required
        if (!data.idType) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select an identification type",
                path: ["idType"],
            });
        }

        // ID number required
        if (!data.idNumber || !data.idNumber.trim()) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "ID / Passport number is required",
                path: ["idNumber"],
            });
        }

        // ID expiry date required
        if (!data.idExpiryDate) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Expiry date is required",
                path: ["idExpiryDate"],
            });
        }

        // First language required
        if (!data.firstLanguage) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select your first language",
                path: ["firstLanguage"],
            });
        }

        // firstLanguageOther required if "Other"
        if (data.firstLanguage === "Other" && (!data.firstLanguageOther || !data.firstLanguageOther.trim())) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please specify your first language",
                path: ["firstLanguageOther"],
            });
        }

        // Years studying English required
        if (!data.yearsStudyingEnglish) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select how many years you have been studying English",
                path: ["yearsStudyingEnglish"],
            });
        }

        // Destination country required
        if (!data.destinationCountry) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select a destination country",
                path: ["destinationCountry"],
            });
        }

        // Conditional logic for Step 3: Your Profile
        if (!data.takenBefore) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please specify if you have taken the TOEFL iBT Test before",
                path: ["takenBefore"],
            });
        }

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



        if (data.desiredFieldOfStudy === "Other" && !data.desiredFieldOfStudyOther) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please specify your desired field of study",
                path: ["desiredFieldOfStudyOther"],
            });
        }

        if (!data.marketingPreference) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Please select a marketing preference",
                path: ["marketingPreference"],
            });
        }

        if (!data.noSurname && (!data.surnames || !data.surnames.trim())) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Surname / family name is required",
                path: ["surnames"],
            });
        }
    });

export type TToeflIbtSchema = z.infer<typeof ToeflIbtSchema>;
