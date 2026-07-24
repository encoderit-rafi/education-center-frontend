"use client";

import React from "react";
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
import { TPteHomeA1Schema } from "../_type";
import { PriceDisplay } from "@/components/ui/price-display";
import { Badge } from "@/components/ui/badge";
import { AddonServicesSection } from "@/components/blocks/forms/shared/addon-services-section";
import {
  MarketingPreferencesSection,
  TEPTH_MARKETING_OPTIONS,
} from "@/components/blocks/forms/shared/marketing-preferences-section";

import { useTranslations } from "next-intl";

interface RegistrationFormStepProps {
  form: UseFormReturn<TPteHomeA1Schema>;
  onSubmit: (data: TPteHomeA1Schema) => void;
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="space-y-8 animate-in fade-in duration-500"
    >
      {/* Section 1: Personal Details */}
      <div className="space-y-6">
        <Stepper step={3}>Personal Details</Stepper>

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
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.middleName}>
            <FieldLabel required>Middle Name</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                aria-invalid={!!errors.middleName}
                {...register("middleName")}
                disabled={formData.noMiddleName}
              />
              <FieldError errors={[errors.middleName]} />
              <FieldDescription className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="noMiddleName"
                  checked={formData.noMiddleName}
                  onCheckedChange={(val) =>
                    setValue("noMiddleName", val as boolean)
                  }
                />
                <Label htmlFor="noMiddleName" className="text-xs font-light">
                  I don't have a middle name
                </Label>
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.surnames}>
            <FieldLabel required>Surname / family name</FieldLabel>
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
            <FieldLabel required>City of birth</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                {...register("placeOfBirth")}
              />
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
              <Input
                placeholder="example@email.com"
                {...register("emailUsername")}
              />
              <FieldError errors={[errors.emailUsername]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.confirmEmail}>
            <FieldLabel required>Confirm email address</FieldLabel>
            <FieldContent>
              <Input
                placeholder="Confirm your email"
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
            <FieldLabel required>Phone number</FieldLabel>
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
              <Input
                placeholder="Street address, building, etc."
                {...register("postalAddress1")}
              />
              <FieldError errors={[errors.postalAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress2}>
            <FieldLabel>Address Line 2</FieldLabel>
            <FieldContent>
              <Input
                placeholder="Apartment, suite, etc. (optional)"
                {...register("postalAddress2")}
              />
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
                placeholder={t("enterPassportNumber")}
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
                placeholder={t("selectPassportExpiryDate")}
              />
              <FieldError errors={[errors.idExpiryDate]} />
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
            <FieldLabel required>Attach a valid copy of Passport:</FieldLabel>
            <FieldContent>
              <div className="flex flex-col gap-2">
                {!formData.passportCopy ? (
                  <Input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="h-auto py-2 px-3 border-2 border-dashed border-slate-200 hover:border-primary/50 transition-colors cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setValue("passportCopy", file);
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-between gap-3 p-3 rounded-xl border border-green-500/50 bg-green-100/30">
                    <div className="size-9 rounded-full bg-emerald-100 border border-green-500/50 flex items-center justify-center text-emerald-600">
                      <Save className="size-[17px]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-700 truncate max-w-50">
                          {(formData.passportCopy as File).name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {(
                            (formData.passportCopy as File).size /
                            (1024 * 1024)
                          ).toFixed(2)}{" "}
                          MB
                        </span>
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
                  </div>
                )}
                <p className="text-[12px] text-slate-900 font-medium">
                  Supported formats: (pdf, png, jpg, jpeg) - Max size: 5MB
                </p>
              </div>
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
            Additional Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Field data-invalid={!!errors.homeLanguage}>
            <FieldLabel required>
              What language do you speak mostly at home?
            </FieldLabel>
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
                    label: tPte("situationStudentInHighSchool"),
                    value: "Student - In High School",
                  },
                  {
                    label: tPte("situationStudentHighSchoolGraduate"),
                    value: "Student - High School graduate",
                  },
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
                    value: "Working - full time",
                  },
                  {
                    label: tPte("situationWorkingPart"),
                    value: "Working - part time",
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

          <Field
            data-invalid={!!errors.reasonForTaking}
            className="md:col-span-2"
          >
            <FieldLabel required>{tPte("reasonForTest")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  { label: tPte("reasonFamilyVisa"), value: "family_visa" },
                  { label: tPte("reasonSettlement"), value: "settlement" },
                  { label: tPte("reasonCitizenship"), value: "citizenship" },
                  {
                    label: tPte("reasonSportspersonVisa"),
                    value: "sportsperson_visa",
                  },
                  {
                    label: tPte("reasonRepresentativeVisa"),
                    value: "representative_visa",
                  },
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

          <Field
            data-invalid={!!errors.referralSource}
            className="md:col-span-2"
          >
            <FieldLabel required>{tPte("referralSource")}</FieldLabel>
            <FieldContent>
              <SearchableDropdown
                options={[
                  {
                    label: tPte("referralEducationAgent"),
                    value: "education_agent",
                  },
                  {
                    label: tPte("referralEducationEvent"),
                    value: "education_event",
                  },
                  {
                    label: tPte("referralFriendFamily"),
                    value: "friend_family",
                  },
                  {
                    label: tPte("referralInternetSearch"),
                    value: "internet_search",
                  },
                  {
                    label: tPte("referralLanguageSchool"),
                    value: "language_school",
                  },
                  {
                    label: tPte("referralMigrationAgentUKVI"),
                    value: "migration_agent",
                  },
                  {
                    label: tPte("referralOutdoorAdvert"),
                    value: "outdoor_advert",
                  },
                  { label: tPte("referralRadioAdvert"), value: "radio_advert" },
                  { label: tPte("referralSocialMedia"), value: "social_media" },
                  { label: tPte("referralUKVI"), value: "ukvi" },
                  {
                    label: tPte("referralUniversityCollege"),
                    value: "university_college",
                  },
                  { label: tPte("referralOther"), value: "Other" },
                ]}
                placeholder={t("selectOne")}
                value={formData.referralSource}
                onChange={(val) => {
                  setValue("referralSource", val);
                  const specifyOptions = [
                    "education_agent",
                    "education_event",
                    "migration_agent",
                    "university_college",
                    "Other",
                  ];
                  if (!specifyOptions.includes(val))
                    setValue("referralSourceOther", "");
                }}
              />
              {[
                "education_agent",
                "education_event",
                "migration_agent",
                "university_college",
                "Other",
              ].includes(formData.referralSource) && (
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
              <FieldLabel required>
                If you are taking PTE Home A1 for study, which level are you
                applying for?
              </FieldLabel>
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
                  placeholder="-Select Level-"
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
              <FieldLabel required>
                Which field of study are you applying for?
              </FieldLabel>
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
                  placeholder="Select one..."
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
        </div>
        <div className="space-y-3 md:col-span-2 animate-in fade-in slide-in-from-top-2">
          <Field data-invalid={!!errors.takenBefore}>
            <FieldLabel required>Have you taken PTE Home A1 before?</FieldLabel>
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
                    onValueChange={(val) =>
                      setValue("takenWithinTwoYears", val as any)
                    }
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
                <FieldLabel required>Do you have a PTE account?</FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    className="flex flex-col gap-3"
                    value={formData.hasExistingAccount}
                    onValueChange={(val) =>
                      setValue("hasExistingAccount", val as any)
                    }
                  >
                    {["yes", "no", "I forgot my PTE account details"].map(
                      (opt) => (
                        <Label
                          key={opt}
                          htmlFor={`account-${opt}`}
                          data-invalid={!!errors.hasExistingAccount}
                          className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive capitalize"
                        >
                          <RadioGroupItem value={opt} id={`account-${opt}`} />
                          {opt}
                        </Label>
                      ),
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
        description={
          "Save up to 25% on some of our prep courses when you book your exam and register for the course with TEPTH and pay in-person or online on our website."
        }
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
          Back
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}
