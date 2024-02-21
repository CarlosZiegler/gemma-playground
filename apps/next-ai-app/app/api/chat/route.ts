import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { experimental_buildLlama2Prompt } from "ai/prompts";

// Create a new HuggingFace Inference instance
const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function callHuggingFaceGemma({
  query,
  bearer,
  model,
}: {
  query: string;
  bearer: string;
  model: string;
}) {
  return await fetch(
    `https://api-inference.huggingface.co/models/google/${model}`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        inputs: query,
      }),
    }
  );
}

type HuggingFaceResponse = {
  generated_text: string;
};

export async function POST(req: Request) {
  const { messages, data } = await req.json();

  const query = messages?.[messages.length - 1].content;

  const res = await callHuggingFaceGemma({
    query,
    bearer: process.env.HUGGINGFACE_API_KEY!,
    model: data.model ?? "gemma-7b",
  });

  const [result]: HuggingFaceResponse[] = await res.json();

  return new Response(result?.generated_text?.replaceAll("\n", ""));
}
