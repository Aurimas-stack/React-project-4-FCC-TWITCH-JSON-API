import React from 'react';
import OfflineStream from '../OfflineStream/OfflineStream';
import './OfflineStreamList.css';

class OfflineStreamList extends React.Component {
    render() {
        return (
            <div>
                 {
                     this.props.streamsOffline.map(strOff => {
                         return <OfflineStream key={strOff._links.self} strOff={strOff}/>
                     })
                 }
            </div>
        )
    }
}
export default OfflineStreamList;