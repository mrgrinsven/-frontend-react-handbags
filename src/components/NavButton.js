import React from "react";

function NavButton({buttonName, disabled}) {
    return (
        <button
            type="button"
            onClick={(e) => {
                console.log(e.target.textContent);
            }}
            disabled={disabled}
        >
            {buttonName}
        </button>
    );
}

export default NavButton;

