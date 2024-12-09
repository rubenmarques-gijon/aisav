import { useState } from 'react'
import ValidacionTelefono from '../components/diagnostico/ValidacionTelefono'
import AsistenteVirtual from '../components/diagnostico/AsistenteVirtual'

function Diagnostico() {
  const [clienteValidado, setClienteValidado] = useState(null)

  const handleValidacionCompleta = (datosCliente) => {
    setClienteValidado(datosCliente)
  }

  return (
    <>
      {!clienteValidado ? (
        <ValidacionTelefono onValidacionCompleta={handleValidacionCompleta} />
      ) : (
        <AsistenteVirtual clienteValidado={clienteValidado} />
      )}
    </>
  )
}

export default Diagnostico
