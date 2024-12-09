function Boton({ children, variante = 'primario', onClick, disabled = false }) {
  const estilos = {
    primario: 'bg-blue-600 hover:bg-blue-700 text-white',
    secundario: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    peligro: 'bg-red-600 hover:bg-red-700 text-white'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-md transition
        ${estilos[variante]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  )
}

export default Boton
