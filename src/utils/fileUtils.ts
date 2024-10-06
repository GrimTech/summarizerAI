// import * as pdfjsLib from 'pdfjs-dist'

// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

// export async function extractTextFromFile(file: File): Promise<string> {
//   if (file.type === 'text/plain') {
//     return await file.text();
//   } else if (file.type === 'application/pdf') {
//     return "PDF files are not supported in this demo. In a full implementation, you would use a PDF parsing library or API.";
//   } else if (file.type.includes('word')) {
//     return "Word documents are not supported in this demo. In a full implementation, you would use a Word document parsing library or API.";
//   } else {
//     return "Unsupported file type. Please upload a text file.";
//   }
// }

// async function extractTextFromPDF(file: File): Promise<string> {
//   const arrayBuffer = await file.arrayBuffer()
//   const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
//   let text = ''
//   for (let i = 1; i <= pdf.numPages; i++) {
//     const page = await pdf.getPage(i)
//     const content = await page.getTextContent()
//     text += content.items.map((item: any) => item.str).join(' ') + '\n'
//   }
//   return text
// }

// async function extractTextFromTXT(file: File): Promise<string> {
//   return await file.text()
// }

// async function extractTextFromDOC(file: File): Promise<string> {
//   // This is a placeholder. Extracting text from DOC/DOCX files
//   // requires more complex libraries or server-side processing.
//   return 'Text extraction from DOC/DOCX files is not implemented in this example.'
// }
