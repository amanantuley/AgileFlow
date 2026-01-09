import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/app/main-nav';
import { UserNav } from '@/components/app/user-nav';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Bell } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border p-3">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8 text-primary" />
              <h1 className="font-headline text-2xl font-bold text-sidebar-foreground">AgileFlow</h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-2">
            <MainNav />
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-sm sm:gap-4 md:px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="hidden md:flex md:w-full md:items-center md:gap-2 sm:gap-4">
              <Select defaultValue="proj-1">
                <SelectTrigger className="w-full max-w-[140px] truncate font-semibold sm:max-w-[200px]">
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proj-1">AgileFlow App</SelectItem>
                  <SelectItem value="proj-2">Marketing Website</SelectItem>
                  <SelectItem value="proj-3">Internal Tools</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
                <UserNav />
            </div>
          </header>
          <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
