// 'use client'

// import React from 'react'
// import { useToast } from '../hooks/useToast'

// interface FileUploadProps {
//   onFileUpload: (file: File) => void
// }

// export function FileUpload({ onFileUpload }: FileUploadProps) {
//   const { showToast } = useToast()

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       onFileUpload(file)
//       showToast('File uploaded successfully', 'success')
//     } else {
//       showToast('No file selected', 'error')
//     }
//   }

//   return (
//     <div className="mb-4">
//       <label htmlFor="file-upload" className="block text-sm font-medium mb-2">
//         Upload a document
//       </label>
//       <input
//         id="file-upload"
//         name="file-upload"
//         type="file"
//         accept=".txt,.doc,.docx,.pdf"
//         onChange={handleFileChange}
//         className="block w-full text-sm text-gray-500
//           file:mr-4 file:py-2 file:px-4
//           file:rounded-full file:border-0
//           file:text-sm file:font-semibold
//           file:bg-blue-50 file:text-blue-700
//           hover:file:bg-blue-100
//           dark:file:bg-gray-700 dark:file:text-gray-200
//           dark:hover:file:bg-gray-600"
//       />
//     </div>
//   )
// }
