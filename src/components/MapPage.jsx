import React from 'react';
import DetailsView from './DetailsView';

class MapPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ShowDetail: true,
      sport: '',
      session: ''
    }
  }

  renderDetails() {

  }
  
  render() {
    return(
      <div className="map-page">
      HEEEEELLLLLLOOO from maps
      <DetailsView />
      </div>
    )
  }
}

export default MapPage;
