export const arbolDiagnostico = [
  {
    id: 'inicial',
    pregunta: '¿Cuál es el principal problema que experimenta el cliente?',
    opciones: [
      {
        etiqueta: 'Sin conexión WiFi',
        valor: 'sin_conexion',
        siguientePaso: 'alcance_dispositivos'
      },
      {
        etiqueta: 'Conexión lenta o intermitente',
        valor: 'conexion_lenta',
        siguientePaso: 'alcance_dispositivos'
      },
      {
        etiqueta: 'No puede conectar un dispositivo específico',
        valor: 'dispositivo_especifico',
        siguientePaso: 'detalles_dispositivo'
      }
    ]
  },
  {
    id: 'alcance_dispositivos',
    pregunta: '¿Cuántos dispositivos están afectados?',
    opciones: [
      {
        etiqueta: 'Todos los dispositivos',
        valor: 'todos_dispositivos',
        siguientePaso: 'revision_router'
      },
      {
        etiqueta: 'Varios dispositivos pero no todos',
        valor: 'varios_dispositivos',
        siguientePaso: 'revision_ubicacion'
      },
      {
        etiqueta: 'Solo un dispositivo',
        valor: 'un_dispositivo',
        siguientePaso: 'detalles_dispositivo'
      }
    ]
  }
]

export const plantillasSoluciones = {
  reinicio_router: {
    titulo: 'Procedimiento de Reinicio del Router',
    pasos: [
      'Apagar el router desconectándolo',
      'Esperar 30 segundos',
      'Volver a conectar el router',
      'Esperar a que todas las luces se estabilicen (2-3 minutos)',
      'Probar la conexión'
    ]
  },
  optimizacion_canal: {
    titulo: 'Optimización de Canal WiFi',
    pasos: [
      'Acceder al panel de administración del router',
      'Ir a configuración inalámbrica',
      'Establecer canal 2.4GHz en 1, 6 u 11',
      'Establecer canal 5GHz en automático',
      'Guardar configuración y probar'
    ]
  }
}
