import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createToolCallingAgent } from 'langchain/agents';
import {AgentExecutor} from 'langchain/agents';
import { ChatPromptTemplate } from "@langchain/core/prompts";


import {
    getNotesTool,
    createNoteTool,
    updateNoteTool,
    deleteNoteTool
} from './tool.js'

const llm = new ChatGoogleGenerativeAI({
    model : 'gemini-2.5-flash',
    apiKey : process.env.GEMINI_API_KEY,
    temperature : 0
});

const tools = [getNotesTool , createNoteTool , updateNoteTool , deleteNoteTool];


const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful assistant managing a notes database. Use get_notes to see what exists before answering questions or deleting items."],
    ['placeholder' , '{chat_history}'],
    ['human' , '{input}'],
    ['placeholder' , '{agent_scratchpad}']
]);

const agent = await createToolCallingAgent({
    llm , 
    tools,
    prompt
})

export const agentExecutor = new AgentExecutor({
    agent , 
    tools,
})