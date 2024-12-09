import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const Card = ({ 
  children, 
  title, 
  className,
  action 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={twMerge("card bg-base-100 shadow-xl", className)}
    >
      <div className="card-body">
        {title && (
          <div className="flex justify-between items-center">
            <h2 className="card-title">{title}</h2>
            {action && <div>{action}</div>}
          </div>
        )}
        {children}
      </div>
    </motion.div>
  )
}

export default Card
