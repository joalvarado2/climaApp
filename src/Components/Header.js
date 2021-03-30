import React from 'react'

const Header = ({titulo}) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a href="#!" className="brand-logo">{titulo}</a>
                </div>
            </nav>
        </div>
    )
}

export default Header
