import api from "@/lib/api";
import type { CourseType } from "@/types/models/course-type";
import { handleApiError } from "@/utils/error/api-error-handler";

export const isCoursesArray = (data: any): data is CourseType[] => {
  return Array.isArray(data);
};

export const readCoursesService = async (): Promise<
  CourseType[] | { error: string }
> => {
  try {
    const courses = (await api.get("/matkul")).data;

    return courses;
  } catch (error: any) {
    const errorMessage = handleApiError(error, "data course");
    return { error: errorMessage };
  }
};
