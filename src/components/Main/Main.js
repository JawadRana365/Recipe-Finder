import React from 'react'
import Container from '../Container/Container'

export default function Main({...props}) {
    const {search} = props
    return (
        <Container search={search}/>
    )
}
