import { CoverageMapData } from 'istanbul-lib-coverage';
import { TestSessionStatus } from './TestSessionStatus';

export interface FailedImport {
  file: string;
  error: TestResultError;
}

export interface TestResultError {
  message: string;
  stack?: string;
  expected?: string;
  actual?: string;
}

export interface TestResult {
  name: string;
  passed: boolean;
  error?: TestResultError;
}

export interface TestSession {
  id: string;
  testRun: number;
  browserName: string;
  testFile: string;
  status: TestSessionStatus;
  passed?: boolean;
  error?: TestResultError;
  tests: TestResult[];
  logs: string[];
  failedImports: FailedImport[];
  request404s: string[];
  testCoverage?: CoverageMapData;
}
