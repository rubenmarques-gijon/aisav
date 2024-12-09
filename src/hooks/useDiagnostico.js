import { create } from 'zustand'

const useDiagnostico = create((set) => ({
  pasoActual: 0,
  respuestas: {},
  historialPasos: [],
  
  avanzarPaso: (respuesta) => set((state) => ({
    pasoActual: state.pasoActual + 1,
    respuestas: { ...state.respuestas, [state.pasoActual]: respuesta },
    historialPasos: [...state.historialPasos, state.pasoActual]
  })),
  
  retrocederPaso: () => set((state) => ({
    pasoActual: state.historialPasos[state.historialPasos.length - 1],
    historialPasos: state.historialPasos.slice(0, -1)
  })),
  
  reiniciarDiagnostico: () => set({
    pasoActual: 0,
    respuestas: {},
    historialPasos: []
  })
}))

export default useDiagnostico
