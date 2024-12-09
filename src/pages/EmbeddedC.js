import React from 'react';
import ReactVideo from 'react.video';

export default function EmbeddedC() {
    return(
        <div className="App">
            <header>
                <h1>Embedded C</h1>
                <div>
                    <video
                        src="https://ik.imagekit.io/ikmedia/example_video.mp4"
                        width='1440'
                        height='680'
                        controls
                        autoPlay
                        muted
                        playsInline
                    />
                </div>
            </header>
        </div>
    )
}