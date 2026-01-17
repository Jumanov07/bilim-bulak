"use client";
import { useParams } from "next/navigation";
import { useGetCourseDetail } from "@/entities/user/courses/model/api/queries";
import { BackButton } from "@/shared/ui/back-button";
import { Spinner } from "@heroui/react";
import { ErrorBlock } from "@/shared/ui/error-block";

export const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const {
    data: course,
    isPending,
    isError,
    refetch,
  } = useGetCourseDetail(courseId);

  return (
    <>
      <BackButton />

      {isPending ? (
        <div className="mt-14 flex items-center justify-center">
          <Spinner />
        </div>
      ) : isError ? (
        <ErrorBlock refetch={refetch} className="mt-14" />
      ) : (
        <section className="animate-fade-in mt-6">
          <h1 className="font-bold text-2xl md:text-4xl text-center">
            {course?.title}
          </h1>

          <div className="mt-14 flex flex-col justify-center items-center md:flex-row md:flex-wrap lg:flex-nowrap md:items-stretch gap-8">
            {course.videos.map((video) => (
              <div key={video.id}></div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
