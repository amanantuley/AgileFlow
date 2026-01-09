import { KanbanBoard } from '@/components/kanban/board';
import { tasks, statuses } from '@/lib/data';

export default function DashboardPage() {
  const tasksByStatus = statuses.map((status) => ({
    status,
    tasks: tasks.filter((task) => task.status === status),
  }));

  return (
    <div className="h-full w-full">
      <KanbanBoard columns={tasksByStatus} />
    </div>
  );
}