import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Plus, Warning } from '@phosphor-icons/react'

function InternationalInput({ onSelect, onCancel }) {
  const [prefix, setPrefix] = useState('')
  const [error, setError] = useState('')

  const validatePrefix = (value) => {
    // Eliminar cualquier carácter que no sea número
    const cleaned = value.replace(/[^\d]/g, '')
    
    // Validar longitud (los prefijos internacionales tienen entre 1 y 4 dígitos)
    if (cleaned.length > 4) {
      setError('El prefijo no puede tener más de 4 dígitos')
      return false
    }

    // Validar que comience con 1-9
    if (cleaned.length > 0 && !/^[1-9]/.test(cleaned)) {
      setError('El prefijo debe comenzar con un número del 1 al 9')
      return false
    }

    setError('')
    return true
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (validatePrefix(value)) {
      setPrefix(value)
    }
  }

  const handleSubmit = () => {
    if (!prefix) {
      setError('Introduce un prefijo válido')
      return
    }
    onSelect(`+${prefix}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 border-t"
    >
      <div className="flex items-center gap-2 mb-4">
        <Globe size={20} className="text-primary" />
        <h3 className="font-semibold">Prefijo Internacional</h3>
      </div>

      <div className="space-y-4">
        <div className="form-control">
          <div className="flex gap-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">+</span>
              <input
                type="text"
                className="input input-bordered pl-7 w-24"
                placeholder="XX"
                value={prefix}
                onChange={handleChange}
                maxLength={4}
              />
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={handleSubmit}
              disabled={!prefix || !!error}
            >
              <Plus size={16} />
              Añadir
            </button>
          </div>

          {error && (
            <label className="label">
              <span className="label-text-alt text-error flex items-center gap-1">
                <Warning size={14} />
                {error}
              </span>
            </label>
          )}
        </div>

        <div className="text-sm opacity-70">
          <p>Ejemplos de prefijos comunes:</p>
          <ul className="list-disc list-inside mt-1">
            <li>Estados Unidos: +1</li>
            <li>Reino Unido: +44</li>
            <li>Australia: +61</li>
          </ul>
        </div>

        <button
          className="btn btn-ghost btn-sm w-full"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </motion.div>
  )
}

export default InternationalInput
