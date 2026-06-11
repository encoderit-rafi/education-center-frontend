"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Save, User, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DatePicker } from "@/components/blocks/date-picker";
import Stepper from "@/components/stepper";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel
} from "@/components/ui/field";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { PriceDisplay } from "@/components/ui/price-display";
import { Badge } from "@/components/ui/badge";
import BaseNoteBox from "@/components/base-note-box";
import { TSeltA1Schema } from "../_type";
import { AddonServicesSection } from "@/components/blocks/forms/shared/addon-services-section";
import { MarketingPreferencesSection } from "@/components/blocks/forms/shared/marketing-preferences-section";

interface RegistrationFormStepProps {
  form: UseFormReturn<TSeltA1Schema>;
  onSubmit: (data: TSeltA1Schema) => void;
  onInvalid: (errors: any) => void;
  onBack: () => void;
  languages?: { label: string; value: string }[];
  coursesData?: any;
  workshopsData?: any;
}

export function RegistrationFormStep({
  form,
  onSubmit,
  onInvalid,
  onBack,
  languages = [],
  coursesData = {},
  workshopsData = {} }: RegistrationFormStepProps) {
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
            <FieldLabel required>Surname / family name</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                aria-invalid={!!errors.surnames}
                {...register("surnames")}
              />
              <FieldError errors={[errors.surnames]} />
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

          <Field data-invalid={!!errors.cityOfBirth}>
            <FieldLabel required>City of birth</FieldLabel>
            <FieldContent>
              <Input
                placeholder="As per passport"
                aria-invalid={!!errors.cityOfBirth}
                {...register("cityOfBirth")}
              />
              <FieldError errors={[errors.cityOfBirth]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.countryOfBirth}>
            <FieldLabel required>Country of birth</FieldLabel>
            <FieldContent>
              <CountryDropdown
                name="countryOfBirth"
                placeholder="Search country..."
                value={formData.countryOfBirth}
                aria-invalid={!!errors.countryOfBirth}
                onChange={(country) => setValue("countryOfBirth", country.name)}
              />
              <FieldError errors={[errors.countryOfBirth]} />
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
                onCopy={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}
                autoComplete="off"
                data-lpignore="true"
                aria-invalid={!!errors.confirmEmail}
                readOnly
                {...register("confirmEmail")}
                onFocus={(e) => {
                  e.currentTarget.readOnly = false;
                }}
                onBlur={(e) => {
                  e.currentTarget.readOnly = true;
                  register("confirmEmail").onBlur(e);
                }}
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
            <FieldLabel required>Address Line 1</FieldLabel>
            <FieldContent>
              <Input
                {...register("postalAddress1")}
                placeholder="Street address, building, etc."
                aria-invalid={!!errors.postalAddress1}
              />
              <FieldError errors={[errors.postalAddress1]} />
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.postalAddress2}>
            <FieldLabel>Address Line 2</FieldLabel>
            <FieldContent>
              <Input
                {...register("postalAddress2")}
                placeholder="Apartment, suite, unit, etc. (optional)"
                aria-invalid={!!errors.postalAddress2}
              />
              <FieldError errors={[errors.postalAddress2]} />
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


          <Field data-invalid={!!errors.idNumber}>
            <FieldLabel required>
              {formData.idType === "govt_id"
                ? "Emirates ID number"
                : "Passport number"}
            </FieldLabel>
            <FieldContent>
              <Input
                {...register("idNumber")}
                aria-invalid={!!errors.idNumber}
                placeholder={`Enter your ${formData.idType === "govt_id" ? "Emirates ID" : "Passport"} number`}
              />
              <FieldError errors={[errors.idNumber]} />
            </FieldContent>
            <FieldDescription>
              Please make sure ,Your present the same passport you use for
              registration on the exam day.
            </FieldDescription>
          </Field>

          <Field data-invalid={!!errors.idExpiryDate}>
            <FieldLabel required>
              {formData.idType === "govt_id"
                ? "Emirates ID expiry date"
                : "Passport expiry date"}
            </FieldLabel>
            <FieldContent>
              <DatePicker
                name="idExpiryDate"
                value={formData.idExpiryDate}
                onChange={(date) => setValue("idExpiryDate", date as Date)}
                aria-invalid={!!errors.idExpiryDate}
                disabled={(date) => date <= new Date()}
                placeholder={`Select ${formData.idType === "govt_id" ? "Emirates ID" : "Passport"} expiry date`}
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
              Attach a valid copy of your passport
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

      {/* Additional Info Section */}
      <div className="pt-8 border-t border-slate-100 space-y-6">
        <div className="flex items-center gap-2 text-slate-400 mb-4">
          <Globe className="size-5" />
          <h3 className="text-lg font-bold tracking-tight text-slate-800">
            Additional Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <Field
            className="md:col-span-2 lg:col-span-3"
            data-invalid={!!errors.takenBefore}
          >
            <FieldLabel required>
              Have you taken the Skills for English Test (SELT) before?
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
                  Do you have an existing account?
                </FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    name="existingAccount"
                    onValueChange={(val) => setValue("existingAccount", val)}
                    value={formData.existingAccount}
                    className="flex flex-col gap-3"
                  >
                    {["Yes", "No", "I forgot my account details"].map((opt) => (
                      <Label
                        key={opt}
                        htmlFor={`acc-${opt}`}
                        data-invalid={!!errors.existingAccount}
                        className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructive"
                      >
                        <RadioGroupItem value={opt} id={`acc-${opt}`} />
                        {opt}
                      </Label>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.existingAccount]} />
                </FieldContent>
              </Field>
            </>
          )}
          <Field className="md:col-span-2 lg:col-span-3" data-invalid={!!errors.reasonForTest}>
            <FieldLabel required>Reason for test</FieldLabel>
            <FieldContent className="mt-2">
              <RadioGroup
                name="reasonForTest"
                onValueChange={(val) => {
                  setValue("reasonForTest", val);
                  if (val !== "other") setValue("reasonForTestOther", "");
                }}
                value={formData.reasonForTest}
                className="flex flex-col gap-3"
              >
                {[
                  { id: "ukvi", label: "UKVI", description: "For UK Visa and Immigration applications" },
                  { id: "other", label: "Other", description: "" },
                ].map((opt) => (
                  <div key={opt.id} className="flex flex-col gap-2">
                    <Label
                      htmlFor={`reason-${opt.id}`}
                      className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer"
                    >
                      <RadioGroupItem value={opt.id} id={`reason-${opt.id}`} />
                      <div className="flex flex-col">
                        <span>{opt.label}</span>
                        {opt.description && (
                          <span className="text-xs text-slate-500 font-light">{opt.description}</span>
                        )}
                      </div>
                    </Label>
                    {opt.id === "other" && formData.reasonForTest === "other" && (
                      <div className="pl-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <textarea
                          placeholder="Please enter a reason for taking the test"
                          value={formData.reasonForTestOther ?? ""}
                          onChange={(e) => setValue("reasonForTestOther", e.target.value)}
                          className="w-full min-h-[80px] p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm font-light"
                        />
                        <FieldError errors={[errors.reasonForTestOther]} />
                      </div>
                    )}
                  </div>
                ))}
              </RadioGroup>
              <FieldError errors={[errors.reasonForTest]} />
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
        <Button type="button" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}
