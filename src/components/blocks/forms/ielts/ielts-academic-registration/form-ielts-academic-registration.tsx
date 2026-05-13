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
  Save,
  Edit3,
  User,
  ShieldCheck,
  Globe,
  Mail,
  Phone,
  FileText,
  Calendar as CalendarIcon,
} from "lucide-react";
import { IeltsAcademicSchema, type TIeltsAcademicSchema } from "./_type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";
import { languages } from "@/lib/languages-data";

import { Building2, Banknote, BookOpen, CheckSquare } from "lucide-react";
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
  "For your convenience, The Exam Preparation & Testing House L.L.C. offers the CD-IELTS test registration service. We hold no responsibility regarding any issues related to test results or scoring and we have no control or involvement in the test itself, the scoring of the test or the release of the results. This service is optional and candidates can book the exam directly on the exam provider’s website and select our venue and take the test.",

  "If there are insufficient candidate numbers, the test might not be held at our testing venue. If needed, candidates will be informed and moved to the nearest available testing venue as determined by the British Council. Please ensure you provide your current cellphone number and email address when you register.",

  "It is very important that you provide your full address information including the P.O. Box number and/or Postal Code (Zip Code). TEPTH holds no responsibility regarding the delivery of your original IELTS Score Report. If you take IELTS on computer, you will receive your results electronically only. You can download the electronic version (eTRF) from the Test Taker portal 1–8 days after your test. The British Council will not issue an additional paper Test Report Form.",

  "You can print your electronic Test Report Form (eTRF) to send it to the organisations you are applying to, or you can send it via email. Alternatively, you can send your results directly to the organisation through the Test Taker portal.",

  "If you have a permanent disability that is causing you a learning difficulty that requires a special arrangement, please do not complete this online form and contact us. Our employees would be happy to assist you further.",

  "Please note all personal details provided on this page must match the Test Taker's identification document used for registration and presented at the test location, as these will appear on the Test Taker's Test Report Form (TRF). Once registration is complete, the exam provider may charge a fee if you ask them to modify any of this information before they issue the TRF. Please note that no modifications can be made after the TRF is issued.",
];
export default function FormIELTSAcademicRegistration() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [savedData, setSavedData] = useState<TIeltsAcademicSchema | null>(null);

  const form = useForm<TIeltsAcademicSchema>({
    resolver: zodResolver(IeltsAcademicSchema),
    defaultValues: {
      testModule: "",
      bookingFor: "",
      givenNames: "",
      surnames: "",
      noSurname: false,
      dateOfBirth: undefined,
      sex: "male",
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
      // examTime: "",
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

  const serviceFee = 100;
  const total = baseFee + coursePrice + workshopPrice + serviceFee;

  const onSubmit: SubmitHandler<TIeltsAcademicSchema> = (data) => {
    console.log("Final Form Data:", data);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsSubmitted(true);
    setSavedData(data);
  };

  return (
    <div className="section base-py">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto base-px ">
        <div className="flex flex-col mb-12 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight">
            IELTS Academic <span className="text-primary">Exam Booking</span>
          </h2>
          <BaseNoteBox title="Tearms and Conditions:" notes={NOTICES} />
        </div>

        {isSubmitted && savedData ? (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight">
                    Review Your Details
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:text-primary hover:bg-primary/5 font-bold flex items-center gap-2 px-4 py-2"
                >
                  <Edit3 className="size-4" /> Edit Details
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Personal Category */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <User className="size-4" />
                    <span className="text-xs font-bold  tracking-widest">
                      Personal Details
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Full Name
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {savedData.givenNames} {savedData.middleName}{" "}
                        {savedData.surnames}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Date of Birth
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {savedData.dateOfBirth
                          ? format(new Date(savedData.dateOfBirth), "PPP")
                          : "N/A"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Gender
                      </span>
                      <span className="text-sm font-semibold text-slate-700 capitalize">
                        {savedData.sex}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Identity & Contact */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck className="size-4" />
                    <span className="text-xs font-bold  tracking-widest">
                      Identity & Contact
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        {savedData.idType?.replace("_", " ")}
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {savedData.idNumber}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Email
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {savedData.email}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Mobile
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {savedData.mobileNumber}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Test Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Globe className="size-4" />
                    <span className="text-xs font-bold  tracking-widest">
                      Test Information
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Exam Date
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {savedData.examDate
                          ? format(new Date(savedData.examDate), "PPPP")
                          : "N/A"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Location
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {savedData.residenceCountry}, {savedData.city}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold ">
                        Nationality
                      </span>
                      <span className="text-sm font-semibold text-slate-700">
                        {savedData.nationality}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Stepper step={3}>
              Secure Payment{" "}
              <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary ml-2">
                {total.toFixed(2)}{" "}
                <span className="font-normal text-xs  tracking-wider">AED</span>
              </span>
            </Stepper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="bg-white rounded-2xl border border-slate-100">
                  <Payment amount={total} currency={"aed"} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Previous
                  </Button>
                  <Button type="button">Submit</Button>
                </div>
              </div>

              <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 space-y-6 h-fit md:sticky md:top-24">
                <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg text-slate-800">
                    Order Summary
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">IELTS Academic Exam</span>
                    <span className="font-medium">
                      {baseFee.toFixed(2)} AED
                    </span>
                  </div>

                  {formData.selectedCourse && selectedCourseData && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Course: {selectedCourseData.name}
                      </span>
                      <span className="font-medium text-emerald-600">
                        +{coursePrice.toFixed(2)} AED
                      </span>
                    </div>
                  )}

                  {formData.selectedWorkshop && selectedWorkshopData && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Workshop: {selectedWorkshopData.name}
                      </span>
                      <span className="font-medium text-emerald-600">
                        +{workshopPrice.toFixed(2)} AED
                      </span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Service Fee</span>
                      <span className="font-medium text-slate-600">
                        {serviceFee.toFixed(2)} AED
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="font-black text-slate-900  tracking-tight">
                      Total Amount
                    </span>
                    <span className="text-3xl font-black text-primary">
                      {total.toFixed(2)}{" "}
                      <span className="text-xs font-bold text-primary/60 ">
                        AED
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-3">
              <Stepper step={1}>select date</Stepper>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field data-invalid={!!errors.examDate}>
                  <FieldContent>
                    <DatePicker
                      value={formData.examDate}
                      onChange={(date) => setValue("examDate", date as Date)}
                      disabled={(date) => date <= new Date()}
                      placeholder="Select your exam date"
                      aria-invalid={!!errors.examDate}
                    />
                    <FieldError errors={[errors.examDate]} />
                  </FieldContent>
                </Field>
              </div>
            </div>
            <div className="space-y-3">
              <Stepper step={2}>Personal details</Stepper>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Field data-invalid={!!errors.givenNames}>
                  <FieldLabel required>First / given names</FieldLabel>
                  <FieldContent>
                    <Input
                      placeholder="As per passport"
                      aria-invalid={!!errors.givenNames}
                      {...control.register("givenNames")}
                    />
                    <FieldError errors={[errors.givenNames]} />
                    <FieldDescription>
                      This must match the name(s) on your identification
                      document.
                    </FieldDescription>
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Middle names</FieldLabel>
                  <FieldContent>
                    <Input
                      placeholder="As per passport"
                      {...control.register("middleName")}
                    />
                  </FieldContent>
                </Field>

                <div className="space-y-4">
                  <Field data-invalid={!!errors.surnames}>
                    <FieldLabel>Surname / family name</FieldLabel>
                    <FieldContent>
                      <Input
                        placeholder="As per passport"
                        aria-invalid={!!errors.surnames}
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
                        <Label
                          htmlFor="noSurname"
                          className="text-xs font-light"
                        >
                          I don't have a surname / family name
                        </Label>
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                </div>

                <Field data-invalid={!!errors.dateOfBirth}>
                  <FieldLabel required>Date of birth</FieldLabel>
                  <FieldContent>
                    <DatePicker
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
                      onValueChange={(val) => setValue("sex", val)}
                      value={formData.sex}
                      className="grid grid-cols-2 gap-3"
                    >
                      {["male", "female"].map((opt) => (
                        <Label
                          key={opt}
                          htmlFor={opt}
                          data-invalid={!!errors.sex}
                          className="flex items-center space-x-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-all bg-white font-medium cursor-pointer data-[invalid=true]:border-destructivem capitalize"
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
                      value={formData.mobileNumber}
                      onChange={(val) => setValue("mobileNumber", val)}
                      defaultCountry="AE"
                      aria-invalid={!!errors.mobileNumber}
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
                      <Label
                        htmlFor="smsConsent"
                        className="text-xs font-light"
                      >
                        I agree to receive notifications via SMS, WhatsApp, etc.
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
                      {...control.register("email")}
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
                      {...control.register("confirmEmail")}
                    />
                    <FieldError errors={[errors.confirmEmail]} />
                  </FieldContent>
                </Field>

                <Field data-invalid={!!errors.residenceCountry}>
                  <FieldLabel required>Country of residence</FieldLabel>
                  <FieldContent>
                    <CountryDropdown
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
                <Field data-invalid={!!errors.city}>
                  <FieldLabel required>Emirates/ City</FieldLabel>
                  <FieldContent>
                    <Input
                      {...control.register("city")}
                      placeholder="Enter your city"
                      aria-invalid={!!errors.city}
                    />
                    <FieldError errors={[errors.city]} />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Postcode</FieldLabel>
                  <FieldContent>
                    <Input
                      {...control.register("postcode")}
                      placeholder="Enter your postcode"
                    />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>P.O. Box</FieldLabel>
                  <FieldContent>
                    <Input
                      {...control.register("poBox")}
                      placeholder="Enter your P.O. Box"
                    />
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

                <Field data-invalid={!!errors.idType}>
                  <FieldLabel required>Identification type</FieldLabel>
                  <FieldContent>
                    <RadioGroup
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
                    <FieldDescription>
                      <strong>Note:</strong> On the test day, you will be
                      required to bring the same identification document you are
                      using for this registration.
                    </FieldDescription>
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
                      {...control.register("idNumber")}
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
                      value={formData.idExpiryDate}
                      onChange={(date) =>
                        setValue("idExpiryDate", date as Date)
                      }
                      aria-invalid={!!errors.idExpiryDate}
                      disabled={(date) => date <= new Date()}
                      placeholder={`Select ${
                        formData.idType === "emirates_id" ? "ID" : "Passport"
                      } expiry date`}
                    />
                    <FieldError errors={[errors.idExpiryDate]} />
                  </FieldContent>
                </Field>

                <Field data-invalid={!!errors.issuingAuthority}>
                  <FieldLabel required>Issuing authority</FieldLabel>
                  <FieldContent>
                    <Input
                      {...control.register("issuingAuthority")}
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
                      placeholder="Search country..."
                      value={formData.nationality}
                      aria-invalid={!!errors.nationality}
                      onChange={(country) =>
                        setValue("nationality", country.name)
                      }
                    />
                    <FieldError errors={[errors.nationality]} />
                  </FieldContent>
                </Field>
                <Field
                  className="md:col-span-2 lg:col-span-3"
                  data-invalid={!!errors.takenBefore}
                >
                  <FieldLabel required>
                    Have you taken the CD-IELTS Test before?
                  </FieldLabel>
                  <FieldContent className="mt-2">
                    <RadioGroup
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
                      <FieldLabel required>
                        Was it less than 2 years?
                      </FieldLabel>
                      <FieldContent className="mt-2">
                        <RadioGroup
                          onValueChange={(val) =>
                            setValue("lessThanTwoYears", val)
                          }
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
                          onValueChange={(val) =>
                            setValue("existingAccount", val)
                          }
                          value={formData.existingAccount}
                          className="flex flex-col gap-3"
                        >
                          {[
                            "Yes",
                            "No",
                            "I forgot my IELTS account details",
                          ].map((opt) => (
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

                <Field
                  className="md:col-span-2 lg:col-span-3"
                  data-invalid={!!errors.specialRequirements}
                >
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
                    <FieldLabel required>
                      Please mention your requirements
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        {...control.register("specialRequirementsMention")}
                        aria-invalid={!!errors.specialRequirementsMention}
                        placeholder="Please mention your requirements"
                      />
                      <FieldError
                        errors={[errors.specialRequirementsMention]}
                      />
                    </FieldContent>
                  </Field>
                )}

                <Field data-invalid={!!errors.firstLanguage}>
                  <FieldLabel required>What is your first language?</FieldLabel>
                  <FieldContent>
                    <SearchableDropdown
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
                      aria-invalid={!!errors.occupationLevel}
                      onChange={(val) => setValue("occupationLevel", val)}
                    />
                    <FieldError errors={[errors.occupationLevel]} />
                  </FieldContent>
                </Field>

                <Field data-invalid={!!errors.occupationSector}>
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
                      aria-invalid={!!errors.reasonForTakingTest}
                      onChange={(val) => setValue("reasonForTakingTest", val)}
                    />
                    <FieldError errors={[errors.reasonForTakingTest]} />
                  </FieldContent>
                </Field>

                <Field data-invalid={!!errors.destinationCountry}>
                  <FieldLabel required>
                    Which country / territory do you want to study / work / live
                    in?
                  </FieldLabel>
                  <FieldContent>
                    <CountryDropdown
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
                <Field className="col-span-3">
                  <FieldLabel>Add-ons Services</FieldLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field>
                      <FieldLabel>Courses</FieldLabel>
                      <FieldContent>
                        <SearchableDropdown
                          options={[
                            { label: "None", value: "" },
                            ...Object.values(COURSES_DATA).map((c) => ({
                              label: c.name,
                              description: `${(c.price * (1 - c.special_discount / 100)).toFixed(0)} ${c.currency} (${c.special_discount}% OFF)`,
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
                          options={[
                            { label: "None", value: "" },
                            ...Object.values(WORKSHOPS_DATA).map((w) => ({
                              label: w.name,
                              description: `${w.duration} • ${w.price} ${w.currency}`,
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
                      "Save 10% off when you book your exam and register for the course with TEPTH and pay online on our website.",
                      "Free Prep. Material",
                      "Free Consultation",
                      "Free Mock Test",
                    ]}
                  />
                </Field>

                <Field
                  className="col-span-3"
                  data-invalid={!!errors.marketingPreference}
                >
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
                <Button type="submit">
                  {" "}
                  <Save /> Save and Procced
                </Button>
              </div>
            </div>
            {/* <Stepper step={2}>
            Secure Payment{" "}
            <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary ml-2">
              {total.toFixed(2)}{" "}
              <span className="font-normal text-xs  tracking-wider">
                AED
              </span>
            </span>
          </Stepper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-slate-100">
                <Payment amount={total} currency={"aed"} />
              </div>
              <Button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group mt-4"
              >
                Submit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 space-y-6 h-fit md:sticky md:top-24">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                <CreditCard className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-slate-800">
                  Order Summary
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">IELTS Academic Exam</span>
                  <span className="font-medium">{baseFee.toFixed(2)} AED</span>
                </div>

                {formData.selectedCourse && selectedCourseData && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Course: {selectedCourseData.name}
                    </span>
                    <span className="font-medium text-emerald-600">
                      +{coursePrice.toFixed(2)} AED
                    </span>
                  </div>
                )}

                {formData.selectedWorkshop && selectedWorkshopData && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Workshop: {selectedWorkshopData.name}
                    </span>
                    <span className="font-medium text-emerald-600">
                      +{workshopPrice.toFixed(2)} AED
                    </span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Service Fee</span>
                    <span className="font-medium text-slate-600">
                      {serviceFee.toFixed(2)} AED
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="font-black text-slate-900  tracking-tight">
                    Total Amount
                  </span>
                  <span className="text-3xl font-black text-primary">
                    {total.toFixed(2)}{" "}
                    <span className="text-xs font-bold text-primary/60 ">
                      AED
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          </form>
        )}
      </div>
    </div>
  );
}
