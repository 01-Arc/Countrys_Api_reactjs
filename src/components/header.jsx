import React, { useEffect, useState } from "react";
import { BsMoon } from "react-icons/bs";
const Header = ({ onchangemode, mode }) => {

    return (
        <header>
            <h2>Where in the world?</h2>

            <button onClick={onchangemode} id="mode"> <BsMoon /> {(mode == "dark") ? "Light" : "Dark"} mode</button>

        </header >
    );
};
export default Header;