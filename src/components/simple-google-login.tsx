"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

export function SimpleGoogleLogin() {
  const [redirectUri, setRedirectUri] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const uri = `${window.location.origin}/auth/callback`
      setRedirectUri(uri)
      setIsLoading(false)
      console.log("Simple Google Login - Redirect URI:", uri)
    }
  }, [])

  // Create a direct Google OAuth URL
  const googleOAuthUrl = redirectUri
    ? `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      }&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=email%20profile&prompt=select_account`
    : "#"

  return (
    <div className="w-full">
      {isLoading ? (
        <button
          disabled
          className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium flex items-center justify-center"
        >
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
          Loading...
        </button>
      ) : (
        <a
          href={googleOAuthUrl}
          className="w-full bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.23H12v4.51h5.92c-.26 1.34-1.04 2.48-2.21 3.25v2.69h3.57c2.08-1.92 3.28-4.74 3.28-8.22z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </a>
      )}
    </div>
  )
}
