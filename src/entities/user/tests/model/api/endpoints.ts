import { api } from "@/shared/api";
import {
  GetTestsResponse,
  SubmitTestPayload,
  TestResultResponse,
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
): Promise<TestResultResponse> => {
  const { data } = await api.post<TestResultResponse>(
    "/user/tests/submit",
    payload
  );
  return data;
};

export const getTestResult = async (
  testId: string
): Promise<TestResultResponse> => {
  const { data } = await api.get<TestResultResponse>(
    `/user/tests/${testId}/result`
  );
  return data;
};
