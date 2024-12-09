import Tarjeta from '../components/common/Tarjeta'

function Analisis() {
  const estadisticas = {
    casosResueltos: 150,
    tiempoPromedio: '15 minutos',
    satisfaccionCliente: '4.5/5'
  }

  return (
    <Tarjeta titulo="Análisis de Rendimiento">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Casos Resueltos</h3>
          <p className="text-2xl">{estadisticas.casosResueltos}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Tiempo Promedio</h3>
          <p className="text-2xl">{estadisticas.tiempoPromedio}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Satisfacción</h3>
          <p className="text-2xl">{estadisticas.satisfaccionCliente}</p>
        </div>
      </div>
    </Tarjeta>
  )
}

export default Analisis
