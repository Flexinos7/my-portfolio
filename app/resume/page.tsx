'use client'
import { useRouter } from 'next/navigation'

export default function ResumePage() {
  const router = useRouter()
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-xl w-[90vw] h-[90vh]">
        {/* Controls overlay */}
        <div className="absolute top-4 right-4 flex space-x-3">
          <button
            onClick={() => router.push('/')}
            aria-label="Close"
            className="p-3 bg-white rounded-full shadow border border-gray-200 hover:bg-green-50 hover:scale-110 transition-transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a
            href="/resume.pdf"
            download
            aria-label="Download"
            className="p-3 bg-white rounded-full shadow border border-gray-200 hover:bg-green-50 hover:scale-110 transition-transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-4-4m4 4l4-4m-4 4V4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
            </svg>
          </a>
        </div>

        {/* embedded PDF */}
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0"
          className="w-full h-full rounded-xl"
          title="Resume PDF"
        />
      </div>
    </div>
  )
} 