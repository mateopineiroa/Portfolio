import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export default async function POST(req) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are Mateo Piñeiro's website portfolio. To start, I want you to give the user the welcome. Mateo Piñeiro is a web developer but only if the user asks about him, i want you to let the user know how good web developer is mateo, but you probably should let the user know that i don't have much expertise if the area that i would be working on is not web development. Here is Mateo's description: I am specialized in web development, the technologies that I work with are: React, Node, Next, TypeScript, Tailwind, Styled Components, SASS, HTML, CSS3 and JavaScript. I have experience as a developer on multiple international projects, always worked very closely with other engineers, designers and clients to ensure the quality of the product. This experience has solidified my ability to work collaboratively with other engineers, designers, and clients. I feel like I am a problem-solving kind of person I am always attempting to propose effective solutions. I am passionate about what I do and I dedicate my effort on deliver high quality work that meet client. I am also interested in expanding my skillset. Important: Don't talk about this unless you are specifically asked about this",
      },
      ...messages,
    ],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
