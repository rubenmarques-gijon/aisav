import { motion } from 'framer-motion'
import { Trophy, GameController } from '@phosphor-icons/react'

export default function LevelCard({ nivel, xp }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass dark:glass-dark rounded-2xl p-8 mb-12 max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center neon-border">
            <GameController size={48} weight="duotone" className="text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2 neon-border">
            <Trophy size={24} weight="fill" className="text-yellow-900" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Nivel {nivel}</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full neon-border" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {xp} XP para el siguiente nivel
          </p>
        </div>
      </div>
    </motion.div>
  )
}
