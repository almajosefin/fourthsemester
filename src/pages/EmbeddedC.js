import React from 'react';
import './assets/sketch7arduinvid.mp4';

export default function EmbeddedC() {
    return(
        <div className="App">
            <header>
                <h1>Embedded C</h1>
                <video src="https://github.com/almajosefin/fourthsemester/blob/main/assets/sketch7arduinvid.mp4"type="video/mp4" width="320" height="240" controls autoplay muted playsInline></video>
            </header>
        </div>
    )
}