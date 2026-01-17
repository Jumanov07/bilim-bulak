import { api } from "@/shared/api";
import type { GetCoursesResponse } from "../types";

export const getCourses = async (): Promise<GetCoursesResponse> => {
  const { data } = await api.get<GetCoursesResponse>("/user/courses");
  return data;
};
