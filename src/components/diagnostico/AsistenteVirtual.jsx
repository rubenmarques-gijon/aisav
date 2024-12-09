import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Robot, ArrowRight, Lightning, Phone, ClockCounterClockwise } from '@phosphor-icons/react'
import Button from '../common/Button'
import Card from '../common/Card'
import useCustomerHistory from '../../hooks/useCustomerHistory'

function AsistenteVirtual({ clienteValidado }) {
  const [mensajes, setMensajes] = useState([])
  const [cargando, setCargando] = useState(false)
  const { addDiagnostic } = useCustomerHistory()

  useEffect(() => {
    const mensajeInicial = clienteValidado.historial.length > 0
      ? `¡Hola! Veo que este cliente ya ha tenido ${clienteValidado.historial.length} interacciones previas. ¿En qué puedo ayudarte hoy?`
      : '¡Hola! Esta es la primera interacción con este cliente. ¿En qué puedo ayudarte?'

    setMensajes([
      {
        tipo: 'asistente',
        contenido: mensajeInicial
      }
    ])
  }, [clienteValidado])

  const opcionesIniciales = [
    {
      texto: 'No hay conexión WiFi',
      valor: 'sin_conexion'
    },
    {
      texto: 'La conexión es muy lenta',
      valor: 'conexion_lenta'
    },
    {
      texto: 'La señal se cae constantemente',
      valor: 'conexion_inestable'
    }
  ]

  const seleccionarOpcion = async (opcion) => {
    setCargando(true)
    setMensajes(prev => [...prev, {
      tipo: 'usuario',
      contenido: opcion.texto
    }])

    // Registrar el nuevo diagnóstico
    addDiagnostic(clienteValidado.telefono, {
      tipo: opcion.valor,
      descripcion: opcion.texto,
      estado: 'en_progreso'
    })

    // Simular respuesta
    setTimeout(() => {
      setMensajes(prev => [...prev, {
        tipo: 'asistente',
        contenido: 'Entiendo. Vamos a analizar este problema paso a paso. ¿El problema afecta a todos los dispositivos o solo a algunos?'
      }])
      setCargando(false)
    }, 1000)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      {/* Banner de cliente */}
      <div className="bg-base-200 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-primary" />
            <div>
              <h3 className="font-semibold">Cliente: {clienteValidado.telefono}</h3>
              <p className="text-sm opacity-70">
                {clienteValidado.historial.length} diagnósticos previos
              </p>
            </div>
          </div>
          {clienteValidado.historial.length > 0 && (
            <div className="flex items-center gap-2 text-info">
              <ClockCounterClockwise size={20} />
              <span className="text-sm">Ver historial</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {mensajes.map((mensaje, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`chat ${mensaje.tipo === 'asistente' ? 'chat-start' : 'chat-end'}`}
          >
            <div className={`chat-bubble ${
              mensaje.tipo === 'asistente' ? 'chat-bubble-primary' : 'chat-bubble-secondary'
            }`}>
              {mensaje.contenido}
            </div>
          </motion.div>
        ))}

        {cargando && (
          <div className="flex items-center gap-2 text-primary">
            <Lightning size={24} className="animate-pulse" />
            Procesando...
          </div>
        )}
      </div>

      {mensajes.length === 1 && (
        <div className="space-y-2">
          {opcionesIniciales.map((opcion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="ghost"
                className="w-full justify-between"
                onClick={() => seleccionarOpcion(opcion)}
              >
                {opcion.texto}
                <ArrowRight size={20} />
              </Button>
            </motion.div>
          ))}
        </div>
      )}
    </Card>
  )
}

export default AsistenteVirtual
