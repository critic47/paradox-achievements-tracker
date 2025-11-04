export const config = {
  runtime: 'edge',
}

export default async function handler(request: Request) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  try {
    // Extract the path after /api/steam-api/
    const url = new URL(request.url)
    const pathSegments = url.pathname.split('/api/steam-api')[1] || ''
    const steamUrl = `https://api.steampowered.com${pathSegments}${url.search}`

    console.log(`Proxying request to: ${steamUrl}`)

    // Forward the request to Steam API
    const response = await fetch(steamUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Paradox-Achievements-Tracker',
      },
    })

    // Get the response data
    const data = await response.text()

    // Return with CORS and cache headers
    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300, s-maxage=300',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('Error proxying Steam API:', error)
    return new Response(
      JSON.stringify({
        error: 'Failed to proxy Steam API request',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  }
}
