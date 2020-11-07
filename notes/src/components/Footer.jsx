import React from "react";

let year = new Date().getFullYear();

function Footer(){
    return <p>Copyright {year}</p>
}

export default Footer;