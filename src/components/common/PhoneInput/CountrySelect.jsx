import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown, Globe, MagnifyingGlass, Info, Star } from '@phosphor-icons/react'
import { getFavoriteCountries, getNonFavoriteCountries } from '../../../utils/phoneValidation/countryData'
import InternationalInput from './InternationalInput'

function CountrySelect({ 
  value, 
  onChange, 
  countries, 
  allowInternational 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [showInternational, setShowInternational] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showInfo, setShowInfo] = useState(null)

  const handleSelect = (countryCode) => {
    if (countryCode === 'INTL') {
      setShowInternational(true)
      return
    }
    onChange(countryCode)
    setIsOpen(false)
    setSearchTerm('')
  }

  const renderCountryButton = (country) => (
    <div
      key={country.code}
      className="relative"
      onMouseEnter={() => setShowInfo(country.code)}
      onMouseLeave={() => setShowInfo(null)}
    >
      <button
        onClick={() => handleSelect(country.code)}
        className="w-full flex items-center gap-2 p-2 hover:bg-base-200 rounded"
      >
        <span className="text-xl">{country.flag}</span>
        <span className="w-16 text-left font-mono">{country.prefix}</span>
        <span>{country.name}</span>
        {country.favorite && (
          <Star size={16} weight="fill" className="ml-auto text-warning" />
        )}
        <Info size={16} className="text-base-content/50" />
      </button>
      
      {showInfo === country.code && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute right-full top-0 mr-2 w-48 p-2 bg-base-200 rounded shadow-lg text-sm"
        >
          {country.info}
        </motion.div>
      )}
    </div>
  )

  const favoriteCountries = getFavoriteCountries()
  const nonFavoriteCountries = getNonFavoriteCountries()
  const filteredCountries = searchTerm
    ? [...favoriteCountries, ...nonFavoriteCountries].filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.prefix.includes(searchTerm)
      )
    : null

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-ghost border-r-0 rounded-r-none flex items-center gap-2"
      >
        {value.startsWith('+') 
          ? value 
          : countries[value] 
            ? <span className="flex items-center gap-1">
                {countries[value].flag}
                {countries[value].prefix}
              </span>
            : '+'
        }
        <CaretDown size={16} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-1 w-80 bg-base-100 shadow-lg rounded-lg z-50"
          >
            {!showInternational ? (
              <div className="p-2">
                <div className="relative mb-2">
                  <input
                    type="text"
                    placeholder="Buscar país..."
                    className="input input-sm input-bordered w-full pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <MagnifyingGlass 
                    size={16} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-base-content/50" 
                  />
                </div>

                <div className="max-h-72 overflow-y-auto">
                  {allowInternational && (
                    <button
                      onClick={() => handleSelect('INTL')}
                      className="w-full flex items-center gap-2 p-2 hover:bg-base-200 rounded"
                    >
                      <Globe size={20} className="text-primary" />
                      <span>Prefijo Internacional</span>
                    </button>
                  )}

                  {!searchTerm && (
                    <>
                      <div className="divider divider-sm my-1">Países más usados</div>
                      {favoriteCountries.map(renderCountryButton)}
                      
                      <div className="divider divider-sm my-1">Todos los países</div>
                      {nonFavoriteCountries.map(renderCountryButton)}
                    </>
                  )}

                  {searchTerm && (
                    <>
                      {filteredCountries.length > 0 
                        ? filteredCountries.map(renderCountryButton)
                        : <div className="text-center py-2 text-base-content/50">
                            No se encontraron resultados
                          </div>
                      }
                    </>
                  )}
                </div>
              </div>
            ) : (
              <InternationalInput
                onSelect={handleInternationalSelect}
                onCancel={() => {
                  setShowInternational(false)
                  setSearchTerm('')
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CountrySelect
