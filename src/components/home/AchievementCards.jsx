import { motion } from 'framer-motion'
import { Trophy, Star } from '@phosphor-icons/react'

export default function AchievementCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass dark:glass-dark rounded-xl p-6 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center neon-border">
            <Trophy size={32} weight="duotone" className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Próximo Logro</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Experto en Diagnóstico - 75% completado
            </p>
          </div>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full neon-border" style={{ width: '75%' }}></div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass dark:glass-dark rounded-xl p-6 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center neon-border">
            <Star size={32} weight="duotone" className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">Ranking</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Top 10% de técnicos esta semana
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">#42</span>
          <span className="text-sm text-gray-500">de 512 técnicos</span>
        </div>
      </motion.div>
    </div>
  )
}
