import type { Task } from '@/lib/data';
import { KanbanColumn } from './column';

type KanbanBoardProps = {
  columns: {
    status: Task['status'];
    tasks: Task[];
  }[];
};

export function KanbanBoard({ columns }: KanbanBoardProps) {
  return (
    <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <div className="inline-flex h-full gap-6 p-4 lg:p-6">
            {columns.map(({ status, tasks }) => (
                <KanbanColumn key={status} status={status} tasks={tasks} />
            ))}
        </div>
    </div>
  );
}