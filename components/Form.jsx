import { forwardRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { db } from "../firebase";
import { getErrorMessage } from "../utils/getErrorMessage";

const inputFormat =
  "block w-full rounded-md border-0 bg-[#FFFFFF0D] px-3.5  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:outline-none  dark:text-white/70 dark:ring-[#ffffff1a] dark:focus:ring-indigo-900 sm:text-sm sm:leading-6";

const Form = forwardRef((_, ref) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = Array.from(e.target.elements)
      .filter((element) => element.name)
      .reduce((acc, element) => {
        acc[element.name] = element.value;
        return acc;
      }, {});

    await addDoc(collection(db, "contact"), formData);
  };

  return (
    <section ref={ref} className="flex flex-col">
      <div className=" flex min-h-screen w-screen flex-col justify-center px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="inline self-center bg-gradient-to-br from-zinc-800 to-zinc-300 bg-clip-text text-3xl font-bold  text-transparent selection:text-zinc-800">
            Get in touch
          </h2>
        </div>
        <form
          onSubmit={(e) =>
            toast.promise(onSubmit(e), {
              success: "Done! Mateo will get in touch soon",
              loading: "Sending contact data...",
              error: getErrorMessage,
            })
          }
          className="mx-auto mt-12 w-full max-w-xl"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  spellCheck="false"
                  autoComplete="given-name"
                  required
                  className={inputFormat}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  spellCheck="false"
                  autoComplete="family-name"
                  className={inputFormat}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  spellCheck="false"
                  required
                  autoComplete="organization"
                  className={inputFormat}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  spellCheck="false"
                  required
                  autoComplete="email"
                  className={inputFormat}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  spellCheck="false"
                  className={`${inputFormat} min-h-[7rem]`}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {"Let's"} talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});
Form.displayName = "Form";
export default Form;
