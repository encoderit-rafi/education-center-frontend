import { useQuery } from "@tanstack/react-query";
import { PRIMARY_NAV, NAV_EXAM_PREPARATION_COURSES_DATA } from "@/data";
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

  // Construct dynamic navigation
  const primaryNav: AppNavigationItem[] = PRIMARY_NAV.map((item) => {
    // We target the Exam Preparation Courses dropdown
    if (item.name === "Exam Preparation Courses" && item.type === "dropdown") {
      const dynamicItems = NAV_EXAM_PREPARATION_COURSES_DATA.map((exam) => {
        // Find if there is a matching course in the database response to get its exact slug
        const dbCourse = coursesResponse?.data?.data?.find((c) => {
          const dbSlug = c.slug.toLowerCase();
          const sId = exam.id.toLowerCase();
          return (
            dbSlug === sId ||
            (sId === "pte-academic" && dbSlug === "pte") ||
            (sId === "celpip-general" && dbSlug === "celpip") ||
            (sId === "toefl" && dbSlug === "toefl") ||
            dbSlug.includes(sId) ||
            sId.includes(dbSlug)
          );
        });

        const name = exam.name === "PTE Academic" ? "PTE" : exam.name;
        return {
          name,
          href: `/exam-preparation-courses/${dbCourse ? dbCourse.slug : exam.id}`,
        };
      });

      return {
        ...item,
        items: dynamicItems,
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

  const isLoading = isLoadingCourses || isLoadingMockTests;
  const isError = isErrorCourses || isErrorMockTests;

  return { primaryNav, isLoading, isError };
}
