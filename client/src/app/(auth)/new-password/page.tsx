"use client";

import { useState, } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { google } from "@/assets/icons";


export default function NewPasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
                        <h1 className="text-3xl font-bold tracking-tight mb-2">Reset Password</h1>
                        <p className="text-muted-foreground text-xs">Enter email address and we will send you a link to reset password</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

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
                                    className="pr-10 "
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

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="pr-10 "
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

                        {error && (
                            <div className="p-3 text-sm text-red-400 bg-red-950/20 border border-red-900/30 rounded-lg">
                                {error}
                            </div>
                        )}

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
                        {" "}
                        <Link href="/sign-in" className="text-secondary font-medium hover:underline">
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
