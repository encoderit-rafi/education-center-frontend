import { useQuery } from "@tanstack/react-query";
import { PRIMARY_NAV } from "@/data";
import api from "@/axios";
import { AppNavigationItem } from "@/components/blocks/app-navigation";

interface CourseApiResponse {
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
    isLoading,
    isError,
  } = useQuery<CourseApiResponse>({
    queryKey: ["exam-preparation-courses"],
    queryFn: async () => {
      const response = await api.get("/courses");
      return response.data;
    },
  });
  console.log("👉 ~ usePrimaryNav ~ coursesResponse:", coursesResponse);

  // Construct dynamic navigation
  const primaryNav: AppNavigationItem[] = PRIMARY_NAV.map((item) => {
    // We target the Exam Preparation Courses dropdown
    if (item.name === "Exam Preparation Courses" && item.type === "dropdown") {
      const dynamicItems =
        coursesResponse?.data?.data?.map((course) => ({
          name: course.name,
          href: `/exam-preparation-courses/${course.slug}`,
        })) || [];

      return {
        ...item,
        items: dynamicItems,
      };
    }
    return item;
  });

  return { primaryNav, isLoading, isError };
}
