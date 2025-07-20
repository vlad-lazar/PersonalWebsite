import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";

// Mock data for blog posts
const featuredPosts = [
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
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building the Future,{" "}
              <span className="text-primary">One Line of Code</span> at a Time
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Full-stack developer | Exploring new ideas on my blog | Creator of
              sokrati.space
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions that bridge the gap
              between complex technology and human needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/blog">
                  Explore My Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sokrati">
                  Discover Sokrati.space
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract background pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
            <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-secondary/20 opacity-20" />
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Musings
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Thoughts, insights, and discoveries from my journey in tech
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredPosts.map((post) => (
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

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sokrati.space Promotion Section */}
      <section className="py-16 md:py-24 bg-muted/50 p-10">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/images/sentiment_analysis.png" // Placeholder for the Sokrati.space platform interface
                  alt="Sokrati.space Platform"
                  width={600}
                  height={400}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet sokrati.space
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Sokrati is a minimalist, intelligent journal designed for
                self-reflection and understanding your own thought patterns.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Beyond simply capturing your ideas, Sokrati uses Google's
                Natural Language API to analyze the sentiment of each note. This
                provides you with powerful insights, visualized through charts,
                to track your emotional trends over time—helping you connect
                with your inner world in a new way.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/sokrati">
                    Learn More about sokrati.space
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
