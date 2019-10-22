import React from 'react';
import StartPage from './StartPage';
import MapPage from './MapPage';
import { thisExpression } from '@babel/types';

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picker: true,
      sport: '',
      season: ''
    };
  };

  changeSession(sport, season) {
    const newSport = sport ? sport : this.state.sport;
    const newSeason = season ? season : this.state.season;
    this.setState({ ...this.state, sport: newSport, season: newSeason });
  }

  renderMap() {
    const newSwitch = !this.state.picker;
    this.setState({ ...this.state, picker: newSwitch });
  }

  render() {
    const switchText = this.state.picker ? 'Let go!' : 'Change settings'
    return(
      <div className="landing-page">
        <div className="navi">
          <button onClick={ ()=> this.renderMap()}>{switchText}</button>
        </div>
        <div className="page">
          <div className="header-landing">Header of landing page</div>
          <p>Sport: {this.state.sport}</p>
          <p>Season: {this.state.season}</p>
          { this.state.picker ? 
          <div>
            <div>
              <button onClick={ ()=> this.changeSession(false, 'summer') }>🌞 Summer!</button>
              <button onClick={ ()=> this.changeSession(false, 'winter') }>❄️ Winter!</button>
            </div>
            <div>
              <button onClick={ ()=> this.changeSession('Hike', false) }>Hiking!</button>
              <button onClick={ ()=> this.changeSession('Climbing', false) }>Climbing!</button>
              <button onClick={ ()=> this.changeSession('Cross country Skying', false) }>Cross country Skying!</button>
              <button onClick={ ()=> this.changeSession('Skying', false) }>Skying!</button>
            </div>
          </div>
          : <MapPage /> 
          }  
        </div>
      </div>
    )
  }
}

export default Landing;
