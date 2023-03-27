import openai from "./OpenAi";

const query = async (prompt: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.8,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) => `AI unable to find an answer for your query ${err.message}`
    );

  return res;
};
export default query;
