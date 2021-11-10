import React from 'react';
import './OfflineStream.css';

class OfflineStream extends React.Component {
    render() {
        const notRealName = this.props.strOff._links.self;
        const realName = notRealName.substring(notRealName.lastIndexOf('/') + 1)
        return (
            <div className='stream-offline'>
                <p className='offline-name'>{realName}</p>
                <p className='no-stream'>Stream is currently offline</p>
            </div>
        )
    }
}
export default OfflineStream;