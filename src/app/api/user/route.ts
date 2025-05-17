import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Get the user session cookie
    const userSessionCookie = request.cookies.get("user_session")

    if (!userSessionCookie?.value) {
      return NextResponse.json({ user: null })
    }

    // Parse the user session
    const userSession = JSON.parse(userSessionCookie.value)

    return NextResponse.json({ user: userSession })
  } catch (error) {
    console.error("User API error:", error)
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 })
  }
}
