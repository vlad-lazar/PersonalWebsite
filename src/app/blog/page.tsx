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

// Mock blog posts data
const allPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Exploring the latest features in Next.js 15 and how they can help you build better web applications.",
    category: "Web Dev",
    date: "2024-01-15",
    slug: "building-scalable-web-applications-nextjs",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    excerpt:
      "How artificial intelligence is transforming the way we write, test, and deploy code.",
    category: "AI",
    date: "2024-01-10",
    slug: "future-ai-software-development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Productivity Hacks for Developers",
    excerpt:
      "Simple techniques and tools that can significantly boost your development productivity.",
    category: "Productivity",
    date: "2024-01-05",
    slug: "productivity-hacks-developers",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into React Server Components and how they're changing the way we think about React applications.",
    category: "Web Dev",
    date: "2023-12-28",
    slug: "understanding-react-server-components",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Machine Learning for Web Developers",
    excerpt:
      "Getting started with machine learning concepts and tools that web developers can use in their projects.",
    category: "AI",
    date: "2023-12-20",
    slug: "machine-learning-web-developers",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Building Better APIs with TypeScript",
    excerpt:
      "Best practices for creating type-safe, maintainable APIs using TypeScript and modern frameworks.",
    category: "Web Dev",
    date: "2023-12-15",
    slug: "building-better-apis-typescript",
    image: "/placeholder.svg?height=200&width=400",
  },
];

const categories = ["All", "Web Dev", "AI", "Productivity"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          My Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights, tutorials, and thoughts on technology, development, and
          innovation
        </p>
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
          <div className="flex gap-2">
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
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            className="group hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
              <Button variant="ghost" className="mt-4 p-0 h-auto" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg text-muted-foreground">
            No posts found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
