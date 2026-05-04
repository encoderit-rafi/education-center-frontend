import { z } from "zod";

export const ToeflIbtSchema = z.object({
    // Step 1: Personal Details
    givenName: z.string().min(1, "First / Given Name is required"),
    noGivenOrLastName: z.boolean(),
    middleName: z.string().optional(),
    familyName: z.string().min(1, "Last / Family Name is required"),
    dobDay: z.string().min(1, "Day is required"),
    dobMonth: z.string().min(1, "Month is required"),
    dobYear: z.string().min(1, "Year is required"),
    gender: z.string().min(1, "Gender is required"),

    // Step 2: Address & Contact
    country: z.string().min(1, "Country is required"),
    streetAddress1: z.string().min(1, "Street Address is required"),
    streetAddress2: z.string().optional(),
    moreAddressLines: z.boolean(),
    city: z.string().min(1, "City is required"),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    countryCode: z.string().min(1, "Country Code is required"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    agentCode: z.string().optional(),
});

export type TToeflIbtSchema = z.infer<typeof ToeflIbtSchema>;
