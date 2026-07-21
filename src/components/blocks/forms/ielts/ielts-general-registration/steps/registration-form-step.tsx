"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { Save, User, Globe, BookOpen } from "lucide-react";
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
  FieldLabel
} from "@/components/ui/field";
import { TIeltsGeneralSchema } from "../_type";
import { AED } from "@/components/ui/aed";
import { PriceDisplay } from "@/components/ui/price-display";
import { Badge } from "@/components/ui/badge";
import { AddonServicesSection } from "@/components/blocks/forms/shared/addon-services-section";
import { MarketingPreferencesSection } from "@/components/blocks/forms/shared/marketing-preferences-section";

interface RegistrationFormStepProps {
  form: UseFormReturn<TIeltsGeneralSchema>;
  onSubmit: (data: TIeltsGeneralSchema) => void;
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
  const t = useTranslations("FormsShared.FormFields");
  const tIelts = useTranslations("FormsShared.IELTS");
  const tYesNo = useTranslations("FormsShared.GlobalReviewStep");
  const tDate = useTranslations("FormsShared.DateStep");
  const tAddon = useTranslations("FormsShared.AddonServices");
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

          <Field data-invalid={!!errors.sex}>
            <FieldLabel required>{t("sex")}</FieldLabel>
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
                    {tYesNo(opt)}
                  </Label>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.sex]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.mobileNumber}>
            <FieldLabel required>{t("mobileNumber")}</FieldLabel>
            <FieldContent>
              <PhoneInput
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={(val) => setValue("mobileNumber", val)}
                defaultCountry="AE"
                aria-invalid={!!errors.mobileNumber}
              />
              <FieldError errors={[errors.mobileNumber]} />
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
                  {t("smsConsent")}
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

          <Field data-invalid={!!errors.residenceCountry}>
            <FieldLabel required>{t("countryOfResidence")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="residenceCountry"
                placeholder={t("searchCountry")}
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
            <FieldLabel required>{t("addressLine1")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("postalAddress1")}
                placeholder={t("streetAddress")}
                aria-invalid={!!errors.postalAddress1}
              />
              <FieldError errors={[errors.postalAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress2}>
            <FieldLabel>{t("addressLine2")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("postalAddress2")}
                placeholder={t("apartmentSuite")}
                aria-invalid={!!errors.postalAddress2}
              />
              <FieldError errors={[errors.postalAddress2]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.poBox}>
            <FieldLabel>{t("poBox")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("poBox")}
                placeholder={t("enterPoBox")}
                aria-invalid={!!errors.poBox}
              />
              <FieldError errors={[errors.poBox]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postcode}>
            <FieldLabel>{t("postalCode")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("postcode")}
                placeholder={t("postalCodePlaceholder")}
                aria-invalid={!!errors.postcode}
              />
              <FieldError errors={[errors.postcode]} />
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
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
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
                placeholder={formData.idType === "emirates_id" ? tIelts("enterIdNumber") : tIelts("enterPassportNumber")}
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
                placeholder={formData.idType === "emirates_id" ? tIelts("selectIdExpiry") : tIelts("selectPassportExpiry")}
              />
              <FieldError errors={[errors.idExpiryDate]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.issuingAuthority}>
            <FieldLabel required>{t("issuingAuthority")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("issuingAuthority")}
                aria-invalid={!!errors.issuingAuthority}
                placeholder={t("enterIssuingAuthority")}
              />
              <FieldError errors={[errors.issuingAuthority]} />
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
                        <span className="text-xs font-bold text-slate-700 truncate max-w-50">
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

      {/* Additional Info Section */}
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
              {tIelts("haveYouTakenBefore")}
            </FieldLabel>
            <FieldContent className="mt-2">
              <RadioGroup
                name="takenBefore"
                onValueChange={(val) => setValue("takenBefore", val)}
                value={formData.takenBefore}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { label: tYesNo("yes"), value: "Yes" },
                  { label: tYesNo("no"), value: "No" },
                ].map((opt) => (
                  <Label
                    key={opt.value}
                    htmlFor={`taken-${opt.value}`}
                    data-invalid={!!errors.takenBefore}
                    className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                  >
                    <RadioGroupItem value={opt.value} id={`taken-${opt.value}`} />
                    {opt.label}
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
                <FieldLabel required>{tIelts("wasItLessThan2Years")}</FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    name="lessThanTwoYears"
                    onValueChange={(val) => setValue("lessThanTwoYears", val)}
                    value={formData.lessThanTwoYears}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3"
                  >
                    {[
                      { label: tYesNo("yes"), value: "Yes" },
                      { label: tYesNo("no"), value: "No" },
                      { label: tYesNo("iDoNotKnow"), value: "I do not know" },
                    ].map((opt) => (
                      <Label
                        key={opt.value}
                        htmlFor={`less-${opt.value}`}
                        data-invalid={!!errors.lessThanTwoYears}
                        className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                      >
                        <RadioGroupItem value={opt.value} id={`less-${opt.value}`} />
                        {opt.label}
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
                  {tIelts("existingAccount")}
                </FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    name="existingAccount"
                    onValueChange={(val) => setValue("existingAccount", val)}
                    value={formData.existingAccount}
                    className="flex flex-col gap-3"
                  >
                    {[
                      { label: tYesNo("yes"), value: "Yes" },
                      { label: tYesNo("no"), value: "No" },
                      { label: tIelts("forgotAccount"), value: "I forgot my SELT account details" },
                    ].map((opt) => (
                      <Label
                        key={opt.value}
                        htmlFor={`acc-${opt.value}`}
                        data-invalid={!!errors.existingAccount}
                        className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                      >
                        <RadioGroupItem value={opt.value} id={`acc-${opt.value}`} />
                        {opt.label}
                      </Label>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.existingAccount]} />
                </FieldContent>
              </Field>
            </>
          )}

          <Field data-invalid={!!errors.firstLanguage}>
            <FieldLabel required>{tIelts("firstLanguage")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="firstLanguage"
                options={languages}
                placeholder={tIelts("selectDuration")}
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
                    placeholder={tIelts("pleaseSpecifyLanguage")}
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
              {tIelts("yearsStudyingEnglish")}
            </FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="yearsStudyingEnglish"
                options={[
                  { label: tIelts("year1Less"), value: "1 (less than)" },
                  { label: tIelts("year2"), value: "2" },
                  { label: tIelts("year3"), value: "3" },
                  { label: tIelts("year4"), value: "4" },
                  { label: tIelts("year5"), value: "5" },
                  { label: tIelts("year6"), value: "6" },
                  { label: tIelts("year7"), value: "7" },
                  { label: tIelts("year8"), value: "8" },
                  { label: tIelts("year9More"), value: "9 (or more)" },
                ]}
                placeholder={tIelts("selectDuration")}
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
              {tIelts("educationLevel")}
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
                    id: "Secondary (up to 16 years)",
                    label: tIelts("educationSecondaryUpTo16")
                  },
                  {
                    id: "Secondary (16-19 years)",
                    label: tIelts("educationSecondary16To19")
                  },
                  {
                    id: "Degree (or equivalent)",
                    label: tIelts("educationDegree")
                  },
                  {
                    id: "Post-graduate",
                    label: tIelts("educationPostGraduate")
                  },
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
            <FieldLabel required>{tIelts("occupationLevel")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="occupationLevel"
                options={[
                  { label: tIelts("occupationSelfEmployed"), value: "Self-employed" },
                  { label: tIelts("occupationEmployerPartner"), value: "Employer/Partner" },
                  {
                    label: tIelts("occupationSeniorLevel"),
                    value: "Employee (Senior level)"
                  },
                  {
                    label: tIelts("occupationMiddleJuniorLevel"),
                    value: "Employee (Middle/Junior level)"
                  },
                  { label: tIelts("occupationHomeworker"), value: "Homeworker" },
                  { label: tIelts("occupationRetired"), value: "Retired" },
                  { label: tIelts("occupationStudent"), value: "Student" },
                  { label: tIelts("occupationOther"), value: "Other" },
                ]}
                placeholder={tIelts("selectLevel")}
                value={formData.occupationLevel}
                aria-invalid={!!errors.occupationLevel}
                onChange={(val) => {
                  setValue("occupationLevel", val);
                  if (val !== "Other") setValue("occupationLevelOther", "");
                }}
              />
              {formData.occupationLevel === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder={tIelts("pleaseSpecifyOccupationLevel")}
                    value={formData.occupationLevelOther ?? ""}
                    onChange={(e) => setValue("occupationLevelOther", e.target.value)}
                    className="border-primary/40 focus:border-primary"
                  />
                </div>
              )}
              <FieldError errors={[errors.occupationLevel]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.occupationSector}>
            <FieldLabel required>{tIelts("occupationSector")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="occupationSector"
                options={[
                  { label: tIelts("sectorAdministrative"), value: "Administrative Services" },
                  { label: tIelts("sectorAgriculture"), value: "Agriculture, Fishing, Forestry, Mining" },
                  { label: tIelts("sectorArts"), value: "Arts and Entertainment" },
                  { label: tIelts("sectorBanking"), value: "Banking and Finance" },
                  { label: tIelts("sectorCatering"), value: "Catering and Leisure" },
                  { label: tIelts("sectorConstruction"), value: "Construction Industries" },
                  { label: tIelts("sectorCraft"), value: "Craft and Design" },
                  { label: tIelts("sectorEducation"), value: "Education" },
                  { label: tIelts("sectorHealth"), value: "Health and Social Services" },
                  { label: tIelts("sectorInstallation"), value: "Installation, Maintenance and Repair Services" },
                  { label: tIelts("sectorLaw"), value: "Law and Legal Services" },
                  { label: tIelts("sectorManufacturing"), value: "Manufacturing and Assembly Services" },
                  { label: tIelts("sectorPersonal"), value: "Personal Services" },
                  { label: tIelts("sectorRetail"), value: "Retail Trade" },
                  { label: tIelts("sectorTechnical"), value: "Technical and Scientific" },
                  { label: tIelts("sectorTelecoms"), value: "Telecommunications and the Media" },
                  { label: tIelts("sectorTransport"), value: "Transport" },
                  { label: tIelts("sectorUtilities"), value: "Utilities (Gas, Water, Electricity etc)" },
                  { label: tIelts("sectorWholesale"), value: "Wholesale Trade" },
                  { label: tIelts("sectorOther"), value: "Other" },
                ]}
                placeholder={tIelts("selectSector")}
                value={formData.occupationSector}
                aria-invalid={!!errors.occupationSector}
                onChange={(val) => {
                  setValue("occupationSector", val);
                  if (val !== "Other") setValue("occupationSectorOther", "");
                }}
              />
              {formData.occupationSector === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder={tIelts("pleaseSpecifyOccupationSector")}
                    value={formData.occupationSectorOther ?? ""}
                    onChange={(e) => setValue("occupationSectorOther", e.target.value)}
                    className="border-primary/40 focus:border-primary"
                  />
                </div>
              )}
              <FieldError errors={[errors.occupationSector]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.reasonForTakingTest}>
            <FieldLabel required>{tIelts("reasonForTest")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                name="reasonForTakingTest"
                options={[
                  {
                    label: tIelts("reasonHigherEducationExtended"),
                    value: "Higher education extended course (3 months or more)"
                  },
                  {
                    label: tIelts("reasonHigherEducationShort"),
                    value: "Higher education short course (3 months or less)"
                  },
                  { label: tIelts("reasonOtherEducational"), value: "Other educational purposes" },
                  { label: tIelts("reasonDoctor"), value: "Registration as a doctor" },
                  { label: tIelts("reasonImmigration"), value: "Immigration" },
                  { label: tIelts("reasonEmployment"), value: "Employment" },
                  { label: tIelts("reasonProfessionalRegistration"), value: "Professional registration (not medical)" },
                  { label: tIelts("reasonPersonal"), value: "Personal reasons" },
                  { label: tIelts("reasonNurse"), value: "Registration as a nurse (including CGFNS)" },
                  { label: tIelts("reasonDentist"), value: "Registration as a dentist" },
                  { label: tIelts("reasonMissingInvalid"), value: "Missing/Invalid" },
                  { label: tIelts("reasonOther"), value: "other" },
                ]}
                placeholder={tIelts("selectReason")}
                value={formData.reasonForTakingTest}
                aria-invalid={!!errors.reasonForTakingTest}
                onChange={(val) => {
                  setValue("reasonForTakingTest", val);
                  if (val !== "other") setValue("reasonForTakingTestOther", "");
                }}
              />
              {formData.reasonForTakingTest === "other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder={tIelts("pleaseSpecifyReason")}
                    value={formData.reasonForTakingTestOther ?? ""}
                    onChange={(e) => setValue("reasonForTakingTestOther", e.target.value)}
                    className="border-primary/40 focus:border-primary"
                  />
                </div>
              )}
              <FieldError errors={[errors.reasonForTakingTest]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.destinationCountry}>
            <FieldLabel required>{tIelts("destinationCountry")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="destinationCountry"
                placeholder={tIelts("selectCountry")}
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
        <Button type="button" onClick={onBack}>
          {tDate("back")}
        </Button>
        <Button type="submit">{tDate("next")}</Button>
      </div>
    </form>
  );
}
