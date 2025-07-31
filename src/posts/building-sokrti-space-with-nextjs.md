---
title: From React to Next.js - The Story of Building Sokrati.space
date: 2025-07-31
excerpt: This summer, I built a minimalist journaling app that analyzes emotional trends. This is the story of how I leveraged Next.js, AI, and a modern stack to bring a simple idea to life.
category: Web Dev
image: /images/sentiment_analysis.png
readTime: 3 min read
tags: ["Next.js", "React", "AI", "Product Development", "Sokrati.space"]
---

# From React to Next.js: The Story of Building Sokrati.space

As a full-stack developer, I've always been driven by the challenge of creating robust and elegant web applications. My journey in frontend development has been deeply rooted in the React ecosystem, a framework I’ve come to know and love for its component-based architecture and powerful ecosystem.

But this past summer, I decided to take on a personal project that would not only test my technical expertise but also push me to embrace a new development philosophy. The goal was to build [Sokrati.space](https://sokrati.space), a simple journaling app with a powerful, data-driven twist.

## A Simple Idea with a Technical Twist

The concept for Sokrati.space was straightforward: a minimalist space where users could write daily notes. The twist? My goal was to leverage technology to provide unique insights into their thought patterns. I envisioned an app that would use Google’s Natural Language API to generate a **sentiment and magnitude score** for each note, allowing users to see their emotional trends visualized over time.

It's a simple idea on the surface, but it required careful consideration of the engineering behind it. I wanted the user experience to feel incredibly clean, fast, and minimalistic—a testament to my belief in the value of great products.

## Embracing the Power of Next.js and a Modern Stack

For the frontend, I knew I needed a technology that could deliver both performance and a beautiful user interface. While my comfort zone was React, I made the conscious decision to switch to **Next.js**. The experience has been nothing short of amazing. The built-in features for routing, server components, and API routes streamlined my development process immensely.

To achieve that clean, snappy aesthetic I was after, I paired Next.js with a modern stack:

- **Shadcn UI:** For beautiful, accessible, and ready-to-use components.
- **Tailwind CSS:** For utility-first styling that made crafting the minimalist UI a breeze.
- **TypeScript:** To ensure code quality and robustness from the very start.

For the backend, I opted for **Firebase** for its seamless integration with Google's services. It handled authentication, acted as an image bucket, and provided a simple non-relational database structure that perfectly fit the app's needs. All of this was tied together with Google’s Natural Language API to analyze the sentiment of each journal entry.

And yes, I was leveraging artificial intelligence throughout the entire process to speed up development, from writing boilerplate code to generating ideas for UI components. The result was a product that, in my opinion, offered a delightful user experience.

## The Realization: Engineering is More Approachable Than Ever

Looking back at the process, I was incredibly pleased with the end result. The app itself, while simple, is a polished product that I enjoyed building and using.

It reinforced a powerful realization: the engineering aspect of launching a product is now more approachable than ever. With modern tools like Next.js, Vercel, and Firebase, the technical challenges that once took weeks can now be solved in a matter of days. This makes it possible to focus less on infrastructure and more on the vision and core idea of the product itself.

Some of the most time-consuming activities were actually picking a memorable name for the app and finding the right domain—a reminder that the non-technical aspects of product development are just as important.

The development experience, especially the seamless deployment with **Vercel** and analytics with **Firebase**, was a blast. I'm excited to see how this simple idea can be extended into a bigger product with a little more time and focus. This project has been a valuable lesson in what's possible when a clear vision meets a powerful, modern tech stack.
