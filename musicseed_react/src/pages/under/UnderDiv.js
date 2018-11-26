import React, {Component, Fragment} from 'react';
import {Form, Grid, Image, Select, Dropdown} from 'semantic-ui-react';
import '../../styles/UnderDiv.css';

const roleOptions = [
  { key: 'f', text: 'Featuring', value: 'featuring' },
  { key: 'p', text: 'Producer', value: 'producer' },
  { key: 'r', text: 'Rapping', value: 'rapping' },
];

const genreOptions = [
  { key: 'hh', text: 'Hip-hop', value: 'hiphop' },
  { key: 'bld', text: 'Ballad', value: 'ballad' },
  { key: 'jzz', text: 'Jazz', value: 'jazz' },
  { key: 'acst', text: 'Acoustic', value: 'acoustic' },
  { key: 'rck', text: 'Rock', value: 'rock' },
  { key: 'lf', text: 'Lo-fi', value: 'lo-fi' },
  { key: 'bnd', text: 'Band', value: 'band' },
];

class UnderDiv extends Component {
  render() {
    return (
      <div className={'under_div'}>
        <div className={'under_field'}>
          { this.renderTrack() }
          { this.renderTrack() }
          { this.renderTrack() }
          { this.renderTrack() }
        </div>
        <button className="ui button" type="submit">LOGIN</button>
      </div>
    );
  }

  renderTrack(){
    return(
      <Form onSubmit={e => onSubmit(e) }>
      <Grid className={'track'} >
        <Grid.Column width={5}>
          <Image src='images/LP.png' />
        </Grid.Column>
        <Grid.Column width={3} className={'track_label'}>
          <h1>Title</h1>
          <h1>Artist</h1>
          <h1>Genre</h1>
          <h1>File</h1>
          <h1>Participants</h1>
        </Grid.Column>
        <Grid.Column width={8}>
            <input placeholder={'Track Title'} />
            <input placeholder={'Artist Name'} />
            <Dropdown placeholder='Genre' fluid multiple search selection options={genreOptions} />
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile"/>
              <label className="custom-file-label" htmlFor="customFile">&nbsp;&nbsp;Click to choose the file</label>
            </div>
          <Grid>
            <Grid.Column width={8}>
              <input placeholder={'Name'}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field
                control={Select}
                options={roleOptions}
                placeholder='Role'
                search
                searchInput={{ id: 'form-select-control-gender' }}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
      </Form>
    )
  }
}

const onSubmit = (event) => {
  event.preventDefault();
};

export default UnderDiv;