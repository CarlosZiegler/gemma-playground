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
