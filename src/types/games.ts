export type GameId = 'eu4' | 'eu5' | 'vic3' | 'hoi4' | 'ck3'

export interface GameInfo {
  id: GameId
  name: string
  fullName: string
  wikiUrl: string
  steamAppId: string
  color: string
  colorLight: string
  colorDark: string
  gradient: string
  icon: string
  logoUrl: string
  heroImageUrl: string
  clientIconUrl?: string // Optional Steam client icon URL
}

export const GAMES: Record<GameId, GameInfo> = {
  eu4: {
    id: 'eu4',
    name: 'EU4',
    fullName: 'Europa Universalis IV',
    wikiUrl: 'https://eu4.paradoxwikis.com/Achievements',
    steamAppId: '236850',
    color: '#1e40af',
    colorLight: '#dbeafe',
    colorDark: '#1e3a8a',
    gradient: 'from-blue-500 via-blue-600 to-blue-700',
    icon: '🌍',
    clientIconUrl:
      'https://shared.fastly.steamstatic.com/community_assets/images/apps/236850/aa46f5bf2697ce607ae95ec1be2bef119b63d0e6.ico',
    logoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/236850/header.jpg',
    heroImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/236850/library_hero.jpg',
  },
  eu5: {
    id: 'eu5',
    name: 'EU5',
    fullName: 'Europa Universalis 5',
    wikiUrl: 'https://eu5.paradoxwikis.com/Achievements',
    steamAppId: '3450310',
    color: '#0f766e',
    colorLight: '#ccfbf1',
    colorDark: '#0f766e',
    gradient: 'from-teal-500 via-teal-600 to-teal-700',
    icon: '🗺️',
    clientIconUrl:
      'https://shared.fastly.steamstatic.com/community_assets/images/apps/3450310/9892e9cfeb0e3c4693069bfabfd10b5a59f38e3a.ico',
    logoUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3450310/9944293cf93d5c11430d3b69941221b614c3ea70/header.jpg',
    heroImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/3450310/library_hero.jpg',
  },
  vic3: {
    id: 'vic3',
    name: 'Victoria 3',
    fullName: 'Victoria 3',
    wikiUrl: 'https://vic3.paradoxwikis.com/Achievements',
    steamAppId: '529340',
    color: '#7c2d12',
    colorLight: '#fed7aa',
    colorDark: '#7c2d12',
    gradient: 'from-orange-600 via-orange-700 to-orange-800',
    icon: '🏭',
    clientIconUrl:
      'https://shared.fastly.steamstatic.com/community_assets/images/apps/529340/fa4e8b452114cea8b7e105095dd419d82bedd63b.ico',
    logoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/529340/header.jpg',
    heroImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/529340/library_hero.jpg',
  },
  hoi4: {
    id: 'hoi4',
    name: 'HOI4',
    fullName: 'Hearts of Iron IV',
    wikiUrl: 'https://hoi4.paradoxwikis.com/Achievements',
    steamAppId: '394360',
    color: '#065f46',
    colorLight: '#d1fae5',
    colorDark: '#064e3b',
    gradient: 'from-green-600 via-green-700 to-green-800',
    icon: '⚔️',
    clientIconUrl:
      'https://shared.fastly.steamstatic.com/community_assets/images/apps/394360/1a13011c8363b5160781d9bb16bcb392b07b69be.ico',
    logoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/394360/header.jpg',
    heroImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/394360/library_hero.jpg',
  },
  ck3: {
    id: 'ck3',
    name: 'CK3',
    fullName: 'Crusader Kings III',
    wikiUrl: 'https://ck3.paradoxwikis.com/Achievement',
    steamAppId: '1158310',
    color: '#7c3aed',
    colorLight: '#ede9fe',
    colorDark: '#6d28d9',
    gradient: 'from-purple-500 via-purple-600 to-purple-700',
    icon: '👑',
    clientIconUrl:
      'https://shared.fastly.steamstatic.com/community_assets/images/apps/1158310/3d31b9b8d7ffb8512e546fc4ffb987273066ef0a.ico',
    logoUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg',
    heroImageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/library_hero.jpg',
  },
}
