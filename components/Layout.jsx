import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="bg-red-300 w-full h-20">
            <span>this is layout </span>
            {children}
        </div>
    )
}

export default Layout;
