import { useToast } from '../hooks/useToast'
export type SummarizationType = 'accurate' | 'long' | 'normal' | 'news' | 'academic'

const API_URLS: { [key in SummarizationType]: string } = {
  accurate: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
  news: 'https://api-inference.huggingface.co/models/google/pegasus-xsum',
  normal: 'https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6',
  long: 'https://api-inference.huggingface.co/models/philschmid/bart-large-cnn-samsum',
  academic: 'https://api-inference.huggingface.co/models/google/pegasus-xsum'
}

const API_KEY = process.env.NEXT_PUBLIC_HUGGING_FACE_API_KEY

export async function useSummarizeText(text: string, type: SummarizationType): Promise<string> {
  const { showToast } = useToast()

  if (!API_KEY) {
    const error = new Error('Hugging Face API key is not set')
    showToast(error.message, 'error')
    throw error
  }

  const API_URL = API_URLS[type]

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: text })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result[0].summary_text
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to summarize text'
    showToast(`Error: ${errorMessage}`, 'error')
    throw error
  }
}
