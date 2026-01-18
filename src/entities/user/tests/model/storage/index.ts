import { TestStartResponse } from "../types";

const PREFIX = "test_start_v1";

const keyOf = (testId: string | number) => `${PREFIX}:${testId}`;

export const readTestStart = (
  testId: string | number
): TestStartResponse | null => {
  try {
    const raw = localStorage.getItem(keyOf(testId));
    if (!raw) return null;
    return JSON.parse(raw) as TestStartResponse;
  } catch {
    return null;
  }
};

export const writeTestStart = (
  testId: string | number,
  data: TestStartResponse
) => {
  try {
    localStorage.setItem(keyOf(testId), JSON.stringify(data));
  } catch {
    // ignore
  }
};

export const clearTestStart = (testId: string | number) => {
  try {
    localStorage.removeItem(keyOf(testId));
  } catch {
    // ignore
  }
};
