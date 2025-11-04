import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { validateApiKey, validateSteamId } from '@/services/steamApi'

interface SteamConfigProps {
  onConfigSaved: (apiKey: string, steamId: string) => void
  currentApiKey?: string
  currentSteamId?: string
}

export function SteamConfig({ onConfigSaved, currentApiKey, currentSteamId }: SteamConfigProps) {
  const [open, setOpen] = useState(false)
  const [apiKey, setApiKey] = useState(currentApiKey || '')
  const [steamId, setSteamId] = useState(currentSteamId || '')
  const [errors, setErrors] = useState<{ apiKey?: string; steamId?: string }>({})

  useEffect(() => {
    if (currentApiKey) setApiKey(currentApiKey)
    if (currentSteamId) setSteamId(currentSteamId)
  }, [currentApiKey, currentSteamId])

  const handleSave = () => {
    const newErrors: { apiKey?: string; steamId?: string } = {}

    if (!apiKey) {
      newErrors.apiKey = 'API Key is required'
    } else if (!validateApiKey(apiKey)) {
      newErrors.apiKey = 'Invalid API Key format (should be 32 hex characters)'
    }

    if (!steamId) {
      newErrors.steamId = 'Steam ID is required'
    } else if (!validateSteamId(steamId)) {
      newErrors.steamId = 'Invalid Steam ID format (should be 17 digits)'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    onConfigSaved(apiKey, steamId)
    setOpen(false)
  }

  const isConfigured = currentApiKey && currentSteamId

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={isConfigured ? 'outline' : 'default'}>
          {isConfigured ? '⚙️ Steam Settings' : '🔗 Connect Steam'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Steam Configuration</DialogTitle>
          <DialogDescription>
            Connect your Steam account to sync your EU4 achievements.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="apiKey">Steam API Key</Label>
            <Input
              id="apiKey"
              type="text"
              placeholder="Enter your Steam Web API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            {errors.apiKey && <p className="text-sm text-red-500">{errors.apiKey}</p>}
            <p className="text-xs text-slate-500">
              Get your API key from{' '}
              <a
                href="https://steamcommunity.com/dev/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                steamcommunity.com/dev/apikey
              </a>
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="steamId">Steam ID</Label>
            <Input
              id="steamId"
              type="text"
              placeholder="Enter your Steam ID (17 digits)"
              value={steamId}
              onChange={(e) => setSteamId(e.target.value)}
            />
            {errors.steamId && <p className="text-sm text-red-500">{errors.steamId}</p>}
            <p className="text-xs text-slate-500">
              Find your Steam ID at{' '}
              <a
                href="https://steamid.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                steamid.io
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Configuration</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
