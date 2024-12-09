import { FaWifi, FaBook, FaChartLine } from 'react-icons/fa'

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h1 className="text-xl font-bold mb-8">WiFi Support Assistant</h1>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaWifi />
            <span>Diagnostics</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaBook />
            <span>Knowledge Base</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaChartLine />
            <span>Analytics</span>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
