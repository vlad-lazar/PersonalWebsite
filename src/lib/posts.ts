// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import rehypeHighlight from "rehype-highlight";

// Define a type for your blog post metadata (frontmatter)
export type BlogPostMetadata = {
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  category: string;
  slug: string; // Will be derived from filename
  image?: string; // Optional image path
  readTime?: string; // Optional read time
  tags?: string[]; // Optional tags
};

// Define the full blog post type, including HTML content
export type BlogPost = BlogPostMetadata & {
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "src", "posts");

// --- DEBUGGING LINE START ---
console.log(`[posts.ts] postsDirectory calculated as: ${postsDirectory}`);
// --- DEBUGGING LINE END ---

export function getSortedPostsData(): BlogPostMetadata[] {
  // --- DEBUGGING LINE START ---
  console.log("[getSortedPostsData] Starting function.");
  // --- DEBUGGING LINE END ---

  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    // --- DEBUGGING LINE START ---
    console.warn(
      `[getSortedPostsData] Posts directory not found: ${postsDirectory}. Returning empty array.`
    );
    // --- DEBUGGING LINE END ---
    return [];
  }

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  // --- DEBUGGING LINE START ---
  console.log(
    `[getSortedPostsData] Found files: ${fileNames.join(
      ", "
    )} in ${postsDirectory}`
  );
  // --- DEBUGGING LINE END ---

  const allPostsData = fileNames
    .filter((fileName) => {
      const isMarkdown = fileName.endsWith(".md") || fileName.endsWith(".mdx");
      // --- DEBUGGING LINE START ---
      if (!isMarkdown) {
        console.log(
          `[getSortedPostsData] Filtering out non-markdown file: ${fileName}`
        );
      }
      // --- DEBUGGING LINE END ---
      return isMarkdown;
    })
    .map((fileName) => {
      // Remove ".md" or ".mdx" from file name to get slug
      const slug = fileName.replace(/\.(md|mdx)$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      // --- DEBUGGING LINE START ---
      console.log(
        `[getSortedPostsData] Reading file contents for: ${fullPath}`
      );
      // --- DEBUGGING LINE END ---
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || "",
        date: matterResult.data.date || "",
        excerpt: matterResult.data.excerpt || "",
        category: matterResult.data.category || "Uncategorized",
        image: matterResult.data.image,
        readTime: matterResult.data.readTime,
        tags: matterResult.data.tags || [],
      } as BlogPostMetadata;
    });

  // Sort posts by date
  const sortedData = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  // --- DEBUGGING LINE START ---
  console.log(
    `[getSortedPostsData] Returning ${sortedData.length} sorted posts.`
  );
  // --- DEBUGGING LINE END ---
  return sortedData;
}

export async function getPostData(slug: string): Promise<BlogPost> {
  // --- DEBUGGING LINE START ---
  console.log(`[getPostData] Starting function for slug: ${slug}`);
  // --- DEBUGGING LINE END ---

  const fullPath = path.join(postsDirectory, `${slug}.md`); // Assuming .md extension here for individual post fetching

  // --- DEBUGGING LINE START ---
  console.log(`[getPostData] Attempting to read file at: ${fullPath}`);
  // --- DEBUGGING LINE END ---

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    // --- DEBUGGING LINE START ---
    console.error(`[getPostData] File NOT FOUND: ${fullPath}`);
    // --- DEBUGGING LINE END ---
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false }) // Keep sanitize: false if you intend to embed raw HTML
    .use(rehypeHighlight, {}) // Changed to rehypeHighlight directly
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the slug and html content
  const postData = {
    slug,
    contentHtml,
    title: matterResult.data.title || "",
    date: matterResult.data.date || "",
    excerpt: matterResult.data.excerpt || "",
    category: matterResult.data.category || "Uncategorized",
    image: matterResult.data.image, // Still uses matterResult.data.image directly
    readTime: matterResult.data.readTime,
    tags: (matterResult.data.tags as string[]) || [],
  } as BlogPost;

  // --- DEBUGGING LINE START ---
  console.log(`[getPostData] Successfully processed post: ${postData.title}`);
  // --- DEBUGGING LINE END ---

  return postData;
}

export function getAllPostSlugs() {
  // --- DEBUGGING LINE START ---
  console.log("[getAllPostSlugs] Starting function.");
  // --- DEBUGGING LINE END ---

  if (!fs.existsSync(postsDirectory)) {
    // --- DEBUGGING LINE START ---
    console.warn(
      `[getAllPostSlugs] Posts directory not found: ${postsDirectory}. Returning empty array.`
    );
    // --- DEBUGGING LINE END ---
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  // --- DEBUGGING LINE START ---
  console.log(
    `[getAllPostSlugs] Found files: ${fileNames.join(
      ", "
    )} in ${postsDirectory}`
  );
  // --- DEBUGGING LINE END ---

  const slugs = fileNames
    .filter((fileName) => {
      const isMarkdown = fileName.endsWith(".md") || fileName.endsWith(".mdx");
      // --- DEBUGGING LINE START ---
      if (!isMarkdown) {
        console.log(
          `[getAllPostSlugs] Filtering out non-markdown file: ${fileName}`
        );
      }
      // --- DEBUGGING LINE END ---
      return isMarkdown;
    })
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.(md|mdx)$/, ""),
      };
    });
  // --- DEBUGGING LINE START ---
  console.log(`[getAllPostSlugs] Returning ${slugs.length} slugs.`);
  // --- DEBUGGING LINE END ---
  return slugs;
}
