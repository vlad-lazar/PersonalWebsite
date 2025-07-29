// src/app/blog/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

import {
  getPostData,
  getAllPostSlugs,
  getSortedPostsData,
  BlogPost,
  BlogPostMetadata,
} from "@/lib/posts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params if it's a promise, then destructure.
  // Although Next.js docs usually show direct access, Turbopack seems to require this.
  const { slug } = await params; // <--- ADD AWAIT HERE

  let post: BlogPost | null = null;
  try {
    // Use the destructured slug
    post = await getPostData(slug); // <--- Use the destructured slug
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error); // Use the destructured slug
    notFound();
  }

  if (!post) {
    notFound();
  }

  const allPostsMetadata: BlogPostMetadata[] = getSortedPostsData();
  const relatedPosts = allPostsMetadata
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

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
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
            )}
          </div>

          {post.image && (
            <div className="mt-8 aspect-[2/1] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </header>

        {/* Article Content - Render HTML directly */}
        <article className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}

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
                  href="https://github.com/vlad151"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/lazar-vlad"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://x.com/vladlazzar"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.slug}
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
        )}
      </div>
    </div>
  );
}
