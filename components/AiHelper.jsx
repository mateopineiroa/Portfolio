import { forwardRef } from "react";
import Chat from "./Chat";
//

const AiHelper = forwardRef((_, ref) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div
        ref={ref}
        id="intro"
        className="flex min-h-screen w-screen max-w-4xl flex-col justify-center gap-4 px-10 align-middle "
      >
        <h2
          style={{ textWrap: "balance" }}
          className="mb-2 inline self-center bg-gradient-to-tl from-zinc-900 to-zinc-300 bg-clip-text text-3xl font-bold text-transparent selection:text-gray-800  dark:from-zinc-600 dark:to-zinc-50"
        >
          <span className="text-transparent underline decoration-slate-900 underline-offset-8 selection:underline selection:decoration-slate-900 dark:decoration-zinc-400 selection:dark:decoration-zinc-400">
            Everything
          </span>{" "}
          is better with ai
        </h2>
        <Chat />
      </div>
    </section>
  );
});

AiHelper.displayName = "Ai Helper";

export default AiHelper;
