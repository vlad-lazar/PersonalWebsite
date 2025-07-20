import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

// Mock blog post data
const blogPosts = {
  "building-scalable-web-applications-nextjs": {
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Exploring the latest features in Next.js 15 and how they can help you build better web applications.",
    category: "Web Dev",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
# Building Scalable Web Applications with Next.js

Next.js has revolutionized the way we build React applications, and with the release of Next.js 15, we have even more powerful tools at our disposal. In this comprehensive guide, we'll explore the latest features and best practices for building scalable web applications.

## The Evolution of Next.js

Next.js has come a long way since its initial release. The framework has consistently focused on developer experience while maintaining excellent performance characteristics. With each release, we see improvements in:

- **Performance optimizations**
- **Developer experience enhancements**
- **New rendering strategies**
- **Improved tooling**

## Key Features in Next.js 15

### App Router Improvements

The App Router, introduced in Next.js 13, has received significant improvements in version 15. These enhancements make it easier to build complex applications with better performance and developer experience.

\`\`\`typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
\`\`\`

### Server Components by Default

Server Components are now the default in Next.js 15, providing better performance and reduced bundle sizes. This shift represents a fundamental change in how we think about React applications.

### Enhanced Caching Strategies

Next.js 15 introduces more granular caching controls, allowing developers to optimize their applications for specific use cases.

## Best Practices for Scalable Applications

When building scalable applications with Next.js, consider these key principles:

1. **Component Architecture**: Design your components with reusability in mind
2. **State Management**: Choose the right state management solution for your needs
3. **Performance Optimization**: Leverage Next.js built-in optimizations
4. **Testing Strategy**: Implement comprehensive testing from the start

## Conclusion

Next.js 15 provides an excellent foundation for building scalable web applications. By leveraging its features and following best practices, you can create applications that perform well and are maintainable over time.

The future of web development looks bright with tools like Next.js leading the way in innovation and developer experience.
    `,
    tags: ["Next.js", "React", "Web Development", "Performance"],
  },
  "future-ai-software-development": {
    title: "The Future of AI in Software Development",
    excerpt:
      "How artificial intelligence is transforming the way we write, test, and deploy code.",
    category: "AI",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
# The Future of AI in Software Development

Artificial Intelligence is no longer a futuristic concept—it's actively reshaping how we approach software development today. From code generation to automated testing, AI tools are becoming indispensable parts of the modern developer's toolkit.

## Current State of AI in Development

Today's AI-powered development tools are already making significant impacts:

- **Code completion and generation**
- **Automated testing and bug detection**
- **Code review and optimization suggestions**
- **Documentation generation**

## Emerging Trends

### AI-Powered Code Generation

Tools like GitHub Copilot and ChatGPT are changing how we write code. These tools can generate entire functions, classes, and even complete applications based on natural language descriptions.

### Intelligent Testing

AI is revolutionizing software testing by automatically generating test cases, identifying edge cases, and predicting potential failure points.

## The Road Ahead

As AI continues to evolve, we can expect even more sophisticated tools that will further streamline the development process while maintaining code quality and security.
    `,
    tags: ["AI", "Machine Learning", "Development Tools", "Future Tech"],
  },
};

// Mock related posts
const relatedPosts = [
  {
    id: 4,
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into React Server Components and how they're changing the way we think about React applications.",
    category: "Web Dev",
    date: "2023-12-28",
    slug: "understanding-react-server-components",
  },
  {
    id: 5,
    title: "Machine Learning for Web Developers",
    excerpt:
      "Getting started with machine learning concepts and tools that web developers can use in their projects.",
    category: "AI",
    date: "2023-12-20",
    slug: "machine-learning-web-developers",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Back to Blog */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          <div className="mt-8 aspect-[2/1] overflow-hidden rounded-xl">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap leading-7">{post.content}</div>
        </article>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Author Bio */}
        <div className="rounded-lg border bg-muted/50 p-6">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">VL</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Vlad Lazar</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Full-stack developer passionate about building innovative
                solutions and sharing knowledge through writing. Creator of
                Sokrati.space and advocate for clean, maintainable code.
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="https://github.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Card
                key={relatedPost.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{relatedPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">
                    {relatedPost.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto" asChild>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
