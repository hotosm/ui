import React from 'react';
import { buttonStyle, type IntentType } from './Button';

interface ButtonProps {
    children: React.ReactNode;
    intent?: IntentType;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, intent, disabled, onClick}) => {
    return (
        <button 
            className={
                buttonStyle({
                    intent,
                    disabled,
                })
            } 
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
