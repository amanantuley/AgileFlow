import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto w-full max-w-sm shadow-2xl">
        <CardHeader className="space-y-4 text-center">
          <div className="inline-block">
            <Logo className="mx-auto h-12 w-12 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Welcome to AgileFlow</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/dashboard">Sign in</Link>
            </Button>
            <Button variant="outline" className="w-full">
              <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.6 1.62-4.88 1.62-4.27 0-7.75-3.5-7.75-7.75s3.48-7.75 7.75-7.75c2.25 0 3.82.87 4.78 1.8l2.74-2.74C18.66 2.46 15.98 1 12.48 1 7.1 1 3.08 5.08 3.08 10.5s4.02 9.5 9.4 9.5c2.9 0 5.3-1 7-2.98.98-1.08 1.6-2.6 1.6-4.58 0-.6-.05-1.18-.15-1.72z"
                ></path>
              </svg>
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}