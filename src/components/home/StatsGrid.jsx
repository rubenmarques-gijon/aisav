import { motion } from 'framer-motion'
import { Lightning, Rocket, ChartLineUp } from '@phosphor-icons/react'

const STATS_CONFIG = [
  { 
    icon: Lightning, 
    label: 'XP Total', 
    key: 'xp',
    color: 'from-purple-500 to-pink-500' 
  },
  { 
    icon: Rocket, 
    label: 'Casos Resueltos', 
    key: 'casosResueltos',
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    icon: ChartLineUp, 
    label: 'Precisión', 
    key: 'precision',
    color: 'from-green-500 to-emerald-500' 
  }
]

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {STATS_CONFIG.map((config, index) => (
        <motion.div
          key={config.key}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="glass dark:glass-dark rounded-xl p-6 elastic-hover"
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center mb-4`}>
            <config.icon size={24} weight="duotone" className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {config.label}
          </h3>
          <p className="text-3xl font-bold gradient-text">
            {stats[config.key]}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
