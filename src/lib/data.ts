import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export type User = {
  id: string;
  name: string;
  avatar: ImagePlaceholder;
  role: 'Admin' | 'Product Owner' | 'Scrum Master' | 'Developer' | 'Tester';
};

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignee: User;
  dueDate: string;
  status: 'Backlog' | 'To Do' | 'In Progress' | 'Review' | 'Testing' | 'Done';
};

export type Project = {
  id: string;
  name: string;
  description: string;
  team: User[];
  startDate: string;
  endDate: string;
};

export const users: User[] = [
  { id: 'user-1', name: 'Alice Johnson', avatar: PlaceHolderImages[0], role: 'Developer' },
  { id: 'user-2', name: 'Bob Williams', avatar: PlaceHolderImages[1], role: 'Product Owner' },
  { id: 'user-3', name: 'Charlie Brown', avatar: PlaceHolderImages[2], role: 'Tester' },
  { id: 'user-4', name: 'Diana Miller', avatar: PlaceHolderImages[3], role: 'Scrum Master' },
  { id: 'user-5', name: 'Ethan Davis', avatar: PlaceHolderImages[4], role: 'Developer' },
];

export const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Implement user authentication',
    description: 'Set up Firebase Authentication with email/password and Google providers. Create roles for Admin, Product Owner, Scrum Master, Developer, and Tester. Implement role-based access control for different features of the application.',
    priority: 'High',
    assignee: users[0],
    dueDate: '2024-08-15',
    status: 'In Progress',
  },
  {
    id: 'task-2',
    title: 'Design project dashboard UI',
    description: 'Create a visually appealing and intuitive project dashboard. It should provide a clear overview of project progress, including key metrics, recent activity, and team member workload. Use charts to visualize data like sprint velocity and burndown.',
    priority: 'Medium',
    assignee: users[1],
    dueDate: '2024-08-20',
    status: 'To Do',
  },
  {
    id: 'task-3',
    title: 'Develop Kanban board drag-and-drop',
    description: 'Implement the drag-and-drop functionality for tasks between columns on the Kanban board. Ensure real-time updates using Firestore so that all team members see changes instantly. The columns should be: Backlog, To Do, In Progress, Review, Testing, Done.',
    priority: 'High',
    assignee: users[4],
    dueDate: '2024-08-25',
    status: 'To Do',
  },
  {
    id: 'task-4',
    title: 'Test user story creation form',
    description: 'Thoroughly test the form for creating user stories. This includes validating all fields: Title, Description, Acceptance Criteria, and Story Points. Ensure that user stories are correctly added to the product backlog and can be prioritized.',
    priority: 'Medium',
    assignee: users[2],
    dueDate: '2024-08-18',
    status: 'Testing',
  },
  {
    id: 'task-5',
    title: 'Fix login page CSS bug on mobile',
    description: 'There is a CSS issue on the login page when viewed on mobile devices with a screen width less than 375px. The "Sign in with Google" button overflows its container. Investigate and apply a fix to ensure the layout is fully responsive.',
    priority: 'Low',
    assignee: users[0],
    dueDate: '2024-08-12',
    status: 'Done',
  },
  {
    id: 'task-6',
    title: 'Setup sprint retrospective section',
    description: 'Create the UI and backend logic for the sprint retrospective section within the Scrum module. This should allow team members to add notes and action items from the retrospective meeting.',
    priority: 'Medium',
    assignee: users[3],
    dueDate: '2024-08-30',
    status: 'Backlog',
  },
    {
    id: 'task-7',
    title: 'API integration for weather widget',
    description: 'Integrate a third-party weather API to display the current weather on the main dashboard. The widget should be configurable by the user to show their location.',
    priority: 'Low',
    assignee: users[4],
    dueDate: '2024-09-01',
    status: 'In Progress',
  },
  {
    id: 'task-8',
    title: 'Review code for the reporting module',
    description: 'Perform a code review for the newly developed reports and analytics module. Check for code quality, performance, and adherence to coding standards. Focus on the calculation logic for sprint velocity and burndown charts.',
    priority: 'High',
    assignee: users[1],
    dueDate: '2024-08-22',
    status: 'Review',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'AgileFlow App Development',
    description: 'The main development project for the AgileFlow application.',
    team: users,
    startDate: '2024-07-01',
    endDate: '2024-12-31',
  },
];

export const statuses: Task['status'][] = [
  'Backlog',
  'To Do',
  'In Progress',
  'Review',
  'Testing',
  'Done',
];
