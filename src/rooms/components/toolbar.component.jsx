import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeRoom, addPhoto, updateRoomDetails } from '../actions/rooms.action';
import Dropzone from 'react-dropzone';
import ColorInput from './colorPicker.component';
import ReactTooltip from 'react-tooltip'
class Toolbar extends Component {
  state = {
    displayColorPicker: false,
    edit: false
  }

  handleColorClick () {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }
  onDrop(files, title) {
    this.props.addPhoto(files, title);
  }
  removeRoomCall(title) {
    this.props.removeRoom(title);
    Materialize.toast(title + ' removed', 4000); // eslint-disable-line no-undef
  }

  handleOpen () {
    this.setState({edit: true})
    console.log('im clicked')
  }

  render() {
    const { title } = this.props;

    return (
      <span>
      <ReactTooltip />
        <div className='card-control' >
          <Dropzone style={{'width': '24px', 'height': '24px', 'border': '0px'}} onDrop={files => this.onDrop(files, title)}>
            <i data-tip="Add Photo" className="card-controls material-icons md-dark">add_a_photo</i>
          </Dropzone>
        </div>
        
        <div className='card-control' ><i data-tip="Delete Room" className="card-controls material-icons md-dark" onClick={() => {this.removeRoomCall(title)}}>delete</i></div>
        <ColorInput title={ title } data-tip="Pick Color" />
      </span>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return   bindActionCreators({ removeRoom, addPhoto, updateRoomDetails }, dispatch);
}

function mapStateToProps({ rooms, roomSelected, shared, route }) {
  return { rooms, roomSelected };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
