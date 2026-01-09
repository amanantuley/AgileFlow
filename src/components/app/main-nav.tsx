'use client';

import {
  LayoutDashboard,
  KanbanSquare,
  Package,
  ListTodo,
  Bug,
  LineChart,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/projects', icon: Package, label: 'Projects' },
  { href: '/kanban', icon: KanbanSquare, label: 'Kanban' },
  { href: '/backlog', icon: ListTodo, label: 'Backlog' },
  { href: '/bugs', icon: Bug, label: 'Bugs' },
  { href: '/reports', icon: LineChart, label: 'Reports' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col">
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={`${item.href}-${item.label}`}>
            <Link href={item.href} legacyBehavior passHref>
              <SidebarMenuButton
                className={cn(
                  'w-full justify-start text-base',
                  pathname === item.href &&
                    'bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent'
                )}
                isActive={pathname === item.href}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </nav>
  );
}
