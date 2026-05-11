"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Check,
  SendHorizontal,
  ShieldCheck,
  Calendar as CalendarIcon,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Stepper from "@/components/stepper";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { toast } from "sonner";

const AREAS = [
  "Exam Booking & Seat Availability",
  "Exam Prep. Course",
];

const TIMES = [
  { label: "Morning (9:00 AM – 11:30 AM)", value: "Morning" },
  { label: "Afternoon (12:00 PM – 5:30 PM)", value: "Afternoon" },
  { label: "Evening (6:00 PM – 8:30 PM)", value: "Evening" },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(1, "Please enter your emirate/city"),
  area: z.string().min(1, "Please select an area of consultation"),
  date: z.date({
    error: "Please select a preferred date",
  }),
  time: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function FreeConsultationForm() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      area: "",
      date: undefined,
      time: "",
      message: "",
    },
  });

  const selectedDate = watch("date");

  const onSubmit = async (data: FormValues) => {
    console.log("Submitting:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Enquiry Received", {
      description: "Thank you for contacting us. We have received your enquiry and will respond to you within 1 to 2 business days. Our working hours: Saturday to Thursday (9:00 AM – 9:00 PM)",
      duration: 6000,
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
        {/* Personal Information */}
        <div className="space-y-6">
          <Stepper step={1}>Your Information</Stepper>
          <div className="space-y-4">
            <Field data-invalid={!!errors.fullName}>
              <FieldLabel required>Full Name</FieldLabel>
              <FieldContent>
                <Input
                  {...register("fullName")}
                  placeholder="John Doe"
                />
              </FieldContent>
              <FieldError errors={[errors.fullName]} />
            </Field>

            <Field data-invalid={!!errors.email}>
              <FieldLabel required>Email Address</FieldLabel>
              <FieldContent>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                />
              </FieldContent>
              <FieldError errors={[errors.email]} />
            </Field>

            <Field data-invalid={!!errors.phone}>
              <FieldLabel required>Phone Number</FieldLabel>
              <FieldContent>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <PhoneInput
                      value={field.value}
                      onChange={field.onChange}
                      defaultCountry="AE"
                      className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden  focus-within:ring-4 focus-within:ring-primary/5"
                    />
                  )}
                />
              </FieldContent>
              <FieldError errors={[errors.phone]} />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field data-invalid={!!errors.country}>
                <FieldLabel required>Country</FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <CountryDropdown
                        value={field.value}
                        onChange={(country) => field.onChange(country.name)}

                      />
                    )}
                  />
                </FieldContent>
                <FieldError errors={[errors.country]} />
              </Field>

              <Field data-invalid={!!errors.city}>
                <FieldLabel required>Emirate / City</FieldLabel>
                <FieldContent>
                  <Input
                    {...register("city")}
                    placeholder="Dubai"
                  />
                </FieldContent>
                <FieldError errors={[errors.city]} />
              </Field>
            </div>
          </div>
        </div>

        {/* Consultation Details */}
        <div className="space-y-6">
          <Stepper step={2}>Consultation Details</Stepper>
          <div className="space-y-4">
            <Field data-invalid={!!errors.area}>
              <FieldLabel required>Area of Consultation</FieldLabel>
              <FieldContent>
                <Controller
                  control={control}
                  name="area"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-slate-50/50 border-slate-200 h-11 rounded-xl px-4 font-medium">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {AREAS.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </FieldContent>
              <FieldError errors={[errors.area]} />
            </Field>

            <div className="grid grid-cols-2 gap-1">
              <Field data-invalid={!!errors.date}>
                <FieldLabel required>Date Preference</FieldLabel>
                <FieldContent>
                  <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <PopoverTrigger
                      render={
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-left font-normal rounded-md border border-slate-200  px-3 py-2 text-sm transition-all outline-none  focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 shadow-none hover:shadow-none hover:bg-transparent",
                            !selectedDate && "text-slate-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
                          {selectedDate ? (
                            format(selectedDate, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      }
                    />
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setValue("date", date as Date);
                          setIsCalendarOpen(false);
                        }}
                        disabled={(date) =>
                          date <= new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FieldContent>
                <FieldError errors={[errors.date]} />
              </Field>

              <Field data-invalid={!!errors.time}>
                <FieldLabel required>Preferred Time</FieldLabel>
                <FieldContent>
                  <Controller
                    control={control}
                    name="time"
                    render={({ field }) => (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-between font-medium shadow-none outline-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 h-11",
                              !field.value && "text-slate-400"
                            )}
                          >
                            {field.value
                              ? TIMES.find((t) => t.value === field.value)?.label
                              : "Select time"}
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[var(--radix-dropdown-menu-trigger-width)] w-auto bg-white">
                          <DropdownMenuRadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            {TIMES.map((t) => (
                              <DropdownMenuRadioItem key={t.value} value={t.value}>
                                {t.label}
                              </DropdownMenuRadioItem>
                            ))}
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  />
                </FieldContent>
                <FieldError errors={[errors.time]} />
              </Field>
            </div>

            <Field>
              <FieldLabel>Message/Comments</FieldLabel>
              <FieldContent>
                <Textarea
                  {...register("message")}
                  rows={2}
                  className="bg-slate-50/50 border-slate-200 rounded-xl p-4 placeholder:text-slate-400 font-medium resize-none focus:ring-4 focus:ring-primary/5"
                  placeholder="Any specific questions?"
                />
              </FieldContent>
            </Field>
          </div>
        </div>
      </div>

      <div className="pt-4 space-y-4 max-w-md mx-auto items-center justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full"

        >
          {isSubmitting ? "Processing..." : "Submit"}
          {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}

        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium text-center">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <span>Response within 1-2 business days</span>
        </div>
      </div>
    </form>
  );
}
