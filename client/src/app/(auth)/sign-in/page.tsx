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


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const [isTyping, setIsTyping] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        
        await new Promise(resolve => setTimeout(resolve, 300));

        if (email === "erik@gmail.com" && password === "1234") {
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
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Content Section */}
            <div className="relative hidden lg:flex flex-col justify-between bg-subtle p-12 text-primary-foreground min-h-screen">
                {/* Top: Logo */}
                <div className="relative z-20 shrink-0">
                    <Image width={150} height={150} alt="logo" src="/logo.svg" className="object-cover" />
                </div>

                <div className="relative z-20 flex-1 flex items-center justify-center">
                    <Image width={350} height={350} alt="sign in" src={signInPage} className="object-cover" />
                </div>

                {/* Bottom: Links */}
                <div className="relative z-20 flex items-center gap-8 text-sm shrink-0 text-primary">
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

                {/* Background effects */}
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                <div className="absolute top-1/4 right-1/4 size-64 bg-primary-foreground/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 size-96 bg-primary-foreground/5 rounded-full blur-3xl" />
            </div>

            {/* Right Login Section */}
            <div className="flex items-center justify-center p-8 bg-background">
                <div className="w-full max-w-[420px]">
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

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="max-h-11 min-h-11 pr-10 "
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-5" />
                                    ) : (
                                        <Eye className="size-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <Label
                                    htmlFor="remember"
                                    className="text-sm font-normal cursor-pointer"
                                >
                                    Remember for 30 days
                                </Label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-primary hover:underline font-medium"
                            >
                                Forgot password?
                            </a>
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

                    {/* Social Login */}
                    <div className="mt-6">
                        <Button
                            variant="outline"
                            className="w-full min-h-11 bg-subtle border-border/60"
                            type="button"
                        >
                            <div className="flex justify-start items-start mr-4">
                            <Image width={20} height={20} alt="google" src={google} className="object-contain" />
                            </div>
                            Log in with Google
                        </Button>
                    </div>

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
