export async function strict_output(topic:any) {
  let ans = {
    choices: "none"
  };
  const data = await fetch("https://proxy.tune.app/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "sk-tune-bDkw42hcOJIQeV2sOUJV9842xxxmrjEla1e",
    },
    body: JSON.stringify({
      temperature: 0.9, 
      messages:  [
        {
          "role": "user",
          "content": topic
        }
      ],
      model: "openai/gpt-4o",
      stream: false,
      "frequency_penalty":  0,
      "max_tokens": 4000
    })
  }).then((res)=>res.json()).then((data)=>ans=data);
  return ans;
}