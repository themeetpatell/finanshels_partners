import { cn } from '../../lib/utils'

export function Input({ className, error, ...props }) {
  return (
    <input
      className={cn(
        'flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-base',
        'transition-colors',
        'placeholder:text-gray-400',
        'focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20',
        'disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
        className
      )}
      {...props}
    />
  )
}

export function Textarea({ className, error, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base',
        'transition-colors',
        'placeholder:text-gray-400',
        'focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20',
        'disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
        className
      )}
      {...props}
    />
  )
}

export function Label({ className, children, ...props }) {
  return (
    <label
      className={cn(
        'text-sm font-medium text-gray-900 mb-2 block',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}

