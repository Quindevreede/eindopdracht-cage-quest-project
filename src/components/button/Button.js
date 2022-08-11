import React from "react";
import "./button.css";

{/*<Button*/}
{/*    onCLick={console.log("BLABLABLA")}*/}
{/*    type="button"*/}
{/*    buttonStyle="btn--tertiary"*/}
{/*    buttonSize="btn--small"*/}
{/*    >BLOEB</Button>*/}

const buttonStyles = [
    "btn--primary--solid",
    "btn--secondary--solid",
    "btn--tertiary--solid",
    "btn--primary--outline",
    "btn--secondary--outline",
    "btn--tertiary--outline",
]

const buttonSizes = [
    "btn--small",
    "btn--medium",
    "btn--large"
]

function Button({
    children,
    type,
    onCLick,
    buttonStyle,
    buttonSize,
    disabled
}) {

    const checkButtonStyle = buttonStyles.includes(buttonStyle)
        ? buttonStyle
        : buttonStyles[0];

    const checkButtonSize = buttonSizes.includes(buttonSize)
        ? buttonSize
        : buttonSizes[0];


    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onCLick}
            type={type}
            disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
