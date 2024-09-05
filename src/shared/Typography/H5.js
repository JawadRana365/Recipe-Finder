import React from 'react'

export default function H5({...props}) {
  return (
    <h5 className={`text-lg font-bold tracking-tight text-gray-900 dark:text-white ${props.className}`}>
        {props.children}
    </h5>
  )
}
