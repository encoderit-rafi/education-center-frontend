import { format } from "date-fns";

export interface BookingPayloadInput {
  userId?: string | null;
  examId: string;
  courseId?: string | null;
  packageId?: string | null;
  workshopId?: string | null;
  workshopPackageId?: string | null;
  paymentId?: string | null;
  paymentMethod: string;
  firstName: string;
  middleName?: string | null;
  lastName?: string | null;
  dateOfBirth?: string | Date | null;
  gender?: string | null;
  nationality?: string | null;
  email: string;
  phone: string;
  address?: string | null;
  country?: string | null;
  idType?: string | null;
  idNumber?: string | null;
  sessionDate?: string | Date | null;
  sessionTime?: string | null;
  examFee: number;
  courseFee?: number;
  workshopFee?: number;
  additionalFee?: number;
  discountAmount?: number;
  vatAmount?: number;
  totalAmount: number;
  allFormData: Record<string, any>;
}

export function compileBookingPayload(input: BookingPayloadInput) {
  const formatDate = (d: any) => {
    if (!d) return undefined;
    try {
      return format(new Date(d), "yyyy-MM-dd");
    } catch {
      return undefined;
    }
  };

  const mapIdType = (type?: string | null) => {
    if (!type) return undefined;
    const lower = type.toLowerCase();
    if (lower.includes("passport")) return "passport";
    if (lower.includes("emirate")) return "emirates";
    if (lower.includes("visa")) return "visa";
    return "others";
  };

  const payload: Record<string, any> = {
    user_id: input.userId || undefined,
    exam_id: input.examId,
    course_id: input.courseId || null,
    package_id: input.packageId || input.allFormData.selectedCourse || undefined,
    workshop_id: input.workshopId || input.allFormData.selectedWorkshop || undefined,
    workshop_package_id: input.workshopPackageId || undefined,
    payment_id: input.paymentId || undefined,
    payment_methods: input.paymentMethod || "stripe",
    first_name: input.firstName,
    middle_name: input.middleName || null,
    last_name: input.lastName || null,
    date_of_birth: formatDate(input.dateOfBirth),
    gender: input.gender || undefined,
    nationality: input.nationality || undefined,
    email: input.email,
    phone: input.phone,
    address: input.address || null,
    country: input.country || null,
    id_type: mapIdType(input.idType),
    id_number: input.idNumber || undefined,
    session_date: formatDate(input.sessionDate),
    session_time: input.sessionTime || undefined,
    exam_fee: input.examFee,
    course_fee: input.courseFee || 0,
    workshop_fee: input.workshopFee || 0,
    additional_fee: input.additionalFee || 0,
    discount_amount: input.discountAmount || 0,
    vat_amount: input.vatAmount || 0,
    total_amount: input.totalAmount,
  };

  const coreKeys = [
    "examId", "exam_id",
    "paymentMethod", "payment_methods",
    "firstName", "first_name",
    "middleName", "middle_name",
    "lastName", "last_name",
    "dateOfBirth", "date_of_birth",
    "gender", "sex",
    "nationality",
    "email", "emailUsername",
    "phone", "mobileNumber",
    "address", "country",
    "idType", "id_type",
    "idNumber", "id_number",
    "sessionDate", "session_date", "examDate", "exam_date",
    "sessionTime", "session_time", "examTimeSlot", "examTime",
    "examFee", "exam_fee",
    "courseFee", "course_fee",
    "workshopFee", "workshop_fee",
    "additionalFee", "additional_fee",
    "discountAmount", "discount_amount",
    "vatAmount", "vat_amount",
    "totalAmount", "total_amount",
    "userId", "user_id",
    "courseId", "course_id",
    "packageId", "package_id",
    "workshopId", "workshop_id",
    "workshopPackageId", "workshop_package_id",
    "paymentId", "payment_id",
  ];

  const formData: Record<string, any> = {};
  for (const [key, value] of Object.entries(input.allFormData)) {
    if (!coreKeys.includes(key)) {
      formData[key] = value;
    }
  }
  payload.form_data = formData;

  return Object.fromEntries(
    Object.entries(payload).filter(([_, v]) => v !== undefined)
  );
}
