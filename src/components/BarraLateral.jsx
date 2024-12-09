import { Link, useLocation } from 'react-router-dom'
import { 
  House,
  WifiHigh, 
  Books, 
  ChartLineUp 
} from '@phosphor-icons/react'
import { RUTAS } from '../config/constants'

const enlaces = [
  { ruta: RUTAS.INICIO, icono: House, texto: 'Inicio' },
  { ruta: RUTAS.DIAGNOSTICO, icono: WifiHigh, texto: 'Diagnóstico' },
  { ruta: RUTAS.BASE_CONOCIMIENTO, icono: Books, texto: 'Base de Conocimiento' },
  { ruta: RUTAS.ANALISIS, icono: ChartLineUp, texto: 'Análisis' }
]

function BarraLateral() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-base-200 min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary mb-8">
          Asistente WiFi
        </h1>
        <nav>
          <ul className="menu bg-base-200 rounded-box">
            {enlaces.map(({ ruta, icono: Icono, texto }) => (
              <li key={ruta}>
                <Link
                  to={ruta}
                  className={`
                    flex items-center gap-3 p-3 
                    ${location.pathname === ruta ? 'active' : ''}
                  `}
                >
                  <Icono size={24} />
                  {texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default BarraLateral
