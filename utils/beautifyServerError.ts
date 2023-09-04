import { FirebaseError } from "firebase/app";

export const authErrors = new Map([
  ["auth/email-already-in-use", "Invalid credentials. Try again."],
  ["auth/email-already-exists", "Invalid credentials. Try again."],
  ["auth/invalid-email", "Invalid email. Try again."],
  ["auth/wrong-password", "Invalid credentials. Try again."],
  ["auth/too-many-requests", "Too many requests. Try again later.."],
  [
    "auth/invalid-password",
    "Invalid password. It must be a string with at least six characters.",
  ],
  ["auth/invalid-credential", "Invalid credentials. Try again."],
  ["auth/user-not-found", "Invalid credentials. Try again."],
  [
    "auth/requires-recent-login.",
    "Your last sign-in is not recent enough, please sign in and try again.",
  ],
]);

export const storageError = new Map([
  ["storage/object-not-found", "Could not find the desired track."],
  ["storage/canceled", "You canceled the track upload operation."],
  [
    "storage/retry-limit-exceeded",
    "The maximum time limit for the operation with your track has been exceeded.",
  ],
  ["storage/server-file-wrong-size", "Try uploading your track again."],
  [
    "storage/unauthenticated",
    "User is unauthenticated, please authenticate and try again.",
  ],
]);

const beautifyServerError = (error: FirebaseError) =>
  authErrors.get(error.code) ??
  authErrors.get(error.message) ??
  storageError.get(error.code) ??
  storageError.get(error.message) ??
  "Unknown error";

export default beautifyServerError;
