import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCustomerHistory = create(
  persist(
    (set, get) => ({
      diagnostics: {},
      
      addDiagnostic: (phoneNumber, diagnostic) => set(state => ({
        diagnostics: {
          ...state.diagnostics,
          [phoneNumber]: [
            ...(state.diagnostics[phoneNumber] || []),
            {
              ...diagnostic,
              id: Date.now(),
              timestamp: new Date().toISOString()
            }
          ]
        }
      })),

      getDiagnostics: (phoneNumber) => {
        const state = get()
        return state.diagnostics[phoneNumber] || []
      },

      hasHistory: (phoneNumber) => {
        const state = get()
        return !!state.diagnostics[phoneNumber]?.length
      }
    }),
    {
      name: 'customer-history'
    }
  )
)

export default useCustomerHistory
