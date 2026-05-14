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
  Check,
  ArrowRight,
  BookOpen,
  UploadCloud,
  X,
  AlertCircle
} from "lucide-react";
import { RefinedPteHomeA2Schema, type TPteHomeA2FormSchema } from "./_type";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { PhoneInput } from "@/components/ui/phone-input";
import { Checkbox } from "@/components/ui/checkbox";
import Payment from "../../payment";
import { ExamDateSelector } from "@/components/blocks/calendar-booking/exam-date-selector";
import { PriceDisplay } from "@/components/ui/price-display";

const pteCourses = [
  { id: "group", label: "Group (In-person classroom-based course)", price: 1850 },
  { id: "semi-private", label: "Semi-Private (In-person classroom-based)", price: 2850 },
  { id: "private", label: "Private one-to-one (In-person classroom)", price: 4850 },
  { id: "online", label: "Private one-to-one (Online course)", price: 3850 },
];

const pteWorkshops = [
  { id: "workshop_2", name: "Workshop 2 Hours", price: 600 },
  { id: "workshop_4", name: "Workshop 4 Hours", price: 1000 },
  { id: "workshop_6", name: "Workshop 6 Hours", price: 1350 },
  { id: "workshop_8", name: "Workshop 8 Hours", price: 1600 },
];

export default function FormPTEHomeA2Registration() {
  const [step, setStep] = useState(1);

  const form = useForm<TPteHomeA2FormSchema>({
    resolver: zodResolver(RefinedPteHomeA2Schema),
    defaultValues: {
      givenNames: "",
      noGivenNames: false,
      surnames: "",
      noSurname: false,
      emailUsername: "",
      dateOfBirth: undefined,
      gender: "",
      placeOfBirth: "",
      countryOfBirth: "",
      countryOfCitizenship: "",
      countryOfResidence: "",
      address: "",
      city: "",
      mobileNumber: "",
      readyToBook: "",
      homeLanguage: "",
      planningCountry: "",
      currentSituation: "",
      reasonForTaking: "",
      studyLevel: "",
      occupationSector: "",
      referralSource: "",
      takenBefore: "",
      takenWithinTwoYears: "",
      hasExistingAccount: "",
      dataSharingAgreed: false,
      bookingTermsAgreed: false,
      marketingConsent: "",
      testTiming: "",
      idPolicyRead: false,
      idType: "",
      idCountryOfIssue: "",
      documentNumberConfirmed: false,
      documentNumber: "",
      selectedCourse: "",
      selectedWorkshop: "",
      passportCopy: undefined,
      userPhoto: undefined,
      infoCorrect: false,
      examDate: undefined,
      examTime: "",
    },
  });

  const { control, handleSubmit, watch, trigger, setValue } = form;
  const formData = watch();
  const watchTakenBefore = watch("takenBefore");

  const selectedCourseData = pteCourses.find(c => c.id === formData.selectedCourse);
  const selectedWorkshopData = pteWorkshops.find(w => w.id === formData.selectedWorkshop);
  const coursePrice = selectedCourseData?.price || 0;
  const workshopPrice = selectedWorkshopData?.price || 0;

  const subtotal = EXAM_FEE + SERVICE_FEE + coursePrice + workshopPrice;
  const tax = subtotal * VAT_RATE;
  const total = subtotal + tax;

  const onSubmit: SubmitHandler<TPteHomeA2FormSchema> = (data) => {
    if (step === 6) {
      setStep(7);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    handleNext();
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStep(step);
    const isValid = await trigger(fieldsToValidate as any);
    
    if (isValid) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("Validation failed for fields:", fieldsToValidate);
      console.log("Form errors:", form.formState.errors);
    }
  };

  const getFieldsForStep = (currentStep: number): (keyof TPteHomeA2FormSchema)[] => {
    switch (currentStep) {
      case 1: return ["examDate", "examTime"];
      case 2: return ["givenNames", "noGivenNames", "surnames", "noSurname", "emailUsername", "dateOfBirth", "gender", "placeOfBirth", "countryOfBirth", "countryOfCitizenship", "countryOfResidence", "address", "city", "mobileNumber", "readyToBook"];
      case 3: return ["idType", "idCountryOfIssue", "documentNumber", "passportCopy", "idPolicyRead", "documentNumberConfirmed"];
      case 4: return ["homeLanguage", "planningCountry", "currentSituation", "reasonForTaking", "studyLevel", "occupationSector", "referralSource", "takenBefore", "takenWithinTwoYears", "hasExistingAccount", "dataSharingAgreed", "bookingTermsAgreed", "marketingConsent"];
      case 5: return ["selectedCourse", "selectedWorkshop"];
      case 6: return ["infoCorrect"];
      default: return [];
    }
  };

  return (
    <div className="section base-py">
      <div className="max-w-4xl mx-auto base-px">
        <div className="flex flex-col mb-8">
          <span className="section-label text-[#A11D1D] font-black uppercase tracking-widest text-[10px] mb-2">Step {step} of 8</span>
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[#A11D1D] text-white flex items-center justify-center font-black text-sm shadow-lg shadow-[#A11D1D]/20">
              {step}
            </span>
            <h2 className="text-2xl font-headline font-black text-secondary tracking-tight">
              {step === 1 ? "Select Exam Date" : 
               step === 2 ? "Personal details" : 
               step === 3 ? "Identification details" : 
               step === 4 ? "Your profile" : 
               step === 5 ? "Courses" : 
               step === 6 ? "Review" : 
               step === 7 ? "Payment" : "Confirmation"}
            </h2>
          </div>
          <div className="w-12 h-1 bg-[#A11D1D] mt-4 transition-all duration-500" style={{ width: `${(step / 8) * 100}%` }}></div>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <FormItem>
                  <FormControl>
                    <div className="space-y-4">
                      <FormField
                        control={control}
                        name="examDate"
                        render={({ field: dateField }) => (
                          <FormField
                            control={control}
                            name="examTime"
                            render={({ field: timeField }) => (
                              <ExamDateSelector
                                selectedDate={dateField.value}
                                onDateSelect={dateField.onChange}
                                selectedTime={timeField.value}
                                onTimeSelect={timeField.onChange}
                              />
                            )}
                          />
                        )}
                      />
                    </div>
                  </FormControl>
                  <div className="space-y-1 mt-4">
                    {form.formState.errors.examDate && (
                      <p className="text-sm font-medium text-destructive flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" /> {form.formState.errors.examDate.message as string}
                      </p>
                    )}
                    {form.formState.errors.examTime && (
                      <p className="text-sm font-medium text-destructive flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" /> {form.formState.errors.examTime.message as string}
                      </p>
                    )}
                  </div>
                </FormItem>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 md:p-8 space-y-4">
                  <h3 className="text-gray-900 font-bold flex items-center gap-2 text-sm uppercase tracking-widest"><Info className="w-4 h-4 text-orange-500" /> Please note:</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">Please ensure all details exactly match your passport or official identification.</p>
                </div>

                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">About you</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField control={control} name="givenNames" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Given name(s):*</FormLabel><FormControl><Input placeholder="As per passport" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={control} name="surnames" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Surname / family name:*</FormLabel><FormControl><Input placeholder="As per passport" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <DateTimePicker control={control} name="dateOfBirth" label="Date of birth:*" mode="date" className="h-12" fromYear={1950} toYear={2024} />
                      <FormField control={control} name="gender" render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Sex:*</FormLabel>
                          <FormControl>
                            <RadioGroup className="flex gap-8 h-12 items-center" onValueChange={field.onChange} value={field.value}>
                              {["Male", "Female", "Other"].map(s => (
                                <div key={s} className="flex items-center space-x-2 group cursor-pointer">
                                  <RadioGroupItem value={s.toLowerCase()} id={`g-home-a2-${s}`} className="border-[#A11D1D]" />
                                  <Label htmlFor={`g-home-a2-${s}`} className="text-sm font-bold capitalize cursor-pointer">{s}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>
                </div>

                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Birth Info</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="placeOfBirth" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">City of birth:*</FormLabel><FormControl><Input placeholder="City / Town" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={control} name="countryOfBirth" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of birth:*</FormLabel><FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                </div>

                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Citizenship & Residence</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="countryOfCitizenship" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of citizenship:*</FormLabel><FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={control} name="countryOfResidence" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of residence:*</FormLabel><FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                </div>

                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Contact & Location</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="emailUsername" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Email:*</FormLabel><FormControl><Input placeholder="example@email.com" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={control} name="mobileNumber" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Mobile number:*</FormLabel><FormControl><PhoneInput {...field} defaultCountry="AE" className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="address" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Full Address:*</FormLabel><FormControl><Input placeholder="Building, Street, Area" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={control} name="city" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Town / City:*</FormLabel><FormControl><Input placeholder="Current city" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                </div>

                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Readiness</h2>
                  <FormField control={control} name="readyToBook" render={({ field }) => (
                    <FormItem className="space-y-6">
                      <FormLabel className="text-sm font-bold text-gray-700 leading-relaxed">Are you ready to book your PTE test?*</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-8">
                          {[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }].map(opt => (
                            <div key={opt.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={opt.value} id={`ready-${opt.value}`} className="border-[#A11D1D]" />
                              <Label htmlFor={`ready-${opt.value}`} className="text-sm font-bold text-gray-700 cursor-pointer">{opt.label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Identification Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="idType" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">ID Type*</FormLabel><FormControl><SearchableDropdown options={[{ label: "Passport", value: "passport" }, { label: "National ID", value: "national_id" }]} placeholder="Select ID" value={field.value} onChange={field.onChange} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={control} name="idCountryOfIssue" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Country of issue*</FormLabel><FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="documentNumber" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">ID Number*</FormLabel><FormControl><Input className="h-12" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                  <FormField control={control} name="passportCopy" render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-xs font-bold text-slate-500 uppercase tracking-widest">* Upload ID Copy</FormLabel>
                      <FormControl>
                        <div className="relative group h-40 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#A11D1D]/50 flex flex-col items-center justify-center gap-2 cursor-pointer">
                          <UploadCloud className="w-8 h-8 text-slate-300" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Choose File</span>
                          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => field.onChange(e.target.files?.[0])} />
                          {field.value && <div className="absolute inset-0 bg-white flex items-center justify-center p-4"><span className="text-[10px] font-bold text-slate-600">{(field.value as File).name}</span><button type="button" onClick={() => field.onChange(undefined)} className="absolute top-2 right-2 p-1 bg-red-100 text-[#A11D1D] rounded-full"><X className="w-3 h-3" /></button></div>}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="space-y-6">
                  <FormField control={control} name="idPolicyRead" render={({ field }) => (
                    <FormItem className="flex items-start space-x-4 p-6 rounded-2xl bg-[#A11D1D]/5 border border-[#A11D1D]/10">
                      <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-[#A11D1D] mt-1" /></FormControl>
                      <Label className="text-sm font-bold text-gray-900 cursor-pointer">I have read the PTE Home ID Policy and understand which IDs are acceptable.*</Label>
                    </FormItem>
                  )} />

                  <FormField control={control} name="documentNumberConfirmed" render={({ field }) => (
                    <FormItem className="flex items-start space-x-4 p-6 rounded-2xl bg-[#A11D1D]/5 border border-[#A11D1D]/10">
                      <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-[#A11D1D] mt-1" /></FormControl>
                      <Label className="text-sm font-bold text-gray-900 cursor-pointer">I confirm that the ID number entered above matches my identification document exactly.*</Label>
                    </FormItem>
                  )} />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Your background</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="homeLanguage" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">First language?*</FormLabel><FormControl><SearchableDropdown options={[{ label: "Arabic", value: "arabic" }, { label: "English", value: "english" }, { label: "Hindi", value: "hindi" }, { label: "Urdu", value: "urdu" }, { label: "Bengali", value: "bengali" }]} placeholder="Select language" value={field.value} onChange={field.onChange} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={control} name="planningCountry" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Target country?*</FormLabel><FormControl><CountryDropdown placeholder="Select country" value={field.value} onChange={(c) => field.onChange(c.name)} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="currentSituation" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Current Situation?*</FormLabel><FormControl><SearchableDropdown options={[{ label: "Employed Full-time", value: "employed_full" }, { label: "Employed Part-time", value: "employed_part" }, { label: "Self-employed", value: "self_employed" }, { label: "Student", value: "student" }, { label: "Unemployed", value: "unemployed" }]} placeholder="Select situation" value={field.value} onChange={field.onChange} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={control} name="occupationSector" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">Occupation Sector?*</FormLabel><FormControl><SearchableDropdown options={[{ label: "Accounting/Finance", value: "accounting" }, { label: "Agriculture", value: "agriculture" }, { label: "Architecture", value: "architecture" }, { label: "Business/Management", value: "business" }, { label: "Construction", value: "construction" }, { label: "Education", value: "education" }, { label: "Engineering", value: "engineering" }, { label: "Healthcare", value: "healthcare" }, { label: "IT/Communications", value: "it" }, { label: "Law", value: "law" }, { label: "Marketing", value: "marketing" }, { label: "Other", value: "other" }]} placeholder="Select sector" value={field.value} onChange={field.onChange} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={control} name="referralSource" render={({ field }) => (<FormItem className="space-y-2"><FormLabel className="text-xs font-black uppercase tracking-widest text-gray-500">How did you hear about us?*</FormLabel><FormControl><SearchableDropdown options={[{ label: "Social Media", value: "social_media" }, { label: "Search Engine", value: "search_engine" }, { label: "Friend/Family", value: "referral" }, { label: "Advertisement", value: "ads" }, { label: "Other", value: "other" }]} placeholder="Select source" value={field.value} onChange={field.onChange} className="h-12" /></FormControl><FormMessage /></FormItem>)} />
                  </div>

                  <FormField control={control} name="reasonForTaking" render={({ field }) => (
                    <FormItem className="space-y-6">
                      <FormLabel className="text-sm font-bold text-gray-700">Why are you taking PTE Home?*</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {["Visa (A2/B1)", "Citizenship", "Other"].map(r => (
                            <div key={r} onClick={() => field.onChange(r.toLowerCase())} className={cn("flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white", field.value === r.toLowerCase() ? "border-[#A11D1D] bg-[#A11D1D]/5" : "")}>
                              <RadioGroupItem value={r.toLowerCase()} id={`reason-${r}`} className="border-[#A11D1D] text-[#A11D1D]" />
                              <Label htmlFor={`reason-${r}`} className="font-bold text-gray-900 cursor-pointer">{r}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Previous test history</h2>
                  <FormField control={control} name="takenBefore" render={({ field }) => (
                    <FormItem className="space-y-6">
                      <FormLabel className="text-sm font-bold text-gray-700">Have you taken PTE Home before?*</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }].map(opt => (
                            <div key={opt.value} onClick={() => field.onChange(opt.value)} className={cn("flex items-center space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group bg-white", field.value === opt.value ? "border-[#A11D1D] bg-[#A11D1D]/5" : "")}>
                              <RadioGroupItem value={opt.value} id={`taken-${opt.value}`} className="border-[#A11D1D] text-[#A11D1D]" />
                              <Label htmlFor={`taken-${opt.value}`} className="font-bold text-gray-900 cursor-pointer">{opt.label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {watchTakenBefore === "yes" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                      <FormField control={control} name="takenWithinTwoYears" render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-sm font-bold text-gray-700">Have you taken the test in the last 2 years?*</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-8">
                              {["Yes", "No"].map(opt => (
                                <div key={opt} className="flex items-center space-x-2">
                                  <RadioGroupItem value={opt.toLowerCase()} id={`recent-${opt}`} />
                                  <Label htmlFor={`recent-${opt}`}>{opt}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={control} name="hasExistingAccount" render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-sm font-bold text-gray-700">Do you have a Pearson VUE account?*</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-8">
                              {["Yes", "No"].map(opt => (
                                <div key={opt} className="flex items-center space-x-2">
                                  <RadioGroupItem value={opt.toLowerCase()} id={`account-${opt}`} />
                                  <Label htmlFor={`account-${opt}`}>{opt}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  )}
                </div>

                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Consents & Agreements</h2>
                  <div className="space-y-6">
                    <FormField control={control} name="dataSharingAgreed" render={({ field }) => (
                      <FormItem className="flex items-start space-x-4 p-6 rounded-2xl bg-[#A11D1D]/5 border border-[#A11D1D]/10">
                        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-[#A11D1D] mt-1" /></FormControl>
                        <div className="space-y-1">
                          <Label className="text-sm font-bold text-gray-900 cursor-pointer">I agree to Pearson sharing my data with the score users I have selected above.*</Label>
                          <p className="text-xs text-gray-500">Your data will be handled according to our privacy policy.</p>
                        </div>
                      </FormItem>
                    )} />

                    <FormField control={control} name="bookingTermsAgreed" render={({ field }) => (
                      <FormItem className="flex items-start space-x-4 p-6 rounded-2xl bg-[#A11D1D]/5 border border-[#A11D1D]/10">
                        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-[#A11D1D] mt-1" /></FormControl>
                        <div className="space-y-1">
                          <Label className="text-sm font-bold text-gray-900 cursor-pointer">I have read and agree to the PTE Home Test Taker Handbook and Booking Terms and Conditions.*</Label>
                        </div>
                      </FormItem>
                    )} />

                    <FormField control={control} name="marketingConsent" render={({ field }) => (
                      <FormItem className="space-y-6 pt-4">
                        <FormLabel className="text-sm font-bold text-gray-700 leading-relaxed">Would you like to receive information about products, services and special offers from Pearson?*</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-8">
                            {[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }].map(opt => (
                              <div key={opt.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt.value} id={`marketing-${opt.value}`} className="border-[#A11D1D]" />
                                <Label htmlFor={`marketing-${opt.value}`} className="text-sm font-bold text-gray-700 cursor-pointer">{opt.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="space-y-8">
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <BookOpen className="size-5" />
                    <h2 className="text-xl font-black text-gray-900 tracking-tight">Add-on Services</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-slate-700">Courses</Label>
                      <SearchableDropdown
                        options={[
                          { label: "None", value: "" },
                          ...pteCourses.map((c) => ({
                            label: c.label,
                            description: (
                              <PriceDisplay amount={c.price} minimumFractionDigits={0} maximumFractionDigits={0} />
                            ),
                            value: c.id,
                          })),
                        ]}
                        placeholder="None"
                        value={formData.selectedCourse}
                        onChange={(val) => setValue("selectedCourse", val)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-slate-700">Workshops</Label>
                      <SearchableDropdown
                        options={[
                          { label: "None", value: "" },
                          ...pteWorkshops.map((w) => ({
                            label: w.name,
                            description: (
                              <PriceDisplay amount={w.price} minimumFractionDigits={0} maximumFractionDigits={0} />
                            ),
                            value: w.id,
                          })),
                        ]}
                        placeholder="None"
                        value={formData.selectedWorkshop}
                        onChange={(val) => setValue("selectedWorkshop", val)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="space-y-8">
                  <h2 className="text-xl font-black text-gray-900 tracking-tight">Review your registration</h2>
                  <div className="bg-slate-50 rounded-2xl p-8 space-y-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">Exam Fee:</span>
                      <span className="font-black text-gray-900 flex items-center gap-1">
                        <PriceDisplay amount={EXAM_FEE} />
                      </span>
                    </div>
                    {coursePrice > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Preparation Course:</span>
                        <span className="font-black text-gray-900 flex items-center gap-1">
                          <PriceDisplay amount={coursePrice} />
                        </span>
                      </div>
                    )}
                    {workshopPrice > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Workshop:</span>
                        <span className="font-black text-gray-900 flex items-center gap-1">
                          <PriceDisplay amount={workshopPrice} />
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm pt-4 border-t border-slate-200 font-black">
                      <span className="text-lg text-gray-900">Total:</span>
                      <PriceDisplay amount={total} className="text-2xl text-[#A11D1D]" />
                    </div>
                  </div>
                  <FormField control={control} name="infoCorrect" render={({ field }) => (
                    <FormItem className="flex items-start space-x-4 p-6 rounded-2xl bg-[#A11D1D]/5 border border-[#A11D1D]/10">
                      <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-[#A11D1D] mt-1" /></FormControl>
                      <Label className="text-sm font-bold text-gray-700 cursor-pointer">I confirm that all information is correct.</Label>
                    </FormItem>
                  )} />
                </div>
              </div>
            )}

            {step === 7 && (<Payment amount={total} currency="aed" />)}

            {step < 8 && (
              <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
                {step > 1 && (<button onClick={() => setStep(step - 1)} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-[#A11D1D] px-4 py-2" type="button">Previous</button>)}
                <Button type={step === 6 ? "submit" : "button"} onClick={step === 6 ? undefined : handleNext} className="px-12 py-8 bg-[#A11D1D] hover:bg-[#8A1818] text-white font-black text-xs uppercase tracking-[0.2em] rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group ml-auto">
                  {step === 6 ? "Submit Registration" : "Save and continue"}<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
