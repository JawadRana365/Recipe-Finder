import React from 'react'

export default function P({...props}) {
  return (
    <p className={`font-normal text-sx text-gray-700 dark:text-gray-400 ${props.className}`}>
        {props.children}
    </p>
  )
}
