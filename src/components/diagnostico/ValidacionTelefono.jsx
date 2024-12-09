import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Warning } from '@phosphor-icons/react'
import Button from '../common/Button'
import Card from '../common/Card'
import useCustomerHistory from '../../hooks/useCustomerHistory'

function ValidacionTelefono({ onValidacionCompleta }) {
  const [telefono, setTelefono] = useState('')
  const [error, setError] = useState('')
  const [mostrarHistorial, setMostrarHistorial] = useState(false)
  const { hasHistory, getDiagnostics } = useCustomerHistory()

  const handleSubmit = () => {
    if (!telefono.match(/^[69]\d{8}$/)) {
      setError('Por favor, introduce un número de teléfono válido (9 dígitos)')
      return
    }

    const tieneHistorial = hasHistory(telefono)
    if (tieneHistorial) {
      setMostrarHistorial(true)
    } else {
      onValidacionCompleta({ telefono, historial: [] })
    }
  }

  const formatearFecha = (timestamp) => {
    return new Date(timestamp).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary/10 rounded-full">
          <Phone size={32} className="text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Identificación del Cliente</h2>
          <p className="text-sm opacity-70">Introduce el número de teléfono</p>
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="alert alert-error mb-4"
        >
          <Warning size={24} />
          <span>{error}</span>
        </motion.div>
      )}

      {!mostrarHistorial ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Número de teléfono</span>
            </label>
            <input
              type="tel"
              placeholder="Ej: 666777888"
              className="input input-bordered"
              value={telefono}
              onChange={(e) => {
                setError('')
                setTelefono(e.target.value)
              }}
              maxLength={9}
            />
          </div>
          <Button 
            className="w-full"
            onClick={handleSubmit}
          >
            Continuar
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="bg-info/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Phone size={20} className="text-info" />
              <h3 className="font-semibold">Historial de Diagnósticos</h3>
            </div>
            <p className="text-sm">Cliente con diagnósticos previos</p>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {getDiagnostics(telefono).map((diagnostic, index) => (
              <div 
                key={diagnostic.id}
                className="bg-base-200 p-3 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold">
                    {formatearFecha(diagnostic.timestamp)}
                  </span>
                  <span className="badge badge-primary">
                    {diagnostic.tipo}
                  </span>
                </div>
                <p className="text-sm">{diagnostic.descripcion}</p>
                {diagnostic.solucion && (
                  <p className="text-sm mt-2 text-success">
                    Solución: {diagnostic.solucion}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button 
              variant="ghost"
              className="flex-1"
              onClick={() => setMostrarHistorial(false)}
            >
              Volver
            </Button>
            <Button 
              className="flex-1"
              onClick={() => onValidacionCompleta({
                telefono,
                historial: getDiagnostics(telefono)
              })}
            >
              Continuar
            </Button>
          </div>
        </motion.div>
      )}
    </Card>
  )
}

export default ValidacionTelefono
