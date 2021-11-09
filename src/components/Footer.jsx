import React from "react";

const thisYear = new Date().getFullYear();

function Footer() {
    return(
        <footer>
            <p>Copyright © {thisYear}</p>
        </footer>
    );
}

export default Footer;