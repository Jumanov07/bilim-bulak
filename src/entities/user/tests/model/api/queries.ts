import { useMutation, useQuery } from "@tanstack/react-query";
import { getTestQuestions, getTests, submitTestAnswers } from "./endpoints";
import { SubmitTestPayload, SubmitTestResponse } from "../types";

export const useGetTests = () => {
  return useQuery({
    queryKey: ["tests"],
    queryFn: () => getTests(),
  });
};

export const useGetTest = (testId: string) => {
  return useQuery({
    queryKey: ["test", "start", testId],
    queryFn: () => getTestQuestions(testId),
    enabled: Boolean(testId),
  });
};

export const useSubmitTestAnswers = () => {
  return useMutation<SubmitTestResponse, unknown, SubmitTestPayload>({
    mutationFn: (payload) => submitTestAnswers(payload),
  });
};
