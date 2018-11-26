import React, {Fragment} from "react";
import {connect} from 'react-redux';
import SearchInput from "../../components/SearchInput";
import TrackList from "../../components/TrackList";
import '../../styles/SidePlayer.css';

class SidePlayer extends React.Component {

  renderHeader(){
    switch (this.props.playerState) {
      case true:
        return (<h1>Search</h1>);
      default:
        return (<h1>Playlist</h1>);
    }
  }

  render() {
    return (
      <Fragment>
        { this.renderList() }
      </Fragment>
    )
  }

  renderList(){
    return(
        <div>
          { this.renderHeader() }
          <SearchInput/>
          <div className={'sideplayer'}>
            <TrackList/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerState: state.playerState,
  }
};

export default connect(
  mapStateToProps
)(SidePlayer);