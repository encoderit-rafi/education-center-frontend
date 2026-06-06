"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Save, Globe, CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { AddonServicesSection } from "@/components/blocks/forms/shared/addon-services-section";
import { MarketingPreferencesSection } from "@/components/blocks/forms/shared/marketing-preferences-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DatePicker } from "@/components/blocks/date-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Stepper from "@/components/stepper";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel
} from "@/components/ui/field";
import { TToeflIbtSchema } from "../_type/toefl-ibt";

const DESIRED_FIELDS_OF_STUDY = [
  { label: "Accounting", value: "Accounting" },
  { label: "Agriculture & Natural Resources", value: "Agriculture & Natural Resources" },
  { label: "Architecture", value: "Architecture" },
  { label: "Art and Design", value: "Art and Design" },
  { label: "Biological/Life Sciences", value: "Biological/Life Sciences" },
  { label: "Built Environment", value: "Built Environment" },
  { label: "Business & Administration", value: "Business & Administration" },
  { label: "Communications/Journalism", value: "Communications/Journalism" },
  { label: "Computer Science", value: "Computer Science" },
  { label: "Education", value: "Education" },
  { label: "Engineering", value: "Engineering" },
  { label: "Humanities", value: "Humanities" },
  { label: "Languages/Literature", value: "Languages/Literature" },
  { label: "Law", value: "Law" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Medicine/Health Sciences", value: "Medicine/Health Sciences" },
  { label: "Physical Sciences", value: "Physical Sciences" },
  { label: "Social Sciences", value: "Social Sciences" },
  { label: "Other", value: "Other" },
];

const REASONS_FOR_TAKING_TOEFL = [
  { label: "To enter an undergraduate program", value: "To enter an undergraduate program" },
  { label: "To enter a graduate program", value: "To enter a graduate program" },
  { label: "To enter a postgraduate program", value: "To enter a postgraduate program" },
  { label: "To enter a secondary school", value: "To enter a secondary school" },
  { label: "To enter a 2-year college/community college", value: "To enter a 2-year college/community college" },
  { label: "For employment / work", value: "For employment / work" },
  { label: "For immigration / settling in a country", value: "For immigration / settling in a country" },
  { label: "For professional registration or licensure", value: "For professional registration or licensure" },
  { label: "For scholarship or fellowship program", value: "For scholarship or fellowship program" },
  { label: "Personal reasons / self-evaluation", value: "Personal reasons / self-evaluation" },
  { label: "Other educational purposes", value: "Other educational purposes" },
];

interface RegistrationFormStepProps {
  form: UseFormReturn<TToeflIbtSchema>;
  onSubmit: (data: TToeflIbtSchema) => void;
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
  workshopsData }: RegistrationFormStepProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors } } = form;

  const formData = watch();

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="space-y-8 animate-in fade-in duration-500"
    >
      {/* Section 1: Personal Details */}
      <div className="space-y-6">
        <Stepper step={2}>Personal Details</Stepper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
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

          <Field data-invalid={!!errors.middleName}>
            <FieldLabel>Middle Name</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                aria-invalid={!!errors.middleName}
                {...register("middleName")}
              />
              <FieldError errors={[errors.middleName]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.surnames}>
            <FieldLabel required={!formData.noSurname}>Surname / family name</FieldLabel>
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
                  date >= new Date() || date < new Date("1900-01-01")
                }
                fromYear={1900}
                toYear={new Date().getFullYear()}
                calendarClassName="[--calendar-accent:theme(colors.primary.DEFAULT)]"
                placeholder="Select your date of birth"
                aria-invalid={!!errors.dateOfBirth}
              />
              {formData.dateOfBirth &&
                (() => {
                  const dob = new Date(formData.dateOfBirth);
                  const today = new Date();
                  let age = today.getFullYear() - dob.getFullYear();
                  const m = today.getMonth() - dob.getMonth();
                  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                    age--;
                  }
                  if (age < 16) {
                    return (
                      <p className="mt-2 text-xs text-red-600 font-bold animate-in fade-in slide-in-from-top-1">
                        Candidates must be at least 16 years old.
                      </p>
                    );
                  }
                  return null;
                })()}
              <FieldError errors={[errors.dateOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.birthCity}>
            <FieldLabel required>City of birth</FieldLabel>
            <FieldContent>
              <Input
                placeholder="Enter city of birth"
                aria-invalid={!!errors.birthCity}
                {...register("birthCity")}
              />
              <FieldError errors={[errors.birthCity]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.birthCountry}>
            <FieldLabel required>Country of birth</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="birthCountry"
                placeholder="Search country..."
                value={formData.birthCountry}
                aria-invalid={!!errors.birthCountry}
                onChange={(country) => setValue("birthCountry", country.name)}
              />
              <FieldError errors={[errors.birthCountry]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.gender}>
            <FieldLabel required>Sex</FieldLabel>
            <FieldContent>
              <RadioGroup
                name="gender"
                onValueChange={(val) => setValue("gender", val)}
                value={formData.gender}
                className="grid grid-cols-2 gap-3"
              >
                {["male", "female"].map((opt) => (
                  <Label
                    key={opt}
                    htmlFor={opt}
                    data-invalid={!!errors.gender}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                  >
                    <RadioGroupItem value={opt} id={opt} />
                    {opt}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.gender]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.phoneNumber}>
            <FieldLabel required>Mobile number</FieldLabel>
            <FieldContent>
              <PhoneInput
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(val) => setValue("phoneNumber", val)}
                defaultCountry="AE"
                aria-invalid={!!errors.phoneNumber}
              />
              <FieldError errors={[errors.phoneNumber]} />
              <FieldDescription className="flex items-start gap-2.5 mt-2">
                <Checkbox
                  id="smsConsent"
                  checked={formData.smsConsent}
                  onCheckedChange={(val) =>
                    setValue("smsConsent", val as boolean)
                  }
                  className="mt-0.5"
                />
                <Label htmlFor="smsConsent" className="text-xs font-light leading-normal whitespace-normal text-wrap block">
                  I agree to receive notifications or to be contacted about my test registration<br />
                  to this telephone number via SMS, WhatsApp, etc
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

          <Field data-invalid={!!errors.country}>
            <FieldLabel required>Country of residence</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="country"
                placeholder="Search country..."
                value={formData.country}
                aria-invalid={!!errors.country}
                onChange={(country) =>
                  setValue("country", country.name)
                }
              />
              <FieldError errors={[errors.country]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.streetAddress1}>
            <FieldLabel required>Address Line 1</FieldLabel>
            <FieldContent>
              <Input
                {...register("streetAddress1")}
                placeholder="Street address, building, etc."
                aria-invalid={!!errors.streetAddress1}
              />
              <FieldError errors={[errors.streetAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.streetAddress2}>
            <FieldLabel>Address Line 2</FieldLabel>
            <FieldContent>
              <Input
                {...register("streetAddress2")}
                placeholder="Apartment, suite, unit, etc. (optional)"
                aria-invalid={!!errors.streetAddress2}
              />
              <FieldError errors={[errors.streetAddress2]} />
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

          <Field data-invalid={!!errors.postalCode}>
            <FieldLabel>Postal Code (Zip Code)</FieldLabel>
            <FieldContent>
              <Input
                {...register("postalCode")}
                placeholder="Postal code"
                aria-invalid={!!errors.postalCode}
              />
              <FieldError errors={[errors.postalCode]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.city}>
            <FieldLabel required>Emirate / City</FieldLabel>
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {[
                  { id: "passport", label: "Passport" },
                  { id: "emirates_id", label: "Emirates ID" },
                ].map((opt) => (
                  <Label
                    key={opt.id}
                    htmlFor={opt.id}
                    data-invalid={!!errors.idType}
                    className="whitespace-nowrap flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                  >
                    <RadioGroupItem value={opt.id} id={opt.id} />
                    {opt.label}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.idType]} />
            </FieldContent>
            <FieldDescription>
              Please make sure ,Your present the same identification you use for
              registration on the exam day.
            </FieldDescription>
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
            <FieldLabel required className="whitespace-nowrap">
              Attach a valid copy of Passport / Emirates ID:
            </FieldLabel>
            <FieldContent>
              <div className="flex flex-col gap-2">
                {!formData.idDocument ? (
                  <Input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
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
                          {(
                            (formData.idDocument as File).size /
                            (1024 * 1024)
                          ).toFixed(2)}{" "}
                          MB
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
                  Supported formats: (pdf, png, jpg,  jpeg)
                </p>
              </div>
              <FieldError errors={[errors.idDocument]} />
            </FieldContent>
          </Field>
        </div>
      </div>

      {/* Section 2: Additional Information */}
      <div className="pt-8 border-t border-slate-100 space-y-6">
        <div className="flex items-center gap-2 text-slate-400 mb-4">
          <Globe className="size-5" />
          <h3 className="text-lg font-bold tracking-tight text-slate-800">
            Additional Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Field
            className="md:col-span-2"
            data-invalid={!!errors.takenBefore}
          >
            <FieldLabel required>
              Have you taken the TOEFL iBT Test before?
            </FieldLabel>
            <FieldContent className="mt-2">
              <RadioGroup
                name="takenBefore"
                onValueChange={(val) => {
                  setValue("takenBefore", val);
                  if (val === "No") {
                    setValue("lessThanTwoYears", "");
                    setValue("existingAccount", "");
                  }
                }}
                value={formData.takenBefore}
                className="grid grid-cols-2 gap-3"
              >
                {["Yes", "No"].map((opt) => (
                  <Label
                    key={opt}
                    htmlFor={`taken-${opt}`}
                    data-invalid={!!errors.takenBefore}
                    className={`flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive ${formData.takenBefore === opt ? "border-[#A11D1D] bg-[#A11D1D]/5 ring-1 ring-[#A11D1D]" : ""}`}
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
                className="md:col-span-2"
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
                        className={`flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive ${formData.lessThanTwoYears === opt ? "border-[#A11D1D] bg-[#A11D1D]/5 ring-1 ring-[#A11D1D]" : ""}`}
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
                className="md:col-span-2"
                data-invalid={!!errors.existingAccount}
              >
                <FieldLabel required>
                  Do you have an existing TOEFL account?
                </FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    name="existingAccount"
                    onValueChange={(val) => setValue("existingAccount", val)}
                    value={formData.existingAccount}
                    className="flex flex-col gap-3"
                  >
                    {["Yes", "No", "I forgot my TOEFL account details"].map(
                      (opt) => (
                        <Label
                          key={opt}
                          htmlFor={`acc-${opt}`}
                          data-invalid={!!errors.existingAccount}
                          className={`flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive ${formData.existingAccount === opt ? "border-[#A11D1D] bg-[#A11D1D]/5 ring-1 ring-[#A11D1D]" : ""}`}
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

          <Field data-invalid={!!errors.firstLanguage}>
            <FieldLabel required>What is your first language?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="firstLanguage"
                options={languages}
                placeholder="-Select Language-"
                value={formData.firstLanguage}
                aria-invalid={!!errors.firstLanguage}
                onChange={(val) => {
                  setValue("firstLanguage", val);
                  if (val !== "Other") setValue("firstLanguageOther", "");
                }}
              />
              {formData.firstLanguage === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify your language"
                    value={formData.firstLanguageOther ?? ""}
                    onChange={(e) => setValue("firstLanguageOther", e.target.value)}
                    className="border-primary/40 focus:border-primary"
                  />
                </div>
              )}
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

          <Field data-invalid={!!errors.nextLevelOfStudy}>
            <FieldLabel required>What is your next level of study?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="nextLevelOfStudy"
                options={[
                  { label: "Secondary school (high school)", value: "Secondary school (high school)" },
                  { label: "2 year college/community college", value: "2 year college/community college" },
                  { label: "Undergraduate program", value: "Undergraduate program" },
                  { label: "Graduate/postgraduate program", value: "Graduate/postgraduate program" },
                  { label: "Not applicable", value: "Not applicable" },
                  { label: "Other", value: "Other" },
                ]}
                placeholder="Select Level"
                value={formData.nextLevelOfStudy}
                aria-invalid={!!errors.nextLevelOfStudy}
                onChange={(val) => {
                  setValue("nextLevelOfStudy", val, { shouldValidate: true });
                  if (val !== "Other") setValue("nextLevelOfStudyOther", "");
                }}
              />
              {formData.nextLevelOfStudy === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify next level of study"
                    value={formData.nextLevelOfStudyOther ?? ""}
                    onChange={(e) => setValue("nextLevelOfStudyOther", e.target.value, { shouldValidate: true })}
                    className="border-primary/40 focus:border-primary"
                  />
                  <FieldError errors={[errors.nextLevelOfStudyOther]} />
                </div>
              )}
              <FieldError errors={[errors.nextLevelOfStudy]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.desiredFieldOfStudy}>
            <FieldLabel required>What is your desired field of study?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="desiredFieldOfStudy"
                options={DESIRED_FIELDS_OF_STUDY}
                placeholder="Select Field"
                value={formData.desiredFieldOfStudy}
                aria-invalid={!!errors.desiredFieldOfStudy}
                onChange={(val) => {
                  setValue("desiredFieldOfStudy", val, { shouldValidate: true });
                  if (val !== "Other") setValue("desiredFieldOfStudyOther", "");
                }}
              />
              {formData.desiredFieldOfStudy === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify your desired field of study"
                    value={formData.desiredFieldOfStudyOther ?? ""}
                    onChange={(e) => setValue("desiredFieldOfStudyOther", e.target.value, { shouldValidate: true })}
                    className="border-primary/40 focus:border-primary"
                  />
                  <FieldError errors={[errors.desiredFieldOfStudyOther]} />
                </div>
              )}
              <FieldError errors={[errors.desiredFieldOfStudy]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.reasonsForTakingToefl}>
            <FieldLabel required>What is your reason for taking the TOEFL test?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="reasonsForTakingToefl"
                options={REASONS_FOR_TAKING_TOEFL}
                placeholder="Select Reason"
                value={formData.reasonsForTakingToefl}
                aria-invalid={!!errors.reasonsForTakingToefl}
                onChange={(val) => {
                  setValue("reasonsForTakingToefl", val, { shouldValidate: true });
                }}
              />
              <FieldError errors={[errors.reasonsForTakingToefl]} />
            </FieldContent>
          </Field>
          <Field data-invalid={!!errors.destinationCountry}>
            <FieldLabel required className="whitespace-nowrap">In what country or countries do you hope to study, work or settle?</FieldLabel>
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

          <Field className="md:col-span-2" data-invalid={!!errors.intendedEnrollmentDate}>
            <FieldLabel required>Indicate your intended date of enrollment.</FieldLabel>
            <FieldContent>
              <MonthYearPicker
                value={formData.intendedEnrollmentDate}
                onChange={(date) => setValue("intendedEnrollmentDate", date, { shouldValidate: true })}
                error={!!errors.intendedEnrollmentDate}
              />
              <FieldError errors={[errors.intendedEnrollmentDate]} />
            </FieldContent>
          </Field>
        </div>
      </div>

      {/* Add-on Services Section */}
      <AddonServicesSection
        coursesData={coursesData}
        workshopsData={workshopsData}
        selectedCourse={formData.selectedCourse}
        selectedWorkshop={formData.selectedWorkshop}
        onCourseChange={(val) => setValue("selectedCourse", val)}
        onWorkshopChange={(val) => setValue("selectedWorkshop", val)}
        courseError={!!errors.selectedCourse}
        workshopError={!!errors.selectedWorkshop}
        description={
          "Save up to 25% when you book your exam and register for the course with TEPTH and pay in-person or online on our website."
        }
      />

      {/* Marketing Preferences */}
      <MarketingPreferencesSection
        value={formData.marketingPreference}
        onChange={(val) => setValue("marketingPreference", val as any)}
        error={errors.marketingPreference}
      />

      {/* Form Actions */}
      <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
        <Button type="button" onClick={onBack} className="">
          Back
        </Button>
        <Button type="submit" className="">
          Next
        </Button>
      </div>
    </form>
  );
}

function MonthYearPicker({ value, onChange, error }: { value?: Date; onChange: (date: Date) => void; error?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [pickerYear, setPickerYear] = React.useState(value?.getFullYear() ?? new Date().getFullYear());

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-left font-normal rounded-md border border-slate-200 px-3 py-2 text-sm transition-all outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 shadow-none hover:shadow-none hover:bg-transparent aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
            !value && "text-muted-foreground"
          )}
          aria-invalid={error}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
          {value ? format(value, "MMMM yyyy") : <span className="text-slate-400">Select month & year</span>}
        </Button>
      } />
      <PopoverContent className="w-64 p-3" align="start">
        <div className="flex items-center justify-between pt-1 pb-4">
          <Button variant="outline" className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100" onClick={() => setPickerYear(y => y - 1)}>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium">{pickerYear}</div>
          <Button variant="outline" className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100" onClick={() => setPickerYear(y => y + 1)}>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }, (_, i) => {
            const date = new Date(pickerYear, i, 1);
            const isSelected = value?.getMonth() === i && value?.getFullYear() === pickerYear;
            return (
              <Button
                key={i}
                variant={isSelected ? "default" : "ghost"}
                className="h-9 w-full text-sm font-normal"
                onClick={() => {
                  onChange(date);
                  setOpen(false);
                }}
              >
                {format(date, "MMM")}
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
