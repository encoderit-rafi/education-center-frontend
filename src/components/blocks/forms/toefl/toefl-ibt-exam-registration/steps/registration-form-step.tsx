"use client";

import React from "react";
import { useTranslations } from "next-intl";
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
import { MultiCountryDropdown } from "@/components/ui/multi-country-dropdown";
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
  { label: "Business & Management", value: "Business & Management" },
  { label: "Chemistry", value: "Chemistry" },
  { label: "Communications and Media", value: "Communications and Media" },
  { label: "Computing & Information Technology", value: "Computing & Information Technology" },
  { label: "Creative Arts", value: "Creative Arts" },
  { label: "Cultural Studies", value: "Cultural Studies" },
  { label: "Dental Studies", value: "Dental Studies" },
  { label: "Economics", value: "Economics" },
  { label: "Education & Training", value: "Education & Training" },
  { label: "Employment Skills", value: "Employment Skills" },
  { label: "English Language/Literature", value: "English Language/Literature" },
  { label: "Engineering & Technology", value: "Engineering & Technology" },
  { label: "Environmental Studies", value: "Environmental Studies" },
  { label: "Fashion and Design", value: "Fashion and Design" },
  { label: "Food & Hospitality", value: "Food & Hospitality" },
  { label: "Foreign Language/Literature", value: "Foreign Language/Literature" },
  { label: "Geography", value: "Geography" },
  { label: "Health Science/Studies", value: "Health Science/Studies" },
  { label: "Humanities & Social Sciences", value: "Humanities & Social Sciences" },
  { label: "Journalism", value: "Journalism" },
  { label: "Language & Literature", value: "Language & Literature" },
  { label: "Law", value: "Law" },
  { label: "Legal Studies", value: "Legal Studies" },
  { label: "Liberal Arts/General Studies", value: "Liberal Arts/General Studies" },
  { label: "Marketing", value: "Marketing" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Medicine", value: "Medicine" },
  { label: "Military Technologies", value: "Military Technologies" },
  { label: "Multi/Interdisciplinary Studies", value: "Multi/Interdisciplinary Studies" },
  { label: "Music", value: "Music" },
  { label: "Nursing", value: "Nursing" },
  { label: "Personal Services", value: "Personal Services" },
  { label: "Pharmacy", value: "Pharmacy" },
  { label: "Philosophy and Religion", value: "Philosophy and Religion" },
  { label: "Physical Sciences", value: "Physical Sciences" },
  { label: "Physics", value: "Physics" },
  { label: "Political Science", value: "Political Science" },
  { label: "Psychology", value: "Psychology" },
  { label: "Public Administration", value: "Public Administration" },
  { label: "Rehabilitation", value: "Rehabilitation" },
  { label: "Sciences", value: "Sciences" },
  { label: "Social Sciences/History", value: "Social Sciences/History" },
  { label: "Social Work", value: "Social Work" },
  { label: "Sport, Leisure & Recreation", value: "Sport, Leisure & Recreation" },
  { label: "Surveying", value: "Surveying" },
  { label: "Technology", value: "Technology" },
  { label: "Theological Studies", value: "Theological Studies" },
  { label: "Travel and Tourism", value: "Travel and Tourism" },
  { label: "Veterinary Studies & Animal Care", value: "Veterinary Studies & Animal Care" },
  { label: "Visual and Performing Arts Care", value: "Visual and Performing Arts Care" },
  { label: "Welfare & Community Services", value: "Welfare & Community Services" },
  { label: "Undecided", value: "Undecided" },
  { label: "Not applicable", value: "Not applicable" },
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
  const t = useTranslations("FormsShared.FormFields");
  const tYesNo = useTranslations("FormsShared.GlobalReviewStep");
  const tDate = useTranslations("FormsShared.DateStep");
  const tToefl = useTranslations("FormsShared.TOEFL");
  const tAddon = useTranslations("FormsShared.AddonServices");

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="space-y-8 animate-in fade-in duration-500"
    >
      {/* Section 1: Personal Details */}
      <div className="space-y-6">
        <Stepper step={2}>{t("personalDetails")}</Stepper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <Field data-invalid={!!errors.givenNames}>
            <FieldLabel required>{t("firstGivenNames")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("asPerPassport")}
                aria-invalid={!!errors.givenNames}
                {...register("givenNames")}
              />
              <FieldError errors={[errors.givenNames]} />
              <FieldDescription>
                {t("nameMatchDesc")}
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.middleName}>
            <FieldLabel>{t("middleNameOptional")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("asPerPassport")}
                aria-invalid={!!errors.middleName}
                {...register("middleName")}
              />
              <FieldError errors={[errors.middleName]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.surnames}>
            <FieldLabel required={!formData.noSurname}>{t("surname")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("asPerPassport")}
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
                  {t("noSurname")}
                </Label>
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.dateOfBirth}>
            <FieldLabel required>{t("dateOfBirth")}</FieldLabel>
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
                placeholder={t("selectDateOfBirth")}
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
                        {t("minAge16")}
                      </p>
                    );
                  }
                  return null;
                })()}
              <FieldError errors={[errors.dateOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.birthCity}>
            <FieldLabel required>{t("cityOfBirth")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("enterBirthCity")}
                aria-invalid={!!errors.birthCity}
                {...register("birthCity")}
              />
              <FieldError errors={[errors.birthCity]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.birthCountry}>
            <FieldLabel required>{t("countryOfBirth")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="birthCountry"
                placeholder={t("searchCountry")}
                value={formData.birthCountry}
                aria-invalid={!!errors.birthCountry}
                onChange={(country) => setValue("birthCountry", country.name)}
              />
              <FieldError errors={[errors.birthCountry]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.gender}>
            <FieldLabel required>{t("sex")}</FieldLabel>
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
                    {opt === "male" ? t("male") : t("female")}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.gender]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.phoneNumber}>
            <FieldLabel required>{t("mobileNumber")}</FieldLabel>
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
                  {tToefl("smsConsent")}
                </Label>
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field data-invalid={!!errors.email}>
            <FieldLabel required>{t("email")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("exampleEmail")}
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              <FieldError errors={[errors.email]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.confirmEmail}>
            <FieldLabel required>{t("confirmEmail")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("confirmEmailPlaceholder")}
                onPaste={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}
                autoComplete="off"
                data-lpignore="true"
                aria-invalid={!!errors.confirmEmail}
                {...register("confirmEmail")}
              />
              <FieldError errors={[errors.confirmEmail]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.country}>
            <FieldLabel required>{t("countryOfResidence")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="country"
                placeholder={t("searchCountry")}
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
            <FieldLabel required>{t("addressLine1")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("streetAddress1")}
                placeholder={t("streetAddress")}
                aria-invalid={!!errors.streetAddress1}
              />
              <FieldError errors={[errors.streetAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.streetAddress2}>
            <FieldLabel>{t("addressLine2")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("streetAddress2")}
                placeholder={t("apartmentSuite")}
                aria-invalid={!!errors.streetAddress2}
              />
              <FieldError errors={[errors.streetAddress2]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.poBox}>
            <FieldLabel>{t("poBox")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("poBox")}
                placeholder={t("poBox")}
                aria-invalid={!!errors.poBox}
              />
              <FieldError errors={[errors.poBox]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalCode}>
            <FieldLabel>{t("postalCode")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("postalCode")}
                placeholder={t("postalCodePlaceholder")}
                aria-invalid={!!errors.postalCode}
              />
              <FieldError errors={[errors.postalCode]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.city}>
            <FieldLabel required>{t("emirateCity")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("city")}
                placeholder={t("enteringCity")}
                aria-invalid={!!errors.city}
              />
              <FieldError errors={[errors.city]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idType}>
            <FieldLabel required>{t("identificationType")}</FieldLabel>
            <FieldContent>
              <RadioGroup
                name="idType"
                onValueChange={(val) => setValue("idType", val)}
                value={formData.idType}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {[
                  { id: "passport", label: t("idTypePassport") },
                  { id: "emirates_id", label: t("idTypeEmiratesId") },
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
              {t("sameIdOnExamDay")}
            </FieldDescription>
          </Field>

          <Field data-invalid={!!errors.idNumber}>
            <FieldLabel required>
              {formData.idType === "emirates_id"
                ? t("idNumber")
                : t("passportNumber")}
            </FieldLabel>
            <FieldContent>
              <Input
                {...register("idNumber")}
                aria-invalid={!!errors.idNumber}
                placeholder={formData.idType === "emirates_id" ? t("enterIdNumber") : t("enterPassportNumber")}
              />
              <FieldError errors={[errors.idNumber]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idExpiryDate}>
            <FieldLabel required>
              {formData.idType === "emirates_id"
                ? t("idExpiryDate")
                : t("passportExpiryDate")}
            </FieldLabel>
            <FieldContent>
              <DatePicker
                name="idExpiryDate"
                value={formData.idExpiryDate}
                onChange={(date) => setValue("idExpiryDate", date as Date)}
                aria-invalid={!!errors.idExpiryDate}
                disabled={(date) => date <= new Date()}
                placeholder={formData.idType === "emirates_id" ? t("selectIdExpiryDate") : t("selectPassportExpiryDate")}
              />
              <FieldError errors={[errors.idExpiryDate]} />
            </FieldContent>
          </Field>
          <Field data-invalid={!!errors.nationality}>
            <FieldLabel required>{t("nationality")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="nationality"
                placeholder={t("searchCountry")}
                value={formData.nationality}
                aria-invalid={!!errors.nationality}
                onChange={(country) => setValue("nationality", country.name)}
              />
              <FieldError errors={[errors.nationality]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idDocument}>
            <FieldLabel required>
              {t("attachIdCopy")}
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
                  {t("supportedFormats")}
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
            {t("additionalInformation")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Field
            className="md:col-span-2"
            data-invalid={!!errors.takenBefore}
          >
            <FieldLabel required>
              {tToefl("takenBefore")}
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
                    {opt === "Yes" ? tYesNo("yes") : tYesNo("no")}
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
                <FieldLabel required>{tToefl("lessThanTwoYears")}</FieldLabel>
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
                        {opt === "Yes" ? tYesNo("yes") : opt === "No" ? tYesNo("no") : tToefl("doNotKnow")}
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
                  {tToefl("existingAccount")}
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
                          {opt === "Yes" ? tYesNo("yes") : opt === "No" ? tYesNo("no") : tToefl("forgotAccountDetails")}
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
            <FieldLabel required>{tToefl("firstLanguage")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="firstLanguage"
                options={languages}
                placeholder={tToefl("selectLanguage")}
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
                    placeholder={tToefl("specifyLanguage")}
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
              {tToefl("yearsStudyingEnglish")}
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
                placeholder={tToefl("selectDuration")}
                value={formData.yearsStudyingEnglish}
                aria-invalid={!!errors.yearsStudyingEnglish}
                onChange={(val) => setValue("yearsStudyingEnglish", val)}
              />
              <FieldError errors={[errors.yearsStudyingEnglish]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.nextLevelOfStudy}>
            <FieldLabel required>{tToefl("nextLevelOfStudy")}</FieldLabel>
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
                placeholder={tToefl("selectLevel")}
                value={formData.nextLevelOfStudy}
                aria-invalid={!!errors.nextLevelOfStudy}
                onChange={(val) => {
                  setValue("nextLevelOfStudy", val, { shouldValidate: true });
                }}
              />
              <FieldError errors={[errors.nextLevelOfStudy]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.desiredFieldOfStudy}>
            <FieldLabel required>{tToefl("desiredFieldOfStudy")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="desiredFieldOfStudy"
                options={DESIRED_FIELDS_OF_STUDY}
                placeholder={tToefl("selectField")}
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
                    placeholder={tToefl("specifyFieldOfStudy")}
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
            <FieldLabel required>{tToefl("reasonForTakingTest")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="reasonsForTakingToefl"
                options={REASONS_FOR_TAKING_TOEFL}
                placeholder={tToefl("selectReason")}
                value={formData.reasonsForTakingToefl}
                aria-invalid={!!errors.reasonsForTakingToefl}
                onChange={(val) => {
                  setValue("reasonsForTakingToefl", val, { shouldValidate: true });
                }}
              />
              <FieldError errors={[errors.reasonsForTakingToefl]} />
            </FieldContent>
          </Field>


          <Field data-invalid={!!errors.intendedEnrollmentDate}>
            <FieldLabel required>{tToefl("intendedEnrollmentDate")}</FieldLabel>
            <FieldContent>
              <MonthYearPicker
                value={formData.intendedEnrollmentDate}
                onChange={(date) => setValue("intendedEnrollmentDate", date, { shouldValidate: true })}
                error={!!errors.intendedEnrollmentDate}
              />
              <FieldError errors={[errors.intendedEnrollmentDate]} />
            </FieldContent>
          </Field>
          <Field data-invalid={!!errors.destinationCountry}>
            <FieldLabel required>{tToefl("destinationCountry")}</FieldLabel>
            <FieldContent>
              <MultiCountryDropdown
                placeholder={tToefl("selectCountries")}
                value={formData.destinationCountry ? formData.destinationCountry.split(", ") : []}
                onChange={(countries) =>
                  setValue("destinationCountry", countries.join(", "), { shouldValidate: true })
                }
              />
              <FieldError errors={[errors.destinationCountry]} />
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
        description={tAddon("saveUpTo")}
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
          {tDate("back")}
        </Button>
        <Button type="submit" className="">
          {tDate("next")}
        </Button>
      </div>
    </form>
  );
}

function MonthYearPicker({ value, onChange, error }: { value?: Date; onChange: (date: Date) => void; error?: boolean }) {
  const tToefl = useTranslations("FormsShared.TOEFL");
  const [open, setOpen] = React.useState(false);
  const [pickerYear, setPickerYear] = React.useState(value?.getFullYear() ?? new Date().getFullYear());

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-indexed

  const isPrevYearDisabled = pickerYear <= currentYear;

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
          {value ? format(value, "MMMM yyyy") : <span className="text-slate-400">{tToefl("selectMonthYear")}</span>}
        </Button>
      } />
      <PopoverContent className="w-64 p-3" align="start">
        <div className="flex items-center justify-between pt-1 pb-4">
          <Button
            variant="outline"
            className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            onClick={() => setPickerYear(y => y - 1)}
            disabled={isPrevYearDisabled}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium">{pickerYear}</div>
          <Button
            variant="outline"
            className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            onClick={() => setPickerYear(y => y + 1)}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }, (_, i) => {
            const date = new Date(pickerYear, i, 1);
            const isSelected = value?.getMonth() === i && value?.getFullYear() === pickerYear;
            const isMonthDisabled = pickerYear < currentYear || (pickerYear === currentYear && i < currentMonth);

            return (
              <Button
                key={i}
                variant={isSelected ? "default" : "ghost"}
                className="h-9 w-full text-sm font-normal"
                disabled={isMonthDisabled}
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
