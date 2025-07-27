// src/app/blog/BlogClientPage.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, ArrowRight } from "lucide-react";
import { BlogPostMetadata } from "@/lib/posts";
// ...existing code...

interface BlogClientPageProps {
  initialPosts: BlogPostMetadata[];
  categories: string[];
}

export default function BlogClientPage({
  initialPosts,
  categories,
}: BlogClientPageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter posts based on category and search query
  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts on technology, development, and life experiences.
        </p>
        {/* RSS Feed UI with shadcn Button and Card */}
        <div className="flex items-center justify-center mt-6 gap-2">
          <Card className="p-0 bg-transparent border-none shadow-none">
            <Button
              asChild
              variant="default"
              size="lg"
              className="inline-flex items-center"
            >
              <a
                href="/api/rss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.18 17.82a2.18 2.18 0 1 1 0-4.36 2.18 2.18 0 0 1 0 4.36zm-2.18-7.82v2.18c6.08 0 11.02 4.94 11.02 11.02h2.18c0-7.29-5.91-13.2-13.2-13.2zm0-5.45v2.18c9.13 0 16.57 7.44 16.57 16.57h2.18c0-10.37-8.38-18.75-18.75-18.75z" />
                </svg>
                Subscribe via RSS
              </a>
            </Button>
          </Card>
        </div>
      </div>
      {/* Search and Filter */}
      <div className="mx-auto mt-12 max-w-4xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* Blog Posts Grid */}
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post: BlogPostMetadata) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            {" "}
            {/* Added block to Link for full card clickability */}
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
              {" "}
              {/* Added h-full and flex-col for consistent card height */}
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <Image
                  src={post.image ?? "/images/globe.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  unoptimized
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {" "}
                  {/* Added mb-2 for spacing */}
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl font-semibold leading-tight">
                  {" "}
                  {/* Adjusted title styles */}
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                {" "}
                {/* Flex grow content */}
                <CardDescription className="line-clamp-2 text-base">
                  {" "}
                  {/* Adjusted description font size */}
                  {post.excerpt}
                </CardDescription>
                {post.readTime && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    {post.readTime}
                  </div>
                )}
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {/* No posts found message */}
      {filteredPosts.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            No posts found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
