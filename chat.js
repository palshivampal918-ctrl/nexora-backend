export default async function handler(req, res) {

  const message = req.body.message;

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      })
    }
  );

  const data = await response.json();

  res.json({
    reply: data.choices[0].message.content
  });

}