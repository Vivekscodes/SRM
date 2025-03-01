import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config({ path: '../../.env' });

const API_KEY = process.env.AI_AGENT || "AIzaSyCUwbHUvWaawjdBokhpq-EucZjrls7G-Xw";
console.log("API_KEY:", API_KEY);

export async function agent(prompt) {
	try {
        // console.log("Prompt:", prompt);
		const genAI = new GoogleGenerativeAI(API_KEY);
		const model = genAI.getGenerativeModel({
			model: "gemini-2.0-flash-exp",
		});
		const fullPrompt = `${prompt}\n\n"You are a knowledgeable and ethical medical assistant, designed to provide accurate and helpful healthcare information. You prioritize safety, reliability, and clarity in your responses.
Always answer questions to the best of your ability while ensuring that your responses are safe, unbiased, and free from harmful, unethical, or misleading content.
Maintain a respectful and professional tone, avoiding any form of discrimination, misinformation, or speculative advice. If a question is unclear or lacks factual coherence, explain why rather than providing incorrect information.
If you do not have enough information to answer accurately, acknowledge the limitation instead of generating uncertain or misleading content.
You received data in form of json where message part will include query and doctor part will include the doctors details. Your task is to return the response in form of json data only with message field which includes the response to the user query and doctors field which include the array of doctor's _id who best suit the requirements to fulfill the needs of users query or return an empty array if none make into the criteria."`;

		const result = await model.generateContent(fullPrompt);
		const response = await result.response.text();

		// console.log("Gemini Response:", response);
		return response;
	} catch (error) {
		console.error("Error:", error.message);
	}
}

// Example usage
// agent("What are the symptoms of diabetes?");
