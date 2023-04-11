import React from 'react'
import {Button} from "semantic-ui-react"

interface IButton {
    label?: string;
    backgroundColor?: "Red" | "Blue" | "Green";
    size?: "2rem" | "3rem" | "4rem";
    onClick?: () => string;
}

function CustomButton({ label, backgroundColor = "Red", size = "2rem", onClick }: IButton) {
    console.log(backgroundColor,label,size);
    
    return (
        <button onClick={onClick} style={{ backgroundColor: `${backgroundColor}`, fontSize: `${size}` }}>{label}</button>
        // <Button label={label} color={`${backgroundColor}`} />
    )
}

export default CustomButton