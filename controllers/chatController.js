import { agentExecutor } from "../ai/agent.js";

export const chatWithAgent = async (req, res) => {
  try {
    const { message } = req.body;
    const result = await agentExecutor.invoke({ input: message });
    res.json({ response: result.output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI Error" });
  }
};