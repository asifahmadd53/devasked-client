"use client";

import { useState, } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { signInPage } from "@/assets/images";
import Link from "next/link";
import { google } from "@/assets/icons";


export default function ForgotPasswordPage() {
 
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        
        await new Promise(resolve => setTimeout(resolve, 300));

        if (email === "erik@gmail.com") {
            console.log("✅ Login successful!");
            alert("Login successful! Welcome, Erik!");
            // In a real app, you would:
            // - Store auth token
            // - Redirect to dashboard
            // - Set user session
        } else {
            setError("Invalid email or password. Please try again.");
            console.log("❌ Login failed");
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen w-full ">
          
            <div className="flex items-center bg-subtle min-h-screen justify-center p-8">
                <div className="w-full max-w-[420px] border p-4 py-6 bg-white rounded-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-2 text-lg font-semibold mb-12">
                        <div className="size-8 flex items-center justify-center">
                            <div className="relative z-20 shrink-0">
                                <Image width={100} height={100} alt="logo" src="/logo.svg" className="object-cover" />
                            </div>
                        </div>
                        
                    </div>

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back!</h1>
                        <p className="text-muted-foreground text-sm">Please enter your details</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="anna@gmail.com"
                                value={email}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setIsTyping(true)}
                                onBlur={() => setIsTyping(false)}
                                required
                                className="max-h-11 min-h-11"
                            />
                        </div>

                        {error && (
                            <div className="p-3 text-sm text-red-400 bg-red-950/20 border border-red-900/30 rounded-lg">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full min-h-11 text-base font-medium"
                            size="lg"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Log in"}
                        </Button>
                    </form>

                 
                    {/* Sign Up Link */}
                    <div className="text-center text-sm text-muted-foreground mt-8">
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" className="text-foreground font-medium hover:underline">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
