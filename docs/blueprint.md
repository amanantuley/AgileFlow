# **App Name**: AgileFlow

## Core Features:

- User Authentication and Roles: Secure user authentication via Firebase with role-based access control (Admin, Product Owner, Scrum Master, Developer, Tester).
- Project Management: Create, manage, and track multiple projects with details such as name, description, team members, and start/end dates. Project dashboard with progress overview.
- Kanban Board: Visualize and manage tasks using a drag-and-drop Kanban board with columns: Backlog, To Do, In Progress, Review, Testing, Done. Tasks include title, description, priority, assignee, due date, and status.
- Product Backlog & User Stories: Define user stories with title, description, acceptance criteria, and story points. Prioritize backlog items and convert user stories into tasks.
- Bug & Issue Tracking: Report and track bugs with severity, steps to reproduce, screenshots, and status (Open, In Progress, Fixed, Closed). Link bugs to tasks or sprints.
- Smart Summary Generator: AI tool that generates summarized versions of any tasks, user stories or bug reports, focusing on key details. The LLM will determine the salient points.
- Data Persistence: Firestore collections for users, projects, sprints, tasks, bugs, and activityLogs. Data synchronization with real-time updates using Firestore.

## Style Guidelines:

- Primary color: Deep blue (#2962FF) to convey professionalism and trust.
- Background color: Light gray (#F5F7FA), creating a clean and modern backdrop.
- Accent color: Vibrant purple (#A044FF) to highlight key actions and elements, drawing the user's attention.
- Body font: 'PT Sans' (sans-serif) for clear, readable UI text. Headline font: 'Space Grotesk' (sans-serif) for a modern, techy look.
- Crisp, minimalist icons for navigation and task status indication. Icons should use the primary color.
- SaaS-style layout with a sidebar navigation for main modules (Dashboard, Projects, Kanban, Backlog, Bugs, Reports, Settings). Consistent use of whitespace for a clean, uncluttered interface.
- Smooth transitions and subtle animations on task updates and drag-and-drop interactions to enhance user experience.