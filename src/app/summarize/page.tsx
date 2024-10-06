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
        {/* ... rest of the component ... */}
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 SummarizeAI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
