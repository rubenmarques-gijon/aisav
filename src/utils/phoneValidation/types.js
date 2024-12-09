/**
 * @typedef {Object} CountryCode
 * @property {string} code - ISO country code
 * @property {string} prefix - Country calling code
 * @property {string} pattern - Regex pattern for validation
 * @property {string} format - Display format pattern
 * @property {number} length - Expected number length without prefix
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid
 * @property {string} formattedNumber
 * @property {string} [error]
 * @property {string} [countryCode]
 * @property {string} [nationalNumber]
 */

export const VALIDATION_ERRORS = {
  INVALID_FORMAT: 'invalid_format',
  INVALID_LENGTH: 'invalid_length',
  INVALID_PREFIX: 'invalid_prefix',
  INVALID_COUNTRY: 'invalid_country'
}
