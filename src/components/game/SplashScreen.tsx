"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, User, Mail } from "lucide-react";
import placeholderData from "@/lib/placeholder-images.json";
import { useUser, useAuth } from "@/firebase";
import { initiateAnonymousSignIn, initiateEmailSignIn, initiateEmailSignUp } from "@/firebase/non-blocking-login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const throneImage = placeholderData.placeholderImages.find(p => p.id === "splash-throne");

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const Bubble = ({ id }: { id: number }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const size = 2 + Math.random() * 4;
    const left = Math.random() * 100;
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;

    setStyle({
      width: `${size}rem`,
      height: `${size}rem`,
      left: `${left}vw`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
  }, [id]);

  return <div className="bubble" style={style}></div>;
};

const AuthForm = () => {
    const auth = useAuth();

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSignIn = (values: z.infer<typeof signInSchema>) => {
        if (auth) {
            initiateEmailSignIn(auth, values.email, values.password);
        }
    };

    const handleSignUp = (values: z.infer<typeof signInSchema>) => {
        if (auth) {
            initiateEmailSignUp(auth, values.email, values.password);
        }
    };
    
    const handleAnonymousSignIn = () => {
        if (auth) {
          initiateAnonymousSignIn(auth);
        }
    };

    return (
        <Tabs defaultValue="signin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign In</CardTitle>
                        <CardDescription>Welcome back to the smelly world of Poot Quest.</CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSignIn)}>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter className="flex-col gap-4">
                                <Button type="submit" className="w-full">
                                    <Mail className="mr-2" /> Sign In with Email
                                </Button>
                                <Button onClick={handleAnonymousSignIn} variant="secondary" className="w-full">
                                    <User className="mr-2" /> Continue Anonymously
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </TabsContent>
            <TabsContent value="signup">
            <Card>
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>Create an account to save your farty progress.</CardDescription>
                    </CardHeader>
                    <Form {...form}>
                         <form onSubmit={form.handleSubmit(handleSignUp)}>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter className="flex-col gap-4">
                                <Button type="submit" className="w-full">
                                    <Mail className="mr-2" /> Sign Up with Email
                                </Button>
                                <Button onClick={handleAnonymousSignIn} variant="secondary" className="w-full">
                                    <User className="mr-2" /> Continue Anonymously
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export function SplashScreen() {
  const [bubbles, setBubbles] = useState<number[]>([]);
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    const numBubbles = 20;
    setBubbles(Array.from({ length: numBubbles }, (_, i) => i));
  }, []);

  const renderContent = () => {
    if (isUserLoading) {
      return <Loader2 className="h-12 w-12 animate-spin text-primary" />;
    }

    if (user) {
      return (
        <Button asChild size="lg" className="animate-pulse">
          <Link href="/character-creation">
            Begin Your Journey <ArrowRight className="ml-2" />
          </Link>
        </Button>
      );
    }

    return <AuthForm />;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden p-4">
      {bubbles.map((id) => (
        <Bubble key={id} id={id} />
      ))}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 animate-pulse-glow rounded-full">
            {throneImage && (
                <Image
                    src={throneImage.imageUrl}
                    alt={throneImage.description}
                    width={300}
                    height={300}
                    className="rounded-full object-cover border-4 border-primary/50"
                    data-ai-hint={throneImage.imageHint}
                    priority
                />
            )}
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-glow mb-2">
          Poot Quest
        </h1>
        <p className="font-headline text-xl md:text-2xl text-primary mb-8">
          The Land of Never-Ending Asses
        </p>
        <div className="min-h-11">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
