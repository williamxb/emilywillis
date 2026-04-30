import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`block w-11/12 mx-auto 3xl:w-440 ${className}`}>
      {children}
    </div>
  )
}
