'use server';
/**
 * @fileOverview AI summarization tool that extracts and presents the most important details of a task, user story, or bug report.
 *
 * - summarizeTaskDetails - A function that handles the summarization process.
 * - SummarizeTaskDetailsInput - The input type for the summarizeTaskDetails function.
 * - SummarizeTaskDetailsOutput - The return type for the summarizeTaskDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTaskDetailsInputSchema = z.object({
  text: z
    .string()
    .describe(
      'The text (task details, user story, or bug report) to be summarized.'
    ),
});
export type SummarizeTaskDetailsInput = z.infer<typeof SummarizeTaskDetailsInputSchema>;

const SummarizeTaskDetailsOutputSchema = z.object({
  summary: z.string().describe('The summarized version of the input text.'),
});
export type SummarizeTaskDetailsOutput = z.infer<typeof SummarizeTaskDetailsOutputSchema>;

export async function summarizeTaskDetails(input: SummarizeTaskDetailsInput): Promise<SummarizeTaskDetailsOutput> {
  return summarizeTaskDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTaskDetailsPrompt',
  input: {schema: SummarizeTaskDetailsInputSchema},
  output: {schema: SummarizeTaskDetailsOutputSchema},
  prompt: `You are an AI assistant that summarizes tasks, user stories, and bug reports.

  Summarize the following text, focusing on the key details and salient points:

  {{text}}`,
});

const summarizeTaskDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeTaskDetailsFlow',
    inputSchema: SummarizeTaskDetailsInputSchema,
    outputSchema: SummarizeTaskDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
