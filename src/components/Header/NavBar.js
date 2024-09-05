import React from 'react'
import Input from '../../shared/Input/Input'
import SearchIconSvg from '../../shared/Svg/SearchIconSvg'
import Logo from '../../shared/Logo/Logo'

export default function NavBar({...props}) {
    const {search,setSearch} = props
    return (
        <nav className="fixed w-full backdrop-blur-3xl top-0 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo/>
                <div className="flex md:order-2">
                    <div className="relative hidden md:block">
                        <SearchIconSvg/>
                        <Input search={search} setSearch={setSearch}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
