import { useMemo } from 'react'
import { analizarRespuestas, generarRecomendaciones } from '../../utils/diagnostico'

function ResumenDiagnostico({ respuestas }) {
  const problemas = useMemo(() => analizarRespuestas(respuestas), [respuestas])
  const recomendaciones = useMemo(() => generarRecomendaciones(problemas), [problemas])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Problemas Detectados:</h3>
        <ul className="list-disc pl-5">
          {problemas.map((problema, index) => (
            <li key={index}>{problema}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Recomendaciones:</h3>
        <ul className="list-decimal pl-5">
          {recomendaciones.map((recomendacion, index) => (
            <li key={index}>{recomendacion}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumenDiagnostico
