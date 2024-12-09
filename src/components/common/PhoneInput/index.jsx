import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Check, Warning } from '@phosphor-icons/react'
import { COUNTRY_CODES, DEFAULT_COUNTRY } from '../../../utils/phoneValidation/countryData'
import { validatePhoneNumber } from '../../../utils/phoneValidation/validator'
import CountrySelect from './CountrySelect'
import PhoneNumber from './PhoneNumber'

function PhoneInput({ 
  value, 
  onChange, 
  onValidation,
  defaultCountry = DEFAULT_COUNTRY,
  allowInternational = false,
  className = '' 
}) {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry)
  const [isValid, setIsValid] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (value) {
      const result = validatePhoneNumber(value, selectedCountry)
      setIsValid(result.isValid)
      setError(result.error)
      onValidation?.(result)
    } else {
      setIsValid(false)
      setError(null)
      onValidation?.({ isValid: false })
    }
  }, [value, selectedCountry])

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode)
  }

  return (
    <div className={`form-control ${className}`}>
      <label className="label">
        <span className="label-text">Número de teléfono</span>
      </label>
      
      <div className="relative">
        <div className="flex">
          <CountrySelect
            value={selectedCountry}
            onChange={handleCountryChange}
            countries={COUNTRY_CODES}
            allowInternational={allowInternational}
          />
          
          <PhoneNumber
            value={value}
            onChange={onChange}
            country={COUNTRY_CODES[selectedCountry]}
            className="flex-1"
          />
        </div>

        {/* Validation Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {value && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`${isValid ? 'text-success' : 'text-error'}`}
            >
              {isValid ? <Check size={20} /> : <Warning size={20} />}
            </motion.div>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <motion.label
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="label text-error"
        >
          <span className="label-text-alt">
            {getErrorMessage(error)}
          </span>
        </motion.label>
      )}
    </div>
  )
}

function getErrorMessage(error) {
  const messages = {
    invalid_format: 'Formato de número no válido',
    invalid_length: 'Longitud incorrecta',
    invalid_prefix: 'Prefijo internacional no válido',
    invalid_country: 'País no soportado'
  }
  return messages[error] || 'Error de validación'
}

export default PhoneInput
