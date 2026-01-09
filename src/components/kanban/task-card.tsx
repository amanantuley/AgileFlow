import type { Task } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal, Calendar, Star,Zap } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { SummaryModal } from './summary-modal';
import { Button } from '../ui/button';

type TaskCardProps = {
  task: Task;
};

const priorityVariant: Record<Task['priority'], 'default' | 'secondary' | 'destructive' | 'outline'> = {
    Low: 'secondary',
    Medium: 'default',
    High: 'destructive',
    Critical: 'destructive',
}

const priorityIconColor: Record<Task['priority'], string> = {
    Low: 'text-gray-500',
    Medium: 'text-yellow-500',
    High: 'text-orange-500',
    Critical: 'text-red-500',
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="transform-gpu transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold leading-tight">{task.title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <SummaryModal task={task} />
                <DropdownMenuItem>Edit Task</DropdownMenuItem>
                <DropdownMenuItem>Change Assignee</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete Task</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className={`h-4 w-4 ${priorityIconColor[task.priority]}`} />
              <span>{task.priority}</span>
            </div>
            <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{task.dueDate}</span>
            </div>
          </div>
          <Avatar className="h-7 w-7">
            <AvatarImage src={task.assignee.avatar.imageUrl} data-ai-hint={task.assignee.avatar.imageHint} />
            <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
}