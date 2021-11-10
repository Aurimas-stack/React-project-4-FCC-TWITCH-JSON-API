import React from 'react';
import './App.css';
import StreamList from '../StreamList/StreamList';
import OfflineStreamList from '../OfflineStreamList/OfflineStreamList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select_btn: null,
      streams: '',
      streamsOffline: '',
    }
    this.handleBtnStyle = this.handleBtnStyle.bind(this);
    this.handleTwitch = this.handleTwitch.bind(this);
  }
  handleBtnStyle = (id) => {
    if(this.state.select_btn === id) {
      this.setState({select_btn: null})
    } else {
      this.setState({select_btn: id})
    }
  }
  handleTwitch(event) {
    event.preventDefault();
    const channels =  [
      "ESL_SC2", "OgamingSC2", "freecodecamp", "cretetion", 
      "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"
    ];
    const url = 'https://cors-anywhere.herokuapp.com/https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/';
    const fetchTwitchApi = async() => {
      const response = await Promise.all(channels.map((channel) => fetch(url + channel).then(resp => resp.json())
      )).then(jsonResponse => {
          return jsonResponse;
      });
      const streamsLive = response.filter(resp => { return resp.stream !== null});
      const streamsOffline = response.filter(resp => { return resp.stream === null });
      this.setState({
        streams: streamsLive,
        streamsOffline: streamsOffline
      })
    }
    fetchTwitchApi();
    this.setState({select_btn: 1})
  }
  componentDidMount() {
    window.addEventListener('load', this.handleTwitch);
  }
  componentWillUnmount() { 
   window.removeEventListener('load', this.handleTwitch)  
  }

  render() {
    return (
      <div className="App">
        <div className='app-container'>
          <div className='app-name'>
            <h1>Twitch streamers</h1>
            <div className='btn-container'>
              <button className={this.state.select_btn === 1 ? 'active' : null} onClick={() => this.handleBtnStyle(1)}><i className="fas fa-circle"></i> All</button>
              <button className={this.state.select_btn === 2 ? 'active' : null} onClick={() => this.handleBtnStyle(2)}><i className="fas fa-circle"></i> Online</button>
              <button className={this.state.select_btn === 3 ? 'active' : null} onClick={() => this.handleBtnStyle(3)}><i className="fas fa-circle"></i> Offline</button>
            </div>
          </div>
          {
            this.state.streams === '' ?
            null :
            <div className='stream-cont'>
              {
                this.state.select_btn === 1 && (
                <div>
                  <StreamList streams={this.state.streams}/>
                  <OfflineStreamList streamsOffline={this.state.streamsOffline}/>
                </div>
                )
              }
              {
                this.state.select_btn === 2 && (<StreamList streams={this.state.streams}/>)
              }
              {
                this.state.select_btn === 3 && (<OfflineStreamList streamsOffline={this.state.streamsOffline}/>)
              }
              
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
