export function formatPhoneNumber(number, format) {
  let cleaned = number.replace(/\D/g, '')
  let result = ''
  let index = 0

  for (let i = 0; i < format.length; i++) {
    if (index >= cleaned.length) break

    if (format[i] === 'X') {
      result += cleaned[index]
      index++
    } else {
      result += format[i]
    }
  }

  return result
}

export function unformatPhoneNumber(number) {
  return number.replace(/\D/g, '')
}

export function formatInternational(number, countryCode) {
  const cleaned = unformatPhoneNumber(number)
  return `+${countryCode} ${cleaned}`
}
