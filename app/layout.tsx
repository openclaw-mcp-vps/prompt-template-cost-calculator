import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Template Cost Calculator — Know Your AI Costs Before You Run',
  description: 'Calculate exact token counts and costs for your prompt templates across OpenAI, Anthropic, and more. Built for AI developers and prompt engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ae13f04d-8cf1-4d07-af12-e24c29c04623"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
