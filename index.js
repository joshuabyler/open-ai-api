require('dotenv').config();
const OpenAI = require('openai-api');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(OPENAI_API_KEY);

const openai = new OpenAI(OPENAI_API_KEY);
// (async () => {
//   const gptResponse = await openai.complete({
//     engine: 'davinci',
//     prompt: 'this is a test',
//     maxTokens: 5,
//     temperature: 0.9,
//     topP: 1,
//     presencePenalty: 0,
//     frequencyPenalty: 0,
//     bestOf: 1,
//     n: 1,
//     stream: false,
//     stop: ['\n', "testing"]
//   });
//
//   console.log(gptResponse.data);
// })();

(async () => {
  const gptResponse = await openai.search({
    engine: 'davinci',
    documents: ["White House", "hospital", "school"],
    query: "the president"
  });

  console.log(gptResponse.data);
})();
