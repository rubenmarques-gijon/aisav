import { create } from 'zustand'

const useCliente = create((set) => ({
  clienteActual: null,
  historialCasos: [],
  
  setCliente: (cliente) => set({ clienteActual: cliente }),
  
  agregarCaso: (caso) => set((state) => ({
    historialCasos: [...state.historialCasos, caso]
  })),
  
  actualizarCaso: (casoId, actualizacion) => set((state) => ({
    historialCasos: state.historialCasos.map(caso => 
      caso.id === casoId ? { ...caso, ...actualizacion } : caso
    )
  }))
}))

export default useCliente
