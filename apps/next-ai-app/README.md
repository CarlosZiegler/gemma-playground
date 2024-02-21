# Next.js App with Hugging Face Integration with GOOGLE GEMMA Model

This application run a chat that are using the open model from Google [Hugging Face](https://huggingface.co/google/gemma-7b)

More about [Gemma](https://blog.google/technology/developers/gemma-open-models/)

## Prerequisites

Before you start, make sure you have:

- Node.js installed on your machine.
- A Hugging Face API key. If you don't have one yet, you can create it by following the instructions here.

## Setup

1. Clone the Repository
   Clone this repository to your local machine using git clone, then navigate to the app's directory.

2. Install Dependencies
   Run pnpm install to install the necessary dependencies for the app.

3. Hugging Face API Key
   Save your Hugging Face API key in a file named .env.local at the root of your project. The file should contain the following line:

```
HUGGING_FACE_API_KEY=your_api_key_here
```

## Running the Application

1. Start the Application
   Run pnpm dev to start the application in development mode. This will launch the server on http://localhost:3000.

2. Start to select an Model and chat with them

## Environment Variables

The application uses the following environment variable:

```
HUGGING_FACE_API_KEY - Your Hugging Face API key for authentication.
```

Ensure this is set in your .env.local file before starting the app.
