import React from "react";

export default function Navbar() {
    return(
        <div className="Navbar">
            <header>
                <h1><a href="#/">Portfolio</a></h1>
                <ul>
                    <li><a href="#/info">Overblik</a></li>
                    <li><a href="#/javascript">JavaScript</a></li>
                    <li><a href="#/embeddedc">Embedded C</a></li>
                    <li><a href="#/log">Logbog</a></li>   
                </ul>
                <p>Alma Josefin Labrosse, Fjerde Semester 2024, Datamatiker Online, UCL</p>      
            </header>
        </div>
    )
}