# HonoJS App with Hugging Face Integration

This HonoJS application demonstrates how to make a POST request to a local endpoint (http://localhost:8787/gemma-ai) using Hugging Face's API for querying information. Specifically, this app queries information about Albert Einstein using the gemma-7b model.

## Prerequisites

Before you start, ensure you have the following:

- Node.js installed on your machine.
- A Hugging Face API key. If you don't have one, you can create it by following the instructions here.

## Setup

1. Clone the repository
   Clone this repository to your local machine using git clone, then navigate to the app's directory.

2. Install dependencies
   Run pnpm install to install the necessary dependencies for the app.

```
pnpm install
```

3. Hugging Face API Key
   Save your Hugging Face API key in a file named `.dev.vars` at the root of your project. The file should contain the following line:

```
HUGGING_FACE_API_KEY=your_api_key_here
```

## Running the Application

1. Start the Application
   Run pnpm dev to start the application. This will launch the server on a predefined port (default is 8787).

```
pnpm run dev
```

2. Making the POST Request
   The application is set up to make a POST request to http://localhost:8787/gemma-ai with the body:

```json
{
  "query": "Who is Albert Einstein?",
  "model": "gemma-7b"
}
```

This request is triggered automatically when you access the specific endpoint on your HonoJS app (e.g., http://localhost:3000/query).

## Environment Variables

The application uses the following environment variables:

HUGGING_FACE_API_KEY - Your Hugging Face API key for authentication.
Ensure these are set in your .dev.vars file before starting the app.

```
HUGGING_FACE_API_KEY=your_api_key_here
```

Reference Link: https://huggingface.co/docs/api-inference/quicktour
