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
import {
  CheckCircle,
  ExternalLink,
  Zap,
  BrainCircuit,
  BarChart3,
  Feather,
  Smartphone,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "Minimalist Journaling",
    description:
      "A clean, distraction-free interface designed to help you focus on capturing your thoughts and ideas effortlessly.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Sentiment Analysis",
    description:
      "Using Google's Natural Language API, Sokrati analyzes each note to reveal the underlying emotional tone of your writing.",
  },
  {
    icon: BarChart3,
    title: "Visualize Your Mind",
    description:
      "Track your emotional trends over time with interactive charts, helping you understand your thought patterns on a deeper level.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your notes are your own. Sokrati uses Firebase Authentication to ensure your personal journal remains secure and private.",
  },
  {
    icon: Zap,
    title: "Inspirational Quotes",
    description:
      "Each session starts with a timeless quote to spark deep thought and inspire your writing.",
  },
  {
    icon: Smartphone,
    title: "Installable Web App (PWA)",
    description:
      "Add Sokrati to your home screen for a fast, native-app-like experience on any device.",
  },
];

const benefits = [
  "Gain a deeper understanding of your emotional patterns",
  "Identify triggers and trends in your daily reflections",
  "Cultivate mindfulness through focused writing",
  "Track your personal growth journey with objective data",
  "Find inspiration for your daily journaling practice",
];

export default function SokratiPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Now in Alpha
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Sokrati.space:{" "}
              <span className="text-primary">Your Intelligent</span> Journal
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              A personal space for deep thought, self-discovery, and
              understanding your own mind through the power of AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link
                  href="https://sokrati.space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Journaling
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 md:py-24 bg-muted/50 p-10">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Unseen Patterns of Your Mind
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We write, think, and feel every day, but rarely do we get a
                clear picture of our own emotional landscape. Our thoughts are
                full of subtle patterns and trends that are difficult to see
                from a day-to-day perspective.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Without a way to reflect on these patterns, we miss valuable
                opportunities for personal growth and self-awareness.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <Image
                src="/images/sentiment_analysis.png" // Placeholder for the Sokrati.space platform interface
                alt="Sokrati note with sentiment analysis"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted lg:order-2">
              <img
                src="/images/sentiment_trend.png" // Placeholder for the Sokrati.space platform interface
                alt="Sokrati.space Platform Interface"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Clarity Through Intelligence
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Sokrati.space isn't just a place to write; it's a tool for
                understanding. It reads between the lines, analyzing the
                sentiment of your thoughts to provide you with a clear, visual
                representation of your emotional trends.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <span className="ml-3 text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-muted/50 p-10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A smarter way to journal
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Features designed for reflection and insight.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 mt-20 mb-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Begin Your Journey of Self-Discovery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start writing today and uncover the insights hidden in your own
              words. It's free to get started.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link
                  href="https://sokrati.space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Free Journal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
