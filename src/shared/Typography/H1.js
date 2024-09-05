import React from 'react'

export default function H1({...props}) {
  return (
    <h1 className={`text-3xl font-bold tracking-tight text-gray-900 dark:text-white ${props.className}`}>
        {props.children}
    </h1>
  )
}
