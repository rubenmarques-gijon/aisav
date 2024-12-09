import { useState } from 'react'
import { arbolDiagnostico } from '../data/arbolDiagnostico'

function FlujoDiagnostico({ casoActivo }) {
  const [pasoActual, setPasoActual] = useState(0)
  const [respuestas, setRespuestas] = useState({})

  const manejarRespuesta = (respuesta) => {
    setRespuestas({ ...respuestas, [pasoActual]: respuesta })
    setPasoActual(pasoActual + 1)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Flujo de Diagnóstico</h2>
      <div className="space-y-6">
        {arbolDiagnostico[pasoActual] && (
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {arbolDiagnostico[pasoActual].pregunta}
            </h3>
            <div className="space-y-2">
              {arbolDiagnostico[pasoActual].opciones.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => manejarRespuesta(opcion.valor)}
                  className="w-full text-left p-3 border rounded hover:bg-gray-50"
                >
                  {opcion.etiqueta}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FlujoDiagnostico
