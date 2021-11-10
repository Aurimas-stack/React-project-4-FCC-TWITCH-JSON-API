import React from 'react';
import './StreamList.css';
import Stream from '../Stream/Stream';

class StreamList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.streams.map((stream) => {                
                            return <Stream key={stream.stream._id} stream={stream.stream} />                       
                    })
                }
            </div>
        )
    }
}
export default StreamList;