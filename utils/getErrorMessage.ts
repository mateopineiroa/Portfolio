import { FirebaseError } from "firebase/app";

import beautifyServerError from "./beautifyServerError";

/**
 * An utility function for getting the error message on any catch statement.
 * If it gets a firebase error, the function returns a user-friendly string
 * @param error unknown type error
 * @returns the string message
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) return beautifyServerError(error);

  if (error instanceof Error) return error.message;

  if (error && typeof error === "object" && "message" in error)
    return String(error.message);

  if (typeof error === "string") return error;

  return "Unknown error";
};
