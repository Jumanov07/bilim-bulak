import { api } from "@/shared/api";
import {
  GetTestsResponse,
  SubmitTestPayload,
  SubmitTestResponse,
  TestStartResponse,
} from "../types";

export const getTests = async (): Promise<GetTestsResponse> => {
  const { data } = await api.get<GetTestsResponse>("/user/tests");
  return data;
};

export const getTestQuestions = async (
  testId: string
): Promise<TestStartResponse> => {
  const { data } = await api.get<TestStartResponse>(
    `/user/tests/${testId}/start`
  );
  return data;
};

export const submitTestAnswers = async (
  payload: SubmitTestPayload
): Promise<SubmitTestResponse> => {
  const { data } = await api.post<SubmitTestResponse>(
    "/user/tests/submit",
    payload
  );
  return data;
};
