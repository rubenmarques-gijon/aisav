export const analizarRespuestas = (respuestas) => {
  const patrones = {
    sin_conexion_total: (resp) => 
      resp.conexion === 'ninguna' && resp.dispositivos === 'todos',
    problema_dispositivo: (resp) =>
      resp.dispositivos === 'uno' && resp.reciente === 'no',
    interferencia_señal: (resp) =>
      resp.calidad === 'intermitente' && resp.ubicacion === 'lejos'
  }

  return Object.entries(patrones).reduce((resultado, [tipo, validador]) => {
    if (validador(respuestas)) {
      resultado.push(tipo)
    }
    return resultado
  }, [])
}

export const generarRecomendaciones = (problemas) => {
  const recomendaciones = {
    sin_conexion_total: [
      'Verificar conexión del router',
      'Reiniciar equipo',
      'Comprobar cables'
    ],
    problema_dispositivo: [
      'Reiniciar dispositivo',
      'Olvidar red y reconectar',
      'Actualizar drivers'
    ],
    interferencia_señal: [
      'Cambiar canal WiFi',
      'Verificar obstáculos',
      'Considerar repetidor'
    ]
  }

  return problemas.flatMap(problema => recomendaciones[problema] || [])
}
