"use client";

import { useChat } from "ai/react";
import { useState } from "react";

export default function Chat() {
  const [model, setModel] = useState("gemma-7b");
  const { messages, input, handleInputChange, handleSubmit, metadata } =
    useChat();

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(e.target.value);
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <select
        onChange={handleOnChange}
        id="models"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a Model</option>
        <option value="gemma-7b" selected>
          gemma-7b
        </option>
        <option value="gemma-7b-it">gemma-7b-it</option>
        <option value="gemma-2b">gemma-2b</option>
        <option value="gemma-2b-it">gemma-2b-it</option>
      </select>

      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : `AI: `}
          {m.content}
        </div>
      ))}

      <form
        onSubmit={(e) => {
          handleSubmit(e, {
            data: {
              model,
            },
          });
        }}
      >
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
