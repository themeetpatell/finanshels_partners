import { cn } from '../../lib/utils'

export function Button({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/20',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105': variant === 'default',
          'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105': variant === 'primary',
          'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white shadow-lg hover:shadow-xl': variant === 'outline',
          'text-slate-700 hover:bg-slate-100': variant === 'ghost',
        },
        {
          'h-12 px-8 text-base': size === 'default',
          'h-14 px-10 text-lg': size === 'lg',
          'h-10 px-6 text-sm': size === 'sm',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

