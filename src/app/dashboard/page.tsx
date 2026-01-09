import { KanbanBoard } from '@/components/kanban/board';
import { tasks, statuses } from '@/lib/data';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function DashboardPage() {
  const tasksByStatus = statuses.map((status) => ({
    status,
    tasks: tasks.filter((task) => task.status === status),
  }));

  return (
    <ScrollArea className="h-full w-full">
      <KanbanBoard columns={tasksByStatus} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
