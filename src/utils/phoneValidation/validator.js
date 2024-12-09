import { COUNTRY_CODES, DEFAULT_COUNTRY, getCountryByPrefix } from './countryData'
import { VALIDATION_ERRORS } from './types'
import { unformatPhoneNumber } from './formatter'

export function validatePhoneNumber(number, countryCodeOrPrefix) {
  // Si es un prefijo internacional personalizado
  if (countryCodeOrPrefix.startsWith('+')) {
    return validateInternationalNumber(number, countryCodeOrPrefix)
  }

  // Validación normal por país
  const country = COUNTRY_CODES[countryCodeOrPrefix]
  if (!country) {
    return {
      isValid: false,
      error: VALIDATION_ERRORS.INVALID_COUNTRY
    }
  }

  const cleaned = unformatPhoneNumber(number)
  
  // Validar prefijo internacional
  if (cleaned.startsWith('00') || cleaned.startsWith('+')) {
    const detectedCountry = getCountryByPrefix(cleaned.slice(0, 3))
    if (!detectedCountry) {
      return {
        isValid: false,
        error: VALIDATION_ERRORS.INVALID_PREFIX
      }
    }
    countryCodeOrPrefix = detectedCountry.code
  }

  // Validar patrón
  if (!country.pattern.test(cleaned)) {
    return {
      isValid: false,
      error: VALIDATION_ERRORS.INVALID_FORMAT
    }
  }

  return {
    isValid: true,
    countryCode: countryCodeOrPrefix,
    nationalNumber: cleaned.replace(country.prefix, ''),
    formattedNumber: cleaned
  }
}

function validateInternationalNumber(number, prefix) {
  const cleaned = unformatPhoneNumber(number)
  
  // Validar formato E.164 básico
  if (!/^\+?[1-9]\d{6,14}$/.test(prefix + cleaned)) {
    return {
      isValid: false,
      error: VALIDATION_ERRORS.INVALID_FORMAT
    }
  }

  return {
    isValid: true,
    countryCode: prefix,
    nationalNumber: cleaned,
    formattedNumber: prefix + cleaned
  }
}

export function isValidInternationalFormat(number) {
  return /^\+[1-9]\d{6,14}$/.test(number.replace(/\s/g, ''))
}
