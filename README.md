Repository: raihaan004/ai-interview-mocker
Files analyzed: 34

Estimated tokens: 15.6k

Directory structure:
└── raihaan004-ai-interview-mocker/
    ├── README.md
    ├── components.json
    ├── drizzle.config.js
    ├── jsconfig.json
    ├── middleware.js
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.mjs
    ├── app/
    │   ├── globals.css
    │   ├── layout.js
    │   ├── page.js
    │   ├── (auth)/
    │   │   ├── sign-in/
    │   │   │   └── [[...sign-in]]/
    │   │   │       └── page.jsx
    │   │   └── sign-up/
    │   │       └── [[...sign-up]]/
    │   │           └── page.jsx
    │   └── dashboard/
    │       ├── layout.jsx
    │       ├── page.jsx
    │       ├── _components/
    │       │   ├── AddNewInterview.jsx
    │       │   ├── Header.jsx
    │       │   ├── InterviewItemCard.jsx
    │       │   └── InterviewList.jsx
    │       └── interview/
    │           └── [interviewId]/
    │               ├── page.jsx
    │               ├── feedback/
    │               │   └── page.jsx
    │               └── start/
    │                   ├── page.jsx
    │                   └── _components/
    │                       ├── QuestionsSection.jsx
    │                       └── RecordAnswerSection.jsx
    ├── components/
    │   └── ui/
    │       ├── button.jsx
    │       ├── collapsible.jsx
    │       ├── dialog.jsx
    │       ├── input.jsx
    │       ├── sonner.jsx
    │       └── textarea.jsx
    ├── lib/
    │   └── utils.js
    ├── public/
    └── utils/
        ├── db.js
        ├── GeminiAIModal.js
        └── schema.js


================================================
FILE: README.md
================================================
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



================================================
FILE: components.json
================================================
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": false,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}


================================================
FILE: drizzle.config.js
================================================
/** @type {import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url: 'postgresql://ai-interview-mocker_owner:npg_cYIrU6G7gnQE@ep-proud-frost-a5xmya28.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
};


================================================
FILE: jsconfig.json
================================================
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}



================================================
FILE: middleware.js
================================================
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";



const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect()
  })


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


================================================
FILE: next.config.mjs
================================================
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;



================================================
FILE: package.json
================================================
{
  "name": "ai-interview-mocker",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:push": "npx drizzle-kit push",
    "db:studio": "npx drizzle-kit studio"
  },
  "dependencies": {
    "@clerk/nextjs": "^6.12.1",
    "@google/generative-ai": "^0.22.0",
    "@neondatabase/serverless": "^0.10.4",
    "@radix-ui/react-collapsible": "^1.1.3",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-slot": "^1.1.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "drizzle-orm": "^0.40.0",
    "esbuild": "^0.25.0",
    "lucide-react": "^0.477.0",
    "moment": "^2.30.1",
    "next": "15.2.0",
    "next-themes": "^0.4.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-speech-to-text": "^0.8.0",
    "react-webcam": "^7.2.0",
    "sonner": "^2.0.1",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.1.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "drizzle-kit": "^0.30.5",
    "tailwindcss": "^4"
  }
}



================================================
FILE: postcss.config.mjs
================================================
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;



================================================
FILE: app/globals.css
================================================
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: #4845D2;
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}



================================================
FILE: app/layout.js
================================================
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}



================================================
FILE: app/page.js
================================================
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Master Your  
              <strong className="text-primary"> Interview Skills </strong>
              with AI
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
             Boost your confidence and land your dream job with realistic AI-powered mock interviews.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="/dashboard"
              >
                Get Started
              </a>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



================================================
FILE: app/(auth)/sign-in/[[...sign-in]]/page.jsx
================================================
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
          <svg
            className="h-8 sm:h-10"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to EduCraft AI 🤖
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        Prepare Smarter with AI Interview Simulation
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span className="sr-only">Home</span>
            <svg
              className="h-8 sm:h-10"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to EduCraft AI 🤖
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
          Prepare Smarter with AI Interview Simulation
          </p>
        </div>

        <SignIn />
      </div>
    </main>
  </div>
</section>
  )
   
}


================================================
FILE: app/(auth)/sign-up/[[...sign-up]]/page.jsx
================================================
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp />
}


================================================
FILE: app/dashboard/layout.jsx
================================================
import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div>
      <Header/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
      {children}
      </div>
        
    </div>
  )
}

export default DashboardLayout


================================================
FILE: app/dashboard/page.jsx
================================================
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl text-primary'>Test Preparation Dashboard
      </h2>
      <h2 className='text-gray-500'> Create and start your AI-powered practice test</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
          <AddNewInterview/>
        
      {/* Previous Interview List */}
      
      </div>
      <InterviewList/>
    </div>
  )
}


export default Dashboard


================================================
FILE: app/dashboard/_components/AddNewInterview.jsx
================================================
"use client"
import React, {useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { max } from 'drizzle-orm'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import moment from 'moment'

  

function AddNewInterview() {
    const [openDialog, setOpenDialog] =useState(false)
    const [jobPosition, setJobPosition] =useState();
    const [jobDesc, setJobDesc] =useState();
    const [jobExperience, setJobExperience] =useState();
    const [loading, setLoading] =useState(false);
    const [jsonResponse, setJsonResponse] =useState([]);
    const router=useRouter();
    const {user}=useUser();
    const onSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(jobPosition, jobDesc, jobExperience)

        const Inputprompt="Job Position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience: "+jobExperience+", Depends on this information please give me "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview question with Answered in Json Format, Give Question and Answered as field in JSON"

        const result=await chatSession.sendMessage(Inputprompt)

        const MockJsonResp = (result.response.text()).replace('```json','').replace('```','')
        
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);
        if(MockJsonResp){
        const resp = await db.insert(MockInterview).values({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResp,
            jobPosition:jobPosition,
            jobDesc:jobDesc,
            jobExperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockInterview.mockId})

        console.log("Inserted ID: ",resp)
        if(resp) {
            setOpenDialog(false);
            router.push('/dashboard/interview/'+resp[0]?.mockId)
        }
        } else {
            console.log("Error in response");
        }
        setLoading(false);
    }
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all
        'onClick={()=>setOpenDialog(true)}>
            <h2 className='text-lg text-center'>+ Add New Test</h2>
        </div>
        <Dialog open = {openDialog}>
            
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                <DialogTitle className="text-2xl">Tell us more about your job interviewing</DialogTitle>
                <DialogDescription>
                    <form onSubmit={onSubmit}>
                    <div>
                        <h2>Add details about your job position/role, Job description and years of experience</h2>
                        <div className='mt-7 my-3'>
                            <label>Job Role/Job Position</label>
                            <Input placeholder="Ex. Full Stack Developer" required
                            onChange={(event)=>setJobPosition(event.target.value)}
                            />
                            
                        </div>
                        <div className='my-3'>
                            <label>Job Description/Tech Stack (In short)</label>
                            <Textarea placeholder="Ex. React, Angular, NodeJs, MySql etc" required
                            onChange={(event)=>setJobDesc(event.target.value)}
                            />
                        </div>
                        <div className='my-3'>
                            <label>Years of Experience</label>
                            <Input placeholder="Ex. 5" type="number" max="100" required
                            onChange={(event)=>setJobExperience(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5 justify-end'>
                        <Button type="button" variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                        <Button type="submit" disabled={loading}> 
                        {loading ? <><LoaderCircle className='animate-spin'/>'Generating from AI'</>: 'Start Interview'}</Button>
                    </div>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
    </div>
  )
}

export default AddNewInterview


================================================
FILE: app/dashboard/_components/Header.jsx
================================================
"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    
    const path=usePathname();
    useEffect(()=>{
        console.log(path);
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Link href={'http://localhost:3000/dashboard'} className='flex items-center gap-2'>
        <Image src = {'/educraftai.svg'} width={160} height={100} alt='logo'/>
        </Link>
        {/* <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path =='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path =='/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path =='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path =='/dashboard/how' && 'text-primary font-bold'}`}>How it works?</li>
        </ul> */}
        <UserButton/>
    </div>
  )
}

export default Header


================================================
FILE: app/dashboard/_components/InterviewItemCard.jsx
================================================
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {
    const router=useRouter();
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }
  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>Years of Experience: {interview?.jobExperience}</h2>
        <h2 className='text-xs text-gray-400'>Created At: {interview.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
            
            <Button size="sm" variant="outline" className="max-w-full" onClick={onFeedbackPress}>Feedback</Button>
            <Button size="sm" className="max-w-full" onClick={onStart}>Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard


================================================
FILE: app/dashboard/_components/InterviewList.jsx
================================================
"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {
    const  {user}=useUser();
    const [interviewList,setInterviewList]=useState([]);
    useEffect(()=>{
        user&&GetInterviewList();
    },[user])
    const GetInterviewList=async()=>{
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));
        console.log(result);
        setInterviewList(result);
    }
  return (

    <div>
        <h2 className='font-medium text-lg'>Previous Preparation</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList&&interviewList.map((interview,index)=>(<InterviewItemCard interview={interview}key={index}/>))}
        </div>
    </div>
  )
}

export default InterviewList


================================================
FILE: app/dashboard/interview/[interviewId]/page.jsx
================================================
"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {
    const [interviewData,setInterviewData]=useState({});
    const [webCamEnabled,setWebCamEnabled]=useState(false);
    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails();
    }, [])

    const GetInterviewDetails=async()=>{
        const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId))

        setInterviewData(result[0]);
    }

  return (
    <div className='my-10'>
        <h2 className='font-bold text-2xl'> Let's Get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        
        <div className='flex flex-col my-5 gap-5 '>
            <div className='flex flex-col p-5 rounded-lg border gap-5'>
            <h2 className='text-lg'><strong>Job Role/Job Position: </strong>{interviewData.jobPosition}</h2>
            <h2 className='text-lg'><strong>Job description/Tech Stack: </strong>{interviewData.jobDesc}</h2>
            <h2 className='text-lg'><strong>Years of Experience: </strong>{interviewData.jobExperience}</h2>
            </div>
            <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
                <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
            </div>
        </div>
        <div>
            {webCamEnabled? <Webcam
                onUserMedia={()=>setWebCamEnabled(true)}
                onUserMediaError={()=>setWebCamEnabled(false)}
                mirrored={true}
                style={{
                    height:300,
                    width:300}
                }
            />:<>
            <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
            <Button variant="" className="w-full bg-white border-b-amber-200 text-primary hover:text-white my-3"onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
            </>
            }
        </div>
        </div>
        <div className='flex justify-end  items-end'>
            <Link href={'/dashboard/interview/'+params.interviewId+'/start'}><Button>Let's Start</Button></Link>
        
        </div>
    </div>
  )
}

export default Interview


================================================
FILE: app/dashboard/interview/[interviewId]/feedback/page.jsx
================================================
"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({params}) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    setFeedbackList(result);
    
    if (result.length > 0) {
      const totalRating = result.reduce((sum, item) => sum + (item.rating || 0), 0);
      const averageRating = Math.round((totalRating / result.length) * 10) / 10;
      setOverallRating(averageRating);
    }
  }

  const getFeedbackMessage = () => {
    if (overallRating >= 8) {
      return {
        title: "Excellent Work! 🎉",
        message: "You've performed exceptionally well in this interview. Keep up the great work!",
        color: "text-green-500"
      };
    } else if (overallRating >= 6) {
      return {
        title: "Good Job! 👍",
        message: "You did well, but there's still room for improvement in some areas.",
        color: "text-blue-500"
      };
    } else if (overallRating >= 4) {
      return {
        title: "Needs Improvement 💪",
        message: "You have some solid foundations but need more practice to improve your performance.",
        color: "text-yellow-500"
      };
    } else {
      return {
        title: "Keep Practicing! 📚",
        message: "You need to practice more. Review the feedback carefully and focus on your weak areas.",
        color: "text-red-500"
      };
    }
  };

  const feedbackMessage = getFeedbackMessage();

  return (
    <div className='p-10'>
      {feedbackList?.length === 0 ? (
        <h2 className='font-bold text-xl my-3'>No Interview Feedback Record Found</h2>
      ) : (
        <>
          <h2 className={`text-3xl font-bold ${feedbackMessage.color}`}>
            {feedbackMessage.title}
          </h2>
          <h2 className='font-bold text-2xl'>Here is your interview feedback</h2> 
          <h2 className='text-primary text-lg my-3'>
            Your overall interview rating: <strong>{overallRating}/10</strong>
          </h2>
          <p className='text-gray-700 mb-4'>{feedbackMessage.message}</p>

          <h2 className='text-sm text-gray-500 mb-6'>
            Find below interview questions with correct answers, your answers, and feedback for improvement
          </h2>
          
          {feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-7'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full'>
                {item.question} <ChevronsUpDown className='h-5 w-5'/>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-red-500 p-2 border rounded-lg'>
                    <strong>Rating: </strong>{item.rating}/10
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'>
                    <strong>Your Answer: </strong>{item.userAns}
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'>
                    <strong>Correct Answer: </strong>{item.correctAns}
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'>
                    <strong>Feedback: </strong>{item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <Button onClick={() => router.replace('/dashboard')} className='mt-6'>
        Go Home
      </Button>
    </div>
  )
}

export default Feedback


================================================
FILE: app/dashboard/interview/[interviewId]/start/page.jsx
================================================
"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({params}) {
    const [interviewData,setInterviewData]=useState({});
    const [mockInterviewQuestion,setMockInterviewQuestion]=useState();
    const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
    useEffect(()=>{
        GetInterviewDetails();
    },[]);
    const GetInterviewDetails=async()=>{
            const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId))
    
            const jsonMockResp=JSON.parse(result[0].jsonMockResp)
            console.log(jsonMockResp)
            setMockInterviewQuestion(jsonMockResp);
            setInterviewData(result[0]);
        }
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <QuestionsSection mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            />
            {/*Video/Audio/Recording*/}
            <RecordAnswerSection 
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}/>
        </div>
        <div className='flex justify-end gap-6'>
            {activeQuestionIndex>0&&
            <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
            {activeQuestionIndex!=mockInterviewQuestion?.length-1&&
            <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
            {activeQuestionIndex==mockInterviewQuestion?.length-1&&
            <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
            <Button>End Interview</Button></Link>}
        </div>
    </div>
  )
}

export default StartInterview


================================================
FILE: app/dashboard/interview/[interviewId]/start/_components/QuestionsSection.jsx
================================================
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion, activeQuestionIndex}) {
    const texttospeech=(text)=>{
        if('speechSynthesis' in window){
            const speech= new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
    } else {
        alert('Your browser does not support text to speech')
    }}
  return mockInterviewQuestion&&(
    <div className='p-5 border rounded-lg my-10'>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
  {mockInterviewQuestion?.map((question, index) => (
    <h2 
      key={index} // Added key prop for React's reconciliation
      className={`
        p-2 rounded-full text-xs md:text-sm text-center cursor-pointer
        ${activeQuestionIndex === index 
          ? 'bg-blue-500 text-white'  // Using explicit blue-500 as fallback
          : 'bg-gray-200 text-gray-800'  // Using explicit colors for secondary
        }
      `}
    >
      Question #{index + 1}
    </h2>
  ))}
</div>
        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.Question}</h2>
        <Volume2 className='cursor-pointer'onClick={()=>texttospeech(mockInterviewQuestion[activeQuestionIndex]?.Question)}/>
        <div className='border rounded-lg p-5 bg-blue-100 mt-20'> 
            <h2 className='flex gap-2 items-center text-primary'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionsSection


================================================
FILE: app/dashboard/interview/[interviewId]/start/_components/RecordAnswerSection.jsx
================================================
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import moment from 'moment'

function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex,interviewData}) {
  const [userAnswer,setUserAnswer]=useState('');
  const {user}=useUser();
  const [loading,setLoading]=useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  useEffect(()=>{
    results.map((result)=>(
      setUserAnswer(prevAns=>prevAns+result?.transcript)
    ))
  },[results])

  useEffect(()=>{
    if(!isRecording&&userAnswer.length>10) {
      UpdateUserAnswer();
    }


  },[userAnswer])

  const StartStopRecording=async()=>{
    if(isRecording){
      
      stopSpeechToText()
      console.log(userAnswer)

    } else {
      startSpeechToText();
    }
  }
  const UpdateUserAnswer=async()=>{
    
    setLoading(true);
    const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.Question+", User Answer:"+userAnswer+", Depends on question and user answer for give interview question"+
      " please give us rating for answer and feedback as area of improvement if any"+ "in just 3-5 lines to improve in JSON format with rating field and feedback field";
    const result= await chatSession.sendMessage(feedbackPrompt);
      const mockJsonResp= (result.response.text()).replace('```json','').replace('```','');
      console.log(mockJsonResp);
      const JsonFeedbackResp=JSON.parse(mockJsonResp);

      const resp=await db.insert(UserAnswer).values({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestion[activeQuestionIndex]?.Question,
        correctAns:mockInterviewQuestion[activeQuestionIndex]?.Answer,
        userAns:userAnswer,
        feedback:JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-yyyy')
      })
      if(resp) {
        toast('User Answer recorded successfully');
        setUserAnswer('');
        setResults([]);
      }
      setResults([]);
      setLoading(false);
  }


  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
      <Image src={'/WebCam.png'} width={200} height={200} className='absolute'/>
      <Webcam
        mirrored={true}
        style={{
          height:300,
          width:'100%',
          zIndex:10
        }}      
      />
    </div>
    <Button disabled={loading}variant="outline" className="my-10 cursor-pointer" onClick={StartStopRecording}>
      {isRecording?
    <h2 className='text-red-600 flex gap-2'>
        <Mic/>Stop Recording
    </h2>:
    <h2 className='text-primary flex gap-2 items-center'><Mic/>Record Answer</h2>}</Button>  
    
    </div>
  )
}

export default RecordAnswerSection


================================================
FILE: components/ui/button.jsx
================================================
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    (<Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />)
  );
}

export { Button, buttonVariants }



================================================
FILE: components/ui/collapsible.jsx
================================================
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

function Collapsible({
  ...props
}) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}) {
  return (<CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />);
}

function CollapsibleContent({
  ...props
}) {
  return (<CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />);
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }



================================================
FILE: components/ui/dialog.jsx
================================================
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}) {
  return (
    (<DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      )}
      {...props} />)
  );
}

function DialogContent({
  className,
  children,
  ...props
}) {
  return (
    (<DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}>
        {children}
        <DialogPrimitive.Close
          className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>)
  );
}

function DialogHeader({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props} />)
  );
}

function DialogFooter({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props} />)
  );
}

function DialogTitle({
  className,
  ...props
}) {
  return (
    (<DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props} />)
  );
}

function DialogDescription({
  className,
  ...props
}) {
  return (
    (<DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />)
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}



================================================
FILE: components/ui/input.jsx
================================================
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    (<input
      type={type}
      data-slot="input"
      className={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />)
  );
}

export { Input }



================================================
FILE: components/ui/sonner.jsx
================================================
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium",
        },
      }}
      {...props} />)
  );
}

export { Toaster }



================================================
FILE: components/ui/textarea.jsx
================================================
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    (<textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props} />)
  );
}

export { Textarea }



================================================
FILE: lib/utils.js
================================================
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}




================================================
FILE: utils/db.js
================================================
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql,{schema});



================================================
FILE: utils/GeminiAIModal.js
================================================
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

    export const chatSession = model.startChat({
      generationConfig,
      
    });
  


================================================
FILE: utils/schema.js
================================================
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})
export const UserAnswer=pgTable('userAnswer', {
    id: serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt')
})
