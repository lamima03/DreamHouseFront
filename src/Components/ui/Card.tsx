import React from 'react'


interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description?: React.ReactNode;
    badge?: number;
    isExternal?: boolean;
    onClick?: () => void
  }

export function Card({ icon, title, description, badge, isExternal, onClick }: CardProps) {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg hover:z-50 transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {isExternal ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-medium">{title}</h3>
          </div>
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      ) : (
        <div className="space-y-2">
          {icon}
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{title}</h3>
            {badge && (
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}
