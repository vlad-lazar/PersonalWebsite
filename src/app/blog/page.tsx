// src/app/blog/page.tsx
// This is a Server Component, no "use client" here

import { getSortedPostsData, BlogPostMetadata } from "@/lib/posts"; // Your new utility
import BlogClientPage from "./blog-client-page";

export default async function BlogPage() {
  const allPosts: BlogPostMetadata[] = getSortedPostsData();

  // Dynamically infer categories from your actual posts
  const categories = [
    "All",
    ...new Set(allPosts.map((post) => post.category)),
  ].sort();

  return (
    // Render the client component, passing the initial data and categories
    <BlogClientPage initialPosts={allPosts} categories={categories} />
  );
}
