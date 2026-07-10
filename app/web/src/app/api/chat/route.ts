import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { google } from "@ai-sdk/google";
import { instruction } from '@/data/prompt.json'

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash-lite"),
      messages: await convertToModelMessages(messages),
      system: instruction,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("[Chat API Error]", error);
    return new Response(
      JSON.stringify({ error: "Failed to process your message. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}