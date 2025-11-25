async function callGemini(code) {
  const url = env.GEMINI_API_URL;
  const key = env.GEMINI_API_KEY;
  if (!url || !key) throw new Error('Gemini config missing');

  const prompt = `
Analyze the time and space complexity of the following code. 
Respond ONLY in valid JSON like:
{"timeComplexity":"O(...)","spaceComplexity":"O(...)","notes":"short explanation"}

Code:
${code}
`;

  const res = await fetch(`${url}?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const json = await res.json();
  if (!json) throw new Error("Empty response from Gemini");

  let text =
    json?.candidates?.[0]?.content?.parts?.[0]?.text ||
    json?.output_text ||
    JSON.stringify(json);

  // Extract JSON
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart !== -1 && jsonEnd > jsonStart) {
    const objStr = text.slice(jsonStart, jsonEnd + 1);
    try {
      return JSON.parse(objStr);
    } catch {}
  }

  return { timeComplexity: null, spaceComplexity: null, notes: text };
}
