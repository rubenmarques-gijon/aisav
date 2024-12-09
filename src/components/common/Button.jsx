import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-current',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800'
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  }

  const classes = twMerge(
    clsx(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )
  )

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
