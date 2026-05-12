"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  Info,
  AlertCircle,
  Check,
  Clock,
  MapPin,
  CreditCard,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { IeltsAcademicSchema, type TIeltsAcademicSchema } from "./_type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";
import { languages } from "@/lib/languages-data";

import {
  BookOpen,
  Calendar as CalendarIcon,
  CheckSquare,
  Building2,
  Banknote,
} from "lucide-react";
import Payment from "../../../payment";
import { ExamDateSelector } from "@/components/blocks/calendar-booking/exam-date-selector";
import Stepper from "@/components/stepper";
import { Calendar } from "@/components/ui/calendar";
import BaseNoteBox from "@/components/base-note-box";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { DatePicker } from "@/components/blocks/date-picker";

export const WORKSHOPS_DATA = {
  workshop_2_hours: {
    id: "workshop_2_hours",
    name: "Workshop 2 Hours",
    duration: "2 hours",
    price: 600,
    currency: "AED",
  },
  workshop_4_hours: {
    id: "workshop_4_hours",
    name: "Workshop 4 Hours",
    duration: "4 hours",
    price: 1000,
    currency: "AED",
  },
  workshop_6_hours: {
    id: "workshop_6_hours",
    name: "Workshop 6 Hours",
    duration: "6 hours",
    price: 1350,
    currency: "AED",
  },
  workshop_8_hours: {
    id: "workshop_8_hours",
    name: "Workshop 8 Hours",
    duration: "8 hours",
    price: 1600,
    currency: "AED",
  },
};
export const COURSES_DATA = {
  group_classroom: {
    id: "group_classroom",
    name: "Group Classroom",
    class_mode_id: "group",
    class_type_id: "classroom",
    price: 1850,
    currency: "AED",
    general_discount: 5,
    special_discount: 10,
  },

  semi_private_classroom: {
    id: "semi_private_classroom",
    name: "Semi-Private Classroom",
    class_mode_id: "semi_private",
    class_type_id: "classroom",
    price: 2850,
    currency: "AED",
    general_discount: 5,
    special_discount: 15,
  },

  vip_classroom: {
    id: "vip_classroom",
    name: "VIP Classroom",
    class_mode_id: "vip",
    class_type_id: "classroom",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },

  vip_online: {
    id: "vip_online",
    name: "Private Online",
    class_mode_id: "vip",
    class_type_id: "online",
    price: 4850,
    currency: "AED",
    general_discount: 5,
    special_discount: 20,
  },
};
const NOTICES: string[] = [
  "For your convenience, The Exam Preparation & Testing House FZCO offers the CD-IELTS test registration service. We hold no responsibility regarding any issues related to test results or scoring and we have no control or involvement in the test itself, the scoring of the test or the release of the results. This service is optional and candidates can book the exam directly on the exam provider’s website and select our venue and take the test.",

  "If there are insufficient candidate numbers, the test might not be held at our testing venue. If needed, candidates will be informed and moved to the nearest available testing venue as determined by the British Council. Please ensure you provide your current cellphone number and email address when you register.",

  "It is very important that you provide your full address information including the P.O. Box number and/or Postal Code (Zip Code). TEPTH holds no responsibility regarding the delivery of your original IELTS Score Report. If you take IELTS on computer, you will receive your results electronically only. You can download the electronic version (eTRF) from the Test Taker portal 1–8 days after your test. The British Council will not issue an additional paper Test Report Form.",

  "You can print your electronic Test Report Form (eTRF) to send it to the organisations you are applying to, or you can send it via email. Alternatively, you can send your results directly to the organisation through the Test Taker portal.",

  "If you have a permanent disability that is causing you a learning difficulty that requires a special arrangement, please do not complete this online form and contact us. Our employees would be happy to assist you further.",

  "Please note all personal details provided on this page must match the Test Taker's identification document used for registration and presented at the test location, as these will appear on the Test Taker's Test Report Form (TRF). Once registration is complete, the exam provider may charge a fee if you ask them to modify any of this information before they issue the TRF. Please note that no modifications can be made after the TRF is issued.",
];
export default function FormIELTSAcademicRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMarketingNotice, setShowMarketingNotice] = useState(false);
  const [showTermsNotice, setShowTermsNotice] = useState(false);

  const form = useForm<TIeltsAcademicSchema>({
    resolver: zodResolver(IeltsAcademicSchema),
    defaultValues: {
      testModule: "",
      bookingFor: "",
      givenNames: "",
      surnames: "",
      noSurname: false,
      dateOfBirth: undefined,
      sex: "",
      email: "",
      confirmEmail: "",
      mobileNumber: "",
      smsConsent: false,
      residenceCountry: "",
      postalAddress1: "",
      postalAddress2: "",
      postalAddress3: "",
      city: "",
      postcode: "",
      marketingPreference: "",
      // Step 2
      idType: "",
      idNumber: "",
      idExpiryDate: undefined,
      issuingAuthority: "",
      nationality: "",
      // Step 3
      takenBefore: "",
      lessThanTwoYears: "",
      existingAccount: "",
      specialRequirements: "",
      specialRequirementsMention: "",
      firstLanguage: "",
      yearsStudyingEnglish: "",
      educationLevel: "",
      occupationLevel: "",
      occupationSector: "",
      reasonForTakingTest: "",
      destinationCountry: "",
      // Step 4
      selectedCourse: "",
      selectedWorkshop: "",
      // Step 5
      confirmationRecipient: "",
      vatNumber: "",
      paymentMethod: "online",
      termsAgreed: false,
      examDate: undefined,
      examTime: "",
    },
  });

  const {
    formState: { errors },
  } = form;
  console.log("errors", errors);

  const { control, handleSubmit, watch, trigger, setValue } = form;

  const formData = watch();

  const selectedCourseData = formData.selectedCourse
    ? COURSES_DATA[formData.selectedCourse as keyof typeof COURSES_DATA]
    : null;
  const selectedWorkshopData = formData.selectedWorkshop
    ? WORKSHOPS_DATA[formData.selectedWorkshop as keyof typeof WORKSHOPS_DATA]
    : null;

  const baseFee = 1400;
  const coursePrice = selectedCourseData
    ? selectedCourseData.price *
      (1 - (selectedCourseData.special_discount || 0) / 100)
    : 0;
  const workshopPrice = selectedWorkshopData?.price || 0;

  const subtotal = baseFee + coursePrice + workshopPrice;
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const onSubmit: SubmitHandler<TIeltsAcademicSchema> = (data) => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Final Form Data:", data);
  };

  return (
    <div className="section base-py">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto base-px ">
        <div className="flex flex-col mb-12 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight">
            IELTS Academic <span className="text-primary">Exam Booking</span>
          </h2>
          <BaseNoteBox
            title="To continue with this booking you will need:"
            notes={NOTICES}
          />
        </div>

        {/* Main Form Container */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Stepper step={1}>Personal details</Stepper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Field>
                <FieldLabel required>Test Date</FieldLabel>
                <FieldContent>
                  <DatePicker
                    value={formData.examDate}
                    onChange={(date) => setValue("examDate", date as Date)}
                    disabled={(date) => date <= new Date()}
                    placeholder="Select test date"
                  />
                  <FieldError errors={[errors.examDate]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>
                  First / given names (including middle name)
                </FieldLabel>
                <FieldContent>
                  <Input
                    placeholder="As per passport"
                    {...control.register("givenNames")}
                  />
                  <FieldError errors={[errors.givenNames]} />
                  <FieldDescription>
                    This must match the name(s) on your identification document.
                  </FieldDescription>
                </FieldContent>
              </Field>

              <div className="space-y-4">
                <Field>
                  <FieldLabel>Surname / family name</FieldLabel>
                  <FieldContent>
                    <Input
                      placeholder="As per passport"
                      {...control.register("surnames")}
                      disabled={formData.noSurname}
                    />
                    <FieldError errors={[errors.surnames]} />
                    <FieldDescription className="flex items-center gap-2">
                      <Checkbox
                        id="noSurname"
                        // className={"border border-primary"}
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
              </div>

              <Field>
                <FieldLabel required>Date of birth</FieldLabel>
                <FieldContent>
                  <DatePicker
                    value={formData.dateOfBirth}
                    onChange={(date) => setValue("dateOfBirth", date as Date)}
                    disabled={(date) =>
                      date <= new Date() || date < new Date("1900-01-01")
                    }
                    placeholder="Select your date of birth"
                  />
                  <FieldError errors={[errors.dateOfBirth]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>Sex</FieldLabel>
                <FieldContent className="mt-4">
                  <RadioGroup
                    onValueChange={(val) => setValue("sex", val)}
                    value={formData.sex}
                    className="flex items-center gap-4 "
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id={"Male"} value={"Male"} />
                      <Label htmlFor={"Male"}>Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id={"Female"} value={"Female"} />
                      <Label htmlFor={"Female"}>Female</Label>
                    </div>
                  </RadioGroup>
                  <FieldError errors={[errors.sex]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>Mobile number</FieldLabel>
                <FieldContent>
                  <PhoneInput
                    value={formData.mobileNumber}
                    onChange={(val) => setValue("mobileNumber", val)}
                    defaultCountry="AE"
                  />
                  <FieldError errors={[errors.mobileNumber]} />
                  <FieldDescription className="flex items-center gap-2">
                    <Checkbox
                      id="smsConsent"
                      // className={"border border-primary"}
                      checked={formData.smsConsent}
                      onCheckedChange={(val) =>
                        setValue("smsConsent", val as boolean)
                      }
                    />
                    <Label htmlFor="smsConsent" className="text-xs font-light">
                      I agree to receive notifications via SMS, WhatsApp, etc.
                    </Label>
                  </FieldDescription>
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel required>Email address</FieldLabel>
                <FieldContent>
                  <Input
                    placeholder="example@email.com"
                    {...control.register("email")}
                  />
                  <FieldError errors={[errors.email]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>Confirm email address</FieldLabel>
                <FieldContent>
                  <Input
                    placeholder="example@email.com"
                    {...control.register("confirmEmail")}
                  />
                  <FieldError errors={[errors.confirmEmail]} />
                </FieldContent>
              </Field>

              {/* <Field>
                <FieldLabel>SMS Consent</FieldLabel>
                <FieldContent className="flex items-start gap-2">
                  <Checkbox
                    checked={formData.smsConsent}
                    onCheckedChange={(val) =>
                      setValue("smsConsent", val as boolean)
                    }
                    className={"border border-primary mt-1"}
                  />
                  <Label className="text-xs text-gray-500">
                    I agree to receive notifications via SMS, WhatsApp, etc.
                  </Label>
                  <FieldError errors={[errors.smsConsent]} />
                </FieldContent>
              </Field> */}

              <Field>
                <FieldLabel required>Country of residence</FieldLabel>
                <FieldContent>
                  <CountryDropdown
                    placeholder="Search country..."
                    value={formData.residenceCountry}
                    onChange={(country) =>
                      setValue("residenceCountry", country.name)
                    }
                  />
                  <FieldError errors={[errors.residenceCountry]} />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel required>Emirates/ City</FieldLabel>
                <FieldContent>
                  <Input {...control.register("city")} />
                  <FieldError errors={[errors.city]} />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel required>Postcode / ZIP</FieldLabel>
                <FieldContent>
                  <Input {...control.register("postcode")} />
                  <FieldError errors={[errors.postcode]} />
                </FieldContent>
              </Field>
              <Field className="col-span-3">
                <FieldLabel required>Postal Address Line 1</FieldLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FieldContent>
                    <Input
                      placeholder="Address Line 1"
                      {...control.register("postalAddress1")}
                    />
                    <FieldError errors={[errors.postalAddress1]} />
                  </FieldContent>
                  <FieldContent>
                    <Input
                      placeholder="Address Line 2"
                      {...control.register("postalAddress2")}
                    />
                  </FieldContent>
                  <FieldContent>
                    <Input
                      placeholder="Address Line 3"
                      {...control.register("postalAddress3")}
                    />
                  </FieldContent>
                </div>
              </Field>

              <Field>
                <FieldLabel required>Identification type</FieldLabel>
                <FieldContent className="mt-4">
                  <RadioGroup
                    onValueChange={(val) => setValue("idType", val)}
                    value={formData.idType}
                    className="flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="passport"
                        id="passport"
                        className={"border-[#A11D1D] text-[#A11D1D]"}
                      />
                      <Label htmlFor="passport">Passport</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="emirates_id"
                        id="emirates_id"
                        className={"border-[#A11D1D] text-[#A11D1D]"}
                      />
                      <Label htmlFor="emirates_id">Emirates ID</Label>
                    </div>
                  </RadioGroup>
                  <FieldError errors={[errors.idType]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>
                  {formData.idType === "emirates_id"
                    ? "ID number"
                    : "Passport number"}
                </FieldLabel>
                <FieldContent>
                  <Input {...control.register("idNumber")} />
                  <FieldError errors={[errors.idNumber]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>
                  {formData.idType === "emirates_id"
                    ? "ID expiry date"
                    : "Passport expiry date"}
                </FieldLabel>
                <FieldContent>
                  <Popover>
                    <PopoverTrigger
                      render={
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-left font-normal rounded-md border border-slate-200 px-3 py-2 text-sm",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.idExpiryDate ? (
                            format(formData.idExpiryDate, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      }
                    />
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.idExpiryDate}
                        onSelect={(date) =>
                          setValue("idExpiryDate", date as Date)
                        }
                        disabled={(date) => date <= new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FieldError errors={[errors.idExpiryDate]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>Issuing authority</FieldLabel>
                <FieldContent>
                  <Input {...control.register("issuingAuthority")} />
                  <FieldError errors={[errors.issuingAuthority]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>Country of nationality</FieldLabel>
                <FieldContent>
                  <CountryDropdown
                    placeholder="Search country..."
                    value={formData.nationality}
                    onChange={(country) =>
                      setValue("nationality", country.name)
                    }
                  />
                  <FieldError errors={[errors.nationality]} />
                </FieldContent>
              </Field>
              <Field className="md:col-span-2 lg:col-span-3">
                <FieldLabel required>
                  Have you taken the CD-IELTS Test before?
                </FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    onValueChange={(val) => setValue("takenBefore", val)}
                    value={formData.takenBefore}
                    className="flex gap-6"
                  >
                    {["Yes", "No"].map((opt) => (
                      <div key={opt} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={opt}
                          id={`taken-${opt}`}
                          className="border-[#A11D1D] text-[#A11D1D]"
                        />
                        <Label
                          htmlFor={`taken-${opt}`}
                          className="font-medium cursor-pointer"
                        >
                          {opt}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.takenBefore]} />
                </FieldContent>
              </Field>

              {formData.takenBefore === "Yes" && (
                <>
                  <Field className="md:col-span-2 lg:col-span-3">
                    <FieldLabel required>Was it less than 2 years?</FieldLabel>
                    <FieldContent className="mt-2">
                      <RadioGroup
                        onValueChange={(val) =>
                          setValue("lessThanTwoYears", val)
                        }
                        value={formData.lessThanTwoYears}
                        className="flex flex-wrap gap-6"
                      >
                        {["Yes", "No", "I do not know"].map((opt) => (
                          <div
                            key={opt}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={opt}
                              id={`less-${opt}`}
                              className="border-[#A11D1D] text-[#A11D1D]"
                            />
                            <Label
                              htmlFor={`less-${opt}`}
                              className="font-medium cursor-pointer"
                            >
                              {opt}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      <FieldError errors={[errors.lessThanTwoYears]} />
                    </FieldContent>
                  </Field>

                  <Field className="md:col-span-2 lg:col-span-3">
                    <FieldLabel required>
                      Do you have an existing IELTS account?
                    </FieldLabel>
                    <FieldContent className="mt-2">
                      <RadioGroup
                        onValueChange={(val) =>
                          setValue("existingAccount", val)
                        }
                        value={formData.existingAccount}
                        className="flex flex-col gap-4"
                      >
                        {["Yes", "No", "I forgot my IELTS account details"].map(
                          (opt) => (
                            <div
                              key={opt}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={opt}
                                id={`acc-${opt}`}
                                className="border-[#A11D1D] text-[#A11D1D]"
                              />
                              <Label
                                htmlFor={`acc-${opt}`}
                                className="font-medium cursor-pointer"
                              >
                                {opt}
                              </Label>
                            </div>
                          ),
                        )}
                      </RadioGroup>
                      <FieldError errors={[errors.existingAccount]} />
                    </FieldContent>
                  </Field>
                </>
              )}

              <Field className="md:col-span-2 lg:col-span-3">
                <FieldLabel required>
                  Do you have any special requirements due to ill health/medical
                  conditions?
                </FieldLabel>
                <FieldContent className="mt-2">
                  <RadioGroup
                    onValueChange={(val) =>
                      setValue("specialRequirements", val)
                    }
                    value={formData.specialRequirements}
                    className="flex gap-6"
                  >
                    {["Yes", "No"].map((opt) => (
                      <div key={opt} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={opt}
                          id={`special-${opt}`}
                          className="border-[#A11D1D] text-[#A11D1D]"
                        />
                        <Label
                          htmlFor={`special-${opt}`}
                          className="font-medium cursor-pointer"
                        >
                          {opt}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.specialRequirements]} />
                </FieldContent>
              </Field>

              {formData.specialRequirements === "Yes" && (
                <Field className="md:col-span-2 lg:col-span-3">
                  <FieldLabel required>
                    Please mention your requirements
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      {...control.register("specialRequirementsMention")}
                      placeholder="Please mention your requirements"
                    />
                    <FieldError errors={[errors.specialRequirementsMention]} />
                  </FieldContent>
                </Field>
              )}

              <Field>
                <FieldLabel required>What is your first language?</FieldLabel>
                <FieldContent>
                  <SearchableDropdown
                    options={languages}
                    placeholder="-Select Language-"
                    value={formData.firstLanguage}
                    onChange={(val) => setValue("firstLanguage", val)}
                  />
                  <FieldError errors={[errors.firstLanguage]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>
                  How many years have you been studying English?
                </FieldLabel>
                <FieldContent>
                  <SearchableDropdown
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
                    onChange={(val) => setValue("yearsStudyingEnglish", val)}
                  />
                  <FieldError errors={[errors.yearsStudyingEnglish]} />
                </FieldContent>
              </Field>

              <Field className="md:col-span-2">
                <FieldLabel required>
                  What level of education have you completed?
                </FieldLabel>
                <FieldContent>
                  <RadioGroup
                    onValueChange={(val) => setValue("educationLevel", val)}
                    value={formData.educationLevel}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {[
                      {
                        id: "secondary_up_to_16",
                        label: "Secondary (up to 16 years)",
                      },
                      {
                        id: "secondary_16_19",
                        label: "Secondary (16-19 years)",
                      },
                      { id: "degree", label: "Degree (or equivalent)" },
                      { id: "post_graduate", label: "Post-graduate" },
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer bg-white"
                      >
                        <RadioGroupItem
                          value={opt.id}
                          id={opt.id}
                          className="border-[#A11D1D] text-[#A11D1D]"
                        />
                        <Label
                          htmlFor={opt.id}
                          className="font-medium cursor-pointer"
                        >
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.educationLevel]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>What is your occupation level?</FieldLabel>
                <FieldContent>
                  <SearchableDropdown
                    options={[
                      { label: "Self-employed", value: "Self-employed" },
                      {
                        label: "Employer/Partner",
                        value: "Employer/Partner",
                      },
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
                    onChange={(val) => setValue("occupationLevel", val)}
                  />
                  <FieldError errors={[errors.occupationLevel]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>
                  What is your occupation sector?
                </FieldLabel>
                <FieldContent>
                  <SearchableDropdown
                    options={[
                      {
                        label: "Administrative Services",
                        value: "Administrative Services",
                      },
                      {
                        label: "Agriculture, Fishing, Forestry, Mining",
                        value: "Agriculture, Fishing, Forestry, Mining",
                      },
                      {
                        label: "Arts and Entertainment",
                        value: "Arts and Entertainment",
                      },
                      {
                        label: "Banking and Finance",
                        value: "Banking and Finance",
                      },
                      {
                        label: "Catering and Leisure",
                        value: "Catering and Leisure",
                      },
                      {
                        label: "Construction Industries",
                        value: "Construction Industries",
                      },
                      {
                        label: "Craft and Design",
                        value: "Craft and Design",
                      },
                      { label: "Education", value: "Education" },
                      {
                        label: "Health and Social Services",
                        value: "Health and Social Services",
                      },
                      {
                        label: "Installation, Maintenance and Repair Services",
                        value: "Installation, Maintenance and Repair Services",
                      },
                      {
                        label: "Law and Legal Services",
                        value: "Law and Legal Services",
                      },
                      {
                        label: "Manufacturing and Assembly Services",
                        value: "Manufacturing and Assembly Services",
                      },
                      {
                        label: "Personal Services",
                        value: "Personal Services",
                      },
                      { label: "Retail Trade", value: "Retail Trade" },
                      {
                        label: "Technical and Scientific",
                        value: "Technical and Scientific",
                      },
                      {
                        label: "Telecommunications and the Media",
                        value: "Telecommunications and the Media",
                      },
                      { label: "Transport", value: "Transport" },
                      {
                        label: "Utilities (Gas, Water, Electricity etc)",
                        value: "Utilities (Gas, Water, Electricity etc)",
                      },
                      {
                        label: "Wholesale Trade",
                        value: "Wholesale Trade",
                      },
                      { label: "Other", value: "Other" },
                    ]}
                    placeholder="-Select Sector-"
                    value={formData.occupationSector}
                    onChange={(val) => setValue("occupationSector", val)}
                  />
                  <FieldError errors={[errors.occupationSector]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>Why are you taking the test?</FieldLabel>
                <FieldContent>
                  <SearchableDropdown
                    options={[
                      {
                        label:
                          "Higher education extended course (3 months or more)",
                        value: "higher_edu_long",
                      },
                      {
                        label:
                          "Higher education short course (3 months or less)",
                        value: "higher_edu_short",
                      },
                      {
                        label: "Other educational purposes",
                        value: "other_edu",
                      },
                      {
                        label: "Registration as a doctor",
                        value: "reg_doctor",
                      },
                      { label: "Immigration", value: "immigration" },
                      { label: "Employment", value: "employment" },
                      {
                        label: "Professional registration (not medical)",
                        value: "prof_reg_non_medical",
                      },
                      { label: "Personal reasons", value: "personal" },
                      {
                        label: "Registration as a nurse (including CGFNS)",
                        value: "reg_nurse",
                      },
                      {
                        label: "Registration as a dentist",
                        value: "reg_dentist",
                      },
                      { label: "Missing/Invalid", value: "missing" },
                      { label: "Other", value: "other" },
                    ]}
                    placeholder="-Select Reason-"
                    value={formData.reasonForTakingTest}
                    onChange={(val) => setValue("reasonForTakingTest", val)}
                  />
                  <FieldError errors={[errors.reasonForTakingTest]} />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel required>
                  Which country / territory do you want to study / work / live
                  in?
                </FieldLabel>
                <FieldContent>
                  <CountryDropdown
                    placeholder="-Select Country-"
                    value={formData.destinationCountry}
                    onChange={(country) =>
                      setValue("destinationCountry", country.name)
                    }
                  />
                  <FieldError errors={[errors.destinationCountry]} />
                </FieldContent>
              </Field>
              <Field className="col-span-3">
                <FieldLabel>Add ons</FieldLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-gray-700">
                      Workshops
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.values(WORKSHOPS_DATA).map((workshop) => (
                        <div
                          key={workshop.id}
                          className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <Checkbox
                            id={workshop.id}
                            checked={formData.selectedWorkshop === workshop.id}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setValue("selectedWorkshop", workshop.id);
                              } else {
                                setValue("selectedWorkshop", "");
                              }
                            }}
                          />
                          <div className="flex flex-col">
                            <Label
                              htmlFor={workshop.id}
                              className="font-bold cursor-pointer text-sm"
                            >
                              {workshop.name}
                            </Label>
                            <span className="text-[10px] text-gray-500">
                              {workshop.duration} • {workshop.price}{" "}
                              {workshop.currency}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-gray-700">
                      Courses (Special Discount)
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.values(COURSES_DATA).map((course) => (
                        <div
                          key={course.id}
                          className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <Checkbox
                            id={course.id}
                            checked={formData.selectedCourse === course.id}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setValue("selectedCourse", course.id);
                              } else {
                                setValue("selectedCourse", "");
                              }
                            }}
                          />
                          <div className="flex flex-col">
                            <Label
                              htmlFor={course.id}
                              className="font-bold cursor-pointer text-sm"
                            >
                              {course.name}
                            </Label>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-gray-400 line-through">
                                {course.price} {course.currency}
                              </span>
                              <span className="text-[10px] text-primary font-bold">
                                {(
                                  course.price *
                                  (1 - course.special_discount / 100)
                                ).toFixed(0)}{" "}
                                {course.currency}
                                <span className="ml-1 text-[8px] bg-primary/10 px-1 rounded">
                                  -{course.special_discount}%
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Field>

              <Field className="col-span-3">
                <FieldLabel>Marketing preferences</FieldLabel>
                <FieldContent className="mt-4">
                  <RadioGroup
                    onValueChange={(val) =>
                      setValue("marketingPreference", val)
                    }
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
                      <div key={opt.id} className="flex items-center gap-2">
                        <RadioGroupItem
                          value={opt.id}
                          id={`mkt-${opt.id}`}
                          className={"border-[#A11D1D] text-[#A11D1D]"}
                        />
                        <Label
                          htmlFor={`mkt-${opt.id}`}
                          className="text-sm cursor-pointer"
                        >
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <FieldError errors={[errors.marketingPreference]} />
                </FieldContent>
              </Field>
              {/* Step 4: Your profile */}
              {/* <section id="profile" className="space-y-12">
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      4
                    </span>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Your profile
                    </h3>
                  </div>

                  <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 md:p-8 flex items-start gap-4">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-amber-800 text-sm font-medium leading-relaxed">
                      Answering these questions has no impact on your IELTS test
                      results. These questions will help us improve our services
                      to test takers like you.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                    <Field className="md:col-span-2 lg:col-span-3">
                      <FieldLabel required>
                        Have you taken the CD-IELTS Test before?
                      </FieldLabel>
                      <FieldContent className="mt-2">
                        <RadioGroup
                          onValueChange={(val) => setValue("takenBefore", val)}
                          value={formData.takenBefore}
                          className="flex gap-6"
                        >
                          {["Yes", "No"].map((opt) => (
                            <div
                              key={opt}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={opt}
                                id={`taken-${opt}`}
                                className="border-[#A11D1D] text-[#A11D1D]"
                              />
                              <Label
                                htmlFor={`taken-${opt}`}
                                className="font-medium cursor-pointer"
                              >
                                {opt}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <FieldError errors={[errors.takenBefore]} />
                      </FieldContent>
                    </Field>

                    {formData.takenBefore === "Yes" && (
                      <>
                        <Field className="md:col-span-2 lg:col-span-3">
                          <FieldLabel required>
                            Was it less than 2 years?
                          </FieldLabel>
                          <FieldContent className="mt-2">
                            <RadioGroup
                              onValueChange={(val) =>
                                setValue("lessThanTwoYears", val)
                              }
                              value={formData.lessThanTwoYears}
                              className="flex flex-wrap gap-6"
                            >
                              {["Yes", "No", "I do not know"].map((opt) => (
                                <div
                                  key={opt}
                                  className="flex items-center space-x-2"
                                >
                                  <RadioGroupItem
                                    value={opt}
                                    id={`less-${opt}`}
                                    className="border-[#A11D1D] text-[#A11D1D]"
                                  />
                                  <Label
                                    htmlFor={`less-${opt}`}
                                    className="font-medium cursor-pointer"
                                  >
                                    {opt}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                            <FieldError errors={[errors.lessThanTwoYears]} />
                          </FieldContent>
                        </Field>

                        <Field className="md:col-span-2 lg:col-span-3">
                          <FieldLabel required>
                            Do you have an existing IELTS account?
                          </FieldLabel>
                          <FieldContent className="mt-2">
                            <RadioGroup
                              onValueChange={(val) =>
                                setValue("existingAccount", val)
                              }
                              value={formData.existingAccount}
                              className="flex flex-col gap-4"
                            >
                              {[
                                "Yes",
                                "No",
                                "I forgot my IELTS account details",
                              ].map((opt) => (
                                <div
                                  key={opt}
                                  className="flex items-center space-x-2"
                                >
                                  <RadioGroupItem
                                    value={opt}
                                    id={`acc-${opt}`}
                                    className="border-[#A11D1D] text-[#A11D1D]"
                                  />
                                  <Label
                                    htmlFor={`acc-${opt}`}
                                    className="font-medium cursor-pointer"
                                  >
                                    {opt}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                            <FieldError errors={[errors.existingAccount]} />
                          </FieldContent>
                        </Field>
                      </>
                    )}

                    <Field className="md:col-span-2 lg:col-span-3">
                      <FieldLabel required>
                        Do you have any special requirements due to ill
                        health/medical conditions?
                      </FieldLabel>
                      <FieldContent className="mt-2">
                        <RadioGroup
                          onValueChange={(val) =>
                            setValue("specialRequirements", val)
                          }
                          value={formData.specialRequirements}
                          className="flex gap-6"
                        >
                          {["Yes", "No"].map((opt) => (
                            <div
                              key={opt}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={opt}
                                id={`special-${opt}`}
                                className="border-[#A11D1D] text-[#A11D1D]"
                              />
                              <Label
                                htmlFor={`special-${opt}`}
                                className="font-medium cursor-pointer"
                              >
                                {opt}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <FieldError errors={[errors.specialRequirements]} />
                      </FieldContent>
                    </Field>

                    {formData.specialRequirements === "Yes" && (
                      <Field className="md:col-span-2 lg:col-span-3">
                        <FieldLabel required>
                          Please mention your requirements
                        </FieldLabel>
                        <FieldContent>
                          <Input
                            {...control.register("specialRequirementsMention")}
                            placeholder="Please mention your requirements"
                          />
                          <FieldError
                            errors={[errors.specialRequirementsMention]}
                          />
                        </FieldContent>
                      </Field>
                    )}

                    <Field>
                      <FieldLabel required>
                        What is your first language?
                      </FieldLabel>
                      <FieldContent>
                        <SearchableDropdown
                          options={languages}
                          placeholder="-Select Language-"
                          value={formData.firstLanguage}
                          onChange={(val) => setValue("firstLanguage", val)}
                        />
                        <FieldError errors={[errors.firstLanguage]} />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel required>
                        How many years have you been studying English?
                      </FieldLabel>
                      <FieldContent>
                        <SearchableDropdown
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
                          onChange={(val) =>
                            setValue("yearsStudyingEnglish", val)
                          }
                        />
                        <FieldError errors={[errors.yearsStudyingEnglish]} />
                      </FieldContent>
                    </Field>

                    <Field className="md:col-span-2 lg:col-span-3">
                      <FieldLabel required>
                        What level of education have you completed?
                      </FieldLabel>
                      <FieldContent className="mt-2">
                        <RadioGroup
                          onValueChange={(val) =>
                            setValue("educationLevel", val)
                          }
                          value={formData.educationLevel}
                          className="grid grid-cols-1 md:grid-cols-2 gap-3"
                        >
                          {[
                            {
                              id: "secondary_up_to_16",
                              label: "Secondary (up to 16 years)",
                            },
                            {
                              id: "secondary_16_19",
                              label: "Secondary (16-19 years)",
                            },
                            { id: "degree", label: "Degree (or equivalent)" },
                            { id: "post_graduate", label: "Post-graduate" },
                          ].map((opt) => (
                            <div
                              key={opt.id}
                              className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer bg-white"
                            >
                              <RadioGroupItem
                                value={opt.id}
                                id={opt.id}
                                className="border-[#A11D1D] text-[#A11D1D]"
                              />
                              <Label
                                htmlFor={opt.id}
                                className="font-medium cursor-pointer"
                              >
                                {opt.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <FieldError errors={[errors.educationLevel]} />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel required>
                        What is your occupation level?
                      </FieldLabel>
                      <FieldContent>
                        <SearchableDropdown
                          options={[
                            { label: "Self-employed", value: "Self-employed" },
                            {
                              label: "Employer/Partner",
                              value: "Employer/Partner",
                            },
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
                          onChange={(val) => setValue("occupationLevel", val)}
                        />
                        <FieldError errors={[errors.occupationLevel]} />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel required>
                        What is your occupation sector?
                      </FieldLabel>
                      <FieldContent>
                        <SearchableDropdown
                          options={[
                            {
                              label: "Administrative Services",
                              value: "Administrative Services",
                            },
                            {
                              label: "Agriculture, Fishing, Forestry, Mining",
                              value: "Agriculture, Fishing, Forestry, Mining",
                            },
                            {
                              label: "Arts and Entertainment",
                              value: "Arts and Entertainment",
                            },
                            {
                              label: "Banking and Finance",
                              value: "Banking and Finance",
                            },
                            {
                              label: "Catering and Leisure",
                              value: "Catering and Leisure",
                            },
                            {
                              label: "Construction Industries",
                              value: "Construction Industries",
                            },
                            {
                              label: "Craft and Design",
                              value: "Craft and Design",
                            },
                            { label: "Education", value: "Education" },
                            {
                              label: "Health and Social Services",
                              value: "Health and Social Services",
                            },
                            {
                              label:
                                "Installation, Maintenance and Repair Services",
                              value:
                                "Installation, Maintenance and Repair Services",
                            },
                            {
                              label: "Law and Legal Services",
                              value: "Law and Legal Services",
                            },
                            {
                              label: "Manufacturing and Assembly Services",
                              value: "Manufacturing and Assembly Services",
                            },
                            {
                              label: "Personal Services",
                              value: "Personal Services",
                            },
                            { label: "Retail Trade", value: "Retail Trade" },
                            {
                              label: "Technical and Scientific",
                              value: "Technical and Scientific",
                            },
                            {
                              label: "Telecommunications and the Media",
                              value: "Telecommunications and the Media",
                            },
                            { label: "Transport", value: "Transport" },
                            {
                              label: "Utilities (Gas, Water, Electricity etc)",
                              value: "Utilities (Gas, Water, Electricity etc)",
                            },
                            {
                              label: "Wholesale Trade",
                              value: "Wholesale Trade",
                            },
                            { label: "Other", value: "Other" },
                          ]}
                          placeholder="-Select Sector-"
                          value={formData.occupationSector}
                          onChange={(val) => setValue("occupationSector", val)}
                        />
                        <FieldError errors={[errors.occupationSector]} />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel required>
                        Why are you taking the test?
                      </FieldLabel>
                      <FieldContent>
                        <SearchableDropdown
                          options={[
                            {
                              label:
                                "Higher education extended course (3 months or more)",
                              value: "higher_edu_long",
                            },
                            {
                              label:
                                "Higher education short course (3 months or less)",
                              value: "higher_edu_short",
                            },
                            {
                              label: "Other educational purposes",
                              value: "other_edu",
                            },
                            {
                              label: "Registration as a doctor",
                              value: "reg_doctor",
                            },
                            { label: "Immigration", value: "immigration" },
                            { label: "Employment", value: "employment" },
                            {
                              label: "Professional registration (not medical)",
                              value: "prof_reg_non_medical",
                            },
                            { label: "Personal reasons", value: "personal" },
                            {
                              label:
                                "Registration as a nurse (including CGFNS)",
                              value: "reg_nurse",
                            },
                            {
                              label: "Registration as a dentist",
                              value: "reg_dentist",
                            },
                            { label: "Missing/Invalid", value: "missing" },
                            { label: "Other", value: "other" },
                          ]}
                          placeholder="-Select Reason-"
                          value={formData.reasonForTakingTest}
                          onChange={(val) =>
                            setValue("reasonForTakingTest", val)
                          }
                        />
                        <FieldError errors={[errors.reasonForTakingTest]} />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel required>
                        Which country / territory do you want to study / work /
                        live in?
                      </FieldLabel>
                      <FieldContent>
                        <CountryDropdown
                          placeholder="-Select Country-"
                          value={formData.destinationCountry}
                          onChange={(country) =>
                            setValue("destinationCountry", country.name)
                          }
                        />
                        <FieldError errors={[errors.destinationCountry]} />
                      </FieldContent>
                    </Field>
                  </div>
                </section> */}
            </div>
          </form>
        ) : (
          <div className="animate-in fade-in zoom-in duration-700">
            {formData.paymentMethod === "online" && (
              <div className="mb-16 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                    Complete Your Payment
                  </h2>
                  <p className="text-gray-500 font-medium max-w-md mx-auto">
                    Please provide your payment details below to finalize your
                    registration and secure your test date.
                  </p>
                </div>
                <div className="max-w-xl mx-auto">
                  <Payment amount={total} currency="aed" />
                </div>
              </div>
            )}

            <div className="text-center py-12 space-y-8">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100/50">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                  Registration Submitted!
                </h2>
                <p className="text-gray-500 max-w-md mx-auto font-medium leading-relaxed">
                  Thank you for choosing our center. Your IELTS Academic
                  registration has been successfully recorded.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 max-w-lg mx-auto text-left space-y-6">
                <h3 className="font-black text-gray-900 uppercase tracking-widest text-xs border-b border-slate-200 pb-4">
                  Next Steps
                </h3>

                <div className="space-y-4">
                  {formData.paymentMethod === "online" ? (
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">
                        1
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Check your email{" "}
                        <span className="font-bold text-gray-900">
                          {formData.email}
                        </span>{" "}
                        for an instant confirmation and payment receipt.
                      </p>
                    </div>
                  ) : formData.paymentMethod === "bank_transfer" ? (
                    <>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">
                          1
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Transfer the total amount to the bank details sent to
                          your email.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">
                          2
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Upload your transfer receipt via the link in your
                          email to confirm your booking.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">
                        1
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Visit our center within the next 48 hours to complete
                        your payment and secure your test date.
                      </p>
                    </div>
                  )}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">
                      {formData.paymentMethod === "bank_transfer" ? "3" : "2"}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Prepare for your test using the free resources available
                      in your candidate portal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg"
                >
                  Return to home
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
