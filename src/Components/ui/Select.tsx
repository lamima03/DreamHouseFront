import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string
}

export function Select({ placeholder, className = '', ...props }: SelectProps) {
  return (
    <select 
      className={`w-full h-10 px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6D4C3D] ${className}`}
      {...props}
    >
      <option value="">{placeholder}</option>
    </select>
  )
}

