"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Save, User, ShieldCheck, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DatePicker } from "@/components/blocks/date-picker";
import Stepper from "@/components/stepper";
import BaseNoteBox from "@/components/base-note-box";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { TIeltsAcademicSchema } from "../_type";
import { AED } from "@/components/ui/aed";

interface RegistrationFormStepProps {
  form: UseFormReturn<TIeltsAcademicSchema>;
  onSubmit: (data: TIeltsAcademicSchema) => void;
  onInvalid: (errors: any) => void;
  onBack: () => void;
  languages: any[];
  coursesData: any;
  workshopsData: any;
}

export function RegistrationFormStep({
  form,
  onSubmit,
  onInvalid,
  onBack,
  languages,
  coursesData,
  workshopsData,
}: RegistrationFormStepProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const formData = watch();

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="space-y-8 animate-in fade-in duration-500"
    >
      <div className="space-y-6">
        <Stepper step={2}>Personal Details</Stepper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Field data-invalid={!!errors.givenNames}>
            <FieldLabel required>First / given names</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                aria-invalid={!!errors.givenNames}
                {...register("givenNames")}
              />
              <FieldError errors={[errors.givenNames]} />
              <FieldDescription>
                This must match the name(s) on your identification document.
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel>Middle Name</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                {...register("middleName")}
              />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.surnames}>
            <FieldLabel>Surname / family name</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                aria-invalid={!!errors.surnames}
                {...register("surnames")}
                disabled={formData.noSurname}
              />
              <FieldError errors={[errors.surnames]} />
              <FieldDescription className="flex items-center gap-2">
                <Checkbox
                  id="noSurname"
                  checked={formData.noSurname}
                  onCheckedChange={(val) =>
                    setValue("noSurname", val as boolean)
                  }
                />
                <Label htmlFor="noSurname" className="text-xs font-light">
                  I don't have a surname / family name
                </Label>
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.dateOfBirth}>
            <FieldLabel required>Date of birth</FieldLabel>
            <FieldContent>
              <DatePicker
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={(date) => setValue("dateOfBirth", date as Date)}
                disabled={(date) =>
                  date <= new Date() || date < new Date("1900-01-01")
                }
                placeholder="Select your date of birth"
                aria-invalid={!!errors.dateOfBirth}
              />
              <FieldError errors={[errors.dateOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.sex}>
            <FieldLabel required>Sex</FieldLabel>
            <FieldContent>
              <RadioGroup
                name="sex"
                onValueChange={(val) => setValue("sex", val)}
                value={formData.sex}
                className="grid grid-cols-2 gap-3"
              >
                {["male", "female"].map((opt) => (
                  <Label
                    key={opt}
                    htmlFor={opt}
                    data-invalid={!!errors.sex}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                  >
                    <RadioGroupItem value={opt} id={opt} />
                    {opt}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.sex]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.mobileNumber}>
            <FieldLabel required>Mobile number</FieldLabel>
            <FieldContent>
              <PhoneInput
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={(val) => setValue("mobileNumber", val)}
                defaultCountry="AE"
                aria-invalid={!!errors.mobileNumber}
              />
              <FieldError errors={[errors.mobileNumber]} />
              <FieldDescription className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="smsConsent"
                  checked={formData.smsConsent}
                  onCheckedChange={(val) =>
                    setValue("smsConsent", val as boolean)
                  }
                />
                <Label htmlFor="smsConsent" className="text-xs font-light">
                  I want to receive my results by SMS
                </Label>
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field data-invalid={!!errors.email}>
            <FieldLabel required>Email address</FieldLabel>
            <FieldContent>
              <Input
                placeholder="example@email.com"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              <FieldError errors={[errors.email]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.confirmEmail}>
            <FieldLabel required>Confirm email address</FieldLabel>
            <FieldContent>
              <Input
                placeholder="Confirm your email address"
                onPaste={(e) => e.preventDefault()}
                aria-invalid={!!errors.confirmEmail}
                {...register("confirmEmail")}
              />
              <FieldError errors={[errors.confirmEmail]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.residenceCountry}>
            <FieldLabel required>Country of residence</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="residenceCountry"
                placeholder="Search country..."
                value={formData.residenceCountry}
                aria-invalid={!!errors.residenceCountry}
                onChange={(country) =>
                  setValue("residenceCountry", country.name)
                }
              />
              <FieldError errors={[errors.residenceCountry]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress1}>
            <FieldLabel required>Postal Address</FieldLabel>
            <FieldContent>
              <Input
                {...register("postalAddress1")}
                placeholder="Street address"
                aria-invalid={!!errors.postalAddress1}
              />
              <FieldError errors={[errors.postalAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.poBox}>
            <FieldLabel>P.O. Box number</FieldLabel>
            <FieldContent>
              <Input
                {...register("poBox")}
                placeholder="P.O. Box number"
                aria-invalid={!!errors.poBox}
              />
              <FieldError errors={[errors.poBox]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postcode}>
            <FieldLabel>Postal Code (Zip Code)</FieldLabel>
            <FieldContent>
              <Input
                {...register("postcode")}
                placeholder="Postal code"
                aria-invalid={!!errors.postcode}
              />
              <FieldError errors={[errors.postcode]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.city}>
            <FieldLabel required>Emirate/ City</FieldLabel>
            <FieldContent>
              <Input
                {...register("city")}
                placeholder="Enter your city"
                aria-invalid={!!errors.city}
              />
              <FieldError errors={[errors.city]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idType}>
            <FieldLabel required>Identification type</FieldLabel>
            <FieldContent>
              <RadioGroup
                name="idType"
                onValueChange={(val) => setValue("idType", val)}
                value={formData.idType}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { id: "passport", label: "Passport" },
                  { id: "emirates_id", label: "Emirates ID" },
                ].map((opt) => (
                  <Label
                    key={opt.id}
                    htmlFor={opt.id}
                    data-invalid={!!errors.idType}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                  >
                    <RadioGroupItem value={opt.id} id={opt.id} />
                    {opt.label}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.idType]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idNumber}>
            <FieldLabel required>
              {formData.idType === "emirates_id"
                ? "ID number"
                : "Passport number"}
            </FieldLabel>
            <FieldContent>
              <Input
                {...register("idNumber")}
                aria-invalid={!!errors.idNumber}
                placeholder={`Enter your ${formData.idType === "emirates_id" ? "ID" : "Passport"} number`}
              />
              <FieldError errors={[errors.idNumber]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idExpiryDate}>
            <FieldLabel required>
              {formData.idType === "emirates_id"
                ? "ID expiry date"
                : "Passport expiry date"}
            </FieldLabel>
            <FieldContent>
              <DatePicker
                name="idExpiryDate"
                value={formData.idExpiryDate}
                onChange={(date) => setValue("idExpiryDate", date as Date)}
                aria-invalid={!!errors.idExpiryDate}
                disabled={(date) => date <= new Date()}
                placeholder={`Select ${formData.idType === "emirates_id" ? "ID" : "Passport"} expiry date`}
              />
              <FieldError errors={[errors.idExpiryDate]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.issuingAuthority}>
            <FieldLabel required>Issuing authority</FieldLabel>
            <FieldContent>
              <Input
                {...register("issuingAuthority")}
                aria-invalid={!!errors.issuingAuthority}
                placeholder="Enter issuing authority"
              />
              <FieldError errors={[errors.issuingAuthority]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.nationality}>
            <FieldLabel required>Country of nationality</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="nationality"
                placeholder="Search country..."
                value={formData.nationality}
                aria-invalid={!!errors.nationality}
                onChange={(country) => setValue("nationality", country.name)}
              />
              <FieldError errors={[errors.nationality]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idDocument}>
            <FieldLabel required>
              Attach a valid copy of Passport / Emirates ID:
            </FieldLabel>
            <FieldContent>
              <div className="flex flex-col gap-2">
                {!formData.idDocument ? (
                  <Input
                    type="file"
                    accept=".pdf,.docx,.doc,.png,.jpg,.jpeg"
                    className="h-auto py-2 px-3 border-2 border-dashed border-slate-200 hover:border-primary/50 transition-colors cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setValue("idDocument", file);
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary">
                        <Save className="size-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-700 truncate max-w-[200px]">
                          {(formData.idDocument as File).name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {((formData.idDocument as File).size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setValue("idDocument", undefined)}
                      className="size-8 p-0 rounded-full hover:bg-red-50 hover:text-red-600"
                    >
                      <span className="text-lg">×</span>
                    </Button>
                  </div>
                )}
                <p className="text-[12px] text-slate-900 font-medium">
                  Supported formats: (pdf, docx, doc, png, jpeg)
                </p>
              </div>
              <FieldError errors={[errors.idDocument]} />
            </FieldContent>
          </Field>


        </div>
      </div>

      {/* Additional Info Section */}
      <div className="pt-8 border-t border-slate-100 space-y-6">
        <div className="flex items-center gap-2 text-slate-400 mb-4">
          <Globe className="size-5" />
          <h3 className="text-lg font-bold tracking-tight text-slate-800">
            Additional Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Field
            className="md:col-span-2 lg:col-span-3"
            data-invalid={!!errors.takenBefore}
          >
            <FieldLabel required>
              Have you taken the CD-IELTS Test before?
            </FieldLabel>
            <FieldContent className="mt-2">
              <RadioGroup
                name="takenBefore"
                onValueChange={(val) => setValue("takenBefore", val)}
                value={formData.takenBefore}
                className="grid grid-cols-2 gap-3"
              >
                {["Yes", "No"].map((opt) => (
                  <Label
                    key={opt}
                    htmlFor={`taken-${opt}`}
                    data-invalid={!!errors.takenBefore}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                  >
                    <RadioGroupItem value={opt} id={`taken-${opt}`} />
                    {opt}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.takenBefore]} />
            </FieldContent>
          </Field>

          {formData.takenBefore === "Yes" && (
            <>
              <Field
                className="md:col-span-2 lg:col-span-3"
                data-invalid={!!errors.lessThanTwoYears}
              >
                <FieldLabel required>Was it less than 2 years?</FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    name="lessThanTwoYears"
                    onValueChange={(val) => setValue("lessThanTwoYears", val)}
                    value={formData.lessThanTwoYears}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3"
                  >
                    {["Yes", "No", "I do not know"].map((opt) => (
                      <Label
                        key={opt}
                        htmlFor={`less-${opt}`}
                        data-invalid={!!errors.lessThanTwoYears}
                        className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                      >
                        <RadioGroupItem value={opt} id={`less-${opt}`} />
                        {opt}
                      </Label>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.lessThanTwoYears]} />
                </FieldContent>
              </Field>

              <Field
                className="md:col-span-2 lg:col-span-3"
                data-invalid={!!errors.existingAccount}
              >
                <FieldLabel required>
                  Do you have an existing IELTS account?
                </FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    name="existingAccount"
                    onValueChange={(val) => setValue("existingAccount", val)}
                    value={formData.existingAccount}
                    className="flex flex-col gap-3"
                  >
                    {["Yes", "No", "I forgot my IELTS account details"].map(
                      (opt) => (
                        <Label
                          key={opt}
                          htmlFor={`acc-${opt}`}
                          data-invalid={!!errors.existingAccount}
                          className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                        >
                          <RadioGroupItem value={opt} id={`acc-${opt}`} />
                          {opt}
                        </Label>
                      ),
                    )}
                  </RadioGroup>
                  <FieldError errors={[errors.existingAccount]} />
                </FieldContent>
              </Field>
            </>
          )}

          <Field
            className="md:col-span-2 lg:col-span-3"
            data-invalid={!!errors.specialRequirements}
          >
            <FieldLabel required>
              Do you have any special requirements due to ill health/medical
              conditions?
            </FieldLabel>
            <FieldContent className="mt-2">
              <RadioGroup
                name="specialRequirements"
                onValueChange={(val) => setValue("specialRequirements", val)}
                value={formData.specialRequirements}
                className="grid grid-cols-2 gap-3"
              >
                {["Yes", "No"].map((opt) => (
                  <Label
                    key={opt}
                    htmlFor={`special-${opt}`}
                    data-invalid={!!errors.specialRequirements}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                  >
                    <RadioGroupItem value={opt} id={`special-${opt}`} />
                    {opt}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.specialRequirements]} />
            </FieldContent>
          </Field>

          {formData.specialRequirements === "Yes" && (
            <Field
              className="md:col-span-2 lg:col-span-3"
              data-invalid={!!errors.specialRequirementsMention}
            >
              <FieldLabel required>Please mention your requirements</FieldLabel>
              <FieldContent>
                <Input
                  {...register("specialRequirementsMention")}
                  placeholder="Type your requirements here"
                  aria-invalid={!!errors.specialRequirementsMention}
                />
                <FieldError errors={[errors.specialRequirementsMention]} />
              </FieldContent>
            </Field>
          )}

          <Field data-invalid={!!errors.firstLanguage}>
            <FieldLabel required>What is your first language?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="firstLanguage"
                options={languages}
                placeholder="-Select Language-"
                value={formData.firstLanguage}
                aria-invalid={!!errors.firstLanguage}
                onChange={(val) => setValue("firstLanguage", val)}
              />
              <FieldError errors={[errors.firstLanguage]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.yearsStudyingEnglish}>
            <FieldLabel required>
              How many years have you been studying English?
            </FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="yearsStudyingEnglish"
                options={[
                  { label: "1 (less than)", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "6", value: "6" },
                  { label: "7", value: "7" },
                  { label: "8", value: "8" },
                  { label: "9", value: "9" },
                ]}
                placeholder="-Select Duration-"
                value={formData.yearsStudyingEnglish}
                aria-invalid={!!errors.yearsStudyingEnglish}
                onChange={(val) => setValue("yearsStudyingEnglish", val)}
              />
              <FieldError errors={[errors.yearsStudyingEnglish]} />
            </FieldContent>
          </Field>

          <Field
            className="md:col-span-2"
            data-invalid={!!errors.educationLevel}
          >
            <FieldLabel required>
              What level of education have you completed?
            </FieldLabel>
            <FieldContent>
              <RadioGroup
                name="educationLevel"
                onValueChange={(val) => setValue("educationLevel", val)}
                value={formData.educationLevel}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {[
                  {
                    id: "secondary_up_to_16",
                    label: "Secondary (up to 16 years)",
                  },
                  { id: "secondary_16_19", label: "Secondary (16-19 years)" },
                  { id: "degree", label: "Degree (or equivalent)" },
                  { id: "post_graduate", label: "Post-graduate" },
                ].map((opt) => (
                  <Label
                    key={opt.id}
                    htmlFor={opt.id}
                    data-invalid={!!errors.educationLevel}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                  >
                    <RadioGroupItem value={opt.id} id={opt.id} />
                    {opt.label}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.educationLevel]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.occupationLevel}>
            <FieldLabel required>What is your occupation level?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="occupationLevel"
                options={[
                  { label: "Self-employed", value: "Self-employed" },
                  { label: "Employer/Partner", value: "Employer/Partner" },
                  {
                    label: "Employee (Senior level)",
                    value: "Employee (Senior level)",
                  },
                  {
                    label: "Employee (Middle/Junior level)",
                    value: "Employee (Middle/Junior level)",
                  },
                  { label: "Homeworker", value: "Homeworker" },
                  { label: "Retired", value: "Retired" },
                  { label: "Student", value: "Student" },
                  { label: "Other", value: "Other" },
                ]}
                placeholder="-Select Level-"
                value={formData.occupationLevel}
                aria-invalid={!!errors.occupationLevel}
                onChange={(val) => setValue("occupationLevel", val)}
              />
              <FieldError errors={[errors.occupationLevel]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.occupationSector}>
            <FieldLabel required>What is your occupation sector?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="occupationSector"
                options={[
                  {
                    label: "Administrative Services",
                    value: "Administrative Services",
                  },
                  { label: "Education", value: "Education" },
                  {
                    label: "Banking and Finance",
                    value: "Banking and Finance",
                  },
                  {
                    label: "Health and Social Services",
                    value: "Health and Social Services",
                  },
                  { label: "Other", value: "Other" },
                ]}
                placeholder="-Select Sector-"
                value={formData.occupationSector}
                aria-invalid={!!errors.occupationSector}
                onChange={(val) => setValue("occupationSector", val)}
              />
              <FieldError errors={[errors.occupationSector]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.reasonForTakingTest}>
            <FieldLabel required>Why are you taking the test?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="reasonForTakingTest"
                options={[
                  {
                    label: "Higher education extended course",
                    value: "higher_edu_long",
                  },
                  { label: "Immigration", value: "immigration" },
                  { label: "Employment", value: "employment" },
                  { label: "Other", value: "other" },
                ]}
                placeholder="-Select Reason-"
                value={formData.reasonForTakingTest}
                aria-invalid={!!errors.reasonForTakingTest}
                onChange={(val) => setValue("reasonForTakingTest", val)}
              />
              <FieldError errors={[errors.reasonForTakingTest]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.destinationCountry}>
            <FieldLabel required>Destination country?</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="destinationCountry"
                placeholder="-Select Country-"
                value={formData.destinationCountry}
                aria-invalid={!!errors.destinationCountry}
                onChange={(country) =>
                  setValue("destinationCountry", country.name)
                }
              />
              <FieldError errors={[errors.destinationCountry]} />
            </FieldContent>
          </Field>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="pt-8 border-t border-slate-100 space-y-6">
        <div className="flex items-center gap-2 text-slate-400 mb-4">
          <BookOpen className="size-5" />
          <h3 className="text-lg font-bold tracking-tight text-slate-800">
            Add-on Services
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field>
            <FieldLabel>Courses</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="selectedCourse"
                options={[
                  { label: "None", value: "" },
                  ...Object.values(coursesData).map((c: any) => ({
                    label: c.name,
                    description: (
                      <span className="flex items-center gap-1">
                        <AED className="h-3 w-auto" />
                        {(c.price * (1 - c.special_discount / 100)).toFixed(0)} ({c.special_discount}% OFF)
                      </span>
                    ),
                    value: c.id,
                  })),
                ]}
                placeholder="Select a course"
                value={formData.selectedCourse}
                onChange={(val) => setValue("selectedCourse", val)}
                aria-invalid={!!errors.selectedCourse}
              />
            </FieldContent>
          </Field>
          <Field>
            <FieldLabel>Workshops</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="selectedWorkshop"
                options={[
                  { label: "None", value: "" },
                  ...Object.values(workshopsData).map((w: any) => ({
                    label: w.name,
                    description: (
                      <span className="flex items-center gap-1">
                        {w.duration} • <AED className="h-3 w-auto" /> {w.price}
                      </span>
                    ),
                    value: w.id,
                  })),
                ]}
                placeholder="Select a workshop"
                value={formData.selectedWorkshop}
                onChange={(val) => setValue("selectedWorkshop", val)}
                aria-invalid={!!errors.selectedWorkshop}
              />
            </FieldContent>
          </Field>
        </div>

        <BaseNoteBox
          title="Enjoy These Free Benefits:"
          notes={[
            "Save more when you book your exam and register for the course with TEPTH and pay online on our website.",
            "Free Prep. Material",
            "Free Consultation",
            "Free Mock Test",
          ]}
        />
      </div>

      {/* Marketing Preferences */}
      <div className="pt-8 border-t border-slate-100 space-y-6">
        <Field data-invalid={!!errors.marketingPreference}>
          <FieldLabel>Marketing preferences</FieldLabel>
          <FieldContent className="mt-4">
            <RadioGroup
              name="marketingPreference"
              onValueChange={(val) => setValue("marketingPreference", val)}
              value={formData.marketingPreference}
              className="space-y-4"
            >
              {[
                {
                  id: "all",
                  label:
                    "I am happy to receive updates about products, services and events organised by British Council.",
                },
                {
                  id: "some",
                  label:
                    "I am happy to receive information from British Council and selected third parties.",
                },
                {
                  id: "none",
                  label: "Please do not send me any marketing updates.",
                },
              ].map((opt) => (
                <Label
                  key={opt.id}
                  htmlFor={`mkt-${opt.id}`}
                  data-invalid={!!errors.marketingPreference}
                  className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                >
                  <RadioGroupItem value={opt.id} id={`mkt-${opt.id}`} />
                  <span className="text-sm">{opt.label}</span>
                </Label>
              ))}
            </RadioGroup>
            <FieldError errors={[errors.marketingPreference]} />
          </FieldContent>
        </Field>
      </div>

      {/* Form Actions */}
      <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
        <Button
          variant="ghost"
          type="button"
          onClick={onBack}
          className="bg-primary hover:bg-primary/90 text-white px-4 h-10 rounded-xl font-bold transition-all disabled:opacity-50"
        >
          Back
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-4 h-10 rounded-xl font-bold transition-all disabled:opacity-50">Next</Button>
      </div>
    </form>
  );
}
