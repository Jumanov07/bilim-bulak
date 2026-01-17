export interface CourseItem {
  id: number;
  title: string;
  description: string;
  accessDeadline: string;
  videosCount: number;
}

export type GetCoursesResponse = CourseItem[];
