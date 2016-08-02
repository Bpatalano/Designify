import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-materialize';
import './cardList.css';
import AddRoom from './AddRoom';
import AddFurniture from './AddFurniture';
import FurnitureDetail from '../../furniture/components/FurnitureDetail';

class AddItem extends Component {
  state = {
    form: 'furniture'
  }

  render() {

    //this.props.header
    var header;
    
    // const onClick =  
    var actions = [<Button waves='light' modal='close' flat >Submit</Button>, <Button waves='light' modal='close' flat>Close</Button>]
    if(this.state.form === 'room') {
      header = 'Add a Room';
    } else if(this.state.form === 'furniture') {
      header = 'Add an Item';
    } else if(this.state.form === 'detail') {
      header = this.props.title;
      actions = [<Button waves='light' modal='close' flat>Close</Button>]

    }
    

    return (
      <Card className="grey lighten-4 center-align">

        <Modal
          header={header}
          actions={actions}
          trigger={
            <Button floating large
              centered="true"
              className="grey lighten-1"
              waves="light"
              icon="add"
            />
          }
        >
          <div>
            {(() => {
              switch (this.state.form) {
              case "room": return <AddRoom />;
              case "furniture": return  <AddFurniture/>;
              case "detail": return <FurnitureDetail/>
              default: return "Did not work";
            }
            })()}
          </div>
        </Modal>
      </Card>
    );
  }
};

export default AddItem;
