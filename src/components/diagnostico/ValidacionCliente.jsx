import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  IdentificationCard, 
  MagnifyingGlass, 
  Warning,
  ArrowRight,
  Link
} from '@phosphor-icons/react'
import Button from '../common/Button'
import Card from '../common/Card'

const SISTEMAS_CRM = {
  GOSSAN: 'gossan',
  IRIS: 'iris',
  NO_ENCONTRADO: 'no_encontrado'
}

function ValidacionCliente({ onValidacionCompleta }) {
  const [paso, setPaso] = useState(1)
  const [datosCliente, setDatosCliente] = useState({
    numeroCliente: '',
    sistema: '',
    identificacion: '',
    nombre: '',
    validado: false
  })
  const [error, setError] = useState('')

  const validarNumeroCliente = async () => {
    if (!datosCliente.numeroCliente) {
      setError('El número de cliente es obligatorio')
      return
    }
    // Simulación de búsqueda en CRM
    if (datosCliente.numeroCliente.startsWith('G')) {
      setDatosCliente(prev => ({
        ...prev,
        sistema: SISTEMAS_CRM.GOSSAN
      }))
    } else if (datosCliente.numeroCliente.startsWith('I')) {
      setDatosCliente(prev => ({
        ...prev,
        sistema: SISTEMAS_CRM.IRIS
      }))
    } else {
      setDatosCliente(prev => ({
        ...prev,
        sistema: SISTEMAS_CRM.NO_ENCONTRADO
      }))
    }
    setPaso(2)
  }

  const validarIdentificacion = () => {
    if (!datosCliente.identificacion) {
      setError('La identificación es obligatoria')
      return
    }
    // Aquí iría la validación real con el sistema
    setDatosCliente(prev => ({
      ...prev,
      validado: true,
      nombre: 'Cliente Ejemplo' // Esto vendría del sistema real
    }))
    setPaso(3)
  }

  const confirmarDatos = () => {
    onValidacionCompleta(datosCliente)
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary/10 rounded-full">
          <IdentificationCard size={32} className="text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Validación de Cliente</h2>
          <p className="text-sm opacity-70">Paso {paso} de 3</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-base-200 rounded-full mb-8">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${(paso / 3) * 100}%` }}
        />
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

      {paso === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Número de Cliente</span>
            </label>
            <input
              type="text"
              placeholder="Ej: G123456 o I789012"
              className="input input-bordered"
              value={datosCliente.numeroCliente}
              onChange={(e) => {
                setError('')
                setDatosCliente(prev => ({
                  ...prev,
                  numeroCliente: e.target.value
                }))
              }}
            />
          </div>
          <Button 
            className="w-full"
            onClick={validarNumeroCliente}
          >
            Buscar Cliente
            <MagnifyingGlass size={20} />
          </Button>
        </motion.div>
      )}

      {paso === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {datosCliente.sistema === SISTEMAS_CRM.NO_ENCONTRADO ? (
            <div className="alert alert-warning">
              <Warning size={24} />
              <div>
                <h3 className="font-bold">Cliente no encontrado</h3>
                <div className="text-sm">
                  Puede buscar al cliente en:
                  <a 
                    href="http://codify.avatel.local" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-link"
                  >
                    Codify <Link size={16} />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="alert alert-success">
                <span>Cliente encontrado en {datosCliente.sistema.toUpperCase()}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Identificación del Cliente</span>
                </label>
                <input
                  type="text"
                  placeholder="DNI/NIE/CIF"
                  className="input input-bordered"
                  value={datosCliente.identificacion}
                  onChange={(e) => {
                    setError('')
                    setDatosCliente(prev => ({
                      ...prev,
                      identificacion: e.target.value
                    }))
                  }}
                />
              </div>
              <Button 
                className="w-full"
                onClick={validarIdentificacion}
              >
                Validar Identificación
                <ArrowRight size={20} />
              </Button>
            </>
          )}
        </motion.div>
      )}

      {paso === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Datos del Cliente</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="opacity-70">Número de Cliente:</dt>
                <dd className="font-semibold">{datosCliente.numeroCliente}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="opacity-70">Sistema:</dt>
                <dd className="font-semibold">{datosCliente.sistema.toUpperCase()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="opacity-70">Identificación:</dt>
                <dd className="font-semibold">{datosCliente.identificacion}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="opacity-70">Nombre:</dt>
                <dd className="font-semibold">{datosCliente.nombre}</dd>
              </div>
            </dl>
          </div>
          <Button 
            className="w-full"
            onClick={confirmarDatos}
          >
            Confirmar y Continuar
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      )}
    </Card>
  )
}

export default ValidacionCliente
