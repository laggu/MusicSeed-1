import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { changePlayerState } from "../actions";
import '../styles/TrackList.css';
import MediaButtons from "./MediaButtons";

class SearchedTrackList extends React.Component {

  renderList(){
    return this.props.songs.map(song => {
      return(
        <div className="tracklist ui divided list">
          <div key={ song.title } className="item">
            <div className={'ui grid'}>
              <div className="row">
                <div className="ten wide column">
                  <div className="content">
                    <h3>{ song.title }</h3>
                  </div>
                  <div className="right float content">
                    <h4>{ song.artist }</h4>
                  </div>
                </div>
                <MediaButtons song={ song }/>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <Fragment>
        { this.renderList() }
        <a
          onClick={() => this.props.changePlayerState(!this.props.playerState)}
        >
          <img src="images/mediabuttons/switch.png" alt="switch button"/>
        </a>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    playerState: state.playerState,
  }
};

export default connect(
  mapStateToProps,
  {changePlayerState}
)(SearchedTrackList);