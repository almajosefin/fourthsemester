import React from 'react';
import ReactVideo from 'react.video';

export default function EmbeddedC() {

    constructor (props) {
        super(props);
        this.onClickPlay = this.onClickPlay.bind(this);
        this.state = {
          muted: false,
          source: [{
              src: 'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4',
              type: 'video/mp4'
            }]
        };
    }

    // play() method is called via refs.
    onClickPlay () {
        this.refs.VideoComp.play();
    }
    
    render () {
        // a basic style object
        const VideoStyle = {
            backgroundColor: 'green'
        };
    }

    return(
        <div className="App">
            <header>
                <h1>Embedded C</h1>
                <ReactVideo
                    ref={'VideoComp'}
                    cls={'custom-video'} 
                    height={500} width={'100%'}
                    style={VideoStyle}
                    muted={this.state.muted}
                    src={'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4'}
                    source={this.state.source}>
                </ReactVideo>
                <div>
                    <div onClick={this.onClickPlay}>Play</div>
                </div>
            </header>
        </div>
    )
}