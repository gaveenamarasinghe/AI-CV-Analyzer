const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const analyzeCV = async (cvText) => {
  const prompt = `
You are a senior technical recruiter and ATS expert.

Analyze the CV below and respond ONLY in valid JSON using this format:

{
  "strengths": [],
  "weaknesses": [],
  "atsTips": [],
  "missingSkills": [],
  "score": number
}

Rules:
- Be concise and professional
- Assume candidate is applying for software engineering internships
- Score must be between 0 and 100

CV TEXT:
${cvText}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are an expert CV analyzer." },
      { role: "user", content: prompt },
    ],
    temperature: 0.3,
  });

  const result = completion.choices[0].message.content;

  return JSON.parse(result);
};

module.exports = { analyzeCV };
