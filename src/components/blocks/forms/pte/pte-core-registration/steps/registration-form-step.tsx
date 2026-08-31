"use client";

import React from "react";
import { FileUploadField } from "@/components/blocks/forms/shared/file-upload-field";
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
  FieldLabel,
} from "@/components/ui/field";
import { TPteCoreSchema } from "../_type";
import { PriceDisplay } from "@/components/ui/price-display";
import { Badge } from "@/components/ui/badge";
import { AddonServicesSection } from "@/components/blocks/forms/shared/addon-services-section";
import {
  MarketingPreferencesSection,
  TEPTH_MARKETING_OPTIONS,
} from "@/components/blocks/forms/shared/marketing-preferences-section";

interface RegistrationFormStepProps {
  form: UseFormReturn<TPteCoreSchema>;
  onSubmit: (data: TPteCoreSchema) => void;
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
  const t = useTranslations("FormsShared.FormFields");
  const tPte = useTranslations("FormsShared.PTE");
  const tYesNo = useTranslations("FormsShared.GlobalReviewStep");
  const tDate = useTranslations("FormsShared.DateStep");
  const tAddon = useTranslations("FormsShared.AddonServices");

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="space-y-8 animate-in fade-in duration-500"
    >
      {/* Section 1: Personal Details */}
      <div className="space-y-6">
        <Stepper step={3}>{t("personalDetails")}</Stepper>

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
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.middleName}>
            <FieldLabel required>{t("middleName")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("asPerPassport")}
                aria-invalid={!!errors.middleName}
                {...register("middleName")}
                disabled={formData.noMiddleName}
              />
              <FieldError errors={[errors.middleName]} />
              <FieldDescription className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="noMiddleName"
                  checked={formData.noMiddleName}
                  onCheckedChange={(val) => {
                    const isChecked = val as boolean;
                    setValue("noMiddleName", isChecked);
                    if (isChecked) setValue("middleName", "");
                  }}
                />
                <Label htmlFor="noMiddleName" className="text-xs font-light">
                  {t("noMiddleName")}
                </Label>
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.surnames}>
            <FieldLabel required>{t("surname")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("asPerPassport")}
                aria-invalid={!!errors.surnames}
                {...register("surnames")}
                disabled={formData.noSurname}
              />
              <FieldError errors={[errors.surnames]} />
              <FieldDescription className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="noSurname"
                  checked={formData.noSurname}
                  onCheckedChange={(val) => {
                    const isChecked = val as boolean;
                    setValue("noSurname", isChecked);
                    if (isChecked) setValue("surnames", "");
                  }}
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

          <Field data-invalid={!!errors.gender}>
            <FieldLabel required>{t("sex")}</FieldLabel>
            <FieldContent>
              <RadioGroup
                onValueChange={(val) => setValue("gender", val as any)}
                value={formData.gender}
                className="grid grid-cols-2 gap-3"
              >
                {["male", "female"].map((opt) => {
                  const label =
                    opt === "male" ? tYesNo("male") : tYesNo("female");
                  return (
                    <Label
                      key={opt}
                      htmlFor={opt}
                      data-invalid={!!errors.gender}
                      className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                    >
                      <RadioGroupItem value={opt} id={opt} />
                      {label}
                    </Label>
                  );
                })}
              </RadioGroup>
              <FieldError errors={[errors.gender]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.placeOfBirth}>
            <FieldLabel required>{t("cityOfBirth")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("asPerPassport")}
                {...register("placeOfBirth")}
              />
              <FieldError errors={[errors.placeOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.countryOfBirth}>
            <FieldLabel required>{t("countryOfBirth")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                placeholder={t("searchCountry")}
                value={formData.countryOfBirth}
                onChange={(c) => setValue("countryOfBirth", c.name)}
              />
              <FieldError errors={[errors.countryOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.emailUsername}>
            <FieldLabel required>{t("email")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("exampleEmail")}
                {...register("emailUsername")}
              />
              <FieldError errors={[errors.emailUsername]} />
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
                {...register("confirmEmail")}
              />
              <FieldError errors={[errors.confirmEmail]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.mobileNumber}>
            <FieldLabel required>{t("mobileNumber")}</FieldLabel>
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
            <FieldLabel required>{t("countryOfResidence")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                placeholder={t("searchCountry")}
                value={formData.countryOfResidence}
                onChange={(c) => setValue("countryOfResidence", c.name)}
              />
              <FieldError errors={[errors.countryOfResidence]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress1}>
            <FieldLabel required>{t("addressLine1")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("streetAddress")}
                {...register("postalAddress1")}
              />
              <FieldError errors={[errors.postalAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress2}>
            <FieldLabel>{t("addressLine2")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("apartmentSuite")}
                {...register("postalAddress2")}
              />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel>{t("poBox")}</FieldLabel>
            <FieldContent>
              <Input placeholder={t("enterPoBox")} {...register("poBox")} />
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel>{t("postalCode")}</FieldLabel>
            <FieldContent>
              <Input
                placeholder={t("postalCodePlaceholder")}
                {...register("postcode")}
              />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.city}>
            <FieldLabel required>{t("emirateCity")}</FieldLabel>
            <FieldContent>
              <Input placeholder={t("enteringCity")} {...register("city")} />
              <FieldError errors={[errors.city]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idNumber}>
            <FieldLabel required>{t("passportNumber")}</FieldLabel>
            <FieldContent>
              <Input
                {...register("idNumber")}
                aria-invalid={!!errors.idNumber}
                placeholder={t("passportNumber")}
              />
              <FieldError errors={[errors.idNumber]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.idExpiryDate}>
            <FieldLabel required>{t("passportExpiryDate")}</FieldLabel>
            <FieldContent>
              <DatePicker
                name="idExpiryDate"
                value={formData.idExpiryDate}
                onChange={(date) => setValue("idExpiryDate", date as Date)}
                aria-invalid={!!errors.idExpiryDate}
                disabled={(date) => date <= new Date()}
                placeholder={t("passportExpiryDate")}
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

          <Field data-invalid={!!errors.countryOfCitizenship}>
            <FieldLabel required>{t("nationality")}</FieldLabel>
            <FieldContent>
              <CountryDropdown
                placeholder={t("searchCountry")}
                value={formData.countryOfCitizenship}
                onChange={(c) => setValue("countryOfCitizenship", c.name)}
              />

              <FieldError errors={[errors.countryOfCitizenship]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.passportCopy}>
            <FieldLabel required>{tPte("attachPassportCopy")}</FieldLabel>
            <FieldContent>
                            <FileUploadField
                value={formData.passportCopy as File | undefined}
                onChange={(file) => {
                  setValue("passportCopy", file);
                }}
                hint={t("supportedFormats")}
              />
              <FieldError errors={[errors.passportCopy]} />
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
          <Field data-invalid={!!errors.homeLanguage}>
            <FieldLabel required>{tPte("firstLanguage")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={languages}
                placeholder={t("selectLanguage")}
                value={formData.homeLanguage}
                onChange={(val) => {
                  setValue("homeLanguage", val);
                  if (val !== "Other") setValue("homeLanguageOther", "");
                }}
              />
              {formData.homeLanguage === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify your first language"
                    value={formData.homeLanguageOther ?? ""}
                    onChange={(e) =>
                      setValue("homeLanguageOther", e.target.value)
                    }
                    className="border-primary/40 focus:border-primary"
                  />
                  <FieldError errors={[errors.homeLanguageOther]} />
                </div>
              )}
              <FieldError errors={[errors.homeLanguage]} />
            </FieldContent>
          </Field>
          <Field data-invalid={!!errors.currentSituation}>
            <FieldLabel required>{tPte("currentSituation")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  {
                    label: tPte("situationStudentEnglish"),
                    value: "Student - English language",
                  },
                  {
                    label: tPte("situationStudentUniversity"),
                    value: "Student - In University / College",
                  },
                  {
                    label: tPte("situationStudentUniversityGraduate"),
                    value: "Student - University / College graduate",
                  },
                  {
                    label: tPte("situationWorkingFull"),
                    value: "Working - Full time",
                  },
                  {
                    label: tPte("situationWorkingPart"),
                    value: "Working - Part time",
                  },
                  {
                    label: tPte("situationNotStudying"),
                    value: "Not studying or working",
                  },
                  { label: tPte("situationOther"), value: "Other" },
                ]}
                placeholder={t("selectOne")}
                value={formData.currentSituation}
                onChange={(val) => {
                  setValue("currentSituation", val);
                  if (val !== "Other") setValue("currentSituationOther", "");
                }}
              />
              {formData.currentSituation === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify your current situation"
                    value={formData.currentSituationOther ?? ""}
                    onChange={(e) =>
                      setValue("currentSituationOther", e.target.value)
                    }
                    className="border-primary/40 focus:border-primary"
                  />
                </div>
              )}
              <FieldError errors={[errors.currentSituation]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.reasonForTaking}>
            <FieldLabel required>{tPte("reasonForTest")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  {
                    label: tPte("reasonCanadianImmigration"),
                    value: "canadian_immigration",
                  },
                  {
                    label: tPte("reasonCanadianCitizenship"),
                    value: "canadian_citizenship",
                  },
                  {
                    label: tPte("reasonCanadaTempWorker"),
                    value: "temporary_foreign_worker",
                  },
                  { label: tPte("reasonPGWP"), value: "pgwp" },
                  { label: tPte("reasonOther"), value: "other" },
                ]}
                placeholder={t("selectOne")}
                value={formData.reasonForTaking}
                onChange={(val) => {
                  setValue("reasonForTaking", val);
                  if (val !== "other") setValue("reasonForTakingOther", "");
                  if (val !== "study") {
                    setValue("studyLevel", "");
                    setValue("studyLevelOther", "");
                    setValue("fieldOfStudy", "");
                    setValue("fieldOfStudyOther", "");
                  }
                }}
              />
              {formData.reasonForTaking === "other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify your reason"
                    value={formData.reasonForTakingOther ?? ""}
                    onChange={(e) =>
                      setValue("reasonForTakingOther", e.target.value)
                    }
                    className="border-primary/40 focus:border-primary"
                  />
                </div>
              )}
              <FieldError errors={[errors.reasonForTaking]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.referralSource}>
            <FieldLabel required>{tPte("referralSource")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  {
                    label: tPte("referralAgentAdvisor"),
                    value: "agent_advisor",
                  },
                  { label: tPte("referralEducationEvent"), value: "event" },
                  {
                    label: tPte("referralFriendFamily"),
                    value: "friend_family",
                  },
                  { label: tPte("referralIRCC"), value: "ircc" },
                  {
                    label: tPte("referralInternetSearch"),
                    value: "internet_search",
                  },
                  {
                    label: tPte("referralLanguageSchool"),
                    value: "language_school",
                  },
                  {
                    label: tPte("referralMigrationAgent"),
                    value: "migration_agent",
                  },
                  { label: tPte("referralSocialMedia"), value: "social_media" },
                  { label: tPte("referralOther"), value: "other" },
                ]}
                placeholder={t("selectOne")}
                value={formData.referralSource}
                onChange={(val) => {
                  setValue("referralSource", val);
                  const specifyOptions = [
                    "agent_advisor",
                    "event",
                    "migration_agent",
                    "other",
                  ];
                  if (!specifyOptions.includes(val))
                    setValue("referralSourceOther", "");
                }}
              />
              {["agent_advisor", "event", "migration_agent", "other"].includes(
                formData.referralSource,
              ) && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify"
                    value={formData.referralSourceOther ?? ""}
                    onChange={(e) =>
                      setValue("referralSourceOther", e.target.value)
                    }
                    className="border-primary/40 focus:border-primary"
                  />
                  <FieldError errors={[errors.referralSourceOther]} />
                </div>
              )}
              <FieldError errors={[errors.referralSource]} />
            </FieldContent>
          </Field>

          {formData.reasonForTaking === "study" && (
            <Field
              data-invalid={!!errors.studyLevel}
              className="md:col-span-2 animate-in fade-in slide-in-from-top-2"
            >
              <FieldLabel required>{tPte("studyLevel")}</FieldLabel>
              <FieldContent>
                <SearchableDropdown
                  options={[
                    { label: tPte("studyLevelPreDegree"), value: "pre_degree" },
                    {
                      label: tPte("studyLevelUndergraduate"),
                      value: "undergraduate",
                    },
                    {
                      label: tPte("studyLevelPostgraduate"),
                      value: "postgraduate",
                    },
                    { label: tPte("studyLevelDoctorate"), value: "doctorate" },
                    { label: tPte("studyLevelMba"), value: "mba" },
                    {
                      label: tPte("studyLevelEnglish"),
                      value: "english_language",
                    },
                    {
                      label: tPte("studyLevelProfessional"),
                      value: "professional",
                    },
                    { label: tPte("studyLevelOther"), value: "other" },
                  ]}
                  placeholder={t("selectLevel")}
                  value={formData.studyLevel}
                  onChange={(val) => {
                    setValue("studyLevel", val);
                    if (val !== "other") setValue("studyLevelOther", "");
                    if (!val) {
                      setValue("fieldOfStudy", "");
                      setValue("fieldOfStudyOther", "");
                    }
                  }}
                />
                {formData.studyLevel === "other" && (
                  <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <Input
                      placeholder="Please specify your education level"
                      value={formData.studyLevelOther ?? ""}
                      onChange={(e) =>
                        setValue("studyLevelOther", e.target.value)
                      }
                      className="border-primary/40 focus:border-primary"
                    />
                    <FieldError errors={[errors.studyLevelOther]} />
                  </div>
                )}
                <FieldError errors={[errors.studyLevel]} />
              </FieldContent>
            </Field>
          )}

          {formData.reasonForTaking === "study" && formData.studyLevel && (
            <Field
              data-invalid={!!errors.fieldOfStudy}
              className="md:col-span-2 animate-in fade-in slide-in-from-top-2"
            >
              <FieldLabel required>{tPte("fieldOfStudy")}</FieldLabel>
              <FieldContent>
                <SearchableDropdown
                  options={[
                    {
                      label: tPte("fieldAccountancyFinance"),
                      value: "accountancy_finance",
                    },
                    { label: tPte("fieldAgriculture"), value: "agriculture" },
                    { label: tPte("fieldArchitecture"), value: "architecture" },
                    {
                      label: tPte("fieldBusinessManagement"),
                      value: "business_management",
                    },
                    {
                      label: tPte("fieldCommunicationsMedia"),
                      value: "communications_media",
                    },
                    { label: tPte("fieldEducation"), value: "education" },
                    { label: tPte("fieldEngineering"), value: "engineering" },
                    { label: tPte("fieldHealth"), value: "health" },
                    {
                      label: tPte("fieldHumanitiesArts"),
                      value: "humanities_arts",
                    },
                    { label: tPte("fieldIT"), value: "it_computer_sciences" },
                    { label: tPte("fieldLaw"), value: "law" },
                    { label: tPte("fieldMathematics"), value: "mathematics" },
                    { label: tPte("fieldMedicine"), value: "medicine" },
                    {
                      label: tPte("fieldPhysicalLifeSciences"),
                      value: "physical_life_sciences",
                    },
                    {
                      label: tPte("fieldSocialSciences"),
                      value: "social_sciences",
                    },
                    {
                      label: tPte("fieldTourismHospitality"),
                      value: "tourism_hospitality",
                    },
                    { label: tPte("fieldOther"), value: "other" },
                  ]}
                  placeholder={t("selectOne")}
                  value={formData.fieldOfStudy}
                  onChange={(val) => {
                    setValue("fieldOfStudy", val);
                    if (val !== "other") setValue("fieldOfStudyOther", "");
                  }}
                />
                {formData.fieldOfStudy === "other" && (
                  <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <Input
                      placeholder="Please specify your field of study"
                      value={formData.fieldOfStudyOther ?? ""}
                      onChange={(e) =>
                        setValue("fieldOfStudyOther", e.target.value)
                      }
                      className="border-primary/40 focus:border-primary"
                    />
                    <FieldError errors={[errors.fieldOfStudyOther]} />
                  </div>
                )}
                <FieldError errors={[errors.fieldOfStudy]} />
              </FieldContent>
            </Field>
          )}

          <Field
            data-invalid={!!errors.occupationSector}
            className="md:col-span-2 animate-in fade-in slide-in-from-top-2"
          >
            <FieldLabel required>{tPte("occupationSectorLabel")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  {
                    label: tPte("occupationSectorAgriculture"),
                    value: "Agriculture, Fishing, Forestry, Mining",
                  },
                  {
                    label: tPte("occupationSectorArchitecture"),
                    value: "Architecture",
                  },
                  {
                    label: tPte("occupationSectorArts"),
                    value: "Arts and Entertainment",
                  },
                  {
                    label: tPte("occupationSectorBanking"),
                    value: "Banking and Finance",
                  },
                  {
                    label: tPte("occupationSectorCatering"),
                    value: "Catering and Leisure",
                  },
                  {
                    label: tPte("occupationSectorConstruction"),
                    value: "Construction Industries",
                  },
                  {
                    label: tPte("occupationSectorCommunications"),
                    value: "Communications and Media",
                  },
                  {
                    label: tPte("occupationSectorCraft"),
                    value: "Craft and Design",
                  },
                  {
                    label: tPte("occupationSectorEducation"),
                    value: "Education",
                  },
                  {
                    label: tPte("occupationSectorHealth"),
                    value: "Health and Social Services",
                  },
                  {
                    label: tPte("occupationSectorInstallation"),
                    value: "Installation, Maintenance and Repair Services",
                  },
                  {
                    label: tPte("occupationSectorLaw"),
                    value: "Law and Legal Services",
                  },
                  {
                    label: tPte("occupationSectorManufacturing"),
                    value: "Manufacturing and Assembly Services",
                  },
                  {
                    label: tPte("occupationSectorPersonal"),
                    value: "Personal Services",
                  },
                  {
                    label: tPte("occupationSectorRetail"),
                    value: "Retail Trade",
                  },
                  {
                    label: tPte("occupationSectorTechnical"),
                    value: "Technical and Scientific",
                  },
                  {
                    label: tPte("occupationSectorTelecoms"),
                    value: "Telecommunications and Media",
                  },
                  {
                    label: tPte("occupationSectorTransport"),
                    value: "Transport",
                  },
                  {
                    label: tPte("occupationSectorUtilities"),
                    value: "Utilities (Gas, Water, Electricity, etc.)",
                  },
                  {
                    label: tPte("occupationSectorWholesale"),
                    value: "Wholesale Trade",
                  },
                  { label: tPte("occupationSectorOther"), value: "Other" },
                ]}
                placeholder={t("selectSector")}
                value={formData.occupationSector}
                onChange={(val) => {
                  setValue("occupationSector", val);
                  if (val !== "Other") setValue("occupationSectorOther", "");
                }}
              />
              {formData.occupationSector === "Other" && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Input
                    placeholder="Please specify your occupation sector"
                    value={formData.occupationSectorOther ?? ""}
                    onChange={(e) =>
                      setValue("occupationSectorOther", e.target.value)
                    }
                    className="border-primary/40 focus:border-primary"
                  />
                  <FieldError errors={[errors.occupationSectorOther]} />
                </div>
              )}
              <FieldError errors={[errors.occupationSector]} />
            </FieldContent>
          </Field>
        </div>
        <div className="space-y-3 md:col-span-2 animate-in fade-in slide-in-from-top-2">
          <Field data-invalid={!!errors.takenBefore}>
            <FieldLabel required>
              {tPte("haveYouTakenBefore", { module: "Core" })}
            </FieldLabel>
            <FieldContent className="mt-2">
              <RadioGroup
                className="grid grid-cols-2 gap-3"
                value={formData.takenBefore}
                onValueChange={(val) => setValue("takenBefore", val as any)}
              >
                {["yes", "no"].map((opt) => {
                  const label = opt === "yes" ? tYesNo("yes") : tYesNo("no");
                  return (
                    <Label
                      key={opt}
                      htmlFor={`taken-${opt}`}
                      data-invalid={!!errors.takenBefore}
                      className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                    >
                      <RadioGroupItem value={opt} id={`taken-${opt}`} />
                      {label}
                    </Label>
                  );
                })}
              </RadioGroup>
              <FieldError errors={[errors.takenBefore]} />
            </FieldContent>
          </Field>

          {formData.takenBefore === "yes" && (
            <>
              <Field data-invalid={!!errors.takenWithinTwoYears}>
                <FieldLabel required>{tPte("wasItLessThan2Years")}</FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    className="grid grid-cols-2 gap-3"
                    value={formData.takenWithinTwoYears}
                    onValueChange={(val) =>
                      setValue("takenWithinTwoYears", val as any)
                    }
                  >
                    {["yes", "no"].map((opt) => {
                      const label =
                        opt === "yes" ? tYesNo("yes") : tYesNo("no");
                      return (
                        <Label
                          key={opt}
                          htmlFor={`recent-${opt}`}
                          data-invalid={!!errors.takenWithinTwoYears}
                          className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                        >
                          <RadioGroupItem value={opt} id={`recent-${opt}`} />
                          {label}
                        </Label>
                      );
                    })}
                  </RadioGroup>
                  <FieldError errors={[errors.takenWithinTwoYears]} />
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.hasExistingAccount}>
                <FieldLabel required>{tPte("existingAccount")}</FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    className="flex flex-col gap-3"
                    value={formData.hasExistingAccount}
                    onValueChange={(val) =>
                      setValue("hasExistingAccount", val as any)
                    }
                  >
                    {["yes", "no", "I forgot my PTE account details"].map(
                      (opt) => {
                        let label: string;
                        if (opt === "yes") label = tYesNo("yes");
                        else if (opt === "no") label = tYesNo("no");
                        else label = tPte("forgotAccount");
                        return (
                          <Label
                            key={opt}
                            htmlFor={`account-${opt}`}
                            data-invalid={!!errors.hasExistingAccount}
                            className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                          >
                            <RadioGroupItem value={opt} id={`account-${opt}`} />
                            {label}
                          </Label>
                        );
                      },
                    )}
                  </RadioGroup>
                  <FieldError errors={[errors.hasExistingAccount]} />
                </FieldContent>
              </Field>
            </>
          )}
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
        options={TEPTH_MARKETING_OPTIONS}
      />

      <div className="flex justify-between pt-12 border-t border-slate-100 mt-12">
        <Button type="button" onClick={onBack}>
          {tDate("back")}
        </Button>
        <Button type="submit">{tDate("next")}</Button>
      </div>
    </form>
  );
}
