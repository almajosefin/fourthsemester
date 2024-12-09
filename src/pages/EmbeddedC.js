import React from 'react';
import './videos/sketch7arduinvid.mp4';

export default function EmbeddedC() {
    return(
        <div className="App">
            <header>
                <h1>Embedded C</h1>
                <video src="/sketch7arduinvid.mp4" type="video/mp4" width="320" height="240" controls loop="" muted="" autoplay="">
                </video>
            </header>
        </div>
    )
}