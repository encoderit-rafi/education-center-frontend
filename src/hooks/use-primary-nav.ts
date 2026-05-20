import { useQuery } from "@tanstack/react-query";
import { PRIMARY_NAV } from "@/data";
import api from "@/axios";
import { AppNavigationItem } from "@/components/blocks/app-navigation";

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    data: {
      id: string;
      name: string;
      slug: string;
      examType?: {
        id: string;
        name: string;
      }[];
      [key: string]: unknown;
    }[];
    total: number;
    page: number;
    totalPages: number;
  };
}

export function usePrimaryNav() {
  const {
    data: coursesResponse,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useQuery<ApiResponse>({
    queryKey: ["exam-preparation-courses"],
    queryFn: async () => {
      const response = await api.get("/courses");
      return response.data;
    },
  });

  const {
    data: mockTestsResponse,
    isLoading: isLoadingMockTests,
    isError: isErrorMockTests,
  } = useQuery<ApiResponse>({
    queryKey: ["paid-mock-tests"],
    queryFn: async () => {
      const response = await api.get("/mock-tests");
      return response.data;
    },
  });

  const {
    data: examsResponse,
    isLoading: isLoadingExams,
    isError: isErrorExams,
  } = useQuery<ApiResponse>({
    queryKey: ["exams", { limit: 100 }],
    queryFn: async () => {
      const response = await api.get("/exams?limit=100");
      return response.data;
    },
  });

  // Construct dynamic navigation
  const primaryNav: AppNavigationItem[] = PRIMARY_NAV.map((item) => {
    // We target the Exams dropdown
    if (item.name === "Exams" && item.type === "dropdown") {
      const dynamicItems =
        examsResponse?.data?.data
          ?.filter((exam) =>
            exam.examType?.some((et) => et.name === "group")
          )
          ?.map((exam) => ({
            name: exam.name,
            href: `/exams/${exam.slug}`,
          })) || [];

      return {
        ...item,
        items: dynamicItems.length > 0 ? [...dynamicItems,{name:"Other Exams",href:"/exams/other-exams"}] : item.items,
      };
    }

    // We target the Exam Preparation Courses dropdown
    if (item.name === "Exam Preparation Courses" && item.type === "dropdown") {
      const dynamicItems =
        coursesResponse?.data?.data?.map((course) => ({
          name: course.name,
          href: `/exam-preparation-courses/${course.slug}`,
        })) || [];

      return {
        ...item,
        items: dynamicItems.length > 0 ? dynamicItems : item.items,
      };
    }
    if (item.name === "Fees" && item.type === "dropdown") {
      const dynamicItems =
        coursesResponse?.data?.data?.map((course) => ({
          name: course.name,
          href: `/fees/${course.slug}`,
        })) || [];

      return {
        ...item,
        items: dynamicItems.length > 0 ? dynamicItems : item.items,
      };
    }

    // We target the Paid Mock Tests dropdown
    if (item.name === "Paid Mock Tests" && item.type === "dropdown") {
      const dynamicItems =
        mockTestsResponse?.data?.data?.map((mockTest) => ({
          name: mockTest.name,
          href: `/paid-mock-tests/${mockTest.slug}`,
        })) || [];

      return {
        ...item,
        items: dynamicItems.length > 0 ? dynamicItems : item.items,
      };
    }

    return item;
  });

  const isLoading = isLoadingCourses || isLoadingMockTests || isLoadingExams;
  const isError = isErrorCourses || isErrorMockTests || isErrorExams;

  return { primaryNav, isLoading, isError };
}
