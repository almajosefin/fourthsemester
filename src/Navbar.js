import React from "react";

export default function Navbar() {
    return(
        <div className="Navbar">
            <header>
                <h1><a href="./">Portfolio</a></h1>
                <ul>
                    <li><a href="./Info">Overblik</a></li>
                    <li><a href="./JavaScript">JavaScript</a></li>
                    <li><a href="./EmbeddedC">Embedded C</a></li>
                    <li><a href="./Log">Logbog</a></li>   
                </ul>
                <p>Alma Josefin Labrosse, Gruppe 6, Datamatiker Online</p>      
            </header>
        </div>
    )
}