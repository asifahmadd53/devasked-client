"use client";

import { useState, } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import Link from "next/link";


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
        <div className="min-h-screen w-full flex flex-col bg-subtle">
            {/* Logo at top-left */}
            <div className="relative p-12 hidden lg:flex z-20 shrink-0 ">
                <Image width={150} height={150} alt="logo" src="/logo.svg" className="object-cover" />
            </div>

            {/* Form centered both horizontally and vertically */}
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-[420px] border p-6 py-6 bg-white rounded-md">
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
                        <h1 className="text-3xl font-bold tracking-tight mb-2">Reset Password</h1>
                        <p className="text-muted-foreground text-xs">Enter email address and we will send you a link to reset password</p>
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
                                className=""
                            />
                        </div>
                      
                        <Button
                            type="submit"
                            className="w-full h-10 text-base font-medium"
                            size="lg"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Log in"}
                        </Button>
                    </form>

                    {/* Sign Up Link */}
                    <div className="text-center text-sm text-muted-foreground mt-8">
                        <Link href="/sign-in" className="text-secondary font-medium hover:underline">
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom links */}
            <div className="relative hidden z-20 p-12 lg:flex items-center gap-8 text-sm shrink-0 text-primary">
                <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                </a>
                <a href="#" className="text-primary hover:underline">
                    Terms of Service
                </a>
                <a href="#" className="text-primary hover:underline">
                    Contact
                </a>
            </div>
        </div>
    );
}
