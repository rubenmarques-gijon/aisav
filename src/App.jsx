import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { RUTAS } from './config/constants'
import Home from './pages/Home'
import Diagnostico from './pages/Diagnostico'
import BaseConocimiento from './pages/BaseConocimiento'
import Analisis from './pages/Analisis'

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={RUTAS.INICIO} element={<Home />} />
          <Route path={RUTAS.DIAGNOSTICO} element={<Diagnostico />} />
          <Route path={RUTAS.BASE_CONOCIMIENTO} element={<BaseConocimiento />} />
          <Route path={RUTAS.ANALISIS} element={<Analisis />} />
          <Route path="*" element={<Navigate to={RUTAS.INICIO} replace />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}
