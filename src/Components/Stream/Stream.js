import React from 'react';
import './Stream.css';

class Stream extends React.Component {
    render() {
        return (
            <div className='online'>
                <p className='stream-name'>{this.props.stream.channel.name}</p>
                <p className='stream-current'><span className='stream-game'>{this.props.stream.game}:</span> {this.props.stream.channel.status}</p>
                <p className='view-count'>Viewers: {this.props.stream.viewers} <a href={this.props.stream.channel.url} className='stream-link'>(link)</a></p>
            </div>
        )
    }
}
export default Stream;