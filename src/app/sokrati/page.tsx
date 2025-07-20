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
  Shield,
  Users,
  BarChart3,
  Rocket,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Built with modern technologies to ensure your team can work at the speed of thought.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption and compliance with industry standards.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Real-time collaboration tools that keep distributed teams connected and productive.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive insights and reporting to help you make data-driven decisions.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "Get up and running in minutes with our streamlined onboarding process.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Built to scale globally with CDN distribution and multi-region support.",
  },
];

const benefits = [
  "Reduce project delivery time by up to 40%",
  "Improve team collaboration and communication",
  "Streamline workflow management",
  "Enhance code quality and security",
  "Scale effortlessly as your team grows",
];

export default function SokratiPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Now in Beta
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Sokrati.space:{" "}
              <span className="text-primary">Revolutionizing</span> Team
              Collaboration
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              The next-generation platform that transforms how development teams
              collaborate, manage projects, and deliver exceptional results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link
                  href="https://sokrati.space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Sokrati.space
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Modern development teams face unprecedented challenges:
                distributed workforces, complex project requirements, and the
                need for rapid iteration. Traditional tools often create silos,
                slow down communication, and make it difficult to maintain
                visibility across projects.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Teams spend more time managing tools than building products,
                leading to decreased productivity and frustrated developers.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Team Collaboration Challenges"
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
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sokrati.space Platform Interface"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Solution
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Sokrati.space unifies your entire development workflow into a
                single, intuitive platform. From project planning to deployment,
                every aspect of your development process is streamlined and
                optimized.
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
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build, deploy, and scale your applications
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

      {/* Screenshots/Demo */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See It in Action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the power and simplicity of Sokrati.space
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-muted shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Sokrati.space Full Dashboard"
                width={1000}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Workflow?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of developers who are already building better
              software with Sokrati.space
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link
                  href="https://sokrati.space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Free
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
