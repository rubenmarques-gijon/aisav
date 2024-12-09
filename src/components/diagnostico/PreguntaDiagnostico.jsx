import { memo } from 'react'

const PreguntaDiagnostico = memo(({ pregunta, opciones, onSeleccion }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{pregunta}</h3>
      <div className="space-y-2">
        {opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => onSeleccion(opcion.valor)}
            className="w-full text-left p-3 border rounded hover:bg-gray-50 transition"
          >
            {opcion.etiqueta}
          </button>
        ))}
      </div>
    </div>
  )
})

export default PreguntaDiagnostico
