import BarraLateral from '../components/BarraLateral'

function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <BarraLateral />
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
