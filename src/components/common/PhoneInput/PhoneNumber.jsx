import { useEffect, useState } from 'react'
import { formatPhoneNumber, unformatPhoneNumber } from '../../../utils/phoneValidation/formatter'

function PhoneNumber({ 
  value, 
  onChange, 
  country, 
  className = '' 
}) {
  const [displayValue, setDisplayValue] = useState('')

  useEffect(() => {
    if (value) {
      const formatted = formatPhoneNumber(value, country.format)
      setDisplayValue(formatted)
    } else {
      setDisplayValue('')
    }
  }, [value, country])

  const handleChange = (e) => {
    const newValue = e.target.value
    const cleaned = unformatPhoneNumber(newValue)
    onChange(cleaned)
  }

  return (
    <input
      type="tel"
      value={displayValue}
      onChange={handleChange}
      placeholder={country.format.replace(/X/g, '#')}
      className={`input input-bordered rounded-l-none ${className}`}
      maxLength={country.format.length}
    />
  )
}

export default PhoneNumber
