import { forwardRef } from "react";
import Chat from "./Chat";
import { Text } from "@nextui-org/react";

const AiHelper = forwardRef((_, ref) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div
        ref={ref}
        id="intro"
        className="flex min-h-screen w-screen max-w-4xl flex-col justify-center gap-2 px-10 align-middle "
      >
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, $gray800 -20%, $gray400 100%",
          }}
          style={{ textWrap: "balance" }}
          className="mb-2 inline text-center font-bold"
        >
          Everything is better with ai
        </Text>
        <Chat />
      </div>
    </section>
  );
});

AiHelper.displayName = "Ai Helper";

export default AiHelper;
