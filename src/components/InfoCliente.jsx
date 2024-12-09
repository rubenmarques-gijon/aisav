function InfoCliente({ casoActivo }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Información del Cliente</h2>
      {casoActivo ? (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">ID del Caso</h3>
            <p>{casoActivo.id}</p>
          </div>
          <div>
            <h3 className="font-semibold">Nombre del Cliente</h3>
            <p>{casoActivo.nombreCliente}</p>
          </div>
          <div>
            <h3 className="font-semibold">Nivel de Servicio</h3>
            <p>{casoActivo.nivelServicio}</p>
          </div>
        </div>
      ) : (
        <p>No hay caso activo seleccionado</p>
      )}
    </div>
  )
}

export default InfoCliente
