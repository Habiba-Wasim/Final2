"use client"

import { useEffect, useState } from "react"

export default function TestGooglePage() {
  const [clientId, setClientId] = useState<string | null>(null)

  useEffect(() => {
    // Display the client ID for verification
    setClientId(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || null)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Google Client ID Test</h1>

        {clientId ? (
          <div className="space-y-4">
            <p className="text-green-600 font-medium">✓ Client ID is available</p>
            <div className="bg-gray-50 p-4 rounded-md break-all">
              <p className="text-xs font-mono">{clientId}</p>
            </div>
            <p className="text-sm text-gray-600">
              If this matches your Google Cloud Console client ID, your environment variable is set correctly.
            </p>
          </div>
        ) : (
          <div className="text-red-600">
            <p className="font-medium">✗ Client ID not found</p>
            <p className="text-sm mt-2">Make sure you've set the NEXT_PUBLIC_GOOGLE_CLIENT_ID environment variable.</p>
          </div>
        )}

        <div className="mt-6">
          <a
            href="/login"
            className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  )
}
