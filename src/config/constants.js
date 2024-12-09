export const RUTAS = {
  INICIO: '/',
  DIAGNOSTICO: '/diagnostico',
  BASE_CONOCIMIENTO: '/base-conocimiento',
  ANALISIS: '/analisis'
}

export const NIVELES_TECNICO = {
  NOVATO: { nombre: 'Novato', xp: 0, color: 'badge-primary' },
  INTERMEDIO: { nombre: 'Técnico', xp: 1000, color: 'badge-secondary' },
  EXPERTO: { nombre: 'Experto', xp: 5000, color: 'badge-accent' },
  MAESTRO: { nombre: 'Maestro', xp: 10000, color: 'badge-ghost' }
}

export const LOGROS = {
  PRIMEROS_PASOS: { 
    id: 'primeros_pasos',
    titulo: 'Primeros Pasos',
    descripcion: 'Completar tu primer diagnóstico',
    xp: 100,
    icono: '🎯'
  },
  SOLUCIONADOR: {
    id: 'solucionador',
    titulo: 'Solucionador',
    descripcion: 'Resolver 10 casos exitosamente',
    xp: 500,
    icono: '⭐'
  },
  EXPERTO_WIFI: {
    id: 'experto_wifi',
    titulo: 'Experto WiFi',
    descripcion: 'Dominar todos los tipos de diagnósticos',
    xp: 1000,
    icono: '🏆'
  }
}
