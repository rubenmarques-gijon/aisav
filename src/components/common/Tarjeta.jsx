function Tarjeta({ titulo, children, accion }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{titulo}</h2>
        {accion && (
          <div>{accion}</div>
        )}
      </div>
      {children}
    </div>
  )
}

export default Tarjeta
