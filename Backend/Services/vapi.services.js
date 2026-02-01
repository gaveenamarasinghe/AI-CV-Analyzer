const VAPI_BASE_URL = "https://api.vapi.ai";

const createVapiCall = async (prompt, metadata = {}) => {
  const response = await fetch(`${VAPI_BASE_URL}/call`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.VAPI_API_KEY}`, // ✅ PRIVATE KEY
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agentId: process.env.VAPI_CV_FEEDBACK_ASSISTANT_ID,
      input: prompt,
      metadata,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`VAPI API Error: ${error}`);
  }

  return response.json();
};

module.exports = { createVapiCall };
