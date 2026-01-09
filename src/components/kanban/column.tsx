import type { Task } from '@/lib/data';
import { TaskCard } from './task-card';
import { ScrollArea } from '@/components/ui/scroll-area';

type KanbanColumnProps = {
  status: Task['status'];
  tasks: Task[];
};

export function KanbanColumn({ status, tasks }: KanbanColumnProps) {
  const taskCount = tasks.length;

  return (
    <div className="flex w-80 shrink-0 flex-col rounded-lg">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <h2 className="font-headline text-lg font-semibold">{status}</h2>
          <span className="rounded-full bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
            {taskCount}
          </span>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-4 p-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {taskCount === 0 && (
            <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-muted-foreground">
              Drag tasks here
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}