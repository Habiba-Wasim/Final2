"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function AuthCallback() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Parse the hash fragment to get the access token
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const accessToken = params.get("access_token")

    console.log("Auth callback page loaded")
    console.log("Hash fragment:", hash)
    console.log("Access token:", accessToken)

    if (accessToken) {
      // Fetch user info from Google
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          console.log("User info received:", data)

          // Store user info in sessionStorage
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              id: data.sub,
              name: data.name,
              email: data.email,
              picture: data.picture,
            }),
          )

          // Redirect to home page
          router.push("/")
        })
        .catch((error) => {
          console.error("Error fetching user info:", error)
          setError("Failed to fetch user info. Please try again.")
        })
    } else {
      // No access token found
      console.error("No access token received")
      setError("No access token received. Please try again.")
    }
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md text-center">
        {error ? (
          <>
            <div className="text-red-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-medium text-red-600">Authentication Error</h1>
            <p className="text-gray-500 mt-2">{error}</p>
            <button
              onClick={() => router.push("/login")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Return to Login
            </button>
          </>
        ) : (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-4" />
            <h1 className="text-xl font-medium">Completing sign in...</h1>
            <p className="text-gray-500 mt-2">Please wait while we process your authentication.</p>
          </>
        )}
      </div>
    </div>
  )
}
