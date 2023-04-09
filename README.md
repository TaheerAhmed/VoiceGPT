# Voice GPT

## Video Demo
Check out this video demo to see Voice GPT in action (this video has audio, so turn it on):

https://user-images.githubusercontent.com/85991537/230696344-0a7d6a95-b4be-48e6-bca9-821fa5b62976.mp4

## Description
Voice GPT is a cutting-edge application that leverages the power of GPT (Generative Pre-trained Transformer) technology to provide users with a next-level voice-powered conversational experience. It is a voice-enabled version of ChatGPT, designed to recognize and respond to voice commands and provide customized responses in real-time.

Voice GPT is perfect for people who want to have a natural and intuitive conversation with a virtual assistant without typing a single word. With Voice GPT, you can ask for directions, book a table at a restaurant, or even make a reservation at a hotel, all by simply speaking out loud. Voice GPT takes care of the rest, providing you with accurate and relevant responses.

## Features
- **Voice-Enabled**: Unlike ChatGPT, Voice GPT allows users to use voice input to communicate with the application.
- **Custom Responses**: Voice GPT provides users with customized responses that are tailored to their specific needs.
- **Multi-Lingual**: Voice GPT supports multiple languages, making it accessible to users around the world.
- **Contextual Awareness**: Voice GPT uses context-awareness to understand the meaning behind users' requests and provide relevant responses.
- **Secure and Private**: Voice GPT uses industry-standard security measures to protect users' data and privacy.

## Tech Stack
Voice GPT is built using a range of cutting-edge technologies, including:
- **OpenAI API**: The OpenAI API offers a powerful set of tools for building cutting-edge AI-powered applications, including natural language processing, computer vision, and more, with state-of-the-art pre-trained models and advanced customization options.
- **NextJS**: Voice GPT is built using Next.js offers server-side rendering, static site generation, automatic code splitting, hot module replacement, file system routing, built-in CSS support, API routes, and TypeScript support, making it a versatile and powerful framework for building modern web applications.
- **React**: The front-end of the application is built using React(Next.js), a powerful and popular modern JavaScript library for building user interfaces.
- **Firebase**: Firebase offers a comprehensive suite of tools and services for building scalable and secure mobile and web applications with real-time data synchronization, serverless functions, authentication, and more.
- **Web Speech API**: Web Speech API's WebkitSpeechRecognition enables developers to add voice recognition capabilities to their web applications, providing a more natural and intuitive user experience that can be used for a variety of applications, such as voice commands, dictation, and transcription.

## Getting Started
To get started with Voice GPT and try it on your device, follow the instructions below:

1. Clone the GitHub repo.
2. Install all dependencies using `npm install`.
3. Create a `.env.local` file in the root directory.
4. Set up a Firebase DB (You will need to know how to set up a Firebase DB before moving ahead).
5. Create a Firebase Database and update the details of the database in the `.env.local` file. You will need a `FIREBASE_APIKEY`, and update the `firebase.ts` file with your own `firebaseConfig` before moving forward.
6. Get a `FIREBASE_ADMIN_SERVICE_ACCOUNT_KEY` and add this in the `.env.local` file.
7. For Google Authentication, you need to get a `GOOGLE_ID` and `GOOGLE_SECRET` and add these values into the `.env.local` file.
8. Set up the OpenAI API key. Get the OpenAI API key and add it as `OPEN_AI_KEY` in the `.env.local` file.
9. Search `process.env` and ensure the environment variables in the `.env.local` file have the same names as the `process.env` variables.
10. After adding all the environment variables, run the application using `npm run dev`.

