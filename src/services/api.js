class ApiService {
  async obtenerHistorialCasos(clienteId) {
    // Simulación de llamada API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, tipo: 'sin_conexion', estado: 'resuelto' },
          { id: 2, tipo: 'velocidad_lenta', estado: 'en_progreso' }
        ])
      }, 500)
    })
  }

  async guardarCaso(caso) {
    // Simulación de llamada API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...caso, id: Date.now() })
      }, 500)
    })
  }
}

export default new ApiService()
