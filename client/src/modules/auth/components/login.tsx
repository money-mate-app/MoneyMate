import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";

export default function Login() {
  return (
    <Card className="z-[2] w-full lg:w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl gap-2">
          Sign in with
          <span className="text-2xl text-teal-300"> Money Mate </span>
        </CardTitle>
        <CardDescription>
          Enter your email below to sign in with us
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-6">
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
          <Button variant="outline">
            <Icons.microsoft className="mr-2 h-4 w-4" />
            Sign in with Microsoft
          </Button>
          <Button variant="outline">
            <Icons.facebook className="mr-2 h-4 w-4" />
            Sign in with Facebook
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  );
}
