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
import { IeltsAcademicSchema, type TIeltsAcademicSchema } from "./-type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";
import { languages } from "@/lib/languages-data";
import { courses, workshops } from "@/lib/data";
import { BookOpen, Calendar as CalendarIcon, CheckSquare, Building2, Banknote } from "lucide-react";
import Payment from "../../../payment";
import { ExamDateSelector } from "@/components/blocks/calendar-booking/exam-date-selector";


export default function FormIELTSAcademicRegistration() {
  const [step, setStep] = useState(1);
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

  const { control, handleSubmit, watch, trigger } = form;

  const formData = watch();

  const selectedCourseData = courses.find(c => c.id === formData.selectedCourse);
  const selectedWorkshopData = workshops.find(w => w.id === formData.selectedWorkshop);

  const baseFee = 1400;
  const coursePrice = selectedCourseData?.price || 0;
  const workshopPrice = selectedWorkshopData?.price || 0;
  const subtotal = baseFee + coursePrice + workshopPrice;
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const onSubmit: SubmitHandler<TIeltsAcademicSchema> = (data) => {
    if (step === 6) {
      if (data.paymentMethod === "online") {
        setStep(7);
      } else {
        setStep(8);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (step < 8) {
      handleNext();
      return;
    }
    console.log("Final Form Data:", data);
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStep(step);
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getFieldsForStep = (currentStep: number): (keyof TIeltsAcademicSchema)[] => {
    switch (currentStep) {
      case 1:
        return ["examDate", "examTime"];
      case 2:
        return [
          "testModule",
          "bookingFor",
          "givenNames",
          "surnames",
          "noSurname",
          "dateOfBirth",
          "sex",
          "email",
          "confirmEmail",
          "mobileNumber",
          "smsConsent",
          "residenceCountry",
          "postalAddress1",
          "city",
          "postcode",
          "marketingPreference",
        ];
      case 3:
        return [
          "idType",
          "idNumber",
          "idExpiryDate",
          "issuingAuthority",
          "nationality",
        ];
      case 4:
        return [
          "takenBefore",
          "lessThanTwoYears",
          "existingAccount",
          "specialRequirements",
          "specialRequirementsMention",
          "firstLanguage",
          "yearsStudyingEnglish",
          "educationLevel",
          "occupationLevel",
          "occupationSector",
          "reasonForTakingTest",
          "destinationCountry",
        ];
      case 5:
        return ["selectedCourse", "selectedWorkshop"];
      case 6:
        return ["confirmationRecipient", "paymentMethod", "termsAgreed"];
      default:
        return [];
    }
  };

  return (
    <div className="section base-py">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto base-px ">
        <div className="flex flex-col mb-8">
          <span className="section-label">Step {step} of 8</span>
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/20">
              {step}
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              {step === 1
                ? "Select Exam Date"
                : step === 2
                ? "Personal details"
                : step === 3
                  ? "Identification details"
                  : step === 4
                    ? "Your profile"
                    : step === 5
                      ? "Courses & Workshops"
                      : step === 6
                        ? "Review"
                        : step === 7
                          ? "Payment"
                          : "Confirmation"}
            </h2>
          </div>
          <div
            className="w-12 h-1 bg-[#A11D1D] mt-4 transition-all duration-500"
            style={{ width: `${(step / 8) * 100}%` }}
          ></div>
        </div>

        {/* Main Form Container */}
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <FormField
                  control={control}
                  name="examDate"
                  render={({ field: dateField }) => (
                    <FormField
                      control={control}
                      name="examTime"
                      render={({ field: timeField }) => (
                        <FormItem>
                          <FormControl>
                            <ExamDateSelector
                              selectedDate={dateField.value}
                              onDateSelect={dateField.onChange}
                              selectedTime={timeField.value}
                              onTimeSelect={timeField.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <>
                {/* Note Box */}
                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 md:p-8 space-y-4">
                  <h3 className="text-gray-900 font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Info className="w-4 h-4 text-orange-500" />
                    Please note:
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    To continue with this booking you will need:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-gray-600 text-sm leading-relaxed flex gap-3">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>
                        A valid identification document of the test taker. Make
                        sure you have a Passport or Emirates ID card, at hand,
                        as you must enter the details of the identification
                        document as part of the booking process. The ID copy
                        does not have to be uploaded when booking your test.
                      </span>
                    </li>
                    <li className="text-gray-600 text-sm leading-relaxed flex gap-3">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>A payment card, if you wish to pay online</span>
                    </li>
                  </ul>
                </div>

                {/* Who are you booking for */}
                <div className="space-y-6">
                  <FormField
                    control={control}
                    name="bookingFor"
                    render={({ field }) => (
                      <FormItem className="space-y-6">
                        <FormLabel className="text-lg font-black text-gray-900 tracking-tight">
                          Who are you booking the test for?
                        </FormLabel>
                        <p className="text-gray-500 text-sm font-medium">
                          You cannot book a test for a child under the age of
                          11. If your child is 16 or over, please ask them to
                          register for themselves.
                        </p>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-4"
                          >
                            <div
                                onClick={() => field.onChange("myself")}
                                className="flex items-start space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white shadow-sm"
                              >
                                <RadioGroupItem
                                  value="myself"
                                  id="myself"
                                  className="border-[#A11D1D] text-[#A11D1D] mt-1"
                                />
                                <Label
                                  htmlFor="myself"
                                  className="flex flex-col cursor-pointer"
                                >
                                  <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">
                                    Myself
                                  </span>
                                </Label>
                              </div>
                              <div
                                onClick={() => field.onChange("child")}
                                className="flex items-start space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white shadow-sm"
                              >
                                <RadioGroupItem
                                  value="child"
                                  id="child"
                                  className="border-[#A11D1D] text-[#A11D1D] mt-1"
                                />
                                <Label
                                  htmlFor="child"
                                  className="flex flex-col items-start cursor-pointer"
                                >
                                  <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">
                                    My child
                                  </span>
                                  <span className="text-xs text-gray-400 font-medium">
                                    (under 16 years old)
                                  </span>
                                </Label>
                              </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="h-px bg-slate-100"></div>

                {/* About You Section */}
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">
                    About you
                  </h2>

                  <div className="grid grid-cols-1 gap-8">
                    <FormField
                      control={control}
                      name="givenNames"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            First / given names:*
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="As per passport"
                              className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
                        <FormField
                          control={control}
                          name="surnames"
                          render={({ field }) => (
                            <FormItem className="space-y-2 flex-1 w-full">
                              <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                                Surname / family name:*
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="As per passport"
                                  className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={control}
                          name="noSurname"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0 h-12">
                              <FormControl>
                                <Checkbox
                                  id="noSurname"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D]"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel
                                  htmlFor="noSurname"
                                  className="text-xs font-bold text-gray-500 cursor-pointer"
                                >
                                  I don't have a surname / family name
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <DateTimePicker
                        control={control}
                        name="dateOfBirth"
                        label="Date of birth:*"
                        labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                        mode="date"
                        placeholder="dd/mm/yyyy"
                        className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12 w-full"
                        fromYear={1940}
                        toYear={2024}
                      />

                      <FormField
                        control={control}
                        name="sex"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                              Sex:*
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                className="flex gap-8 h-12 items-center"
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                {["female", "male"].map((s) => (
                                  <div
                                    key={s}
                                    className="flex items-center space-x-2 group cursor-pointer"
                                  >
                                    <RadioGroupItem
                                      value={s}
                                      id={`sex-${s}`}
                                      className="border-[#A11D1D] text-[#A11D1D]"
                                    />
                                    <Label
                                      htmlFor={`sex-${s}`}
                                      className="text-sm font-bold group-hover:text-[#A11D1D] transition-colors cursor-pointer capitalize"
                                    >
                                      {s}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-100"></div>

                {/* Contact Details Section */}
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">
                    Your contact details
                  </h2>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    Please provide your phone number and postal address in case
                    we need to contact you or send you any documents (e.g. your
                    test report form).
                  </p>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                              Email address:*
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="example@email.com"
                                className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={control}
                        name="confirmEmail"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                              Confirm email address:*
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="example@email.com"
                                className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={control}
                        name="mobileNumber"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                              Mobile number:*
                            </FormLabel>
                            <FormControl>
                              <div className="relative h-12 rounded-lg bg-white border border-slate-200 focus-within:border-slate-400 focus-within:ring-4 focus-within:ring-[#A11D1D]/5 transition-all overflow-hidden">
                                <PhoneInput
                                  value={field.value}
                                  onChange={field.onChange}
                                  defaultCountry="AE"
                                  className="h-full w-full border-none focus-within:ring-0"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={control}
                      name="smsConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-4 space-y-0 p-6 rounded-2xl bg-white border border-slate-100">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D] mt-1"
                            />
                          </FormControl>
                          <div className="space-y-2">
                            <FormLabel className="text-sm font-bold text-gray-600 leading-relaxed cursor-pointer">
                              I agree to receive notifications or to be
                              contacted about my test registration to this
                              telephone number via SMS, WhatsApp, etc.
                            </FormLabel>
                            <p className="text-[10px] uppercase font-black tracking-widest text-[#A11D1D]">
                              Please note: this service might not be available
                              in your location.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="residenceCountry"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            Country / territory of residence:*
                          </FormLabel>
                          <FormControl>
                            <CountryDropdown
                              placeholder="Search country..."
                              value={field.value}
                              onChange={(country) =>
                                field.onChange(country.name)
                              }
                              className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <Label className="text-xs font-black uppercase tracking-widest text-gray-500">
                        Postal address:*
                      </Label>
                      <div className="space-y-3">
                        <FormField
                          control={control}
                          name="postalAddress1"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Address Line 1"
                                  className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={control}
                          name="postalAddress2"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Address Line 2 (Optional)"
                                  className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={control}
                          name="postalAddress3"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Address Line 3 (Optional)"
                                  className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                              Town / City:*
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={control}
                        name="postcode"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                              Postcode / ZIP:*
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-100"></div>

                {/* Marketing Preferences */}
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">
                    Your marketing preferences
                  </h2>

                  <FormField
                    control={control}
                    name="marketingPreference"
                    render={({ field }) => (
                      <FormItem className="space-y-6">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-6"
                          >
                            {[
                              {
                                id: "all",
                                label:
                                  "I am happy to receive updates about products, services and events provided or organised by the British Council (including members of the wider British Council group).",
                              },
                              {
                                id: "some",
                                label:
                                  "I am happy to receive information about products, services and events organised by British Council and by third parties selected by the British Council.",
                              },
                              {
                                id: "none",
                                label:
                                  "Please do not send me any marketing updates.",
                              },
                            ].map((opt) => (
                              <div
                                key={opt.id}
                                className="flex items-start space-x-4 group cursor-pointer"
                              >
                                <RadioGroupItem
                                  value={opt.id}
                                  id={`mkt-${opt.id}`}
                                  className="border-[#A11D1D] text-[#A11D1D] mt-1"
                                />
                                <Label
                                  htmlFor={`mkt-${opt.id}`}
                                  className="text-sm font-medium text-gray-600 leading-relaxed cursor-pointer group-hover:text-[#A11D1D] transition-colors"
                                >
                                  {opt.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <div className="space-y-12">
                {/* Identification type */}
                <div className="space-y-6">
                  <FormField
                    control={control}
                    name="idType"
                    render={({ field }) => (
                      <FormItem className="space-y-6">
                        <FormLabel className="text-lg font-black text-gray-900 tracking-tight">
                          Identification type
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-4"
                          >
                            <div
                                onClick={() => field.onChange("passport")}
                                className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white"
                              >
                              <RadioGroupItem
                                value="passport"
                                id="passport"
                                className="border-[#A11D1D] text-[#A11D1D]"
                              />
                              <Label
                                htmlFor="passport"
                                className="flex flex-col cursor-pointer"
                              >
                                <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">
                                  Passport
                                </span>
                              </Label>
                            </div>
                            <div
                                onClick={() => field.onChange("emirates_id")}
                                className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white"
                              >
                              <RadioGroupItem
                                value="emirates_id"
                                id="emirates_id"
                                className="border-[#A11D1D] text-[#A11D1D]"
                              />
                              <Label
                                htmlFor="emirates_id"
                                className="flex flex-col cursor-pointer"
                              >
                                <span className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors">
                                  Emirates ID
                                </span>
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="h-px bg-slate-100"></div>

                {/* Note Box Step 2 */}
                <div className="border-l-4 border-orange-500 bg-orange-50/30 p-6 rounded-r-2xl">
                  <p className="text-sm font-black uppercase tracking-widest text-orange-600 mb-2">
                    Please note:
                  </p>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    On the test day, you will be required to bring the same
                    identification document you are using for registration.
                  </p>
                </div>

                {/* ID Details */}
                <div className="space-y-8">
                  <FormField
                    control={control}
                    name="idNumber"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                          Passport number:*
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DateTimePicker
                    control={control}
                    name="idExpiryDate"
                    label="Passport expiry date:*"
                    labelClassName="text-xs font-black uppercase tracking-widest text-gray-500"
                    mode="date"
                    placeholder="dd/mm/yyyy"
                    className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12 w-full"
                    fromYear={2024}
                    toYear={2040}
                  />

                  <FormField
                    control={control}
                    name="issuingAuthority"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                          Issuing authority:*
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                          What is your country / territory of nationality?*
                        </FormLabel>
                        <FormControl>
                          <CountryDropdown
                            placeholder="Search country..."
                            value={field.value}
                            onChange={(country) => field.onChange(country.name)}
                            className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="h-px bg-slate-100"></div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-12">
                {/* Yellow Note Box */}
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

                {/* About You Section */}
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">
                    About you
                  </h2>

                  {/* Test History Section */}
                  <div className="space-y-8 bg-slate-50/30 p-6 rounded-2xl border border-slate-100">
                    <FormField
                      control={control}
                      name="takenBefore"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-sm font-bold text-gray-700">
                            *Have you taken the CD-IELTS Test before?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex gap-6"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="taken-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                <Label htmlFor="taken-yes" className="font-medium cursor-pointer">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="taken-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                <Label htmlFor="taken-no" className="font-medium cursor-pointer">No</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {formData.takenBefore === "Yes" && (
                      <>
                        <FormField
                          control={control}
                          name="lessThanTwoYears"
                          render={({ field }) => (
                            <FormItem className="space-y-4">
                              <FormLabel className="text-sm font-bold text-gray-700">
                                *Was it less than 2 years?
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-wrap gap-6"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Yes" id="less-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                    <Label htmlFor="less-yes" className="font-medium cursor-pointer">Yes</Label>
                                  </div>
                                  <div 
                                   onClick={() => field.onChange("Yes")}
                                   className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-slate-50 transition-colors"
                                 >
                                    <RadioGroupItem value="No" id="less-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                    <Label htmlFor="less-no" className="font-medium cursor-pointer">No</Label>
                                  </div>
                                  <div 
                                   onClick={() => field.onChange("No")}
                                   className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-slate-50 transition-colors"
                                 >
                                    <RadioGroupItem value="I do not know" id="less-unknown" className="border-[#A11D1D] text-[#A11D1D]" />
                                    <Label htmlFor="less-unknown" className="font-medium cursor-pointer">I do not know</Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={control}
                          name="existingAccount"
                          render={({ field }) => (
                            <FormItem className="space-y-4">
                              <FormLabel className="text-sm font-bold text-gray-700">
                                *Do you have an existing IELTS account?
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex flex-col gap-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Yes" id="acc-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                    <Label htmlFor="acc-yes" className="font-medium cursor-pointer">Yes</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="No" id="acc-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                    <Label htmlFor="acc-no" className="font-medium cursor-pointer">No</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="I forgot my IELTS account details" id="acc-forgot" className="border-[#A11D1D] text-[#A11D1D]" />
                                    <Label htmlFor="acc-forgot" className="font-medium cursor-pointer">I forgot my IELTS account details</Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                  </div>

                  {/* Special Requirements Section */}
                  <div className="space-y-8 bg-slate-50/30 p-6 rounded-2xl border border-slate-100">
                    <FormField
                      control={control}
                      name="specialRequirements"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-sm font-bold text-gray-700">
                            *Do You Have Any Special Requirements Due to Ill Health/Medical Conditions?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex gap-6"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="special-yes" className="border-[#A11D1D] text-[#A11D1D]" />
                                <Label htmlFor="special-yes" className="font-medium cursor-pointer">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="special-no" className="border-[#A11D1D] text-[#A11D1D]" />
                                <Label htmlFor="special-no" className="font-medium cursor-pointer">No</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {formData.specialRequirements === "Yes" && (
                      <FormField
                        control={control}
                        name="specialRequirementsMention"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                              * If please mention
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Please mention your requirements"
                                {...field}
                                className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  <div className="space-y-8">
                    <FormField
                      control={control}
                      name="firstLanguage"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            What is your first language?*
                          </FormLabel>
                          <FormControl>
                            <SearchableDropdown
                              options={languages}
                              placeholder="-Select Language-"
                              value={field.value}
                              onChange={field.onChange}
                              className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="yearsStudyingEnglish"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            How many years have you been studying English?*
                          </FormLabel>
                          <p className="text-[10px] uppercase font-black tracking-widest text-[#A11D1D]">
                            Your answer to this question has no impact on your
                            test score
                          </p>
                          <FormControl>
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
                              value={field.value}
                              onChange={field.onChange}
                              className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="educationLevel"
                      render={({ field }) => (
                        <FormItem className="space-y-6">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            What level of education have you completed?*
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="space-y-4"
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
                                {
                                  id: "degree",
                                  label: "Degree (or equivalent)",
                                },
                                {
                                  id: "post_graduate",
                                  label: "Post-graduate",
                                },
                              ].map((opt) => (
                                <div
                                  key={opt.id}
                                  className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white"
                                >
                                  <RadioGroupItem
                                    value={opt.id}
                                    id={opt.id}
                                    className="border-[#A11D1D] text-[#A11D1D]"
                                  />
                                  <Label
                                    htmlFor={opt.id}
                                    className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors cursor-pointer"
                                  >
                                    {opt.label}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="h-px bg-slate-100"></div>

                {/* Your Occupation Section */}
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">
                    Your occupation
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={control}
                      name="occupationLevel"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            What is your occupation level?*
                          </FormLabel>
                          <FormControl>
                            <SearchableDropdown
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
                              value={field.value}
                              onChange={field.onChange}
                              className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="occupationSector"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            What is your occupation sector?*
                          </FormLabel>
                          <FormControl>
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
                                { label: "Craft and Design", value: "Craft and Design" },
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
                                { label: "Personal Services", value: "Personal Services" },
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
                                { label: "Wholesale Trade", value: "Wholesale Trade" },
                                { label: "Other", value: "Other" },
                              ]}
                              placeholder="-Select Sector-"
                              value={field.value}
                              onChange={field.onChange}
                              className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="h-px bg-slate-100"></div>

                {/* Your Interest in IELTS */}
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">
                    Your interest in IELTS
                  </h2>

                  <div className="space-y-8">
                    <FormField
                      control={control}
                      name="reasonForTakingTest"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            Why are you taking the test?*
                          </FormLabel>
                          <FormControl>
                            <SearchableDropdown
                              options={[
                                {
                                  label: "Higher education extended course (3 months or more)",
                                  value: "higher_edu_long",
                                },
                                {
                                  label: "Higher education short course (3 months or less)",
                                  value: "higher_edu_short",
                                },
                                { label: "Other educational purposes", value: "other_edu" },
                                { label: "Registration as a doctor", value: "reg_doctor" },
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
                                { label: "Registration as a dentist", value: "reg_dentist" },
                                { label: "Missing/Invalid", value: "missing" },
                                { label: "Other", value: "other" },
                              ]}
                              placeholder="-Select Reason-"
                              value={field.value}
                              onChange={field.onChange}
                              className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="destinationCountry"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                            Which country / territory do you want to study /
                            work / live in?*
                          </FormLabel>
                          <FormControl>
                            <CountryDropdown
                              placeholder="-Select Country-"
                              value={field.value}
                              onChange={(country) =>
                                field.onChange(country.name)
                              }
                              className="rounded-lg bg-white border-slate-200 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="h-px bg-slate-100"></div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                {/* Header Info */}
                <div className="bg-[#A11D1D]/5 border border-[#A11D1D]/10 rounded-2xl p-6 md:p-8 flex items-start gap-4">
                  <div className="bg-[#A11D1D] p-2 rounded-lg text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[#A11D1D] font-black text-sm uppercase tracking-widest mb-2">
                      Enhance your preparation
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      Boost your IELTS score with our expert-led courses and workshops. Select the options that best fit your schedule and learning style.
                    </p>
                  </div>
                </div>

                {/* Courses Selection */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-[#A11D1D]" />
                    <h2 className="text-xl font-black text-gray-900 tracking-tight">
                      Recommended Courses
                    </h2>
                  </div>

                  <FormField
                    control={control}
                    name="selectedCourse"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          >
                            {courses.map((course) => (
                              <div
                                key={course.id}
                                onClick={() => field.onChange(course.id)}
                                className={cn(
                                  "relative p-6 rounded-2xl border-2 transition-all cursor-pointer group",
                                  field.value === course.id
                                    ? "border-[#A11D1D] bg-[#A11D1D]/5 shadow-md"
                                    : "border-slate-100 bg-white hover:border-slate-200"
                                )}
                              >
                                <div className="flex justify-between items-start mb-4">
                                  <div className={cn(
                                    "p-2 rounded-lg transition-colors",
                                    field.value === course.id ? "bg-[#A11D1D] text-white" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                                  )}>
                                    <BookOpen className="w-4 h-4" />
                                  </div>
                                  <div className="text-right">
                                    <span className="text-lg font-black text-gray-900">{course.price} {course.currency}</span>
                                    {course.general_discount > 0 && (
                                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                                        Save {course.general_discount}%
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <h4 className="font-black text-gray-900 mb-1">{course.name}</h4>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                                  {course.class_mode_id === "group" ? "Group Study" : course.class_mode_id === "semi_private" ? "Small Group" : "One-to-One"} • {course.class_type_id}
                                </p>

                                {field.value === course.id && (
                                  <div className="absolute top-4 right-4 text-[#A11D1D]">
                                    <CheckCircle2 className="w-5 h-5" />
                                  </div>
                                )}
                                <RadioGroupItem value={course.id} className="sr-only" />
                              </div>
                            ))}
                            <div
                              onClick={() => field.onChange("none")}
                              className={cn(
                                "relative p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center min-h-[140px]",
                                field.value === "none" || !field.value
                                  ? "border-slate-300 bg-slate-50"
                                  : "border-slate-100 bg-white hover:border-slate-200"
                              )}
                            >
                              <p className="text-sm font-black text-gray-400 uppercase tracking-widest">
                                Skip course selection
                              </p>
                              <RadioGroupItem value="none" className="sr-only" />
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="h-px bg-slate-100"></div>

                {/* Workshops Selection */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-[#A11D1D]" />
                    <h2 className="text-xl font-black text-gray-900 tracking-tight">
                      Specialized Workshops
                    </h2>
                  </div>

                  <FormField
                    control={control}
                    name="selectedWorkshop"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                          >
                            {workshops.map((workshop) => (
                              <div
                                key={workshop.id}
                                onClick={() => field.onChange(workshop.id)}
                                className={cn(
                                  "relative p-5 rounded-xl border transition-all cursor-pointer group",
                                  field.value === workshop.id
                                    ? "border-[#A11D1D] bg-[#A11D1D]/5 ring-1 ring-[#A11D1D]"
                                    : "border-slate-100 bg-white hover:border-slate-200"
                                )}
                              >
                                <div className="text-xs font-black text-[#A11D1D] uppercase tracking-widest mb-1">
                                  {workshop.duration}
                                </div>
                                <h4 className="font-bold text-gray-900 text-sm mb-3">{workshop.name}</h4>
                                <div className="flex items-baseline gap-1">
                                  <span className="text-base font-black text-gray-900">{workshop.price}</span>
                                  <span className="text-[10px] font-bold text-gray-400 uppercase">{workshop.currency}</span>
                                </div>

                                {field.value === workshop.id && (
                                  <div className="absolute top-4 right-4 text-[#A11D1D]">
                                    <CheckCircle2 className="w-4 h-4" />
                                  </div>
                                )}
                                <RadioGroupItem value={workshop.id} className="sr-only" />
                              </div>
                            ))}
                            <div
                              onClick={() => field.onChange("none")}
                              className={cn(
                                "relative p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-center text-center",
                                field.value === "none" || !field.value
                                  ? "border-slate-300 bg-slate-50"
                                  : "border-slate-100 bg-white hover:border-slate-200"
                              )}
                            >
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                No workshop
                              </p>
                              <RadioGroupItem value="none" className="sr-only" />
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-12">
                {/* Yellow Note Box */}
                <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 md:p-8 flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-amber-900 font-bold text-sm mb-1">
                      You have not booked yet!
                    </p>
                    <p className="text-amber-800 text-sm font-medium leading-relaxed">
                      Please check all the details carefully before you book.
                    </p>
                  </div>
                </div>

                {/* Booking Summary Section */}
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">
                    You are booking
                  </h2>
                  <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 space-y-8">
                    <h3 className="text-lg font-black text-gray-900">
                      IELTS Academic
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Written Test Box */}
                      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">
                              Listening, Reading & Writing
                            </h4>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                              IELTS on computer
                            </p>
                          </div>
                        </div>

                        <div className="bg-indigo-50/50 rounded-xl p-4 space-y-2">
                          <div className="flex items-center gap-2 text-indigo-900 text-sm font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            15 May 2026
                          </div>
                          <div className="text-indigo-700 text-xs font-medium">
                            13:30 - 16:15{" "}
                            <span className="text-indigo-400 italic">
                              (please arrive at 12:45)
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="w-full py-2 rounded-full border border-indigo-200 text-indigo-600 text-xs font-bold hover:bg-indigo-50 transition-all uppercase tracking-widest"
                        >
                          Change written test
                        </button>

                        <div className="pt-4 border-t border-slate-50 space-y-3">
                          <div className="flex items-start gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-900">
                                British Council Sharjah
                              </p>
                              <p className="text-gray-500 text-xs font-medium">
                                Sharjah
                              </p>
                            </div>
                            <button
                              type="button"
                              className="ml-auto text-[#A11D1D] text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" /> View map
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Speaking Test Box */}
                      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">
                              Speaking test
                            </h4>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                              Face to face
                            </p>
                          </div>
                        </div>

                        <div className="bg-emerald-50/50 rounded-xl p-4 space-y-2">
                          <div className="flex items-center gap-2 text-emerald-900 text-sm font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            15 May 2026
                          </div>
                          <div className="text-emerald-700 text-xs font-medium">
                            09:00 - 09:20{" "}
                            <span className="text-emerald-400 italic">
                              (please arrive at 08:40)
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="w-full py-2 rounded-full border border-emerald-200 text-emerald-600 text-xs font-bold hover:bg-emerald-50 transition-all uppercase tracking-widest"
                        >
                          Change speaking schedule
                        </button>

                        <div className="pt-4 border-t border-slate-50 space-y-3">
                          <div className="flex items-start gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-900">
                                British Council Sharjah
                              </p>
                              <p className="text-gray-500 text-xs font-medium">
                                Sharjah
                              </p>
                            </div>
                            <button
                              type="button"
                              className="ml-auto text-[#A11D1D] text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" /> View map
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Details Summary */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Your details
                    </h3>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline"
                    >
                      Change
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-12 gap-y-6 text-sm">
                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Name:
                    </div>
                    <div className="font-black text-gray-900 text-base">
                      {formData.givenNames} {formData.surnames}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Date of Birth:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.dateOfBirth
                        ? new Date(formData.dateOfBirth).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )
                        : "-"}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Sex:
                    </div>
                    <div className="font-bold text-gray-700 capitalize">
                      {formData.sex}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Mobile number:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.mobileNumber}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Address:
                    </div>
                    <div className="font-bold text-gray-700 leading-relaxed whitespace-pre-line">
                      {formData.postalAddress1}
                      {formData.postalAddress2 &&
                        `\n${formData.postalAddress2}`}
                      {formData.postalAddress3 &&
                        `\n${formData.postalAddress3}`}
                      {`\n${formData.city}, ${formData.postcode}`}
                      {`\n${formData.residenceCountry}`}
                    </div>
                  </div>
                </div>

                {/* Identification Summary */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Your identification
                    </h3>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline"
                    >
                      Change
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-12 gap-y-6 text-sm">
                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      ID number:
                    </div>
                    <div className="font-black text-gray-900 text-base">
                      {formData.idNumber}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      ID expiry date:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.idExpiryDate
                        ? new Date(formData.idExpiryDate).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )
                        : "-"}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Issuing authority:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.issuingAuthority}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Nationality:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.nationality}
                    </div>
                  </div>
                </div>

                {/* Profile Summary */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Your profile
                    </h3>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="text-[#A11D1D] text-xs font-black uppercase tracking-widest hover:underline"
                    >
                      Change
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-12 gap-y-6 text-sm">
                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Test Module:
                    </div>
                    <div className="font-black text-gray-900 text-base capitalize">
                      {formData.testModule || "-"}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Taken before:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.takenBefore || "-"}
                    </div>

                    {formData.takenBefore === "Yes" && (
                      <>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                          Less than 2 years:
                        </div>
                        <div className="font-bold text-gray-700">
                          {formData.lessThanTwoYears || "-"}
                        </div>

                        <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                          Existing account:
                        </div>
                        <div className="font-bold text-gray-700">
                          {formData.existingAccount || "-"}
                        </div>
                      </>
                    )}

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Special requirements:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.specialRequirements || "-"}
                      {formData.specialRequirements === "Yes" && formData.specialRequirementsMention && ` (${formData.specialRequirementsMention})`}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      First language:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.firstLanguage || "-"}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Years studying English:
                    </div>
                    <div className="font-bold text-gray-700">
                      {formData.yearsStudyingEnglish || "-"}
                    </div>

                    <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                      Add-ons:
                    </div>
                    <div className="space-y-4">
                      {selectedCourseData ? (
                        <div className="flex items-start gap-3 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                          <BookOpen className="w-4 h-4 text-indigo-600 mt-1" />
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{selectedCourseData.name}</p>
                            <p className="text-[10px] text-indigo-600 font-black uppercase tracking-widest">Selected Course • {selectedCourseData.price} {selectedCourseData.currency}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-400 italic text-xs">No course selected</p>
                      )}

                      {selectedWorkshopData ? (
                        <div className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                          <CalendarIcon className="w-4 h-4 text-emerald-600 mt-1" />
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{selectedWorkshopData.name}</p>
                            <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Selected Workshop • {selectedWorkshopData.price} {selectedWorkshopData.currency}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-400 italic text-xs">No workshop selected</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 space-y-6">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    Payment Summary
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">IELTS Test Fee:</span>
                      <span className="font-black text-gray-900">
                        {baseFee.toLocaleString()}.00 AED
                      </span>
                    </div>

                    {coursePrice > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Preparation Course:</span>
                        <span className="font-black text-gray-900">
                          {coursePrice.toLocaleString()}.00 AED
                        </span>
                      </div>
                    )}

                    {workshopPrice > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Workshop Fee:</span>
                        <span className="font-black text-gray-900">
                          {workshopPrice.toLocaleString()}.00 AED
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">Tax (5% VAT):</span>
                      <span className="font-black text-gray-900">
                        {tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AED
                      </span>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                      <span className="text-lg font-black text-gray-900">
                        Total Amount:
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-black text-[#A11D1D]">
                          {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AED
                        </span>
                        <button
                          type="button"
                          className="block text-[#A11D1D] text-[10px] font-black uppercase tracking-widest hover:underline mt-1"
                        >
                          I have a promo code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Acknowledgement */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <FormField
                      control={control}
                      name="confirmationRecipient"
                      render={({ field }) => (
                        <FormItem className="space-y-6">
                          <FormLabel className="text-lg font-black text-gray-900 tracking-tight">
                            Who should receive the order confirmation?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              {[
                                {
                                  id: "confirm-myself",
                                  value: "myself",
                                  label: "Myself",
                                },
                                {
                                  id: "confirm-other",
                                  value: "other",
                                  label: "Another Person",
                                },
                                {
                                  id: "confirm-company",
                                  value: "company",
                                  label: "A Company",
                                },
                              ].map((opt) => (
                                <div
                                  key={opt.id}
                                  onClick={() => field.onChange(opt.value)}
                                  className={cn(
                                    "flex items-center space-x-4 p-6 rounded-xl border-2 transition-all cursor-pointer group bg-white shadow-sm",
                                    field.value === opt.value ? "border-[#A11D1D] bg-[#A11D1D]/5" : "border-slate-100 hover:border-slate-200"
                                  )}
                                >
                                  <RadioGroupItem
                                    value={opt.value}
                                    id={opt.id}
                                    className="border-[#A11D1D] text-[#A11D1D]"
                                  />
                                  <Label
                                    htmlFor={opt.id}
                                    className="font-bold text-gray-900 group-hover:text-[#A11D1D] transition-colors cursor-pointer"
                                  >
                                    {opt.label}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={control}
                    name="vatNumber"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">
                          VAT/NIP number:
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-lg bg-white border-slate-200 focus:border-slate-400 focus:ring-4 focus:ring-[#A11D1D]/5 transition-all h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Payment Method Selection */}
                <div className="space-y-8">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    Choose payment method
                  </h3>

                  <FormField
                    control={control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                          >
                            {[
                              {
                                id: "pay-online",
                                value: "online",
                                label: "Pay Online",
                                description: "Credit or Debit Card",
                                icon: CreditCard,
                              },
                              {
                                id: "pay-bank",
                                value: "bank_transfer",
                                label: "Bank Transfer",
                                description: "Direct bank deposit",
                                icon: Building2,
                              },
                              {
                                id: "pay-center",
                                value: "at_center",
                                label: "Pay at Center",
                                description: "Cash or Card in person",
                                icon: Banknote,
                              },
                            ].map((method) => (
                              <div
                                key={method.id}
                                onClick={() => field.onChange(method.value)}
                                className={cn(
                                  "relative p-6 rounded-2xl border-2 transition-all cursor-pointer group flex flex-col items-center text-center gap-4",
                                  field.value === method.value
                                    ? "border-[#A11D1D] bg-[#A11D1D]/5 shadow-md shadow-[#A11D1D]/5"
                                    : "border-slate-100 bg-white hover:border-slate-200"
                                )}
                              >
                                <div className={cn(
                                  "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                                  field.value === method.value
                                    ? "bg-[#A11D1D] text-white shadow-lg shadow-[#A11D1D]/20"
                                    : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                                )}>
                                  <method.icon className="w-6 h-6" />
                                </div>
                                <div>
                                  <h4 className="font-black text-gray-900 mb-1">{method.label}</h4>
                                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{method.description}</p>
                                </div>
                                {field.value === method.value && (
                                  <div className="absolute top-4 right-4 text-[#A11D1D]">
                                    <CheckCircle2 className="w-5 h-5" />
                                  </div>
                                )}
                                <RadioGroupItem value={method.value} id={method.id} className="sr-only" />
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-8">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    Our terms and conditions
                  </h3>

                  <FormField
                    control={control}
                    name="termsAgreed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-4 space-y-0 p-6 rounded-2xl bg-[#A11D1D]/5 border border-[#A11D1D]/10">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-slate-300 data-[state=checked]:bg-[#A11D1D] data-[state=checked]:border-[#A11D1D] mt-1"
                          />
                        </FormControl>
                        <div className="space-y-3">
                          <FormLabel className="text-sm font-bold text-gray-700 leading-relaxed cursor-pointer">
                            I agree to the IELTS{" "}
                            <button
                              type="button"
                              className="text-[#A11D1D] hover:underline underline-offset-4 font-black"
                            >
                              terms and conditions
                            </button>{" "}
                            and{" "}
                            <button
                              type="button"
                              className="text-[#A11D1D] hover:underline underline-offset-4 font-black"
                            >
                              cancellation policy
                            </button>
                          </FormLabel>
                          <p className="text-xs text-gray-500 leading-relaxed font-medium">
                            The British Council will use the information that
                            you are providing in connection with processing your
                            registration. The legal basis for processing your
                            information is agreement with our terms and
                            conditions of registration (contract).
                          </p>
                          {showTermsNotice && (
                            <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-1 duration-300">
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                You may unsubscribe at any time from our emails within your ‘My Account’ area in the Test Taker Portal.
                              </p>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                Or you can <a href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1">contact us <ExternalLink className="w-3 h-3" /></a>
                              </p>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                We will process your personal information based on your consent.
                              </p>
                            </div>
                          )}
                          <button
                            type="button"
                            onClick={() => setShowTermsNotice(!showTermsNotice)}
                            className="text-[#A11D1D] text-[10px] font-black uppercase tracking-widest hover:underline"
                          >
                            {showTermsNotice ? "- Hide full notice" : "+ Read full notice"}
                          </button>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Final Payment Actions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    Book and pay:
                  </h3>

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                    <div className="p-8 space-y-6 text-center md:text-left">
                      <div className="space-y-2">
                        <p className="text-sm font-black uppercase tracking-widest text-gray-500">
                          {formData.paymentMethod === "online" ? "Immediate Booking" : "Reserve your spot"}
                        </p>
                        <h4 className="text-lg font-black text-gray-900">
                          {formData.paymentMethod === "online"
                            ? "Complete your payment online now"
                            : formData.paymentMethod === "bank_transfer"
                              ? "Confirm registration and receive bank details"
                              : "Confirm registration and pay at the center"}
                        </h4>
                      </div>

                      <Button
                        type="submit"
                        className="w-full md:w-auto px-16 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-4 group"
                      >
                        {formData.paymentMethod === "online" ? (
                          <>
                            <CreditCard className="w-5 h-5" />
                            Pay online & confirm
                          </>
                        ) : formData.paymentMethod === "bank_transfer" ? (
                          <>
                            <Building2 className="w-5 h-5" />
                            Confirm & Get details
                          </>
                        ) : (
                          <>
                            <Banknote className="w-5 h-5" />
                            Confirm & Pay later
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="bg-slate-50 p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-600" />
                        </div>
                        <p className="text-xs font-bold text-gray-600">
                          Secure registration portal
                        </p>
                      </div>
                      <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">
                        {formData.paymentMethod === "online"
                          ? "Instant confirmation after payment"
                          : "Confirmation pending payment verification"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === 7 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Complete Your Payment</h2>
                  <p className="text-gray-500 font-medium max-w-md mx-auto">
                    Please provide your payment details below to finalize your registration and secure your test date.
                  </p>
                </div>

                <div className="max-w-xl mx-auto">
                  <Payment amount={total} currency="aed" />
                </div>

                <div className="pt-8 flex justify-center">
                  <Button
                    onClick={() => {
                      setStep(8);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-16 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Confirm Payment Completion
                  </Button>
                </div>
              </div>
            )}

            {step === 8 && (
              <div className="text-center py-20 space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100/50">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-gray-900 tracking-tight">Registration Submitted!</h2>
                  <p className="text-gray-500 max-w-md mx-auto font-medium leading-relaxed">
                    Thank you for choosing our center. Your IELTS Academic registration has been successfully recorded.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 max-w-lg mx-auto text-left space-y-6">
                  <h3 className="font-black text-gray-900 uppercase tracking-widest text-xs border-b border-slate-200 pb-4">Next Steps</h3>

                  <div className="space-y-4">
                    {formData.paymentMethod === "online" ? (
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">1</div>
                        <p className="text-sm text-gray-600 leading-relaxed">Check your email <span className="font-bold text-gray-900">{formData.email}</span> for an instant confirmation and payment receipt.</p>
                      </div>
                    ) : formData.paymentMethod === "bank_transfer" ? (
                      <>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">1</div>
                          <p className="text-sm text-gray-600 leading-relaxed">Transfer the total amount to the bank details sent to your email.</p>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">2</div>
                          <p className="text-sm text-gray-600 leading-relaxed">Upload your transfer receipt via the link in your email to confirm your booking.</p>
                        </div>
                      </>
                    ) : (
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">1</div>
                        <p className="text-sm text-gray-600 leading-relaxed">Visit our center within the next 48 hours to complete your payment and secure your test date.</p>
                      </div>
                    )}
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#A11D1D]/10 text-[#A11D1D] flex items-center justify-center shrink-0 font-black text-xs">
                        {formData.paymentMethod === "bank_transfer" ? "3" : "2"}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">Prepare for your test using the free resources available in your candidate portal.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    onClick={() => window.location.href = "/"}
                    className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg"
                  >
                    Return to home
                  </Button>
                </div>
              </div>
            )}

            {/* Footer Actions */}
            {step < 8 && (
              <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-[#A11D1D] transition-all px-4 py-2"
                    type="button"
                  >
                    Previous
                  </button>
                )}
                <div className="flex gap-4 ml-auto">
                  <Button
                    type={step === 6 ? "submit" : "button"}
                    onClick={step === 6 ? undefined : handleNext}
                    className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                  >
                    {step === 6 ? "Submit Registration" : "Save and continue"}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
