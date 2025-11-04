export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  // Get the full URL path
  const url = new URL(request.url)
  const steamPath = url.pathname.replace('/api/steam-api', '')
  const queryString = url.search

  // Build the Steam API URL
  const steamUrl = `https://api.steampowered.com${steamPath}${queryString}`

  try {
    // Forward the request to Steam API
    const response = await fetch(steamUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Get the response data
    const data = await response.text()

    // Return with CORS and cache headers
    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('Error proxying Steam API:', error)
    return new Response(JSON.stringify({ error: 'Failed to proxy Steam API request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
