import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900">
      <header className="p-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">SummarizeAI</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Summarize Anything
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8">
            Transform long texts into concise summaries with the power of AI
          </p>
          <Link href="/summarize" className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Start Summarizing
          </Link>
        </div>
      </main>

      <footer className="p-5 text-center text-white">
        <p>&copy; 2024 SummarizeAI. All rights reserved.</p>
      </footer>
    </div>
  )
}