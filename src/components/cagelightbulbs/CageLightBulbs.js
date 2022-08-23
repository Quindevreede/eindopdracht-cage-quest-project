import React, { useEffect, useState } from "react";
import "./cageLightBulbs.css";
import Button from "../button/Button";

function CageLightBulbs() {
    const [on, setOn] = useState(false);
    const lightSwitch = () => setOn(on => !on);
    const bulb = <div className={on ? "bulb-on" : "bulb-off"} />;

    useEffect(() => {
        {on ?
        console.log("CAGE ON!!") : console.log("CAGE OFF!!")}
    }, [on]);

    return (
        <>
            <div className="bulbs">{bulb}
            <Button
                buttonStyle="btn--default"
                buttonSize="btn--small"
                type="button"
                onClick={lightSwitch}
            >
                ON / OFF
            </Button>
            </div>

        </>
    );
}

export default CageLightBulbs;
