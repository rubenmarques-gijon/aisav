import { motion } from 'framer-motion'
import { Brain } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { RUTAS } from '../../config/constants'
import Button from '../common/Button'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Asistente Virtual WiFi
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Resuelve problemas de red como un experto con ayuda de IA
          </p>
          <Link to={RUTAS.DIAGNOSTICO}>
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg
                         bg-gradient-to-r from-purple-600 to-blue-600 
                         hover:from-purple-700 hover:to-blue-700
                         text-white shadow-lg shadow-purple-500/30
                         transition-all duration-200 ease-out
                         hover:shadow-xl hover:shadow-purple-500/40
                         hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain size={24} weight="duotone" />
              <span>Iniciar Diagnóstico</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
