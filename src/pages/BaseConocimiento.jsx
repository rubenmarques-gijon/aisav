import Tarjeta from '../components/common/Tarjeta'

function BaseConocimiento() {
  return (
    <Tarjeta titulo="Base de Conocimiento">
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">Problemas Comunes</h3>
          <ul className="list-disc pl-5">
            <li>Sin conexión WiFi</li>
            <li>Velocidad lenta</li>
            <li>Desconexiones frecuentes</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Guías de Solución</h3>
          <ul className="list-disc pl-5">
            <li>Reinicio de router</li>
            <li>Optimización de canales</li>
            <li>Actualización de firmware</li>
          </ul>
        </div>
      </div>
    </Tarjeta>
  )
}

export default BaseConocimiento
