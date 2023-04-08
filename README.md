<h1>Voice GPT</h1>

<h3>Video Demo<h3/>
Check out this video demo to see Voice GPT in action:(this video has audio soo turn it on)

https://user-images.githubusercontent.com/85991537/230696344-0a7d6a95-b4be-48e6-bca9-821fa5b62976.mp4

<h3>Description</h3>
<p>Voice GPT is a cutting-edge application that leverages the power of GPT (Generative Pre-trained Transformer) technology to provide users with a next-level voice-powered conversational experience. It is a voice-enabled version of ChatGPT, designed to recognize and respond to voice commands and provide customized responses in real-time.</p>

<p>Voice GPT is perfect for people who want to have a natural and intuitive conversation with a virtual assistant without typing a single word. With Voice GPT, you can ask for directions, book a table at a restaurant, or even make a reservation at a hotel, all by simply speaking out loud. Voice GPT takes care of the rest, providing you with accurate and relevant responses.</p>

<h3>Features</h3>
  <h5>Voice-Enabled</h5>: Unlike ChatGPT, Voice GPT allows users to use voice input to communicate with the application.

<h5>Custom Responses</h5>: Voice GPT provides users with customized responses that are tailored to their specific needs.

  <h5>Multi-Lingual</h5>: Voice GPT supports multiple languages, making it accessible to users around the world.

  <h5>Contextual Awareness</h5>: Voice GPT uses context-awareness to understand the meaning behind users' requests and provide relevant responses.

  <h5>Secure and Private</h5>: Voice GPT uses industry-standard security measures to protect users' data and privacy.

  <h3>Tech Stack</h3>
Voice GPT is built using a range of cutting-edge technologies, including:

  <h5>OpenAI API:</h5> The OpenAI API offers a powerful set of tools for building cutting-edge AI-powered applications, including natural language processing, computer vision, and more, with state-of-the-art pre-trained models and advanced customization options.

  <h5>NextJS:</h5> Voice GPT is built using Next.js offers server-side rendering, static site generation, automatic code splitting, hot module replacement, file system routing, built-in CSS support, API routes, and TypeScript support, making it a versatile and powerful framework for building modern web applications

  <h5>React: </h5>The front-end of the application is built using React(Next.js), a powerful and popular modern JavaScript library for building user interfaces.

  <h5>Firebase:</h5> Firebase offers a comprehensive suite of tools and services for building scalable and secure mobile and web applications with real-time data synchronization, serverless functions, authentication, and more.

  <h5>Web Speech API:</h5> Web Speech API's WebkitSpeechRecognition enables developers to add voice recognition capabilities to their web applications, providing a more natural and intuitive user experience that can be used for a variety of applications, such as voice commands, dictation, and transcription.

Getting Started
To get started with Voice GPT, and try on your device follow the instructions below.

clone the github repo 

install all dependencies using npm run dev 

create a env.local file in the root directory

You will need to know how to set up a Firebase DB before moving ahaed 

You will need to create a Firebase Database and update the detials of the database in the env.local file 
You will need a firebase_apikey, and update the firebase.ts file with your own firebaseConfig before moving forward
You will need to get firebaseAdmin_service_account_key and add this in the en.local file
For Google Authentication You need to get a GOOGLE_ID and GOOGLE_SECRET and add these values inot the env.local file 

Setting up openai api key 
Get The openai api key and add the same as OPEN_AI_KEY in env.local file 

search process.env and see if the env variables in the env.local are having the same name as the process.env... are having and then head to the next step

after adding all the env varuables run the application
run 
`npm run dev`
