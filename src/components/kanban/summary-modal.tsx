'use client';

import { useState } from 'react';
import { summarizeTaskDetails } from '@/ai/flows/summarize-task-details';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import type { Task } from '@/lib/data';
import { Sparkles, Zap } from 'lucide-react';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Skeleton } from '../ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

type SummaryModalProps = {
  task: Task;
};

export function SummaryModal({ task }: SummaryModalProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError(null);
    setSummary('');
    try {
      const result = await summarizeTaskDetails({ text: task.description });
      setSummary(result.summary);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Error Generating Summary',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <Zap className="h-4 w-4" />
            <span>Smart Summary</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Smart Summary</DialogTitle>
          <DialogDescription>Generate an AI-powered summary of the task description.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="font-semibold">Original Description</h4>
            <Textarea readOnly value={task.description} className="h-64 resize-none" />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">AI Generated Summary</h4>
            <div className="h-64 rounded-md border border-input bg-background p-3 text-sm">
              {isLoading && <Skeleton className="h-full w-full" />}
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {summary && <p className="whitespace-pre-wrap">{summary}</p>}
              {!isLoading && !summary && !error && (
                <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                    <Sparkles className="mb-4 h-10 w-10" />
                    <p>Click "Generate Summary" to see the magic happen!</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleGenerateSummary} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Summary'}
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}