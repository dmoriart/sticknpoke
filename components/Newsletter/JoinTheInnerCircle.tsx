"use client";

import { useState, FormEvent } from "react";

export default function JoinTheInnerCircle() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage("Email required");
            setStatus("error");
            return;
        }

        setStatus("loading");

        // Mock async request
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate random success/failure
                    if (Math.random() > 0.1) {
                        resolve(true);
                    } else {
                        reject(new Error("Network error"));
                    }
                }, 1500);
            });

            setStatus("success");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Try again.");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    if (status === "success") {
        return (
            <div className="relative py-16 px-6 bg-rock-red overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-noise"></div>
                </div>
                <div className="container mx-auto max-w-2xl text-center relative z-10">
                    <div className="mb-4">
                        <svg
                            className="w-16 h-16 mx-auto text-white animate-pulse"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-4xl font-display uppercase mb-2 tracking-tight">
                        Welcome to the Family
                    </h3>
                    <p className="text-rock-cream text-lg">
                        Check your inbox for the good stuff.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative py-16 px-6 bg-gradient-to-br from-rock-black via-rock-darkgray to-rock-black overflow-hidden border-y-4 border-rock-red">
            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-noise"></div>
            </div>

            {/* Dramatic Red Accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-rock-red"></div>
            <div className="absolute top-0 right-0 w-2 h-full bg-rock-red"></div>

            <div className="container mx-auto max-w-2xl text-center relative z-10">
                <h3 className="text-4xl md:text-6xl font-display uppercase mb-4 rock-text tracking-tight">
                    Join the Inner Circle
                </h3>
                <p className="text-rock-cream text-lg md:text-xl mb-8 font-bold uppercase tracking-wider">
                    Get ticket presales and unreleased demos.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="YOUR EMAIL ADDRESS"
                            disabled={status === "loading"}
                            className="flex-1 px-6 py-4 bg-rock-black border-2 border-rock-cream text-rock-white placeholder-rock-gray font-mono uppercase text-sm tracking-wider focus:outline-none focus:border-rock-red transition-colors disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="px-8 py-4 bg-rock-red hover:bg-opacity-90 transition-all font-display uppercase text-lg tracking-wider border-2 border-rock-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
                        >
                            {status === "loading" ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <span>Loading</span>
                                </>
                            ) : (
                                "Join"
                            )}
                        </button>
                    </div>

                    {status === "error" && (
                        <p className="mt-4 text-rock-red font-bold uppercase tracking-wider text-sm animate-pulse">
                            ⚠ {errorMessage}
                        </p>
                    )}
                </form>

                <p className="text-rock-gray text-xs mt-6 uppercase tracking-widest font-mono">
                    We respect your inbox. No spam, ever.
                </p>
            </div>
        </div>
    );
}
