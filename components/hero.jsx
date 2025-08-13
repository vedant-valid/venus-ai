"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold leading-tight">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-lg text-gray-600">
          An AI-powered financial management platform that helps you track, analyze,
          and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=egS6fnZAdzk&t=1941s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
