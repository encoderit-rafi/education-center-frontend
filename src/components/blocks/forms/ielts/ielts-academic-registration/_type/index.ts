import { z } from "zod";

export const IeltsAcademicSchema = z
  .object({
    // Step 1: Personal Details
    testModule: z.enum(["Academic", "General Training"]).or(z.literal("")),

    givenNames: z.string().min(1, "Given names are required"),
    middleName: z.string().optional(),
    surnames: z.string().optional(),
    postcode: z.string().optional(),
    poBox: z.string().optional(),
    noSurname: z.boolean(),
    dateOfBirth: z.any().refine((val) => !!val, "Date of birth is required"),
    sex: z
      .enum(["female", "male"], {
        message: "Please select your sex",
      })
      .or(z.literal("")),
    email: z.string().email("Invalid email address"),
    confirmEmail: z.string().email("Invalid email address"),
    mobileNumber: z.string().min(1, "Mobile number is required"),
    smsConsent: z.boolean(),
    residenceCountry: z.string().min(1, "Country of residence is required"),
    postalAddress1: z.string().min(1, "Address is required"),
    postalAddress2: z.string().optional(),
    postalAddress3: z.string().optional(),
    city: z.string().min(1, "Town / City is required"),
    marketingPreference: z
      .enum(["all", "some", "none"], {
        message: "Please select a marketing preference",
      })
      .or(z.literal("")),

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
      .enum(["Yes", "No", "I forgot my IELTS account details"])
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
    // confirmationRecipient: z
    //   .enum(["myself", "other", "company"], {
    //     message: "Please select a confirmation recipient",
    //   })
    //   .or(z.literal("")),
    vatNumber: z.string().optional(),
    paymentMethod: z
      .enum(["online", "bank_transfer", "at_center"], {
        message: "Please select a payment method",
      })
      .or(z.literal("")),
    termsAgreed: z.boolean().optional(),
    examDate: z.any().refine((val) => !!val, "Please select an exam date"),
    examTimeSlot: z
      .enum(["9:00 AM", "11:00 AM"], {
        message: "Please select a time slot",
      })
      .or(z.literal("")),
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

export type TIeltsAcademicSchema = z.infer<typeof IeltsAcademicSchema>;
