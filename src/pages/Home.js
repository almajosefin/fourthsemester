import React from 'react';
import YouTube from 'react-youtube';

export default function Home() {
    return(
        <div className="App">
            <header>
                <h1>Velkommen</h1>
                <div className="App-row">
                    <div className="App-column">
                        <p>Alma Josefin Labrosse</p>
                        <p>Fjerde Semester 2024</p>
                        <p>Datamatiker Online</p>
                        <p>UCL Erhvervsakademi & Professionshøjskole</p>
                        <p>Webudvikling (React & JavaScript): 15 ECTS</p>
                        <p>Embedded C (Arduino & C): 15 ECTS</p>
                        <p>Gruppe 6: Maja Daniela Hansen, Justin Anthony Kapelke & Emre Altintas</p>
                        <p>Procesvejleder: Diaa Zobair Shollar</p>
                        <p>Guildvejleder: Tue Hellstern</p>
                    </div>
                    <div className="App-column">
                        <YouTube videoId="DMAHtpleZT0"/>
                        <p><a href="https://github.com/almajosefin/fourthsemester?tab=readme-ov-file">ReadMe</a></p>
                        <p><a href="https://github.com/DatamatikerTeam6/Majussmykkerklient.git">MajusSmykkerKlient</a></p>
                        <p><a href="https://github.com/DatamatikerTeam6/MajusSmykker.git">MajusSmykkerAPI</a></p>
                        <p><a href="https://github.com/almajosefin/arduino.git">Arduino</a></p>
                    </div>
                </div>
            </header>
        </div>
    )
}
