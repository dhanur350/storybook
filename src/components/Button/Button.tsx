import React from 'react'

interface IButton {
    label?: string;
    backgroundColor?: string;
    size?: string;
    onClick?: () => string;
}

function Button({ label, backgroundColor = "red", size = "md", onClick }: IButton) {
    return (
        <button onClick={onClick} style={{ backgroundColor: `${backgroundColor}`, fontSize: `${size}` }}>{label}</button>
    )
}

export default Button