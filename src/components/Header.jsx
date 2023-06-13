import React from 'react'

const Header = ({ logoSrc, title, child }) => {
  return (
    <header className="flex justify-between items-center bg-green-500 p-4">
        <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="h-8 mr-2" />
        </div>
        <h1 className="text-white text-lg font-bold">{title}</h1>
        <div>
        {child}
        </div>
    </header>
  )
}

export default Header
