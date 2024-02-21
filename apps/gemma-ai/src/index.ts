import { Hono } from "hono";
import { callHuggingFaceGemma } from "./lib/gemma";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { env } from "hono/adapter";

type Bindings = {
  HUGGINGFACE_API_KEY: string;
};

type HuggingFaceResponse = {
  generated_text: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.post(
  "/gemma-ai",
  zValidator(
    "json",
    z.object({
      query: z.string(),
      model: z
        .enum(["gemma-7b", "gemma-7b-it", "gemma-2b", "gemma-2b-it"])
        .default("gemma-7b"),
    })
  ),
  async (c) => {
    try {
      const { query, model } = c.req.valid("json");
      const { HUGGINGFACE_API_KEY } = env(c);

      const response = await callHuggingFaceGemma({
        query,
        bearer: HUGGINGFACE_API_KEY,
        model,
      });

      const [result]: HuggingFaceResponse[] = await response.json();
      return c.json(result?.generated_text?.replaceAll("\n", ""));
    } catch (error) {
      return c.json({ error });
    }
  }
);

export default app;
