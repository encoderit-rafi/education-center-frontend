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
import { TPteAcademicSchema } from "../_type";
import { PriceDisplay } from "@/components/ui/price-display";

interface RegistrationFormStepProps {
  form: UseFormReturn<TPteAcademicSchema>;
  onSubmit: (data: TPteAcademicSchema) => void;
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
      {/* Section 1: Personal Details */}
      <div className="space-y-6">
        <Stepper step={3}>Personal Details</Stepper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Field data-invalid={!!errors.givenNames}>
            <FieldLabel required>First / given names</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                aria-invalid={!!errors.givenNames}
                {...register("givenNames")}
                disabled={formData.noGivenNames}
              />
              <FieldError errors={[errors.givenNames]} />
              <FieldDescription className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="noGivenNames"
                  checked={formData.noGivenNames}
                  onCheckedChange={(val) => setValue("noGivenNames", val as boolean)}
                />
                <Label htmlFor="noGivenNames" className="text-xs font-light">
                  I don't have a given name
                </Label>
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
              <FieldDescription className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="noSurname"
                  checked={formData.noSurname}
                  onCheckedChange={(val) => setValue("noSurname", val as boolean)}
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
              {formData.dateOfBirth && (() => {
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

          <Field data-invalid={!!errors.gender}>
            <FieldLabel required>Sex</FieldLabel>
            <FieldContent>
              <RadioGroup
                onValueChange={(val) => setValue("gender", val as any)}
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

          <Field data-invalid={!!errors.placeOfBirth}>
            <FieldLabel required>Town / City of birth</FieldLabel>
            <FieldContent>
              <Input placeholder="As per passport" {...register("placeOfBirth")} />
              <FieldError errors={[errors.placeOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.countryOfBirth}>
            <FieldLabel required>Country of birth</FieldLabel>
            <FieldContent>
              <CountryDropdown
                placeholder="Select country"
                value={formData.countryOfBirth}
                onChange={(c) => setValue("countryOfBirth", c.name)}
              />
              <FieldError errors={[errors.countryOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.emailUsername}>
            <FieldLabel required>Email address</FieldLabel>
            <FieldContent>
              <Input placeholder="example@email.com" {...register("emailUsername")} />
              <FieldError errors={[errors.emailUsername]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.confirmEmail}>
            <FieldLabel required>Confirm email address</FieldLabel>
            <FieldContent>
              <Input
                placeholder="Confirm your email"
                onPaste={(e) => e.preventDefault()}
                {...register("confirmEmail")}
              />
              <FieldError errors={[errors.confirmEmail]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.mobileNumber}>
            <FieldLabel required>Mobile number</FieldLabel>
            <FieldContent>
              <PhoneInput
                value={formData.mobileNumber}
                onChange={(val) => setValue("mobileNumber", val)}
                defaultCountry="AE"
              />
              <FieldError errors={[errors.mobileNumber]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.countryOfResidence}>
            <FieldLabel required>Country of residence</FieldLabel>
            <FieldContent>
              <CountryDropdown
                placeholder="Select country"
                value={formData.countryOfResidence}
                onChange={(c) => setValue("countryOfResidence", c.name)}
              />
              <FieldError errors={[errors.countryOfResidence]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress1}>
            <FieldLabel required>Address Line 1</FieldLabel>
            <FieldContent>
              <Input placeholder="Street address, building, etc." {...register("postalAddress1")} />
              <FieldError errors={[errors.postalAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress2}>
            <FieldLabel>Address Line 2</FieldLabel>
            <FieldContent>
              <Input placeholder="Apartment, suite, etc. (optional)" {...register("postalAddress2")} />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel>P.O. Box number</FieldLabel>
            <FieldContent>
              <Input placeholder="P.O. Box" {...register("poBox")} />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel>Postal Code (Zip Code)</FieldLabel>
            <FieldContent>
              <Input placeholder="Postal code" {...register("postcode")} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.city}>
            <FieldLabel required>Emirate / City</FieldLabel>
            <FieldContent>
              <Input placeholder="Enter your city" {...register("city")} />
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

          <Field data-invalid={!!errors.countryOfCitizenship}>
            <FieldLabel required>Country of nationality</FieldLabel>
            <FieldContent>
              <CountryDropdown
                placeholder="Select country"
                value={formData.countryOfCitizenship}
                onChange={(c) => setValue("countryOfCitizenship", c.name)}
              />
              <FieldError errors={[errors.countryOfCitizenship]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.passportCopy}>
            <FieldLabel required>
              Attach a valid copy of Passport / ID:
            </FieldLabel>
            <FieldContent>
              <div className="flex flex-col gap-2">
                {!formData.passportCopy ? (
                  <Input
                    type="file"
                    accept=".pdf,.docx,.doc,.png,.jpg,.jpeg"
                    className="h-auto py-2 px-3 border-2 border-dashed border-slate-200 hover:border-primary/50 transition-colors cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setValue("passportCopy", file);
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
                          {(formData.passportCopy as File).name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {((formData.passportCopy as File).size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setValue("passportCopy", undefined)}
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
              <FieldError errors={[errors.passportCopy]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.homeLanguage}>
            <FieldLabel required>What is your first language?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={languages}
                placeholder="-Select Language-"
                value={formData.homeLanguage}
                onChange={(val) => setValue("homeLanguage", val)}
              />
              <FieldError errors={[errors.homeLanguage]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.planningCountry}>
            <FieldLabel required>Destination country?</FieldLabel>
            <FieldContent>
              <CountryDropdown
                placeholder="-Select Country-"
                value={formData.planningCountry}
                onChange={(c) => setValue("planningCountry", c.name)}
              />
              <FieldError errors={[errors.planningCountry]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.currentSituation}>
            <FieldLabel required>What is your current situation?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  { label: "Employed Full-time", value: "Employed Full-time" },
                  { label: "Employed Part-time", value: "Employed Part-time" },
                  { label: "Self-employed", value: "Self-employed" },
                  { label: "Student", value: "Student" },
                  { label: "Unemployed", value: "Unemployed" }
                ]}
                placeholder="-Select Level-"
                value={formData.currentSituation}
                onChange={(val) => setValue("currentSituation", val)}
              />
              <FieldError errors={[errors.currentSituation]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.occupationSector}>
            <FieldLabel required>What is your occupation sector?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  { label: "Accounting/Finance", value: "Accounting" },
                  { label: "Education", value: "Education" },
                  { label: "Banking and Finance", value: "Banking" },
                  { label: "Health and Social Services", value: "Healthcare" },
                  { label: "IT/Communications", value: "IT" },
                  { label: "Other", value: "Other" }
                ]}
                placeholder="-Select Sector-"
                value={formData.occupationSector}
                onChange={(val) => setValue("occupationSector", val)}
              />
              <FieldError errors={[errors.occupationSector]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.reasonForTaking} className="md:col-span-2">
            <FieldLabel required>Why are you taking PTE Academic?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  { label: "Study", value: "study" },
                  { label: "Nursing registration or licensing", value: "nursing" },
                  { label: "Australia - MATES visa (India only)", value: "au_mates" },
                  { label: "Australia - Post Study Work (485) visa", value: "au_485" },
                  { label: "Australia - Temporary Work visa", value: "au_temp_work" },
                  { label: "New Zealand - Temporary Work visa", value: "nz_temp_work" },
                  { label: "Skilled migration / Permanent Residency", value: "skilled_migration" },
                  { label: "Spouse / Family visa", value: "family_visa" },
                  { label: "Working Holiday visa", value: "working_holiday" },
                  { label: "Other - specify below", value: "other" }
                ]}
                placeholder="Select one..."
                value={formData.reasonForTaking}
                onChange={(val) => setValue("reasonForTaking", val)}
              />
              <FieldError errors={[errors.reasonForTaking]} />
            </FieldContent>
          </Field>

          {formData.reasonForTaking === "study" && (
            <Field data-invalid={!!errors.studyLevel} className="md:col-span-2 animate-in fade-in slide-in-from-top-2">
              <FieldLabel required>What level of education have you completed?</FieldLabel>
              <FieldContent>
                <SearchableDropdown
                  options={[
                    { label: "Secondary (up to 16 years)", value: "undergraduate" },
                    { label: "Secondary (16-19 years)", value: "postgraduate" },
                    { label: "Degree (or equivalent)", value: "degree" },
                    { label: "Post-graduate", value: "post_graduate" }
                  ]}
                  placeholder="-Select Level-"
                  value={formData.studyLevel}
                  onChange={(val) => setValue("studyLevel", val)}
                />
                <FieldError errors={[errors.studyLevel]} />
              </FieldContent>
            </Field>
          )}

          <Field data-invalid={!!errors.referralSource}>
            <FieldLabel required>How did you hear about us?</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  { label: "Social Media", value: "Social Media" },
                  { label: "Search Engine", value: "Search Engine" },
                  { label: "Friend/Family", value: "Referral" },
                  { label: "Other", value: "Other" }
                ]}
                placeholder="-Select Source-"
                value={formData.referralSource}
                onChange={(val) => setValue("referralSource", val)}
              />
              <FieldError errors={[errors.referralSource]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.takenBefore}>
            <FieldLabel required>Have you taken PTE Academic before?</FieldLabel>
            <FieldContent className="mt-2">
              <RadioGroup
                className="grid grid-cols-2 gap-3"
                value={formData.takenBefore}
                onValueChange={(val) => setValue("takenBefore", val as any)}
              >
                {["yes", "no"].map((opt) => (
                  <Label
                    key={opt}
                    htmlFor={`taken-${opt}`}
                    data-invalid={!!errors.takenBefore}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                  >
                    <RadioGroupItem value={opt} id={`taken-${opt}`} />
                    {opt}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.takenBefore]} />
            </FieldContent>
          </Field>

          {formData.takenBefore === "yes" && (
            <>
              <Field data-invalid={!!errors.takenWithinTwoYears}>
                <FieldLabel required>Was it less than 2 years?</FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    className="grid grid-cols-2 gap-3"
                    value={formData.takenWithinTwoYears}
                    onValueChange={(val) => setValue("takenWithinTwoYears", val as any)}
                  >
                    {["yes", "no"].map((opt) => (
                      <Label
                        key={opt}
                        htmlFor={`recent-${opt}`}
                        data-invalid={!!errors.takenWithinTwoYears}
                        className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                      >
                        <RadioGroupItem value={opt} id={`recent-${opt}`} />
                        {opt}
                      </Label>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.takenWithinTwoYears]} />
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.hasExistingAccount}>
                <FieldLabel required>Do you have a Pearson account?</FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    className="grid grid-cols-2 gap-3"
                    value={formData.hasExistingAccount}
                    onValueChange={(val) => setValue("hasExistingAccount", val as any)}
                  >
                    {["yes", "no"].map((opt) => (
                      <Label
                        key={opt}
                        htmlFor={`account-${opt}`}
                        data-invalid={!!errors.hasExistingAccount}
                        className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                      >
                        <RadioGroupItem value={opt} id={`account-${opt}`} />
                        {opt}
                      </Label>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.hasExistingAccount]} />
                </FieldContent>
              </Field>
            </>
          )}
        </div>
      </div>

      {/* Section 5: Add-on Services */}
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
                options={[
                  { label: "None", value: "" },
                  ...Object.values(coursesData).map((c: any) => ({
                    label: c.name,
                    description: (
                      <PriceDisplay amount={c.price} minimumFractionDigits={0} maximumFractionDigits={0} />
                    ),
                    value: c.id,
                  })),
                ]}
                placeholder="Select a course"
                value={formData.selectedCourse}
                onChange={(val) => setValue("selectedCourse", val)}
              />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel>Workshops</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  { label: "None", value: "" },
                  ...Object.values(workshopsData).map((w: any) => ({
                    label: w.name,
                    description: (
                      <PriceDisplay amount={w.price} minimumFractionDigits={0} maximumFractionDigits={0} />
                    ),
                    value: w.id,
                  })),
                ]}
                placeholder="Select a workshop"
                value={formData.selectedWorkshop}
                onChange={(val) => setValue("selectedWorkshop", val)}
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
                  label: "I am happy to receive updates about products, services and events organized by TEPTH.",
                },
                {
                  id: "third_party",
                  label: "I am happy to receive information from TEPTH and selected third parties.",
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
                  className="flex items-center space-x-3 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive shadow-sm"
                >
                  <RadioGroupItem value={opt.id} id={`mkt-${opt.id}`} />
                  <span className="text-sm text-slate-700 font-bold">{opt.label}</span>
                </Label>
              ))}
            </RadioGroup>
            <FieldError errors={[errors.marketingPreference]} />
          </FieldContent>
        </Field>
      </div>

      <div className="flex justify-between pt-12 border-t border-slate-100 mt-12">
        <Button
          type="button"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
