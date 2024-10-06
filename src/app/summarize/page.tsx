'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '../ThemeToggle'
import { useSummarizeText, SummarizationType } from '../../utils/api'
import { useToast } from '../../hooks/useToast'

const summarizationTypes: { [key in SummarizationType]: string } = {
  accurate: 'Accurate',
  long: 'Long Paragraph',
  normal: 'Normal',
  news: 'News Article',
  academic: 'Academic Paper'
}

export default function Summarize() {
  const [text, setText] = useState('')
  const [summary, setSummary] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [summarizationType, setSummarizationType] = useState<SummarizationType>('normal')
  const { showToast } = useToast()

  const handleSummarize = async () => {
    setIsLoading(true)
    try {
      const result = await useSummarizeText(text, summarizationType)
      setSummary(result)
      showToast('Text summarized successfully', 'success')
    } catch (error) {
      console.error('Error summarizing text:', error)
      setSummary('')
      showToast(`Error: ${error instanceof Error ? error.message : 'Failed to summarize text'}`, 'error')
    }
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">SummarizeAI</Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Summarize Text</h1>
          <div className="mb-4">
            <label htmlFor="summarizationType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Summarization Type
            </label>
            <select
              id="summarizationType"
              value={summarizationType}
              onChange={(e) => setSummarizationType(e.target.value as SummarizationType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {Object.entries(summarizationTypes).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter text to summarize
            </label>
            <textarea
              id="text"
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Paste your text here..."
            />
          </div>
          <button
            onClick={handleSummarize}
            disabled={isLoading || text.trim().length === 0}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Summarizing...' : 'Summarize'}
          </button>
          {summary && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Summary</h2>
              <p className="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-md shadow">{summary}</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 SummarizeAI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
