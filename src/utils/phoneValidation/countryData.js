export const COUNTRY_CODES = {
  ES: {
    code: 'ES',
    name: 'España',
    prefix: '+34',
    pattern: /^(?:(?:\+|00)34|0)?[6789]\d{8}$/,
    format: 'XXX XXX XXX',
    length: 9,
    mobile: /^(?:(?:\+|00)34|0)?[67]\d{8}$/,
    info: 'Móviles comienzan con 6 o 7',
    flag: '🇪🇸',
    favorite: true,
    order: 1
  },
  RO: {
    code: 'RO',
    name: 'Rumanía',
    prefix: '+40',
    pattern: /^(?:(?:\+|00)40|0)?[7]\d{8}$/,
    format: 'XXX XXX XXX',
    length: 9,
    mobile: /^(?:(?:\+|00)40|0)?[7]\d{8}$/,
    info: 'Móviles comienzan con 7',
    flag: '🇷🇴',
    favorite: true,
    order: 2
  },
  GB: {
    code: 'GB',
    name: 'Reino Unido',
    prefix: '+44',
    pattern: /^(?:(?:\+|00)44|0)?[7]\d{9}$/,
    format: 'XXXX XXX XXX',
    length: 10,
    mobile: /^(?:(?:\+|00)44|0)?[7]\d{9}$/,
    info: 'Móviles comienzan con 7',
    flag: '🇬🇧',
    favorite: true,
    order: 3
  },
  IT: {
    code: 'IT',
    name: 'Italia',
    prefix: '+39',
    pattern: /^(?:(?:\+|00)39|0)?[3-7]\d{8,11}$/,
    format: 'XXX XXX XXXX',
    length: 10,
    mobile: /^(?:(?:\+|00)39|0)?[3]\d{9}$/,
    info: 'Móviles comienzan con 3',
    flag: '🇮🇹',
    favorite: true,
    order: 4
  },
  FR: {
    code: 'FR',
    name: 'Francia',
    prefix: '+33',
    pattern: /^(?:(?:\+|00)33|0)?[1-9]\d{8}$/,
    format: 'X XX XX XX XX',
    length: 9,
    mobile: /^(?:(?:\+|00)33|0)?[67]\d{8}$/,
    info: 'Móviles comienzan con 6 o 7',
    flag: '🇫🇷',
    favorite: true,
    order: 5
  },
  DE: {
    code: 'DE',
    name: 'Alemania',
    prefix: '+49',
    pattern: /^(?:(?:\+|00)49|0)?[1-9]\d{10,11}$/,
    format: 'XXXX XXXXXX',
    length: 11,
    mobile: /^(?:(?:\+|00)49|0)?[15]\d{10}$/,
    info: 'Móviles comienzan con 1 o 5',
    flag: '🇩🇪'
  },
  PT: {
    code: 'PT',
    name: 'Portugal',
    prefix: '+351',
    pattern: /^(?:(?:\+|00)351|0)?[9]\d{8}$/,
    format: 'XXX XXX XXX',
    length: 9,
    mobile: /^(?:(?:\+|00)351|0)?[9][1236]\d{7}$/,
    info: 'Móviles comienzan con 91, 92, 93 o 96',
    flag: '🇵🇹'
  },
  IE: {
    code: 'IE',
    name: 'Irlanda',
    prefix: '+353',
    pattern: /^(?:(?:\+|00)353|0)?[8]\d{8}$/,
    format: 'XXX XXX XXX',
    length: 9,
    mobile: /^(?:(?:\+|00)353|0)?[8][3-9]\d{7}$/,
    info: 'Móviles comienzan con 83-89',
    flag: '🇮🇪'
  },
  NL: {
    code: 'NL',
    name: 'Países Bajos',
    prefix: '+31',
    pattern: /^(?:(?:\+|00)31|0)?[6]\d{8}$/,
    format: 'XX XXX XXXX',
    length: 9,
    mobile: /^(?:(?:\+|00)31|0)?[6]\d{8}$/,
    info: 'Móviles comienzan con 6',
    flag: '🇳🇱'
  },
  BE: {
    code: 'BE',
    name: 'Bélgica',
    prefix: '+32',
    pattern: /^(?:(?:\+|00)32|0)?[4]\d{8}$/,
    format: 'XXX XX XX XX',
    length: 9,
    mobile: /^(?:(?:\+|00)32|0)?[4]\d{8}$/,
    info: 'Móviles comienzan con 4',
    flag: '🇧🇪'
  },
  // ... resto de países con sus banderas
}

export const DEFAULT_COUNTRY = 'ES'

export function getFavoriteCountries() {
  return Object.values(COUNTRY_CODES)
    .filter(country => country.favorite)
    .sort((a, b) => a.order - b.order)
}

export function getNonFavoriteCountries() {
  return Object.values(COUNTRY_CODES)
    .filter(country => !country.favorite)
    .sort((a, b) => a.name.localeCompare(b.name))
}
