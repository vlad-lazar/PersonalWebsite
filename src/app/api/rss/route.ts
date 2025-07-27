// src/app/api/rss/route.ts
import { NextResponse } from "next/server";
import { Feed } from "feed"; // Import the Feed class
import { getSortedPostsData } from "@/lib/posts"; // Your posts utility to get all blog metadata

export async function GET() {
  const posts = getSortedPostsData(); // Get all your blog posts metadata, already sorted by date

  // Create a new Feed instance
  const feed = new Feed({
    title: "Vlad Lazar's Blog", // Your blog's title
    description: "Insights, thoughts, and discoveries from my journey in tech.", // Your blog's description
    id: "https://vladlazar.blog/", // Unique ID for your feed, usually your website's base URL
    link: "https://vladlazar.blog/blog", // Link to your blog's homepage
    language: "en", // Language of your content
    image: "https://vladlazar.blog/favicon.ico", // URL to your favicon or logo (must be absolute)
    favicon: "https://vladlazar.blog/favicon.ico", // URL to your favicon (must be absolute)
    copyright: `All rights reserved ${new Date().getFullYear()}, Vlad Lazar`, // Copyright notice
    // Use the date of the latest post for the 'updated' field, or current date if no posts
    updated: posts.length > 0 ? new Date(posts[0].date) : new Date(),
    feedLinks: {
      json: "https://vladlazar.blog/api/rss", // Absolute URL to your JSON feed (optional)
      atom: "https://vladlazar.blog/api/rss", // Absolute URL to your Atom feed (optional, often same as RSS)
    },
    author: {
      name: "Vlad Lazar", // Your name as the author
      email: "lazar.vlad151@gmail.com", // Your contact email
      link: "https://vladlazar.blog", // Link to your personal website
    },
  });

  // Add each blog post as an item to the feed
  posts.forEach((post) => {
    // Construct absolute URL for the image
    const imageUrl = post.image
      ? `https://vladlazar.blog${post.image}`
      : undefined;

    feed.addItem({
      title: post.title,
      id: `https://vladlazar.blog/blog/${post.slug}`, // Unique ID for the post, its URL is good
      link: `https://vladlazar.blog/blog/${post.slug}`, // Absolute URL to the blog post
      description: post.excerpt, // Short summary of the post
      content: post.excerpt, // Can be full HTML content, but excerpt is often enough for RSS
      author: [
        {
          name: "Vlad Lazar",
          email: "lazar.vlad151@gmail.com",
          link: "https://vladlazar.blog",
        },
      ],
      date: new Date(post.date), // Publication date of the post
      image: imageUrl, // Absolute URL to the post's image/thumbnail
    });
  });

  // Return the RSS XML
  return new NextResponse(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml", // Important: Set the correct content type for XML
    },
  });
}
