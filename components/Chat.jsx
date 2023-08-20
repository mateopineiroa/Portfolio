import { Button } from "@nextui-org/react";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { SiSendinblue } from "react-icons/si";
import { AiOutlineUser } from "react-icons/ai";

export default function Chat() {
  const [numDots, setNumDots] = useState(3);
  const [loadingText, setLoadingText] = useState("Thinking...");
  const { messages, input, handleInputChange, handleSubmit, error, isLoading } =
    useChat();

  const ref = useRef();

  useEffect(() => {
    if (isLoading) {
      const container = ref.current;
      container.scrollTop = 9999;
    }
  }, [isLoading, messages]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dots = ".".repeat(numDots);
      setLoadingText(`Thinking${dots}`);

      setNumDots((numDots % 3) + 1);
    }, 500);

    return () => clearInterval(intervalId);
  }, [numDots]);

  return (
    <>
      <div
        ref={ref}
        className="flex max-h-[60vh] flex-col overflow-y-auto break-words rounded-xl"
      >
        {messages.map((m, idx) => (
          <div
            key={m.id}
            className={`child flex gap-4 p-4 ${
              m.role === "user"
                ? "bg-gray-300 dark:bg-[#343541]"
                : "bg-gray-100 dark:bg-[#444654]"
            }`}
          >
            {m.role === "user" ? (
              <div
                size="xs"
                color="secondary"
                className="p-3 dark:text-gray-50 dark:disabled:text-gray-500"
              >
                <AiOutlineUser size={20} />
              </div>
            ) : (
              <div
                size="xs"
                color="secondary"
                className="h-fit w-fit rounded-lg bg-[#19c37d] p-3 dark:text-gray-50 dark:disabled:text-gray-500"
              >
                <SiSendinblue size={20} />
              </div>
            )}
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="col-span-full">
          <div className="relative mt-2">
            <input
              value={input}
              onChange={(e) => {
                handleInputChange(e);
              }}
              id="about"
              name="about"
              placeholder="Ask AI why Mateo is a good fit for your project"
              rows="3"
              className="block h-20 w-full rounded-xl border-0 bg-white py-8 pl-6 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-[#FFFFFF0D] dark:text-inherit dark:ring-gray-800 sm:text-sm sm:leading-6"
            />
            <div className="absolute right-9 top-4 w-6">
              <button
                size="xs"
                color="secondary"
                className="rounded-lg p-3 enabled:bg-[#19c37d] disabled:bg-none disabled:text-gray-300 dark:text-gray-50 dark:disabled:text-gray-500"
                disabled={!input}
              >
                <SiSendinblue size={20} />
              </button>
            </div>
          </div>
        </div>

        {error && <p>Error: {error.message}</p>}
      </form>
    </>
  );
}
