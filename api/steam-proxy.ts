import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  try {
    // Get the Steam API path from query parameter
    const { path } = req.query

    if (!path || typeof path !== 'string') {
      return res.status(400).json({ error: 'Missing path parameter' })
    }

    // Build the Steam API URL
    const steamUrl = `https://api.steampowered.com${path}`

    console.log(`Proxying request to: ${steamUrl}`)

    // Forward the request to Steam API
    const response = await fetch(steamUrl, {
      method: req.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Paradox-Achievements-Tracker',
      },
    })

    const data = await response.json()

    // Set CORS and cache headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300')

    return res.status(response.status).json(data)
  } catch (error) {
    console.error('Error proxying Steam API:', error)

    res.setHeader('Access-Control-Allow-Origin', '*')
    return res.status(500).json({
      error: 'Failed to proxy Steam API request',
      message: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
