// import { NextRequest, NextResponse } from 'next/server';
// import * as pdfjsLib from 'pdfjs-dist';
// import { Readable } from 'stream';

// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// export async function POST(req: NextRequest) {
//   const formData = await req.formData();
//   const file = formData.get('file') as File | null;

//   if (!file) {
//     return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
//   }

//   try {
//     const text = await extractTextFromFile(file);
//     return NextResponse.json({ text });
//   } catch (error) {
//     console.error('Error processing file:', error);
//     return NextResponse.json({ error: 'Failed to process file' }, { status: 500 });
//   }
// }

// async function extractTextFromFile(file: File): Promise<string> {
//   const buffer = await file.arrayBuffer();

//   if (file.type === 'application/pdf') {
//     return extractTextFromPDF(buffer);
//   } else if (file.type === 'text/plain') {
//     return new TextDecoder().decode(buffer);
//   } else if (file.type.includes('word')) {
//     return "Word document processing not implemented in this example.";
//   } else {
//     throw new Error('Unsupported file type');
//   }
// }

// async function extractTextFromPDF(buffer: ArrayBuffer): Promise<string> {
//   const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
//   let text = '';
//   for (let i = 1; i <= pdf.numPages; i++) {
//     const page = await pdf.getPage(i);
//     const content = await page.getTextContent();
//     text += content.items.map((item: any) => item.str).join(' ') + '\n';
//   }
//   return text;
// }
